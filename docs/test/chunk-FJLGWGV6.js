import {
  ElementRef,
  inject,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-VEX6DIAJ.js";

// src/app/booking/ui/textarea/autosize.directive.ts
var AutosizeDirective = class _AutosizeDirective {
  constructor() {
    this.el = inject(ElementRef).nativeElement;
    this.measured = "\0";
  }
  ngAfterViewInit() {
    this.resize();
  }
  /**
   * The value also changes with no `input` event behind it: an invoice loading its saved
   * lines, or "+ Add charge" writing the description for you. DoCheck covers both, and the
   * string compare keeps every other cycle down to one comparison.
   */
  ngDoCheck() {
    if (this.el.value !== this.measured)
      this.resize();
  }
  resize() {
    const el = this.el;
    const previous = el.style.height;
    el.style.height = "auto";
    const content = el.scrollHeight;
    if (!content) {
      el.style.height = previous;
      return;
    }
    this.measured = el.value;
    el.style.height = `${content + this.edges()}px`;
  }
  /**
   * `scrollHeight` is the content plus its padding. What `height` then has to be depends on
   * the box model: under `border-box` it must also carry the borders, under `content-box` it
   * must carry neither. Getting this wrong costs a line of text at the bottom.
   */
  edges() {
    const s = getComputedStyle(this.el);
    return s.boxSizing === "border-box" ? parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth) : -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom));
  }
  static {
    this.\u0275fac = function AutosizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AutosizeDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AutosizeDirective, selectors: [["textarea", "appAutosize", ""]], hostBindings: function AutosizeDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function AutosizeDirective_input_HostBindingHandler() {
          return ctx.resize();
        });
      }
    } });
  }
};

export {
  AutosizeDirective
};
//# sourceMappingURL=chunk-FJLGWGV6.js.map
