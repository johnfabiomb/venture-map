#!/usr/bin/env node
/**
 * 1. Converts all JPG/PNG in src/assets/images/ to WebP, deletes originals,
 *    updates all source file references.
 * 2. Generates 120x120 thumbnails for every location cover image,
 *    saves as [name]-thumb.webp, and writes a `thumb` field into locations.json.
 * 3. Generates 600x750 card images (smart-cropped portrait) for every cover,
 *    saves as [name]-card.webp, and writes a `card` field into locations.json.
 *
 * Usage: node scripts/convert-to-webp.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR    = path.join(__dirname, '../src/assets/images');
const LOCATIONS_JSON = path.join(__dirname, '../src/assets/locations.json');
const QUALITY       = 85;
const THUMB_SIZE    = 120; // px — pin canvas is 80px, 120 covers 1.5× retina
const CARD_WIDTH    = 600; // px: 4:5 portrait, ~300px wide cards at 2× retina
const CARD_HEIGHT   = 750;

// ── Helpers ──────────────────────────────────────────────────────────────────

function findSourceFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findSourceFiles(full));
    } else if (/\.(ts|html|json|scss)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function findImages(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(full));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

// ── Step 1: Convert full images ───────────────────────────────────────────────

async function convert(filePath) {
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const beforeBytes = fs.statSync(filePath).size;

  await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);

  const afterBytes = fs.statSync(webpPath).size;
  fs.unlinkSync(filePath);

  return {
    from: path.relative(process.cwd(), filePath),
    to:   path.relative(process.cwd(), webpPath),
    before: (beforeBytes / 1024).toFixed(0) + 'KB',
    after:  (afterBytes  / 1024).toFixed(0) + 'KB',
    saving: Math.round((1 - afterBytes / beforeBytes) * 100) + '%',
  };
}

function updateReferences(results) {
  const replacements = results.map(r => ({
    from: path.basename(r.from),
    to:   path.basename(r.to),
  }));

  const srcDir = path.join(__dirname, '../src');
  for (const file of findSourceFiles(srcDir)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const { from, to } of replacements) {
      if (content.includes(from)) {
        content = content.replaceAll(from, to);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`  Updated references: ${path.relative(process.cwd(), file)}`);
    }
  }
}

// ── Step 2: Generate thumbnails ───────────────────────────────────────────────

async function generateThumbs() {
  const locations = JSON.parse(fs.readFileSync(LOCATIONS_JSON, 'utf8')).locations;

  let generated = 0;
  let skipped = 0;
  let totalSize = 0;

  // Collect only the thumb changes needed — don't parse/stringify the whole file
  const thumbUpdates = []; // [{ oldThumb, newThumb }]

  for (const loc of locations) {
    if (!loc.img) continue;

    const srcPath  = path.join(__dirname, '../src', loc.img);
    const thumbPath = srcPath.replace(/\.webp$/, '-thumb.webp');
    const thumbUrl  = loc.img.replace(/\.webp$/, '-thumb.webp');

    if (fs.existsSync(thumbPath) && loc.thumb === thumbUrl) {
      skipped++;
      continue;
    }

    if (!fs.existsSync(srcPath)) {
      console.warn(`  WARNING: cover image not found: ${srcPath}`);
      continue;
    }

    await sharp(srcPath)
      .resize(THUMB_SIZE, THUMB_SIZE, { fit: 'cover', position: 'centre' })
      .webp({ quality: 80 })
      .toFile(thumbPath);

    const size = fs.statSync(thumbPath).size;
    totalSize += size;
    thumbUpdates.push({ oldThumb: loc.thumb, newThumb: thumbUrl });
    generated++;
    console.log(`  ${(size / 1024).toFixed(0).padStart(4)}KB  ${path.basename(thumbPath)}`);
  }

  // Apply thumb updates as surgical string replacements — preserves all
  // manual edits (array order, formatting, field order) in the JSON file.
  if (thumbUpdates.length > 0) {
    let content = fs.readFileSync(LOCATIONS_JSON, 'utf8');
    for (const { oldThumb, newThumb } of thumbUpdates) {
      if (oldThumb != null) {
        content = content.replace(`"thumb": "${oldThumb}"`, `"thumb": "${newThumb}"`);
      } else {
        // New location with no thumb yet — insert after the img field
        content = content.replace(
          `"img": "${newThumb.replace(/-thumb\.webp$/, '.webp')}"`,
          `"img": "${newThumb.replace(/-thumb\.webp$/, '.webp')}",\n            "thumb": "${newThumb}"`
        );
      }
    }
    fs.writeFileSync(LOCATIONS_JSON, content, 'utf8');
  }

  if (generated > 0) {
    console.log(`\n  Generated ${generated} thumbnails — total ${(totalSize / 1024).toFixed(0)}KB`);
  }
  if (skipped > 0) {
    console.log(`  Skipped ${skipped} (already up to date)`);
  }
}

// ── Step 3: Generate card images ──────────────────────────────────────────────
// Mid-size portrait crops for photo lists (e.g. the 30 Places page). The cover
// is far too heavy for a grid of 30 and the 120px thumb is too small to show.

async function generateCards() {
  const locations = JSON.parse(fs.readFileSync(LOCATIONS_JSON, 'utf8')).locations;

  let generated = 0;
  let skipped = 0;
  let totalSize = 0;
  const cardUpdates = []; // [{ thumb, oldCard, newCard }]

  for (const loc of locations) {
    if (!loc.img) continue;

    const srcPath  = path.join(__dirname, '../src', loc.img);
    const cardPath = srcPath.replace(/\.webp$/, '-card.webp');
    const cardUrl  = loc.img.replace(/\.webp$/, '-card.webp');

    if (fs.existsSync(cardPath) && loc.card === cardUrl) {
      skipped++;
      continue;
    }

    if (!fs.existsSync(srcPath)) {
      console.warn(`  WARNING: cover image not found: ${srcPath}`);
      continue;
    }

    if (!fs.existsSync(cardPath)) {
      // `attention` keeps the most striking region in frame when a landscape
      // cover is cropped to portrait, instead of blindly taking the centre.
      await sharp(srcPath)
        .resize(CARD_WIDTH, CARD_HEIGHT, { fit: 'cover', position: sharp.strategy.attention })
        .webp({ quality: 78 })
        .toFile(cardPath);
    }

    const size = fs.statSync(cardPath).size;
    totalSize += size;
    cardUpdates.push({ thumb: loc.thumb, oldCard: loc.card, newCard: cardUrl });
    generated++;
    console.log(`  ${(size / 1024).toFixed(0).padStart(4)}KB  ${path.basename(cardPath)}`);
  }

  // Same surgical-edit approach as thumbs; a new `card` field goes after `thumb`.
  if (cardUpdates.length > 0) {
    let content = fs.readFileSync(LOCATIONS_JSON, 'utf8');
    for (const { thumb, oldCard, newCard } of cardUpdates) {
      if (oldCard != null) {
        content = content.replace(`"card": "${oldCard}"`, `"card": "${newCard}"`);
      } else if (thumb) {
        content = content.replace(
          `"thumb": "${thumb}"`,
          `"thumb": "${thumb}",\n            "card": "${newCard}"`
        );
      } else {
        console.warn(`  WARNING: no thumb to anchor the card field after: ${newCard}`);
      }
    }
    fs.writeFileSync(LOCATIONS_JSON, content, 'utf8');
  }

  if (generated > 0) {
    console.log(`\n  Generated ${generated} card images, total ${(totalSize / 1024).toFixed(0)}KB`);
  }
  if (skipped > 0) {
    console.log(`  Skipped ${skipped} (already up to date)`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  // Step 1 — convert new JPG/PNG to WebP
  const images = findImages(IMAGES_DIR);
  if (images.length > 0) {
    console.log(`\nConverting ${images.length} images to WebP (quality ${QUALITY})...`);
    const results = [];
    let totalBefore = 0, totalAfter = 0;
    for (const img of images) {
      try {
        const r = await convert(img);
        results.push(r);
        totalBefore += parseInt(r.before);
        totalAfter  += parseInt(r.after);
        console.log(`  ${r.before.padStart(6)} → ${r.after.padStart(6)}  (${r.saving} saved)  ${path.basename(r.from)}`);
      } catch (err) {
        console.error(`  FAILED: ${img} — ${err.message}`);
      }
    }
    console.log('\nUpdating source file references...');
    updateReferences(results);
    const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
    console.log(`Converted: ${(totalBefore / 1024).toFixed(0)}KB → ${(totalAfter / 1024).toFixed(0)}KB (${totalSaving}% saved)\n`);
  } else {
    console.log('\nNo new JPG/PNG images to convert.');
  }

  // Step 2 — generate thumbnails for map pins
  console.log(`Generating ${THUMB_SIZE}×${THUMB_SIZE} thumbnails for map pins...`);
  await generateThumbs();

  // Step 3: generate card images for photo lists
  console.log(`\nGenerating ${CARD_WIDTH}×${CARD_HEIGHT} card images...`);
  await generateCards();

  console.log('\nDone.');
}

main().catch(err => { console.error(err); process.exit(1); });
