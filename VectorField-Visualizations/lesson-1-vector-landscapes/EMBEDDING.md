# Embedding the figures (technical notes)

How these HTML figures get onto a web page (e.g. a WordPress/Elementor article). Applies to
every figure in the lesson; the running examples are the Lesson 1 figures.

---

## The core rule: isolate in an `<iframe>`

Each figure is a **full HTML document** with full-viewport styling (`position:fixed; inset:0`,
`body{overflow:hidden}`). **Do not paste it directly into a page body** — it will try to take
over the whole page layout. Always run it **inside an `<iframe>`**, which sandboxes its
document, styles, and scripts from the host page.

Two ways to point an iframe at a figure:

- **`src` → a hosted URL** (recommended; see GitHub Pages below).
- **`srcdoc` → the whole figure inline** (no host needed) — only practical with the
  **single-file build** (below), and the HTML must be attribute-escaped. Use only if you
  can't host files.

---

## Hosting: GitHub Pages (recommended)

WordPress Media Library blocks `.html`/`.js` uploads, and not every host lets you drop raw
HTML — GitHub Pages sidesteps all of that and is version-controlled.

1. Put this repo (or the `figures/` folder) on GitHub.
2. **Settings → Pages →** serve from the branch/folder that contains the figures.
3. Your figure is then at a URL like:
   `https://<user>.github.io/<repo>/VectorField-Visualizations/lesson-1-vector-landscapes/figures/springs-and-die-3d.html`
   (the exact path mirrors the repo layout under the Pages root).

Because Pages serves the **whole folder**, the two-file 3D figure works as-is: the relative
`<script src="vector-field-clusters.js">` resolves to the file sitting next to the HTML. **No
single-file build needed for Pages.** (Three.js loads from its CDN regardless.)

---

## Embedding in WordPress / Elementor

Add an **HTML widget** (or your code plugin's HTML block) where the figure should appear and
paste, replacing the URL:

```html
<figure style="margin:2.5rem 0;">
  <iframe src="https://<user>.github.io/<repo>/.../figures/springs-and-die-3d.html"
          loading="lazy" title="Vector landscape — springs, die, and the chosen path"
          style="width:100%;height:640px;border:0;background:#1c1c1c;border-radius:10px;display:block;"></iframe>
</figure>
```

- The figure background is `#1c1c1c`, matching the page, so the iframe edge is invisible.
- `height:640px` suits the 3D scene; the 2D figure reads well around `520px`. Drop to
  ~`460px` on mobile via a media query if needed.
- Controls (buttons, slider, OrbitControls drag) all work inside the iframe.

---

## File variants

| File | Use |
| ---- | --- |
| `springs-and-die-3d.html` + `vector-field-clusters.js` | **Source of truth (two files).** Edit these. Works directly on GitHub Pages (folder served together). |
| `springs-and-die-3d.embed.html` | **Single-file build** (data inlined). For paste/`srcdoc` contexts or hosts that take one file only. **Auto-generated — do not hand-edit.** |
| `terrain-vs-dice.html` | The 2D figure is already single-file (no external local JS). |

### Regenerating the single-file build

After editing the 3D figure or its data, regenerate the embed build:

```bash
cd VectorField-Visualizations/lesson-1-vector-landscapes/figures
node -e "const fs=require('fs');const h=fs.readFileSync('springs-and-die-3d.html','utf8');const j=fs.readFileSync('vector-field-clusters.js','utf8');const t='<script src=\"vector-field-clusters.js\"></scr'+'ipt>';fs.writeFileSync('springs-and-die-3d.embed.html',h.replace(t,'<scr'+'ipt>\n'+j+'\n</scr'+'ipt>'));console.log('regenerated');"
```

---

## Gotchas

- **Needs internet** at view time (Three.js loads from the jsDelivr CDN). To go fully offline,
  download `three.min.js` + `OrbitControls.js` next to the figure and point the script tags at
  them (then host all files together).
- **One iframe per figure.** Place it right after the prose section it illustrates (mirror
  `FIGURES.md`).
- **Don't rename `vector-field-clusters.js`** without updating the `<script src>` in the
  two-file figure and regenerating the embed build.
- The repo's [WordPress article template](../../../templates/TEMPLATE-WORDPRESS-ARTICLE.md)
  covers turning the prose around these figures into Elementor HTML.
