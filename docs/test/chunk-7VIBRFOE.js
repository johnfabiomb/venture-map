// src/app/booking/core/utils/template.util.ts
var escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function renderTemplate(template, values) {
  if (!template)
    return "";
  const keys = Object.keys(values);
  if (!keys.length)
    return template;
  const pattern = keys.slice().sort((a, b) => b.length - a.length).map(escapeRe).join("|");
  return template.replace(new RegExp(pattern, "g"), (m) => values[m] ?? m);
}
function formatMoney(n, currency) {
  try {
    return new Intl.NumberFormat(void 0, { style: "currency", currency }).format(n);
  } catch {
    return `${currency} ${n.toFixed(2)}`;
  }
}
function formatDate(iso) {
  if (!iso)
    return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime()))
    return "";
  return new Intl.DateTimeFormat(void 0, {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(d);
}

export {
  renderTemplate,
  formatMoney,
  formatDate
};
//# sourceMappingURL=chunk-7VIBRFOE.js.map
