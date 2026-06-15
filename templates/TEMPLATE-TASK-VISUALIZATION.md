# Task NNN: Build Visualization — [Visualization Name]

**Status:** planning | future | todo | in-progress | on-hold | done | blocked | cancelled
**Priority:** P0 | P1 | P2 | P3 | P4
**Created:** YYYY-MM-DD
**Updated:** <!-- YYYY-MM-DD when materially revised -->
**Completed:** <!-- YYYY-MM-DD when done -->
**Project:** <!-- e.g. VectorField-Visualizations -->
**Spec:** <!-- [VISUALIZATION-SPEC](VISUALIZATION-SPEC-name.md) — required; build from the spec, not from scratch -->
**Effort:** S | M | L | XL | --
**Dependencies:** none | TASK-NNN | free text

## Source

- agent: human | Claude | Codex | mixed
- model: <!-- model-id or N/A -->

---

## Summary

<!-- 1-3 sentences: which visualization this builds and the concept it teaches. -->

---

## Technical Approach

- **Rendering tech:** Canvas 2D | SVG | WebGL | CSS/DOM | other
- **Libraries:** none (vanilla) | <!-- list; prefer zero-dependency, single-file HTML where possible -->
- **File output:** <!-- e.g. `<project>/<name>.html`, self-contained -->
- **Why this tech:** <!-- e.g. Canvas 2D for thousands of moving particles; SVG for crisp labeled diagrams -->

---

## Build Steps

1. <!-- e.g. scaffold from templates/scaffold/visualization-scaffold.html -->
1. <!-- e.g. implement the field/data model from the spec's Phenomenon section -->
1. <!-- e.g. wire the interaction model (controls, hover, toggles) -->
1. <!-- e.g. tune visual style to match Style Direction -->

---

## Acceptance Criteria

- [ ] Teaches the spec's Learning Goal (a viewer reaches the stated understanding)
- [ ] Honors every Accuracy Constraint in the spec
- [ ] All interactions in the spec's Interaction Model work
- [ ] <!-- visualization-specific criterion -->

---

## Quality Bars (visualization-specific)

### Performance

- [ ] Animation holds a smooth frame rate on a mid-range laptop (target ~60fps; degrade gracefully)
- [ ] Element/particle count has a sane cap; no unbounded growth
- [ ] `requestAnimationFrame` loop pauses when tab is hidden or when Paused

### Rendering correctness

- [ ] High-DPI handled (canvas scaled by `devicePixelRatio`, capped ~2)
- [ ] Resizes correctly with the viewport (no stretching/blurring)
- [ ] Looks right at narrow (mobile) and wide (desktop) widths

### Embed blend (iframe on a `#1c1c1c` page)

- [ ] Page/figure background is `#1c1c1c` (or transparent) — no lighter box or seam at the iframe edge
- [ ] Canvas clears transparent (or to `#1c1c1c`) so the host background shows through
- [ ] No redundant heading/intro chrome that duplicates the surrounding article prose
- [ ] Verified inside an actual `<iframe>` on a `#1c1c1c` page, not just standalone

### Accessibility & robustness

- [ ] `prefers-reduced-motion` respected (static or gentle fallback)
- [ ] Controls are keyboard-reachable and labeled
- [ ] Text contrast is legible against the background
- [ ] Degrades sensibly if the canvas/WebGL context is unavailable

### Self-containment

- [ ] Single HTML file opens directly in a browser (no build, no server) — or note the exception and why

---

## Browser Support

- [ ] Latest Chrome / Edge
- [ ] Latest Firefox
- [ ] Latest Safari
- [ ] <!-- mobile Safari / Chrome if relevant -->

---

## Verification Notes

Record what was actually checked before closing the task.

- **Opened in:** <!-- which browsers, which widths -->
- **Accuracy review:** <!-- link to TEMPLATE-CONCEPT-ACCURACY-REVIEW run, or "pending" -->
- **Performance:** <!-- observed fps / behavior under load -->
- **Reduced motion:** <!-- confirmed fallback -->
- **Deferred / Not Run:** <!-- anything skipped -->

---

## Closeout

- [ ] Visualization file committed to its project folder
- [ ] Spec `Status` updated (→ `built` / `published`)
- [ ] Concept-accuracy review passed (or follow-up task filed)
- [ ] `CHANGELOG.md` updated if a published visualization changed
- [ ] This task file: `Status`, `Completed`, verification notes filled

---

## Related

- <!-- the spec, the accuracy review, sibling visualizations -->
