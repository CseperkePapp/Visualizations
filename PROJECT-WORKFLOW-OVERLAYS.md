# Project Workflow Overlays — Visualizations

**Type:** Canon
**Version:** 1.0.0
**Authority:** canonical (within this project)
**Verified:** 2026-06-15

---

## Purpose

Document how the **Visualizations** repo customizes the base workflow kernel. The
kernel (`headers/`, `templates/`, taxonomy docs) defines the defaults; this file
defines the deltas for a repo whose job is building **educational HTML
visualizations** (AI, physics, chemistry) with AI assistance.

**Rule:** If a convention is specific to this repo, it lives here, not in the
template files.

---

## What This Repo Builds

Self-contained, browser-runnable HTML animations that teach one concept each. The
first project is `VectorField-Visualizations/`. Each project is a folder of related
`.html` files plus its specs and tasks.

**Authoring flow for a new visualization:**

1. Write a spec from `templates/TEMPLATE-VISUALIZATION-SPEC.md` — what is being taught.
2. File a build task from `templates/TEMPLATE-TASK-VISUALIZATION.md`.
3. Copy `templates/scaffold/visualization-scaffold.html` into the project folder and build.
4. Run a `templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md` before publishing.

---

## AI Collaboration

This repo is built with AI assistants as first-class collaborators. Skills, agents,
and AI tooling are expected and encouraged.

**Active AI collaborators:**

- Claude (Opus / Sonnet) — primary authoring, build, review
- Codex — authoring and review

**Provenance:** every spec/task/review records its `agent` and `model` in the Source
block. Unknown is allowed; invention is forbidden.

**Commit co-authorship:**

```text
Co-Authored-By: <AI-MODEL> <noreply@<provider>.com>
```

e.g. `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` or
`Co-Authored-By: Codex <noreply@openai.com>`.

---

## Package Manager

**Choice:** N/A (not a Node project)

Visualizations are single, dependency-free HTML files. There is no build, no install,
no test runner. Anywhere the base templates say `<pm> build` / `<pm> test` / `<pm> dev`,
the equivalent here is **"open the HTML file in a browser."** If a future project needs
a bundler, record that exception in that project's notes.

---

## Guardrail Tools

None. Quality is enforced by the visualization-specific checklists in
`TEMPLATE-TASK-VISUALIZATION.md` (performance, high-DPI, reduced-motion, browser
support) and the `TEMPLATE-CONCEPT-ACCURACY-REVIEW.md` (correctness, clarity), not by
an automated tool.

---

## Manual Testing Checklist

Every visualization is verified by hand in a browser. Minimum surfaces:

- [ ] Opens directly from the filesystem (no server) in Chrome/Edge
- [ ] Works in Firefox and Safari
- [ ] Looks right at a narrow (mobile) width and a wide (desktop) width
- [ ] High-DPI display: crisp, not blurry (canvas scaled by `devicePixelRatio`)
- [ ] Animation is smooth; pauses when the tab is hidden and when Paused
- [ ] `prefers-reduced-motion` shows the static/gentle fallback
- [ ] Controls are keyboard-reachable and labeled
- [ ] **Embed blend:** inside an `<iframe>` on a `#1c1c1c` page the figure is seamless —
      no lighter box or visible edge (figures use a `#1c1c1c`/transparent background)

---

## Project-Specific Templates

Visualization-domain templates added on top of the kernel:

| Template | Purpose | When to use |
| -------- | ------- | ----------- |
| `templates/TEMPLATE-VISUALIZATION-SPEC.md` | Define the concept, audience, metaphor, and accuracy constraints | Start of every new visualization |
| `templates/TEMPLATE-TASK-VISUALIZATION.md` | Build-an-animation task with viz quality bars | When building/ shipping a visualization |
| `templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md` | Check scientific/conceptual correctness and clarity | Before publishing; after major changes |
| `templates/scaffold/visualization-scaffold.html` | Dependency-free starter (dark theme, canvas, DPR, rAF, reduced-motion) | Copy as the seed for a new `.html` |

The generic kernel templates (`TEMPLATE-TASK.md`, `TEMPLATE-REPORT.md`, starter-pack
assessments) remain available for non-visualization work like tooling reviews.

---

## Status & Tracking

- **Status file location:** `docs/project-management/status/YYYY-MM.md` if/when a
  formal PM folder is set up; until then status lives in `CHANGELOG.md` and per-project notes.
- **Root status doc:** none — `README.md` and `CHANGELOG.md` carry repo-level state.
- **Prompt authoring:** Task-first. Specs + tasks drive the work; separate prompt files
  are optional and only used for complex multi-step builds.

---

## Canon Doc Metadata Convention

**Recommended** — Canon/spec docs include `Version:` and `Verified:` when useful. Specs
track `Status` (draft → built → published) rather than strict version numbers.

---

## Versioning

Per the repo's authoring convention, **increment the version when shipping changes**.
The repo version lives in `README.md` and `CHANGELOG.md` (Semantic Versioning). Bump on
every published visualization or template change.

---

## Knowledge Vault Link

- [x] None — this project is not tracked in an external vault.

---

## Versioning of This Overlay

| Date | Change | Reason |
| ---- | ------ | ------ |
| 2026-06-15 | Initial overlay | Repo reframed from workflow kernel to Educational Visualizations; added viz templates |

---

## Template Version in Use

**Kernel version:** v1.5.0 (this repo)
**Last reframe:** 2026-06-15
