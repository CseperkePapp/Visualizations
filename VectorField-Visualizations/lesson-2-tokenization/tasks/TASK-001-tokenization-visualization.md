# Task 001: Build Visualization — Tokenization ("what a piece is")

**Status:** future
**Priority:** P3
**Created:** 2026-06-15
**Updated:**
**Completed:**
**Project:** VectorField-Visualizations
**Lesson:** Lesson 2 — Tokenization
**Spec source:** this task (no article yet; may become a section of the Lesson 1 article or a Lesson 2 article)
**Effort:** M
**Dependencies:** conceptually follows Lesson 1 (`lesson-1-vector-landscapes/`); standalone to build.

## Source

- agent: human | Claude | Codex | mixed
- model: <!-- model-id or N/A -->

---

## Summary

A standalone figure that zooms in on **one complex word** and shows it is **not atomic** to
the model: it is read and written as several **subword tokens**. Reinforces Lesson 1's point
that the model emits a *fraction of a word per step* and feeds each piece back.

---

## The Concept Being Taught

A language model does not see whole words; it sees **tokens** — subword chunks from a fixed
vocabulary. A long/rare word is split into several tokens; a common word may be a single token.
The model generates **one token at a time**, each appended and fed back (the autoregressive
loop from Lesson 1). So "writing a word" can be several picks, not one.

**Common misconception this corrects:** that the model works word-by-word (or character-by-
character). It works token-by-token, and token boundaries are often *inside* words.

---

## The Phenomenon (what must stay faithful)

- A tokenizer maps text → a sequence of integer token IDs from a fixed vocabulary (BPE-style).
- Splits are **not** syllables or morphemes — they're frequency-driven subword merges, so they
  often look "wrong" to a human (e.g., a leading space is part of a token; `"ing"`, `"ly"`,
  fragments like `"bel"` are common).
- Generation is autoregressive: emit token, append, condition on the longer prefix, repeat.

---

## The Idea / Visual Metaphor

Take a showcase word (e.g. `"unbelievably"`, `"antidisestablishmentarianism"`, an emoji, a rare
name) and:

1. Show the whole word.
2. **Split** it into its subword tokens — each token a distinct coloured chip.
3. Animate the model **emitting them left-to-right**, one at a time, each chip "dropping in"
   and feeding the next (echo Lesson 1: a small ball/marker leaves a chip behind per step).
4. Optionally show the token **IDs** under each chip (the vocabulary indices), to make
   "tokens are entries in a fixed table" concrete.

Contrast a word that is **one token** with a word that is **many** to make the point land.

**Where the metaphor must stay honest:** the splits shown must be plausible/real for some
tokenizer, and labelled as illustrative if not computed live (see Open Questions).

---

## Technical Approach

- **Rendering:** Canvas 2D or DOM/CSS (chips + transitions). Likely simpler than the 3D field.
- **Libraries:** none (vanilla), single self-contained HTML. If a real tokenizer is wanted,
  consider shipping a small precomputed map for the showcase words rather than a full BPE lib.
- **File:** `lesson-2-tokenization/figures/tokenization.html` (copy the embed-ready scaffold
  `templates/scaffold/visualization-scaffold.html`).

---

## Scope

### In scope

- One figure: a chosen word → token chips → animated left-to-right emission.
- A toggle/few presets to compare a single-token word vs. a multi-token word.

### Out of scope

- A real in-browser BPE tokenizer over arbitrary input (unless we decide to ship vocab files).
- The full next-token distribution / sampling — that's Lesson 1's job; keep this about *what a
  token is*, not *how the next one is chosen*.

---

## Acceptance Criteria

- [ ] A complex word visibly splits into its subword tokens, animated one-by-one.
- [ ] At least one single-token vs. multi-token comparison makes the "not atomic" point.
- [ ] Token splits are real for a named tokenizer, or clearly **labelled illustrative**.
- [ ] Reinforces the autoregressive "emit → feed back" loop from Lesson 1.

---

## Quality Bars (visualization-specific)

- [ ] Smooth animation; pauses when hidden / on Pause; `prefers-reduced-motion` fallback.
- [ ] High-DPI crisp; responsive at mobile + desktop widths.
- [ ] **Embed blend:** `#1c1c1c` background, seamless in an `<iframe>` on the article page.
- [ ] Single self-contained HTML, opens directly in a browser.
- [ ] Text legible; controls keyboard-reachable and labelled.

---

## Open Questions

- **Which tokenizer?** GPT-style BPE vs. another — they split differently. Pick one and name it.
- **Real vs. illustrative splits?** Live tokenization needs vocab/merge files (sizeable). Option:
  hardcode correct splits for 3–5 showcase words and label the figure "illustrative."
- **Show token IDs?** Adds the "fixed vocabulary table" idea but more on-screen clutter.
- **Which showcase words?** Want a vivid single-token word, a vivid many-token word, and maybe
  an emoji / non-Latin example (often many bytes/tokens).

---

## Closeout (when built)

- [ ] Figure committed under `lesson-2-tokenization/figures/`
- [ ] `lesson-2-tokenization/FIGURES.md` created (section → figure map + accuracy constraints)
- [ ] README status updated (future → built)
- [ ] Concept-accuracy review run (`templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md`)
- [ ] `CHANGELOG.md` updated; repo version incremented on ship

---

## Related

- Lesson 1: `lesson-1-vector-landscapes/` (the autoregressive token loop, "the ball rewrites its own launch")
- Templates: `templates/TEMPLATE-VISUALIZATION-SPEC.md`, `templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md`, `templates/scaffold/visualization-scaffold.html`
