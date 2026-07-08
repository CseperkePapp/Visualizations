# WordPress embed snippets — {{VISUALIZATION_NAME}}

Copy-paste blocks for embedding the live (GitHub Pages) page(s) into a WordPress article,
via a **Custom HTML block** (Gutenberg) or **Custom HTML widget** (Elementor/Classic) —
never the visual/paragraph editor, which escapes the markup.

- **Live page(s):** <https://cseperkepapp.github.io/Visualizations/{{PATH}}>
- **Published article (if any):** {{ARTICLE_URL_OR_N/A}}
- **Source page:** [{{PAGE_FILENAME}}]({{PATH}})

Delete this instruction block once the sections below are filled in.

---

## {{PAGE_OR_FIGURE_NAME}}

<!-- One block per standalone page, or per figure if several embed from one folder. -->

Place: {{WHERE_IN_THE_ARTICLE__OR__"n/a - whole-page embed"}}

```html
<style>
  .{{slug}}-embed{margin:2.5rem 0;}
  .{{slug}}-embed iframe{
    width:100%;
    height:{{HEIGHT_PX}}px;
    border:0;
    display:block;
    background:{{BG_HEX}};
    border-radius:10px;
  }
  .{{slug}}-embed figcaption{text-align:right;font-size:.85rem;margin-top:.4rem;}
  .{{slug}}-embed figcaption a{color:{{ACCENT_HEX}};text-decoration:none;}
  @media (max-width:640px){
    .{{slug}}-embed iframe{height:{{MOBILE_HEIGHT_PX}}px;}
  }
</style>

<figure class="{{slug}}-embed">
  <iframe src="https://cseperkepapp.github.io/Visualizations/{{PATH}}"
          loading="lazy" allow="fullscreen"
          title="{{DESCRIPTIVE_TITLE}}"></iframe>
  <figcaption>
    <a href="https://cseperkepapp.github.io/Visualizations/{{PATH}}" target="_blank" rel="noopener">Open full screen ↗</a>
  </figcaption>
</figure>
```

---

## Notes

- **Background match.** Set `{{BG_HEX}}` to the page's own `--bg` (or the article page's, if
  they differ) so the iframe edge is invisible — check the page's `:root{--bg:...}` before filling this in.
- **Height.** Start from the page's natural content height, then tune once viewed live on
  the actual WP page. Add the mobile media query if the desktop height is too tall on small screens.
- **Full-width layouts.** If the page defines a `--maxw` wider than the WP content column,
  set the block to full-width/wide alignment where the theme supports it — the visualization
  itself should stay usable in a narrower iframe (internal scroll/responsive layout), but it
  will read better with room.
- **Fullscreen escape hatch.** If the page has no in-page fullscreen control, keep the
  figcaption "Open full screen ↗" link — it's the only way out of a fixed-height iframe.
- **No auto-resize.** GitHub Pages → WordPress is cross-origin, so WP can't read the iframe's
  content height. Fixed height + the page's own internal scrolling is the default; a
  `postMessage` resizer is an optional upgrade, not required.
- After editing the page, `git push` — GitHub Pages redeploys automatically and the embed
  updates with no WordPress-side change.
