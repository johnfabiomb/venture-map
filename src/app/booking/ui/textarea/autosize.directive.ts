import { AfterViewInit, Directive, DoCheck, ElementRef, inject } from '@angular/core';

/**
 * A textarea that is always exactly as tall as what is written in it.
 *
 * A fixed `rows` is a guess at how much someone will type, and it is wrong in both
 * directions: a one-line charge wastes four rows, and a six-line list of deliverables
 * scrolls inside a 40px box so you cannot read back what you just wrote. This grows the
 * box instead, so the whole value is on screen without dragging the corner.
 *
 * Cap the growth with `max-height` in the component's CSS (the box then scrolls, which is
 * the honest behaviour for a value nobody should be writing into a line item anyway).
 */
@Directive({
  selector: 'textarea[appAutosize]',
  standalone: true,
  host: { '(input)': 'resize()' },
})
export class AutosizeDirective implements AfterViewInit, DoCheck {
  private readonly el: HTMLTextAreaElement = inject(ElementRef).nativeElement;

  /** Last value measured. `\0` can't be typed, so the first check always resizes. */
  private measured = '\0';

  ngAfterViewInit(): void { this.resize(); }

  /**
   * The value also changes with no `input` event behind it: an invoice loading its saved
   * lines, or "+ Add charge" writing the description for you. DoCheck covers both, and the
   * string compare keeps every other cycle down to one comparison.
   */
  ngDoCheck(): void { if (this.el.value !== this.measured) this.resize(); }

  resize(): void {
    const el = this.el;
    const previous = el.style.height;

    // Shrink first, or scrollHeight only ever reports the height it already has.
    el.style.height = 'auto';
    const content = el.scrollHeight;

    // 0 means no layout box yet (inside a dialog that has not opened, a hidden tab). Put the
    // height back and leave `measured` alone, so the next cycle tries again.
    if (!content) { el.style.height = previous; return; }

    this.measured = el.value;
    el.style.height = `${content + this.edges()}px`;
  }

  /**
   * `scrollHeight` is the content plus its padding. What `height` then has to be depends on
   * the box model: under `border-box` it must also carry the borders, under `content-box` it
   * must carry neither. Getting this wrong costs a line of text at the bottom.
   */
  private edges(): number {
    const s = getComputedStyle(this.el);
    return s.boxSizing === 'border-box'
      ? parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth)
      : -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom));
  }
}
