# Template — Convert a lesson `article.md` into WordPress/Elementor HTML

**Type:** Conversion template
**Target:** WordPress + Elementor (HTML widget), page background `#1c1c1c`
**Source:** a lesson `article.md` (the canonical prose)
**Updated:** 2026-06-15

---

## What this is

A repeatable recipe for turning a lesson's Markdown prose into the dark, design-system
HTML you paste into an Elementor **HTML widget**. It pins:

1. the **block vocabulary** (which HTML/class each Markdown construct maps to),
2. the **stylesheet** (your `.eyebrow` / `.pull-quote` plus the rest, tuned to the
   `#1c1c1c` page background), and
3. the **figure-embed** snippet for dropping a visualization `<iframe>` mid-article.

Hand this file + an `article.md` to an AI assistant and say "convert to the WordPress
structure," or follow it by hand.

---

## How to use in Elementor

Two workable patterns — pick per page:

- **One HTML widget (simplest).** Paste the whole `<style>` + body block below into a
  single Elementor **HTML** widget. Self-contained, survives theme changes, easy to move.
- **Split widgets.** Put the CSS once in **Elementor → Site Settings → Custom CSS** (or a
  page-level Custom CSS box), then paste only the markup chunks into HTML widgets, and use
  native **Heading** widgets for top-level `##` headings. Cleaner if you mix in other
  Elementor widgets.

> The page background is `#1c1c1c`. The CSS below assumes that — blocks are transparent so
> they sit flush on the page with no seams. Embedded figure `<iframe>`s also use `#1c1c1c`
> so their edges disappear.

---

## Markdown → HTML mapping

| In `article.md` | Becomes | Class |
| --------------- | ------- | ----- |
| A normal paragraph | `<p>…</p>` | `body-text` |
| `**bold**` | `<strong>…</strong>` | — |
| `*italic*` | `<em>…</em>` | — |
| `## Section heading` | `<h2>…</h2>` | `section-head` (or a native Elementor Heading widget) |
| `### Subheading` | `<h3>…</h3>` | `sub-head` |
| A small kicker / label above a quote (the "H6 look") | `<span>…</span>` | `eyebrow` |
| A featured line / big statement (the "H2 look") | `<blockquote>…</blockquote>` | `pull-quote` |
| A "beat": label + featured quote + commentary | `<article>` wrapping `eyebrow` + `pull-quote` + `body-text` | `story-beat` |
| A demo/analysis run (intro + several beats + through-line) | `<section>` wrapping it | `story-analysis` |
| A bullet list | `<ul><li>…</li></ul>` | `body-text` (on the `ul`) |
| "Embed the visualization here" | `<figure>` with an `<iframe>` | `viz-embed` (see snippet) |

**Conversion rules of thumb**

- Wrap each self-contained demo (like the *guilt* story walk-through) in
  `section.story-analysis`.
- Each numbered narrative beat = one `article.story-beat`: an `eyebrow` label, the quoted
  text as a `pull-quote`, then your commentary as `body-text`.
- Reserve `pull-quote` for actual featured/quoted lines, not every sentence.
- Keep inline `<strong>` / `<em>` exactly where the Markdown had `**` / `*`.

---

## The stylesheet

Paste once (HTML widget `<style>` or Elementor Custom CSS). Uses your two definitions
verbatim and adds the surrounding pieces, all on the `#1c1c1c` background.

```html
<style>
.lesson-body{
  --bg:#1c1c1c; --text:#cbd5e1; --head:#e2e8f0; --eyebrow:#5ab4c5; --line:#2f3640;
  color:var(--text);
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size:1.0625rem; line-height:1.7; max-width:720px; margin:0 auto;
}

/* Replicating your H6 look */
.lesson-body .eyebrow{
  color:#5ab4c5; font-style:italic; font-size:0.875rem;
  display:block; margin-bottom:0.75rem;
}

/* Replicating your H2 look */
.lesson-body .pull-quote{
  font-family:"Your-Serif-Font", serif; font-size:2rem; line-height:1.3;
  color:#e2e8f0; margin:0 0 1.5rem 0; font-weight:normal;
}

.lesson-body .body-text{ margin:0 0 1.1rem 0; }
.lesson-body .body-text strong{ color:var(--head); }
.lesson-body .body-text em{ color:#e2e8f0; font-style:italic; }

.lesson-body h2.section-head{ color:var(--head); font-size:1.6rem; font-weight:600; margin:2.5rem 0 0.75rem; }
.lesson-body h3.sub-head{ color:var(--head); font-size:1.2rem; font-weight:600; margin:1.75rem 0 0.5rem; }

.lesson-body ul.body-text{ padding-left:1.4rem; }
.lesson-body ul.body-text li{ margin:0 0 0.5rem 0; }

.lesson-body .story-analysis{ margin:2rem 0; }
.lesson-body .story-beat{ margin:0 0 2rem 0; padding-left:1rem; border-left:2px solid var(--line); }

/* Figure embed — blends into the #1c1c1c page, no visible iframe box */
.lesson-body .viz-embed{ margin:2.5rem 0; }
.lesson-body .viz-embed iframe{
  width:100%; height:600px; border:0; display:block; background:#1c1c1c; border-radius:10px;
}
.lesson-body .viz-embed figcaption{
  color:#7c8794; font-size:0.85rem; margin-top:0.6rem; display:flex;
  justify-content:space-between; gap:1rem; flex-wrap:wrap;
}
.lesson-body .viz-embed figcaption a{ color:#5ab4c5; text-decoration:none; }
@media (max-width:600px){ .lesson-body .viz-embed iframe{ height:460px; } }
</style>
```

> Replace `"Your-Serif-Font"` with the actual serif from your theme's tokens.

---

## The body skeleton (paste-ready)

Wrap everything in `.lesson-body` so the CSS scopes cleanly inside Elementor.

```html
<div class="lesson-body">

  <!-- ## Section heading  (or use a native Elementor Heading widget instead) -->
  <h2 class="section-head">Section heading</h2>

  <!-- ### Subheading -->
  <h3 class="sub-head">Subheading</h3>

  <!-- a normal paragraph; keep inline emphasis -->
  <p class="body-text">
    Body copy with <strong>bold</strong> and <em>italic</em> exactly where the Markdown had them.
  </p>

  <!-- a bullet list -->
  <ul class="body-text">
    <li>First point.</li>
    <li>Second point.</li>
  </ul>

  <!-- EMBED A VISUALIZATION: drop after the section it illustrates -->
  <figure class="viz-embed">
    <iframe src="https://YOUR-HOST/figures/FIGURE-NAME.html" loading="lazy"
            title="One-line description for screen readers"></iframe>
    <figcaption>
      <span>Caption: what to watch for in this figure.</span>
      <a href="https://YOUR-HOST/figures/FIGURE-NAME.html" target="_blank" rel="noopener">Open figure ↗</a>
    </figcaption>
  </figure>

  <!-- A DEMO / ANALYSIS RUN -->
  <section class="story-analysis">

    <p class="body-text"><strong>Example prompt:</strong> A surreal story about guilt.</p>

    <p class="body-text">
      <em>Intro / honesty caveat goes here as body-text.</em> Setup paragraphs before the beats.
    </p>

    <!-- one article.story-beat per narrative beat -->
    <article class="story-beat">
      <span class="eyebrow">Beat 1:</span>
      <blockquote class="pull-quote">"The quoted output line for this beat."</blockquote>
      <p class="body-text">Your commentary on the beat, as body-text.</p>
    </article>

    <article class="story-beat">
      <span class="eyebrow">Beat 2:</span>
      <blockquote class="pull-quote">"The next quoted output line."</blockquote>
      <p class="body-text">Commentary.</p>
    </article>

    <p class="body-text"><strong>The through-line:</strong> closing synthesis paragraph.</p>

  </section>

</div>
```

---

## Figure embed notes

- `src` must be an **absolute URL** where the figure is hosted (e.g. GitHub Pages), not a
  repo-relative path — WordPress can't see your local files.
- The `<iframe>` background is `#1c1c1c` to match the page. For a perfectly seamless embed,
  the figure file itself should also use a `#1c1c1c` (or transparent) page background —
  see the repo's figures; ask to have them retuned for embed if they still show a lighter box.
- Set `height` to the figure's natural aspect; bump the `@media` value if a figure is taller.
- One `figure.viz-embed` per visualization; place it right after the prose section it
  illustrates (mirror the `FIGURES.md` section→figure map).

---

## Checklist before pasting into WP

- [ ] CSS placed once (HTML widget `<style>` or Elementor Custom CSS)
- [ ] Markup wrapped in `.lesson-body`
- [ ] `"Your-Serif-Font"` replaced with the real theme serif
- [ ] Every `<iframe src>` is an absolute hosted URL
- [ ] `pull-quote` used only for genuine featured/quoted lines
- [ ] Inline `<strong>`/`<em>` preserved from the Markdown
- [ ] Previewed on the live `#1c1c1c` page (figure edges blend, contrast is legible)
