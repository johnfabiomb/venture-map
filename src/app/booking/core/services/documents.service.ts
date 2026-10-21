import { Injectable, inject } from '@angular/core';
import { bookingsDb } from '@booking/core/db/supabase.bookings';
import { BookingsAuthService } from '@booking/core/services/bookings-auth.service';

const BUCKET = 'documents';

/** A kind of document this organisation deals in (§31a). */
export interface DocumentType {
  id: string;
  key: string;
  label: string;
  kind: 'file' | 'letter';
  tracks_expiry: boolean;
  is_standard: boolean;
  sort: number;
}

export interface OrgDocument {
  id: string;
  org_id: string;
  kind: 'file' | 'letter';
  doc_type: string | null;
  title: string;
  is_library: boolean;
  client_id: string | null;
  file_path: string | null;
  file_name: string | null;
  file_size: number | null;
  mime_type: string | null;
  issued_on: string | null;
  expires_on: string | null;
  notes: string | null;
  created_at: string;
}

export interface NewDocument {
  title: string;
  docType: string | null;
  isLibrary: boolean;
  issuedOn?: string | null;
  expiresOn?: string | null;
  notes?: string | null;
}

/**
 * Documents: the paperwork you hand a client (insurance, permits, your UAS registration)
 * and — later — the letters they sign. One store for both (§31), because they are the
 * same record with the signing columns left null.
 *
 * Files live in a PRIVATE Supabase Storage bucket. Every path begins with the org id and
 * the storage policy checks exactly that, so a path is not decoration: build it only
 * through `pathFor`.
 */
@Injectable({ providedIn: 'root' })
export class DocumentsService {
  private readonly auth = inject(BookingsAuthService);

  async listTypes(orgId: string): Promise<DocumentType[]> {
    const { data, error } = await bookingsDb.from('document_types')
      .select('id, key, label, kind, tracks_expiry, is_standard, sort')
      .eq('org_id', orgId).order('sort');
    if (error) { console.error('[Documents] listTypes:', error); return []; }
    return (data ?? []) as DocumentType[];
  }

  /** The reusable org library — your insurance certificate, your registration. */
  async listLibrary(orgId: string): Promise<OrgDocument[]> {
    const { data, error } = await bookingsDb.from('documents')
      .select('*').eq('org_id', orgId).eq('is_library', true)
      .order('created_at', { ascending: false });
    if (error) { console.error('[Documents] listLibrary:', error); return []; }
    return (data ?? []) as OrgDocument[];
  }

  /** Everything attached to one booking, library items included. */
  async listForBooking(bookingId: string): Promise<OrgDocument[]> {
    const { data, error } = await bookingsDb.from('booking_documents')
      .select('document:document_id(*)').eq('booking_id', bookingId);
    if (error) { console.error('[Documents] listForBooking:', error); return []; }
    return ((data ?? []) as Array<{ document: OrgDocument | OrgDocument[] | null }>)
      .map(r => (Array.isArray(r.document) ? r.document[0] : r.document))
      .filter((d): d is OrgDocument => !!d);
  }

  /**
   * The storage path for a document's file. The leading org id is what the storage
   * policy authorises against — never assemble one by hand elsewhere.
   * The filename is sanitised because it reaches a URL and a Content-Disposition header.
   */
  private pathFor(orgId: string, docId: string, fileName: string): string {
    const safe = fileName.replace(/[^\w.\- ]+/g, '_').replace(/\s+/g, '_').slice(-80);
    return `${orgId}/${docId}/${safe}`;
  }

  /**
   * Create the row FIRST, then upload. The other order risks a file in the bucket that no
   * row points at — invisible, undeletable through the app, and still counting against
   * storage. This way a failed upload leaves a document that visibly has no file, which
   * can be retried or removed.
   */
  async upload(orgId: string, file: File, meta: NewDocument): Promise<{ id?: string; error?: string }> {
    const { data: row, error: insErr } = await bookingsDb.from('documents').insert({
      org_id: orgId, kind: 'file', doc_type: meta.docType, title: meta.title.trim(),
      is_library: meta.isLibrary, issued_on: meta.issuedOn || null,
      expires_on: meta.expiresOn || null, notes: meta.notes?.trim() || null,
      file_name: file.name, file_size: file.size, mime_type: file.type || null,
    }).select('id').single();
    if (insErr || !row) return { error: insErr?.message ?? 'could not create the document' };

    const id = (row as { id: string }).id;
    const path = this.pathFor(orgId, id, file.name);
    const { error: upErr } = await bookingsDb.storage.from(BUCKET)
      .upload(path, file, { contentType: file.type || undefined, upsert: false });
    if (upErr) {
      // Take the empty row back out: a document with no file is a loose end, and leaving
      // it would make the list lie about what is on hand.
      await bookingsDb.from('documents').delete().eq('id', id);
      return { error: upErr.message };
    }

    const { error: pathErr } = await bookingsDb.from('documents')
      .update({ file_path: path }).eq('id', id);
    if (pathErr) return { error: pathErr.message };
    return { id };
  }

  /**
   * A short-lived link to the file. The bucket is private, so there is no permanent URL —
   * which is the point: an insurance certificate should not be readable by anyone who
   * once saw a link.
   */
  async signedUrl(path: string, seconds = 120): Promise<string | null> {
    const { data, error } = await bookingsDb.storage.from(BUCKET).createSignedUrl(path, seconds);
    if (error) { console.error('[Documents] signedUrl:', error); return null; }
    return data?.signedUrl ?? null;
  }

  /** Soft-deletes the row and removes the file. The file is not kept: a private bucket
   *  full of documents nobody can see is a liability, not an archive. */
  async remove(doc: OrgDocument): Promise<void> {
    if (doc.file_path) {
      const { error } = await bookingsDb.storage.from(BUCKET).remove([doc.file_path]);
      if (error) console.warn('[Documents] file remove failed:', error.message);
    }
    const { error } = await bookingsDb.rpc('soft_delete', { p_table: 'documents', p_id: doc.id });
    if (error) console.error('[Documents] remove:', error);
  }

  async attach(orgId: string, bookingId: string, documentId: string): Promise<void> {
    const { error } = await bookingsDb.from('booking_documents')
      .insert({ org_id: orgId, booking_id: bookingId, document_id: documentId });
    // 23505 = already attached, which is the state the caller wanted anyway.
    if (error && (error as { code?: string }).code !== '23505') {
      console.error('[Documents] attach:', error);
    }
  }

  async detach(bookingId: string, documentId: string): Promise<void> {
    const { error } = await bookingsDb.from('booking_documents')
      .delete().eq('booking_id', bookingId).eq('document_id', documentId);
    if (error) console.error('[Documents] detach:', error);
  }

  /** Expired, or expiring within `days`. An out-of-date certificate attached to next
   *  week's job is worse than none, because it looks handled. */
  expiryState(doc: OrgDocument, days = 30): 'none' | 'ok' | 'soon' | 'expired' {
    if (!doc.expires_on) return 'none';
    const left = Math.ceil((new Date(doc.expires_on).getTime() - Date.now()) / 86_400_000);
    if (left < 0) return 'expired';
    return left <= days ? 'soon' : 'ok';
  }
}
