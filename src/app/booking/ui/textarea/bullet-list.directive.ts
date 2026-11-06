import { Directive } from '@angular/core';

/** An indent, a marker, and the space after it. Mirrors how a list is actually typed. */
const BULLET = /^([ \t]*)([-*•])([ \t]+)/;

/**
 * Enter carries a bullet list on: typing "- One round of revisions" and pressing Enter
 * starts the next line with "- " already there, the way every notes app does it.
 *
 * Enter on a bullet with nothing after it ends the list instead of making another empty
 * one, which is the only way out that does not need the backspace key.
 *
 * Shift+Enter is untouched and inserts a plain line break: Angular's key bindings are
 * modifier-exact, so `keydown.enter` never fires while Shift is held.
 */
@Directive({
  selector: 'textarea[appBulletList]',
  standalone: true,
  host: { '(keydown.enter)': 'onEnter($event)' },
})
export class BulletListDirective {
  onEnter(event: KeyboardEvent): void {
    // Enter is also how an IME accepts a candidate. That one is not a new line.
    if (event.isComposing) return;

    const el = event.target as HTMLTextAreaElement;
    const caret = el.selectionStart;
    if (caret === null || caret !== el.selectionEnd) return;   // a selection: Enter replaces it

    const value = el.value;
    const lineStart = value.lastIndexOf('\n', caret - 1) + 1;
    const lineEnd = value.indexOf('\n', caret) === -1 ? value.length : value.indexOf('\n', caret);
    const marker = BULLET.exec(value.slice(lineStart, lineEnd));
    if (!marker) return;

    // Caret still inside the marker itself: Enter means "push this bullet down", not
    // "start another one", so leave it to the browser.
    if (caret < lineStart + marker[0].length) return;

    event.preventDefault();
    if (value.slice(lineStart + marker[0].length, lineEnd).trim()) {
      this.type(el, `\n${marker[1]}${marker[2]}${marker[3]}`);
    } else {
      el.setSelectionRange(lineStart, lineEnd);                // an empty bullet: drop it
      this.type(el, '');
    }
  }

  /**
   * Typed, not assigned. `execCommand` is the only way to change a textarea's value that
   * keeps the browser's own undo stack, so Cmd+Z still walks back through the list rather
   * than wiping everything written since the last bullet. The manual path is the fallback,
   * and has to raise `input` itself or ngModel never hears about the change.
   */
  private type(el: HTMLTextAreaElement, text: string): void {
    const command = text ? 'insertText' : 'delete';
    let ok = false;
    try { ok = document.execCommand(command, false, text); } catch { ok = false; }
    if (ok) return;

    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? start;
    el.value = el.value.slice(0, start) + text + el.value.slice(end);
    el.setSelectionRange(start + text.length, start + text.length);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }
}
