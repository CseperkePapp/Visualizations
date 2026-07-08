# CLAUDE.md

Guidance for AI assistants working in this repository.

## Licensing convention

This repo is **dual-licensed**, on purpose. Apply it to every visualization,
including types added in the future.

- **Code** (rendering engine, interaction logic, layout/animation code, build
  scripts) → **MIT** (`LICENSES/MIT.txt`).
- **Content, data & design** (curation and arrangement of data, written copy,
  color palette, typography, visual composition) → **CC BY 4.0**
  (`LICENSES/CC-BY-4.0.txt`).
- **Precedence — most specific wins:** a per-file header overrides a per-folder
  `LICENSE`, which overrides the root `LICENSE`.

### Fixed values (use verbatim)
- Author: `Cseperke Papp`
- Author URL: `https://pappcseperke.hu`
- Sponsor URL: `https://github.com/sponsors/CseperkePapp`
- Repo LICENSE URL: `https://github.com/CseperkePapp/Visualizations/blob/main/LICENSE`
- Copyright year: current year

### Per-page rule
Every **standalone** HTML page (starts with `<!DOCTYPE html>`, has `<head>` and
`</body>`, not a fragment/partial/generated build) carries exactly two things:

1. A **license comment** immediately after `<!DOCTYPE html>`, before `<html>`
   (never before the doctype — that risks quirks mode). See
   `templates/html-license-header.html`.
2. A **visible footer** (`.pagefoot`) immediately before `</body>`. See
   `templates/html-footer.html`. The footer CSS reads
   `--line --ink-faint --ink-soft --red --fdisplay --maxw`; if the page does not
   define them, use literal fallbacks inside the footer's own `.pagefoot` rules
   (`var(--x, fallback)`) — do not touch the page's existing styles.

**Skip** (do not add the footer): fragments/partials, generated/`.embed` builds,
`node_modules/`/`vendor/`/`dist/`/`build/`, pages that already contain the
`Dual-licensed` comment, and figures that only ever render inside an `<iframe>`
(they still get the license comment, not the footer). This work is licensing
only — never change visualization data, layout, colors, or behavior.

The `apply-licensing` skill (`.claude/skills/apply-licensing/SKILL.md`)
automates this, plan-first and idempotently.

## WordPress embed convention

Every visualization is meant to be embeddable in a WordPress article, not just
viewed on GitHub Pages. Don't let that documentation lag behind the build.

**Rule:** whenever a new standalone HTML visualization page is created (or an
existing one's embed-relevant details change — background color, natural
content height, `--maxw`, whether it has its own in-page fullscreen control),
create or update a sibling `WP-EMBED-SNIPPETS.md` in the same folder, built from
`templates/TEMPLATE-WP-EMBED-SNIPPETS.md`. One `WP-EMBED-SNIPPETS.md` per folder
is fine if that folder holds several related, individually-embeddable pages
(e.g. a lesson's `figures/`) — add a new `##` section per page rather than a new file.

Each snippet must be filled in from the actual page, not guessed:
- `{{BG_HEX}}` — read the page's own `:root{--bg:...}` so the iframe edge is invisible.
- `{{HEIGHT_PX}}` — the page's natural content height; note if it's fixed-viewport
  vs. variable (e.g. depends on filter/zoom state).
- Whether the page has its own fullscreen control — if not, the snippet's
  "Open full screen ↗" figcaption link is load-bearing; keep it.

**Skip:** fragments/partials, generated/`.embed` builds, and pages that only ever
render inside another page's `<iframe>` and are never meant to be embedded directly
in an external article (e.g. a lesson's own published page, which already embeds
its figures — the figures get the snippet, the lesson page doesn't need one for itself
unless it's also meant to be dropped into WP as a whole).
