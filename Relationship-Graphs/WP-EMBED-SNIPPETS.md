# WordPress embed snippets — Relationship-Graphs

Copy-paste blocks for embedding the live (GitHub Pages) page(s) into a WordPress article,
via a **Custom HTML block** (Gutenberg) or **Custom HTML widget** (Elementor/Classic) —
never the visual/paragraph editor, which escapes the markup.

- **Live page(s):** <https://cseperkepapp.github.io/Visualizations/Relationship-Graphs/anthropic-ai-power-saga.html>
- **Published article:** n/a
- **Source page:** [anthropic-ai-power-saga.html](anthropic-ai-power-saga.html)

---

## Everyone's Investor, Everyone's Rival — How Anthropic Ended Up Surrounded

Place: n/a — whole-page embed

```html
<style>
  .anthropic-saga-embed{margin:2.5rem 0;}
  .anthropic-saga-embed iframe{
    width:100%;
    height:900px;
    border:0;
    display:block;
    background:#faf9f7;
    border-radius:10px;
  }
  .anthropic-saga-embed figcaption{text-align:right;font-size:.85rem;margin-top:.4rem;}
  .anthropic-saga-embed figcaption a{color:#A32D2D;text-decoration:none;}
  @media (max-width:640px){
    .anthropic-saga-embed iframe{height:1100px;}
  }
</style>

<figure class="anthropic-saga-embed">
  <iframe src="https://cseperkepapp.github.io/Visualizations/Relationship-Graphs/anthropic-ai-power-saga.html"
          loading="lazy" allow="fullscreen"
          title="Everyone's Investor, Everyone's Rival — How Anthropic Ended Up Surrounded"></iframe>
  <figcaption>
    <a href="https://cseperkepapp.github.io/Visualizations/Relationship-Graphs/anthropic-ai-power-saga.html" target="_blank" rel="noopener">Open full screen ↗</a>
  </figcaption>
</figure>
```

---

## Notes

- **Background** matches the page's own `--bg:#faf9f7` (light theme) — do not reuse the
  `#1c1c1c` dark value from the VectorField figures here.
- **Height is a starting guess (`900px` desktop / `1100px` mobile).** This page is a full
  article-length swimlane + interactive relationship web, taller than a typical figure —
  tune both values once viewed live on the actual WP page.
- **No in-page fullscreen control** on this page, so the figcaption "Open full screen ↗"
  link is the only escape hatch — keep it.
- The page has its own `.wrap{max-width:780px}` rather than a `--maxw` custom property; a
  full-width WP block gives it room but isn't required.
- After editing the page, `git push` — GitHub Pages redeploys automatically and the embed
  updates with no WordPress-side change.
