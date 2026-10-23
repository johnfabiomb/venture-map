#!/usr/bin/env node
/**
 * Catch components that render a SHARED class nothing has styled for them.
 *
 * `.btn`, `.field`, `.check` and friends live in `booking/platform/admin.shared.scss`,
 * which page components `@use` — so each PAGE gets its own scoped copy and a `ui/`
 * component gets nothing. The class is still in the template, so it renders as a bare
 * browser default. Nothing errors; it just looks broken. It reached production on the
 * Record-payment, Delivery, Add-a-document, work-editor, board-columns and confirm
 * dialogs, and on the guided tour, before anyone noticed.
 *
 * A class is fine if it is defined GLOBALLY (src/styles.scss) or by the component that
 * uses it. Run via `npm run check:styles`; it exits non-zero so a build can gate on it.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src');
const GLOBAL = path.join(ROOT, 'styles.scss');

/** Classes shared across components rather than owned by one. */
const SHARED = [
  'btn', 'field', 'field__top', 'field-row', 'sec', 'check',
  'link-btn', 'menu', 'tag', 'card', 'page', 'muted', 'hint',
];

const read = p => { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } };

/** Does this stylesheet actually DEFINE the class (a rule whose selector leads with it),
 *  rather than merely mention it inside a descendant selector like `.x .btn { }`? */
function defines(css, cls) {
  const esc = cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[\\n{};])\\s*\\.${esc}\\s*(?=[,{:])|(^|[\\n{};])\\s*&--`, 'm').test(css)
      && new RegExp(`(^|[\\n{};])\\s*\\.${esc}\\s*[,{:]`, 'm').test(css);
}

const globalCss = read(GLOBAL);
const globallyDefined = new Set(SHARED.filter(c => defines(globalCss, c)));

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(ts|html)$/.test(e.name) && !e.name.endsWith('.spec.ts')) out.push(p);
  }
  return out;
}

const problems = [];
for (const file of walk(path.join(ROOT, 'app', 'booking'))) {
  const src = read(file);
  // The component's own styles: an inline `styles: [...]` block, or its .scss sibling.
  const own = src + read(file.replace(/\.(ts|html)$/, '.scss'))
            + read(file.replace(/\.html$/, '.ts'));

  // EXACT class tokens. A word-boundary match treated `we__task-check` as `.check` and
  // `sel__opt-hint` as `.hint`, so the first run was mostly false alarms — and a checker
  // that cries wolf gets switched off, which is worse than not having one.
  const used = new Set();
  for (const m of src.matchAll(/class="([^"]*)"/g)) {
    for (const tok of m[1].split(/\s+/)) if (tok) used.add(tok);
  }

  for (const cls of SHARED) {
    if (globallyDefined.has(cls)) continue;
    if (!used.has(cls)) continue;
    if (defines(own, cls)) continue;
    // A page component inherits it from admin.shared, which it @uses.
    if (/@use '.*admin\.shared'/.test(own)) continue;
    problems.push(`${path.relative(ROOT, file)} uses .${cls} but nothing styles it`);
  }
}

if (problems.length) {
  console.error('\n  Unstyled shared classes — these render as browser defaults:\n');
  for (const p of [...new Set(problems)]) console.error('    ✗ ' + p);
  console.error(`\n  Fix: define the class in src/styles.scss (if it is genuinely shared)\n` +
                `  or in the component itself.\n`);
  process.exit(1);
}
console.log(`  ✓ shared styles OK — global: ${[...globallyDefined].join(', ')}`);
