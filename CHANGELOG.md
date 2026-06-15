# Changelog

All notable changes to the **Visualizations** repo are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.21.0] - 2026-06-15

### Added in 1.21.0

- **`index.html`** — GitHub Pages landing/gallery: lists the visualizations (2 so far) with
  lazy live previews + full-screen links, a link to the lesson page, and the published article.
  Fixes the Pages root 404 and scales as more figures are added.
- **`lesson-1-vector-landscapes/WP-EMBED-SNIPPETS.md`** — copy-paste WordPress embed blocks for
  both Lesson 1 figures (live Pages URLs, `#1c1c1c`, full-screen caption links).
- **README "Live" section** with the Pages landing, lesson, figure, and article links.
- Wired the published article URL (`pappcseperke.hu/understanding-vector-landscapes-lesson-1`)
  into the landing page.

## [1.20.0] - 2026-06-15

### Added in 1.20.0

- **"⛶ Full screen" button** in both figures' controls — opens the figure's own URL in a new
  tab (works standalone and when embedded in an iframe, since the iframe's URL is the figure).
  Regenerated the single-file 3D embed build. EMBEDDING.md's WP snippet now also includes an
  "Open full screen ↗" figcaption link and `allow="fullscreen"` on the iframe.

## [1.19.0] - 2026-06-15

### Added in 1.19.0

- **`lesson-1-vector-landscapes/EMBEDDING.md`** — technical notes for hosting + embedding the
  figures: the iframe-isolation rule, GitHub Pages hosting (serves the folder, so the two-file
  3D works as-is), the WordPress/Elementor iframe snippet, file variants, regeneration, and
  gotchas. Linked from `FIGURES.md`.
- **`figures/springs-and-die-3d.embed.html`** — auto-generated single-file build of the 3D
  figure (data inlined) for paste/`srcdoc` contexts or one-file-only hosts. Two-file version
  remains the source of truth.

## [1.18.1] - 2026-06-15

### Changed in 1.18.1

- Distinct polyhedral die silhouettes in the 3D figure: d4 triangle, d6 square, d8 diamond,
  d10 kite, d12 pentagon, d20 hexagon (fixes the earlier d12/d20 both-hexagon collision).

## [1.18.0] - 2026-06-15

### Added in 1.18.0

- **Temperature now has colour + a polyhedral die (RPG wink)** in the 3D figure:
  - The slider accent and the readout text shift **cold = cyan/blue → normal = purple →
    warm = red** with the value.
  - The floating die is **coloured by temperature** (same scale) and its **type scales with
    choice**: low temp → **d4**, rising through **d6/d8/d10/d12**, high temp → **d20**. Drawn
    as the polygon silhouette with the rolled number and a "dN" tag.

## [1.17.1] - 2026-06-15

### Changed in 1.17.1

- 3D "⊕ Both" mode now greys out the Version 1 / Version 2 buttons while active, and pressing
  either version button exits Both and switches to that single version (states stay consistent).

## [1.17.0] - 2026-06-15

### Added in 1.17.0

- **3D "⊕ Both" toggle** — runs v1 and v2 simultaneously on the shared terrain (two coloured
  balls, two committed routes, both sentences stacked). Isolated `frameBoth()` so single-run
  mode is untouched; ghosts stay dormant and the fan/die are suppressed (the point is the two
  routes diverging over the same field). Off by default.

### Changed in 1.17.0

- **v2 words now point precisely** (`vector-field-clusters.js`): v2 opened on the shared
  `guilt` node while the sentence said "the lie". Added a `lie` member to the GUILT cluster and
  repointed v2 → `lie`; also repointed v2's "house" step from the `wife` member to `house`.
  Every path step now lands on a member whose word matches. Consequence: v2 no longer shares
  the exact `guilt` node, so guilt left the shared-basin set (rings + `deepBasins`); **feed**
  and **self** remain the shared convergences. Cluster colours unchanged.

## [1.16.0] - 2026-06-15

### Changed in 1.16.0

- **3D chosen-arrow thickness simplified** — all path lines are now the **same thin thickness**
  (only colour changes); the **only** thickness change is a **transient 2×** on the active
  segment, applied **after the die rolls and only until the ball arrives** at the active node,
  then back to normal. (Dropped the committed-segments-stay-2× behaviour; `BASE_R` 0.022 → 0.018.)

## [1.15.0] - 2026-06-15

### Changed in 1.15.0

- **3D shared-basin rings (◎) are now a toggle** ("◎ Basins" button), **off by default** —
  they only render when toggled on (no longer always shown / removed).
- **3D chosen-arrow thickness retuned** — thin (≈ the connection lines) while the arrow grows
  out at the node, then **2× once the ball travels through, and it stays 2×** (dropped the
  earlier 3.5× die-settle bump; `BASE_R` 0.04 → 0.022).
- **2D chosen arrow now spans the actual distance** to the next node (real screen distance/
  direction) instead of a fixed stub; alternative ghost arrows vary their length per word so
  distances read as varied. The chosen word label is dropped from the fan (the node shows it).

## [1.14.0] - 2026-06-15

### Changed in 1.14.0

- **3D cluster titles start grey, colour in on arrival** — a cluster's name is grey until the
  ball reaches a node in that cluster, then it lerps to the cluster's colour and stays
  (white-baked labels tinted per frame).
- **3D chosen-path arrows now have meaningful thickness** — rebuilt as cylinders+cones
  (WebGL ignores line width), so radius is controllable: **normal** while deciding, **~3.5×**
  from the moment the die settles through the travel to the next node, and **2×** once moved
  on (committed, stays coloured).

## [1.13.0] - 2026-06-15

### Changed in 1.13.0

- **3D nodes are now words, not balls** — dormant cluster members render as **just the word**
  (no sphere); they're the field of possibility. A coloured **ball only appears where the
  rolling ball has landed and "left one behind"** (the visited path) — those balls are the
  words actually being written into the sentence. (`dimAll` hides node spheres by default;
  `litNode`, called only for the visited path, reveals the deposited ball.)

## [1.12.0] - 2026-06-15

### Added in 1.12.0

- **Interconnection web** in the 3D figure: a faint "everything is connected" mesh links every
  node (real members + ghosts) to its ~3 nearest neighbours, baked into a single
  `LineSegments` (one draw call, ~zero per-frame cost). Very thin/transparent so it reads as
  background interconnection without intruding.

## [1.11.0] - 2026-06-15

### Changed in 1.11.0

- **3D ghost connections are now persistent** (`springs-and-die-3d.html`): every ghost
  cluster's connection line is **always drawn** as a very faint grey, non-intrusive link
  (they're existing connections in the landscape). On a decision the active ones **highlight
  in colour**, then their colour **fades back to grey — but the line keeps existing** (no
  longer gated off / removed). Lines anchor at the current decision node (`curAnchor`); the
  number that *highlight* still scales with temperature (≤8). Arrow pool raised 13 → 16.

## [1.10.0] - 2026-06-15

### Changed in 1.10.0

- **Ported the 3D choreography to the 2D figure**
  (`VectorField-Visualizations/lesson-1-vector-landscapes/figures/terrain-vs-dice.html`):
  - **Temperature slider** (0–1.5) added; controls how many "roads not taken" appear in the
    decision fan (`temp 0` → chosen only + die doesn't tumble).
  - Fan options now include **invented ghost words** (a `GHOST_POOL`, varied per node/version)
    alongside the curated neighbours, each in its **own colour**, with a **grey → colour →
    grey** envelope across the stop (fade in, hold, fade back).
  - **Node lights only when the ball LANDS** on it (glow ramps from arrival, not during the
    approach); its word still writes to the top sentence bar on landing.
  - **The ball has no fixed colour** — it interpolates the path colours (source→destination)
    as it rolls and "colours" each node on landing (was a fixed silver ball).
  - The persistent dormant word field and the coloured committed-path line were already
    present and are unchanged.

## [1.9.0] - 2026-06-15

### Added in 1.9.0

- **3D figure choreography (Task 001)** — implemented in
  `VectorField-Visualizations/lesson-1-vector-landscapes/figures/springs-and-die-3d.html`:
  - Temperature slider (0–1.5, default 0.7) with live readout.
  - **Persistent ghost clusters:** the landscape is always studded with faint dormant word
    clusters (14 invented `GHOSTS` at fixed scattered positions — a lit head word + grey
    neighbours each). On a decision they light up in colour; they **never fully disappear** —
    they slowly fade back to dormant (smoothed lerp). Matches the article's "board studded
    with mostly-dormant springs." ~56 sprites + one lerp/frame — no measurable cost.
  - Arrival sequence (long dwell): the decision node's option ghosts light up and **stay
    active until the ball LANDS at the next node** (through the dwell AND the travel),
    giving time to read them; only then do they fade back to ghosts. A small floating pip-die
    rolls at the node to mark the pick; the chosen arrow reaches the real next node.
    Distances are realistic (short hop vs. surreal leap); count scales with temperature.
  - Temperature scales the **number** of options (and their brightness): `temp 0` → no
    options + frozen die + determinism caption; hotter → more options.
  - Ghosts + their arrows ride one `lit` value: **grey + transparent (dormant) → colourful +
    opaque (active) → grey + transparent** again.
  - **Node lights only on landing.** The destination node (and its word, written on top) stays
    grey until the ball actually lands there — no pre-lighting. Until then only the **chosen
    arrow** to it is coloured.
  - **Persistent chosen-path arrows.** Each committed segment plus the in-progress choice is a
    coloured arrow (in the chosen word's colour) that **stays coloured** after the node
    activates — the committed route reads as a coloured chain.
  - **Ball has no colour of its own** — it interpolates the path colours (source→destination
    node) as it rolls, so the ball is what "colours" each node on landing. Satin, not chrome.
  - Embed background (`0x1c1c1c` + fog) preserved.

  Status: implemented and static-parsed; **pending browser verification** (Task 001).

## [1.8.0] - 2026-06-15

### Changed in 1.8.0

- **Embed-blend is now a default convention** across the visualization templates, since
  every figure is shown in an `<iframe>` on a `#1c1c1c` page and should blend seamlessly:
  - `templates/scaffold/visualization-scaffold.html` — page background defaults to
    `#1c1c1c`, the stage panel is transparent (no inner box), the canvas clears
    transparent so the host background shows through, and the header notes that embed-only
    figures should drop redundant `<h1>`/intro chrome.
  - `templates/TEMPLATE-VISUALIZATION-SPEC.md` — Style Direction now pins the `#1c1c1c`
    host background and the "blend, no seam" requirement.
  - `templates/TEMPLATE-TASK-VISUALIZATION.md` — added an "Embed blend (iframe on a
    `#1c1c1c` page)" quality-bar group.
  - `PROJECT-WORKFLOW-OVERLAYS.md` — added an embed-blend item to the manual testing
    checklist.

## [1.7.0] - 2026-06-15

### Added in 1.7.0

- `templates/TEMPLATE-WORDPRESS-ARTICLE.md` — converts a lesson `article.md` into the
  WordPress/Elementor HTML structure (design-system classes `.eyebrow`, `.pull-quote`,
  `.body-text`, `.story-analysis`, `.story-beat`). Includes the scoped stylesheet tuned to
  the live `#1c1c1c` page background, a Markdown→HTML mapping table, a paste-ready body
  skeleton, and a `figure.viz-embed` iframe snippet for dropping visualizations mid-article.

### Changed in 1.7.0

- Retuned the Lesson 1 figures' page background `#141414` → `#1c1c1c` so they blend
  seamlessly when embedded via `<iframe>` into the `#1c1c1c` WordPress page (no lighter box).

## [1.6.0] - 2026-06-15

### Added in 1.6.0

- **Lesson structure for the first project.** Reorganized `VectorField-Visualizations/`
  into `lesson-1-vector-landscapes/` (`article.md`, `figures/`, `prompts/`) so the repo
  scales to a series of lessons. Each visualization is now a **figure** that illustrates
  a section of its article.
- `lesson-1-vector-landscapes/FIGURES.md` — the lightweight spec layer: maps each article
  section to its figure and pins the accuracy constraints lifted from the prose (the
  article itself is the concept spec).
- `lesson-1-vector-landscapes/lesson-1.html` — published page; renders the article prose
  and embeds the two figures via `<iframe>`. Figures remain self-contained and testable
  in isolation.

### Changed in 1.6.0

- Renamed figures to match the article sections they illustrate:
  `vector-landscape-animation.html` → `figures/terrain-vs-dice.html`,
  `vector-landscape-3d.html` → `figures/springs-and-die-3d.html`.
- Reformatted `temperature-feature-prompt.md` onto the prompt template
  (`prompts/temperature-feature.md`): added Source block, linked it to the article
  section it serves, and updated the renamed file references.

## [1.5.0] - 2026-06-15

### Changed in 1.5.0

- **Repo reframed** from a generic "AI Project Workflow" kernel into the
  **Visualizations** repo — a home for educational HTML animations (AI, physics,
  chemistry), built with AI assistance (Claude + Codex). `README.md` rewritten to the
  new identity; the inherited workflow kernel is retained for non-visualization work.
- `PROJECT-WORKFLOW-OVERLAYS.md` filled in for this repo: no build step / package
  manager (`N/A`), browser-only manual testing checklist, Claude + Codex attribution,
  task-first authoring, and the visualization template family registered.

### Added in 1.5.0

- `templates/TEMPLATE-VISUALIZATION-SPEC.md` — defines the concept taught, audience,
  visual metaphor, interaction model, and scientific-accuracy constraints.
- `templates/TEMPLATE-TASK-VISUALIZATION.md` — build-an-animation task with
  visualization quality bars (performance, high-DPI, responsive, reduced-motion,
  accessibility, browser support).
- `templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md` — review template checking scientific/
  conceptual correctness, metaphor fidelity, pedagogical clarity, and honesty of
  simplifications.
- `templates/scaffold/visualization-scaffold.html` — dependency-free starter matching
  the VectorField style (dark theme, canvas, `devicePixelRatio` scaling, viewport
  resize, pause/visibility-aware `requestAnimationFrame` loop, `prefers-reduced-motion`
  fallback).

## [1.4.0] - 2026-06-14

### Added in 1.4.0

- `VAULT-INTEGRATION.md` — optional, product-neutral companion convention for
  projects tracked in an external knowledge vault (e.g. Obsidian). Establishes the
  core rule that the vault is an orchestration layer downstream of the registry and
  project files, defines auto-managed vs. human-owned page zones, and lists a
  minimal conformance checklist for vault generators.
- `Knowledge Vault Link` section in `PROJECT-WORKFLOW-OVERLAYS.md` so an adopting
  project records its vault page and registry key as a delta (no core edits).

### Changed in 1.4.0

- Genericized two remaining product-flavored examples in shipped scaffolding:
  `dt-guard` → `arch-guard` and `TEMPLATE-PROMPT-DTS.md` → `TEMPLATE-PROMPT-<PROJECT>.md`
  in `PROJECT-WORKFLOW-OVERLAYS.md`, and reworded an "outside DTS" phrase in
  `ADOPTION-GUIDE.md` to "outside their original project." Provenance/attribution
  references to the source project are intentionally retained as honest lineage.

## [1.3.1] - 2026-06-11

### Changed in 1.3.1

- Clarified in `templates/starter-packs/README.md` that the assessment task templates are an intentional **lighter variant** of the canonical `TEMPLATE-TASK.md` (planning-critical sections + `Deliverables`, omitting heavier execution/closeout sections), replacing the inaccurate claim that they follow the full canonical shape. Documented how to graduate an assessment onto the full canonical template.

## [1.3.0] - 2026-06-11

### Added in 1.3.0

- Assessment starter pack under `templates/starter-packs/` with copy-ready task and prompt templates for:
  - repository review
  - root-cause investigation
  - SWOT assessment
  - code QA assessment
  - AI capability assessment (tools, MCP, skills, agents, workflows)

### Changed in 1.3.0

- Documented starter-pack usage in `README.md` and `ADOPTION-GUIDE.md`

## [1.2.0] - 2026-06-11

### Added in 1.2.0

- Portable, product-neutral Copilot workflow skills under `.github/skills/`:
  - `workflow-investigation`
  - `workflow-qa-evidence`
  - `workflow-docs-sync`

### Changed in 1.2.0

- Documented optional skill adoption path in `ADOPTION-GUIDE.md`
- Listed reusable skills in `README.md`

## [1.1.2] - 2026-06-11

### Added in 1.1.2

- Cross-platform automation-kit installer helpers:
  - `automation/install/install-workflow-kit.ps1`
  - `automation/install/install-workflow-kit.sh`

### Changed in 1.1.2

- Documented one-command installer usage in:
  - `automation/README.md`
  - `ADOPTION-GUIDE.md`
  - `README.md`

## [1.1.1] - 2026-06-11

### Fixed in 1.1.1

- NodeNext-compatible explicit `.js` import paths in automation files:
  - `automation/scripts/rename-done-tasks.ts`
  - `automation/src/__tests__/sync-task-index.test.ts`

### Changed in 1.1.1

- Clarified automation adoption instructions to prevent nested folder copy mistakes (`scripts/scripts` and `.githooks/.githooks`) in `automation/README.md`

## [1.1.0] - 2026-06-11

### Added in 1.1.0

- `headers/HEADER-REPORT.md` for task-output report documents
- `headers/HEADER-WORKFLOW.md` for reusable recurring workflow documents
- `templates/TEMPLATE-REPORT.md` for written audit/review/closeout outputs
- `templates/TEMPLATE-WORKFLOW.md` for repeatable process recipes with required outputs, evidence inputs, decision rules, and verification
- `automation/` optional workflow automation kit with genericized scripts, tests, and hooks
- `.github/workflows/workflow-automation-example.yml` as a portable CI example for the automation kit
- `examples/project-management/` runnable sample task/workflow/decision surfaces
- `DECISIONS-QUICKSTART.md` for lightweight decision-record bootstrapping
- `templates/TEMPLATE-WORKFLOWS-README.md` and `templates/TEMPLATE-DECISION-LOG.md` as extra adoption helpers

### Changed in 1.1.0

- Expanded the template README to document report/workflow surfaces and the default workflow naming convention
- Updated the taxonomy to recognize report and workflow output sub-types
- Updated the overlay doc so consuming projects can record project-specific workflow naming
- Refreshed the adoption guide to include the newer portable kernel and optional `reports/` / `workflows/` surfaces

### Notes

- The template remains a portable kernel. Repo-specific overlays, agent-routing schemes, and CI contracts still belong in the consuming project's overlay or local docs rather than in this base template.

## [1.0.0] - 2026-04-20

### Initial Release

Extracted and generalized from Decision Themes Studio's in-repo workflow-system v1.2.2 (2026-04-11).

### Added

- Document taxonomy with six categories (Intent / Canon / Questions / Decisions / Experiments / Outputs)
- Header templates for each document category (`headers/HEADER-*.md`)
- Task and prompt templates with independent numbering (`templates/TEMPLATE-*.md`)
- Monthly status tracking format (`templates/TEMPLATE-STATUS.md`)
- Task scope guidelines covering hierarchy, sizing, and when to split or combine
- Source intelligence management workflow for keeping multiple AI assistants in sync
- System operating agreement defining the stable contract for project work
- `PROJECT-WORKFLOW-OVERLAYS.md` — new overlay schema for per-project customization
- `ADOPTION-GUIDE.md` — step-by-step instructions for adopting the template
- AI Context Load Analysis section in task template for assessing context budget before implementation
- Completion reminder pattern pointing at project overlay for project-specific closeout steps

### Notable Design Choices

- **Monolithic + overlay distribution**: template files stay pure, each consuming project documents deltas in a single `PROJECT-WORKFLOW-OVERLAYS.md`. No tooling or substitution required at adoption time.
- **Package manager agnostic**: command examples use `<pm>` placeholders rather than assuming npm / pnpm / yarn.
- **Task-first or prompt-first**: both execution patterns are first-class; consuming projects choose in their overlay.
- **Provenance required on Outputs**: tasks and prompts must declare source (human / Claude / ChatGPT / Gemini / mixed); other categories optional.

### Attribution

The workflow system was proven over 40+ tasks across multiple phases of the Decision Themes Studio project before extraction. The underlying design — document taxonomy, PM gateway philosophy, task-prompt separation, source intelligence management — was authored in that environment and generalized here with identified DTS-specific content moved to the overlay pattern.
