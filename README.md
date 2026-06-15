# Visualizations

**Type:** Repo overview
**Version:** 1.21.0
**Verified:** 2026-06-15

---

## Purpose

A home for **educational visualizations** — mostly AI, physics, and chemistry — built
as self-contained, browser-runnable HTML animations. Each visualization teaches one
concept: open the file, watch it move, understand the idea.

The first project is **[VectorField-Visualizations](VectorField-Visualizations/)** — an
animated take on how a language model picks its way through an embedding "landscape."

This repo is built **with AI assistance** (Claude and Codex as first-class
collaborators). It carries a lightweight, Markdown-first workflow — adapted from a
general AI-project workflow kernel — so that specs, build tasks, and accuracy reviews
stay disciplined across long gaps and context switches.

---

## Live

- **Gallery / landing:** <https://cseperkepapp.github.io/Visualizations/>
- **Lesson 1 — the lesson (article + embedded figures):** <https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/lesson-1.html>
- **Figures (open standalone / full screen):**
  - Terrain vs. dice (2D) — <https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/figures/terrain-vs-dice.html>
  - Springs & the die (3D) — <https://cseperkepapp.github.io/Visualizations/VectorField-Visualizations/lesson-1-vector-landscapes/figures/springs-and-die-3d.html>
- **Published article:** <https://pappcseperke.hu/understanding-vector-landscapes-lesson-1/>

To embed a figure in WordPress, see
[lesson-1-vector-landscapes/WP-EMBED-SNIPPETS.md](VectorField-Visualizations/lesson-1-vector-landscapes/WP-EMBED-SNIPPETS.md).

---

## How a Visualization Gets Made

```text
Spec ──→ Build task ──→ Scaffold + build ──→ Accuracy review ──→ Publish
WHAT       HOW             the .html            IS IT RIGHT?
```

1. **Spec** — `templates/TEMPLATE-VISUALIZATION-SPEC.md`
   The concept being taught, the audience, the visual metaphor, and the scientific
   accuracy constraints. The creative + correctness contract.
2. **Build task** — `templates/TEMPLATE-TASK-VISUALIZATION.md`
   Rendering tech, build steps, and the visualization quality bars (performance,
   high-DPI, responsive, reduced-motion, browser support).
3. **Scaffold** — `templates/scaffold/visualization-scaffold.html`
   A dependency-free starter (dark theme, canvas, DPR handling, a pause-aware rAF
   loop, reduced-motion fallback). Copy it into the project folder and build.
4. **Accuracy review** — `templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md`
   Before publishing: is it scientifically correct and pedagogically clear?

See **[PROJECT-WORKFLOW-OVERLAYS.md](PROJECT-WORKFLOW-OVERLAYS.md)** for this repo's
specific conventions (no build step, browser-only testing, AI attribution).

---

## Templates

### Visualization templates (this repo's domain)

| Template | Use |
| -------- | --- |
| [TEMPLATE-VISUALIZATION-SPEC.md](templates/TEMPLATE-VISUALIZATION-SPEC.md) | Define what a visualization teaches + accuracy constraints |
| [TEMPLATE-TASK-VISUALIZATION.md](templates/TEMPLATE-TASK-VISUALIZATION.md) | Build-an-animation task with quality bars |
| [TEMPLATE-CONCEPT-ACCURACY-REVIEW.md](templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md) | Check correctness + clarity before publishing |
| [scaffold/visualization-scaffold.html](templates/scaffold/visualization-scaffold.html) | Copy-ready HTML/canvas starter |
| [TEMPLATE-WORDPRESS-ARTICLE.md](templates/TEMPLATE-WORDPRESS-ARTICLE.md) | Convert a lesson `article.md` into WordPress/Elementor HTML (design-system classes, `#1c1c1c`, figure embeds) |

### General workflow kernel (inherited, still available)

The repo also keeps the generic, reusable workflow templates for non-visualization
work (tooling reviews, investigations, decision logs):

- `templates/TEMPLATE-TASK.md`, `TEMPLATE-PROMPT.md`, `TEMPLATE-BRIEF.md`,
  `TEMPLATE-REPORT.md`, `TEMPLATE-WORKFLOW.md`, `TEMPLATE-STATUS.md`,
  `TEMPLATE-DECISION-LOG.md`
- `headers/` — standardized document headers
- `templates/starter-packs/` — copy-ready assessment tasks/prompts (repo review,
  root-cause, SWOT, code QA, AI capability)
- See [DOCUMENT-TAXONOMY.md](DOCUMENT-TAXONOMY.md) for the six document categories and
  [ADOPTION-GUIDE.md](ADOPTION-GUIDE.md) for how the kernel works.

---

## Repository Layout

```text
Visualizations/
├── README.md                         # this file
├── PROJECT-WORKFLOW-OVERLAYS.md      # this repo's conventions (the deltas)
├── CHANGELOG.md
├── VectorField-Visualizations/       # first project — LLMs as a vector landscape
│   └── lesson-1-vector-landscapes/
│       ├── article.md                # concept source (canon)
│       ├── lesson-1.html             # published page (embeds figures via iframe)
│       ├── FIGURES.md                # section → figure map + accuracy constraints
│       ├── figures/*.html            # self-contained, individually testable
│       └── prompts/                  # build prompts for figures
├── templates/
│   ├── TEMPLATE-VISUALIZATION-SPEC.md
│   ├── TEMPLATE-TASK-VISUALIZATION.md
│   ├── TEMPLATE-CONCEPT-ACCURACY-REVIEW.md
│   ├── scaffold/visualization-scaffold.html
│   ├── starter-packs/                # generic assessment templates
│   └── TEMPLATE-*.md                 # generic workflow templates
├── headers/                          # document header templates
├── examples/                         # sample PM surfaces
└── automation/                       # optional workflow automation kit
```

---

## Quick Start: a New Visualization

```bash
# 1. (optional) create the project folder if it's a new topic
#    e.g. Pendulum-Visualizations/

# 2. copy the scaffold and rename it
cp templates/scaffold/visualization-scaffold.html \
   VectorField-Visualizations/my-new-animation.html

# 3. open it in a browser and build against your spec
#    (Windows: just double-click the file, or `start my-new-animation.html`)
```

Write the spec first; it makes the build and the accuracy review honest.

---

## Conventions

- **Self-contained HTML.** Prefer single files with no dependencies and no build step.
- **One concept per visualization.** If it teaches two things, split it.
- **Accuracy is non-negotiable.** Simplify freely, but never show something an expert
  would call wrong. Label where the metaphor breaks down.
- **Increment the version** in this README and `CHANGELOG.md` when you ship.
- **Provenance is explicit.** Specs/tasks/reviews record the AI agent and model used.

---

## Version History

See [CHANGELOG.md](CHANGELOG.md).

---

## License

[MIT](LICENSE)

© 2026 Cseperke Papp.
