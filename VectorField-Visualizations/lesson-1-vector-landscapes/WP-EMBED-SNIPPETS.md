# WordPress embed snippets — Lesson 1 figures

Copy-paste blocks for embedding the live (GitHub Pages) figures into the WordPress article.
Paste each into a **Custom HTML block** (or your code plugin's HTML block) where the figure
should appear. Background is `#1c1c1c` to match the page; each figure also has its own
"⛶ Full screen" button, and the caption below adds an "Open full screen ↗" link.

- **Article:** <https://pappcseperke.hu/understanding-vector-landscapes-lesson-1/>
- **How it works / hosting details:** [EMBEDDING.md](EMBEDDING.md)

---

## Figure 1 — Terrain vs. dice (2D)

Place after the section *"The terrain is what survives the re-roll."*

```html
<figure style="margin:2.5rem 0;">
  <iframe src="https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/figures/terrain-vs-dice.html"
          loading="lazy" allow="fullscreen"
          title="Terrain vs. dice — the same prompt run twice"
          style="width:100%;height:560px;border:0;background:#1c1c1c;border-radius:10px;display:block;"></iframe>
  <figcaption style="text-align:right;font-size:.85rem;margin-top:.4rem;">
    <a href="https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/figures/terrain-vs-dice.html"
       target="_blank" rel="noopener" style="color:#5ab4c5;">Open full screen ↗</a>
  </figcaption>
</figure>
```

---

## Figure 2 — Springs & the die (3D)

Place after the section *"The springs set the odds; the die makes the pick."*

```html
<figure style="margin:2.5rem 0;">
  <iframe src="https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/figures/springs-and-die-3d.html"
          loading="lazy" allow="fullscreen"
          title="Springs & the die — the field of options, temperature, and the roll"
          style="width:100%;height:640px;border:0;background:#1c1c1c;border-radius:10px;display:block;"></iframe>
  <figcaption style="text-align:right;font-size:.85rem;margin-top:.4rem;">
    <a href="https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/figures/springs-and-die-3d.html"
       target="_blank" rel="noopener" style="color:#5ab4c5;">Open full screen ↗</a>
  </figcaption>
</figure>
```

---

## Notes

- **Heights:** 2D reads well around `560px`, the 3D around `640px`. Bump them on a wide layout;
  add a media query to drop to ~`460px` on mobile if needed.
- **Drag to orbit** (3D) and all buttons/sliders work inside the iframe.
- After editing a figure, `git push` — GitHub Pages redeploys automatically and the embeds
  update with no change to WordPress.
- These point at the **two-file** figures on Pages (the data file is served alongside). The
  single-file `*.embed.html` build is only needed for non-hosted paste/`srcdoc` contexts.
