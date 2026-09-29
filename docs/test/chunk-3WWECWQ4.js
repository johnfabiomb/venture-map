import {
  formatDate,
  formatMoney,
  renderTemplate
} from "./chunk-7VIBRFOE.js";

// src/app/booking/core/utils/invoice-email.util.ts
var INVOICE_EMAIL_KEY_DEFS = [
  { key: "{clientFirstName}", describe: "First name only \u2014 for the greeting" },
  { key: "{clientName}", describe: "Client or company name" },
  { key: "{invoiceNumber}", describe: "e.g. JFMB-2026-129" },
  { key: "{invoiceTitle}", describe: "What the invoice is for" },
  { key: "{total}", describe: "Invoice total" },
  { key: "{balance}", describe: "Still outstanding" },
  { key: "{amountPaid}", describe: "Already paid" },
  { key: "{issueDate}", describe: "Date issued" },
  { key: "{serviceDate}", describe: "When the work happened" },
  { key: "{dueDate}", describe: "Payment due date" },
  { key: "{daysOverdue}", describe: "Days past due (0 if not overdue)" },
  { key: "{paymentTerms}", describe: 'e.g. "14 days"' },
  { key: "{invoiceLink}", describe: "Link to the live invoice page" },
  { key: "{businessName}", describe: "Your business name" }
];
var DEFAULT_INVOICE_EMAIL = {
  subject: "Invoice {invoiceNumber} from {businessName}",
  body: `Hi {clientFirstName},

Thanks for your business. Your invoice {invoiceNumber} for {invoiceTitle} is attached as a PDF, and you can also view it online here:

{invoiceLink}

Total: {total}
Payment due: {dueDate}

Any questions, just reply to this email.

{businessName}`
};
var DEFAULT_REMINDER_EMAIL = {
  subject: "Reminder: invoice {invoiceNumber} is due",
  body: `Hi {clientFirstName},

A quick reminder that invoice {invoiceNumber} for {invoiceTitle} has an outstanding balance of {balance}, which was due on {dueDate}.

{invoiceLink}

If you've already sent it, please ignore this \u2014 and thank you.

{businessName}`
};
function defaultTemplate(kind) {
  return kind === "reminder" ? DEFAULT_REMINDER_EMAIL : DEFAULT_INVOICE_EMAIL;
}
function renderInvoiceEmail(tpl, ctx) {
  const money = (n) => formatMoney(n, ctx.currency);
  const name = (ctx.clientName ?? "").trim();
  const values = {
    // "Hi there," is the fallback rather than an empty greeting: a walk-in invoice has
    // only a typed contact name, and may have none at all.
    "{clientFirstName}": name ? name.split(/\s+/)[0] : "there",
    "{clientName}": name || "there",
    "{invoiceNumber}": ctx.invoiceNumber ?? "",
    "{invoiceTitle}": (ctx.invoiceTitle ?? "").trim() || "our work together",
    "{total}": money(ctx.total),
    "{balance}": money(ctx.balance),
    "{amountPaid}": money(ctx.amountPaid),
    "{issueDate}": formatDate(ctx.issueDate),
    "{serviceDate}": formatDate(ctx.serviceDate),
    "{dueDate}": formatDate(ctx.dueDate),
    "{daysOverdue}": String(Math.max(0, ctx.daysOverdue || 0)),
    "{paymentTerms}": ctx.paymentTermsDays ? `${ctx.paymentTermsDays} days` : "",
    "{invoiceLink}": ctx.invoiceLink ?? "",
    "{businessName}": ctx.businessName
  };
  return {
    subject: renderTemplate(tpl.subject, values),
    body: renderTemplate(tpl.body, values)
  };
}
function buildMailto(to, cc, subject, body) {
  const enc = encodeURIComponent;
  const head = `mailto:${to.map(enc).join(",")}`;
  const build = (b) => {
    const parts = [`subject=${enc(subject)}`, `body=${enc(b)}`];
    if (cc.length)
      parts.unshift(`cc=${cc.map(enc).join(",")}`);
    return `${head}?${parts.join("&")}`;
  };
  let url = build(body);
  if (url.length <= 1900)
    return { url, truncated: false };
  let cut = body;
  while (cut.length > 200 && build(cut + "\n\n\u2026").length > 1900) {
    const i = cut.lastIndexOf("\n\n");
    cut = i > 0 ? cut.slice(0, i) : cut.slice(0, Math.floor(cut.length * 0.8));
  }
  url = build(cut + "\n\n\u2026");
  return { url, truncated: true };
}

export {
  INVOICE_EMAIL_KEY_DEFS,
  DEFAULT_INVOICE_EMAIL,
  DEFAULT_REMINDER_EMAIL,
  defaultTemplate,
  renderInvoiceEmail,
  buildMailto
};
//# sourceMappingURL=chunk-3WWECWQ4.js.map
