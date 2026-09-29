// Turn a DOM element into a PDF that looks exactly like the rendered element — edge to
// edge, no page margins or browser print headers. html2pdf is loaded lazily (only when
// actually needed: a user download, or an offscreen render for emailing) so it stays out
// of the main bundle.

/**
 * Rendering options shared by EVERY PDF output path below. This is the single point of
 * truth for how an element becomes a PDF — the downloaded file and the emailed one are
 * built from the same config, so they can never silently drift apart in quality/layout.
 * `filename` isn't here: it only matters for `.save()`'s download prompt, not for the
 * rendered PDF itself, so each caller supplies its own.
 */
const PDF_RENDER_OPTIONS = {
  margin: 0,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
} as const;

/** Render `el` to an A4 PDF with zero margin and trigger a file download. */
export async function downloadElementAsPdf(el: HTMLElement, filename: string): Promise<void> {
  const html2pdf = (await import('html2pdf.js')).default;
  await html2pdf()
    .set({ ...PDF_RENDER_OPTIONS, filename: filename.endsWith('.pdf') ? filename : `${filename}.pdf` })
    .from(el)
    .save();
}

/**
 * Render `el` to the same A4 PDF, as raw bytes instead of a download — for producing an
 * attachment (e.g. an emailed invoice) rather than prompting the browser's save dialog.
 * Uses the exact same `PDF_RENDER_OPTIONS` as `downloadElementAsPdf`, so the emailed PDF
 * and the downloaded PDF can never end up looking different.
 */
export async function renderElementToPdfBlob(el: HTMLElement): Promise<Blob> {
  const html2pdf = (await import('html2pdf.js')).default;
  const blob = await html2pdf().set(PDF_RENDER_OPTIONS).from(el).outputPdf('blob');
  return blob as Blob;
}

/**
 * `FileReader.readAsDataURL` yields `data:<mime>;base64,<payload>` — this returns just
 * `<payload>`, which is what an edge function expects to send on as an email attachment
 * (it isn't a data: URL itself, just base64 bytes).
 */
export async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result ?? '');
      const comma = result.indexOf(',');
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read blob as base64.'));
    reader.readAsDataURL(blob);
  });
}
