# Lesson 1 — Figures

**Lesson:** Understanding Vector Landscapes — Lesson 1
**Concept source (canon):** [article.md](article.md)
**Published page:** [lesson-1.html](lesson-1.html)

This is the lightweight spec layer for the lesson. The **article is the spec** — it
already states the concept, the metaphor map, and the accuracy constraints in prose.
This file just maps each figure to the article section it illustrates and pins down the
pass/fail accuracy checks lifted from that section. Run those checks via
[TEMPLATE-CONCEPT-ACCURACY-REVIEW.md](../../templates/TEMPLATE-CONCEPT-ACCURACY-REVIEW.md).

---

## The metaphor map (from the article)

| Metaphor element | Represents |
| ---------------- | ---------- |
| The board, studded with springs | The trained weights: a fixed landscape of mostly-dormant kickers |
| The plunger | The prompt — launches the ball **and** selects which region of the board is live |
| A spring firing as the ball arrives | An internal representation activating in context |
| The die, rolled once per step | The sampling that picks the next position out of the spread |
| Where the ball comes to rest | The generated text |

---

## Figures

### Figure 1 — `figures/terrain-vs-dice.html`

- **Status:** built; choreography translated from the 3D figure (temperature slider, ghost
  roads-not-taken with grey→colour→grey, node lights on landing, ball interpolates/deposits
  node colour). **Pending browser verification.**
- **Illustrates:** §"The terrain is what survives the re-roll"
- **Shows:** the identical prompt (*a surreal story about guilt*) run twice; the two
  paths diverge, but the shared ◎ nodes both runs pass through reveal the fixed board.
- **Accuracy constraints (must hold):**
  - [ ] The board (node field) is **identical** across both runs — only the path differs.
  - [ ] Shared/basin nodes (◎) are genuinely visited by **both** versions.
  - [ ] Divergence is presented as the *dice*; repetition as the *terrain* — the legend
        must not imply the model "chose differently because the board changed."

### Figure 2 — `figures/springs-and-die-3d.html`

- **Status:** built — fan, temperature slider, floating die, and arrival choreography
  implemented (Task 001, eggshell ball). **Pending browser verification.** Build brief:
  [prompts/build-3d-springs-fan-die.md](prompts/build-3d-springs-fan-die.md)
- **Illustrates:** §"The springs set the odds; the die makes the pick" (+ temperature)
- **Shows:** a ball moving through the 3D field; at each step the springs produce a
  spread and the die picks one position. Temperature reshapes the spread before the roll.
- **Accuracy constraints (must hold):**
  - [ ] Randomness enters at **exactly one point** — the die. The springs/spread are
        deterministic for a given context.
  - [ ] `temperature = 0` is fully deterministic: collapsed spread, frozen die, identical
        path on every replay.
  - [ ] Raising temperature **flattens** the odds (wider fan, wilder die), never changes
        the board itself.
  - [ ] Data-driven from `VECTOR_FIELD`; the same field shared with Figure 1's concept.

---

## Candidate future figures (not built)

| Article section | Figure idea |
| --------------- | ----------- |
| §"Entropy is how narrow the live region is" | Show the spread collapsing for *"the capital of France is"* vs. staying wide for an open-ended prompt |
| §"The plunger is the prompt" | Two prompts light up two different live regions of the same board |

---

## Embedding

Figures are self-contained `.html` files, each testable in isolation. The published
[lesson-1.html](lesson-1.html) embeds them via `<iframe>` at the matching section. When
a figure's filename or behavior changes, update both this file and `lesson-1.html`.

For hosting + embedding into WordPress (GitHub Pages, iframe snippet, the single-file build,
gotchas), see **[EMBEDDING.md](EMBEDDING.md)**.
