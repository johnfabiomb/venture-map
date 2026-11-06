import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AutosizeDirective } from './autosize.directive';
import { BulletListDirective } from './bullet-list.directive';

/** The charges box, as the line-items editor styles it: border-box, padded, bordered. */
@Component({
  standalone: true,
  imports: [FormsModule, AutosizeDirective, BulletListDirective],
  template: `
    <textarea appAutosize appBulletList [(ngModel)]="text" [style]="style"></textarea>`,
})
class HostComponent {
  text = '';
  style = 'width:300px;font:14px/17px sans-serif;padding:9px 12px;'
        + 'border:1.5px solid #000;box-sizing:border-box;overflow:hidden';
}

describe('textarea behaviours', () => {
  let fixture: ComponentFixture<HostComponent>;
  let el: HTMLTextAreaElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('textarea');
  });

  /** ngModel writes the value in a microtask, and the resize happens on the check after. */
  async function setText(value: string): Promise<void> {
    fixture.componentInstance.text = value;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  function press(caret: number): void {
    el.focus();
    el.setSelectionRange(caret, caret);
    el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    fixture.detectChanges();
  }

  describe('appAutosize', () => {
    it('grows with the value, with nothing left hidden', async () => {
      await setText('One line');
      const short = el.offsetHeight;

      await setText('- One round of revisions\n- Final digital delivery\n- Colour grade\n- Music licence');
      const tall = el.offsetHeight;

      expect(tall).toBeGreaterThan(short);
      // The real test of the box-model maths: every line fits inside the box it sized itself to.
      expect(el.scrollHeight).toBeLessThanOrEqual(el.clientHeight);
    });

    it('shrinks again when the value does', async () => {
      await setText('a\nb\nc\nd\ne\nf');
      const tall = el.offsetHeight;
      await setText('a');
      expect(el.offsetHeight).toBeLessThan(tall);
      expect(el.scrollHeight).toBeLessThanOrEqual(el.clientHeight);
    });

    it('fits a content-box textarea too', async () => {
      fixture.componentInstance.style = 'width:300px;font:14px/17px sans-serif;padding:9px 12px;'
        + 'border:1.5px solid #000;box-sizing:content-box;overflow:hidden';
      await setText('a\nb\nc\nd');
      expect(el.scrollHeight).toBeLessThanOrEqual(el.clientHeight);
    });
  });

  describe('appBulletList', () => {
    it('carries the marker onto the next line', async () => {
      await setText('- One round of revisions');
      press(el.value.length);
      expect(el.value).toBe('- One round of revisions\n- ');
      await fixture.whenStable();
      expect(fixture.componentInstance.text).toBe('- One round of revisions\n- ');
    });

    it('keeps the indent and the marker that was used', async () => {
      await setText('  * Deliverables');
      press(el.value.length);
      expect(el.value).toBe('  * Deliverables\n  * ');
    });

    it('ends the list on an empty bullet instead of making another', async () => {
      await setText('- One round of revisions\n- ');
      press(el.value.length);
      expect(el.value).toBe('- One round of revisions\n');
    });

    it('splits a line when the caret sits in the middle of it', async () => {
      await setText('- Revisions and delivery');
      press('- Revisions'.length);
      expect(el.value).toBe('- Revisions\n-  and delivery');
    });

    it('leaves a plain line alone', async () => {
      await setText('Drone filming');
      press(el.value.length);
      expect(el.value).toBe('Drone filming');
    });

    it('leaves Enter alone while the caret is still inside the marker', async () => {
      await setText('- Revisions');
      press(1);
      expect(el.value).toBe('- Revisions');
    });
  });
});
