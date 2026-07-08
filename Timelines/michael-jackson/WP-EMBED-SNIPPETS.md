# WordPress embed snippets — Michael Jackson timeline

Copy-paste blocks for embedding the live (GitHub Pages) page(s) into a WordPress article,
via a **Custom HTML block** (Gutenberg) or **Custom HTML widget** (Elementor/Classic) —
never the visual/paragraph editor, which escapes the markup.

- **Live page(s):** <https://cseperkepapp.github.io/Visualizations/Timelines/michael-jackson/index.html>
- **Published article:** n/a
- **Source page:** [index.html](index.html)

---

## Michael Jackson — life, work, and lineage

Place: n/a — whole-page embed

```html
<style>
  .mj-embed{margin:2.5rem 0;}
  .mj-embed iframe{
    width:100%;
    height:820px;
    border:0;
    display:block;
    background:#0C0B0E;
    border-radius:12px;
  }
  .mj-embed figcaption{text-align:right;font-size:.85rem;margin-top:.4rem;}
  .mj-embed figcaption a{color:#E8474B;text-decoration:none;}
  @media (max-width:640px){
    .mj-embed iframe{height:640px;border-radius:8px;}
  }
</style>

<figure class="mj-embed">
  <iframe src="https://cseperkepapp.github.io/Visualizations/Timelines/michael-jackson/index.html"
          loading="lazy"
          title="Michael Jackson — life, work, and lineage"></iframe>
  <figcaption>
    <a href="https://cseperkepapp.github.io/Visualizations/Timelines/michael-jackson/index.html" target="_blank" rel="noopener">Open full screen ↗</a>
  </figcaption>
</figure>
```

---

## Notes

- **Background** matches the page's own `--bg:#0C0B0E` (dark theme, distinct from the
  `#1c1c1c` used elsewhere in the repo) so the iframe edge is invisible.
- **Height (`820px` desktop / `640px` mobile) is a starting guess** — the timeline's
  rendered height varies with filter/zoom state; tune once viewed live.
- **No in-page fullscreen control** on this page, so the figcaption "Open full screen ↗"
  link is the only escape hatch — keep it.
- The page sets `--maxw:1180px`, wider than a typical WP content column (~720px). It
  won't break — the timeline scrolls horizontally inside via `.scroller{overflow-x:auto}`
  — but a full-width/wide WP block alignment gives it more room if the theme supports it.
- After editing the page, `git push` — GitHub Pages redeploys automatically and the embed
  updates with no WordPress-side change.
