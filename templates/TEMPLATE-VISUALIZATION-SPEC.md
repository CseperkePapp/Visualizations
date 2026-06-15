# Visualization Spec: [Visualization Name]

**Type:** Spec
**Status:** draft | active | built | published | retired
**Project:** <!-- e.g. VectorField-Visualizations -->
**Domain:** AI | Physics | Chemistry | Math | Other
**Task:** <!-- [TASK-NNN](../tasks/TASK-NNN-name.md) if one exists; remove if standalone -->
**Created:** YYYY-MM-DD
**Updated:** <!-- YYYY-MM-DD when materially revised -->

## Source

- agent: human | Claude | Codex | mixed
- model: <!-- model-id or N/A -->

---

## One-Line Pitch

<!-- The whole visualization in a single sentence. If you can't, the idea isn't sharp enough yet. -->

---

## The Concept Being Taught

<!--
The single idea a learner should walk away understanding. Be specific and narrow.
"How attention weights route information between tokens" — good.
"Transformers" — too broad; split into multiple visualizations.
-->

---

## Audience & Level

- **Who:** <!-- e.g. high-school physics students, ML engineers new to embeddings, curious general public -->
- **Assumed background:** <!-- what they already know; what we must NOT assume -->
- **Level:** intro | intermediate | advanced

---

## Learning Goal

After watching/interacting, the learner can:

- [ ] <!-- a concrete, checkable understanding outcome -->
- [ ] <!-- ... -->

**Common misconception this corrects:** <!-- the wrong mental model people usually hold, and what replaces it. Remove if none. -->

---

## The Phenomenon

<!--
The actual AI/physics/chemistry mechanism being shown. Describe it precisely enough
that the accuracy review (TEMPLATE-CONCEPT-ACCURACY-REVIEW.md) can check the animation
against it. Include the governing relationship in plain terms.
-->

- **What it is:**
- **Governing rule / equation (plain terms):**
- **Key quantities shown:** <!-- what each visual element maps to -->

---

## Visual Metaphor

<!--
How the abstract phenomenon becomes something you can see. This is the creative core.
e.g. "embedding space as a landscape of dormant words; the prompt is a ball rolling
through it." State the mapping explicitly so it can be checked for fidelity.
-->

| Visual element | Represents | Notes |
| -------------- | ---------- | ----- |
| <!-- e.g. ball position --> | <!-- e.g. current token --> | |
| | | |

**Where the metaphor breaks down:** <!-- every metaphor lies somewhere; name the lie so it isn't mistaken for truth. -->

---

## Interaction Model

<!-- What the learner can do. Remove rows that don't apply. -->

| Control / gesture | Effect | Why it aids learning |
| ----------------- | ------ | -------------------- |
| <!-- e.g. hover field --> | <!-- surface dormant words --> | <!-- reveals the space is dense, not empty --> |
| Play / Pause / Replay | | |
| <!-- toggle between cases --> | <!-- compare two runs --> | |

- **Autoplay on load?** yes | no
- **Reduced-motion fallback?** <!-- what a `prefers-reduced-motion` user sees -->

---

## Scientific / Conceptual Accuracy Constraints

<!--
Hard requirements the visualization must not violate. These are the pass/fail lines
for the accuracy review. Be concrete.
-->

- [ ] <!-- e.g. arrows point along the gradient, never against it -->
- [ ] <!-- e.g. energy is conserved in the idealized case shown -->
- [ ] Acceptable simplifications are labeled as such (see "Where the metaphor breaks down")
- [ ] No claim is shown that a domain expert would call wrong

---

## Visual & Style Direction

- **Host page background:** `#1c1c1c` — figures are embedded via `<iframe>` on a
  `#1c1c1c` page and must **blend seamlessly** (no visible box/seam at the iframe edge).
  Use `#1c1c1c` (or transparent) as the figure background; paint any backdrop *into* the
  canvas scene, not behind it.
- **Palette / accents:** <!-- named accent colors on the #1c1c1c base -->
- **Reference visualizations:** <!-- prior art, links, or sibling project to match -->
- **Tone:** <!-- playful | clinical | cinematic -->

---

## Out of Scope

- <!-- what this visualization deliberately does NOT show (often the follow-up viz) -->

---

## Open Questions

<!-- Unresolved before build. Remove if none. -->

- <!-- e.g. is the simplification in step 2 honest enough? -->

---

## Related

- <!-- sibling visualizations, the build task, the accuracy review, source references -->
