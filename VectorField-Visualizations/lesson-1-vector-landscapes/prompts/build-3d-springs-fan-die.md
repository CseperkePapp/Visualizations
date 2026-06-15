# Build prompt — 3D vector landscape: arrival choreography, fan, temperature & die

**Task:** [../tasks/TASK-001-3d-arrival-choreography.md](../tasks/TASK-001-3d-arrival-choreography.md)
**Figure:** `figures/springs-and-die-3d.html`
**Illustrates:** [../article.md](../article.md) §"The springs set the odds; the die makes the pick"
**Status:** active

> Single self-contained brief. It merges the temperature/die/fan/slider mechanics with the
> TASK-001 arrival choreography, color logic, and decisions (fan is the star; die is a small
> floating element). Build the whole thing from this one file.

## Source

- agent: human | Claude | Codex | mixed
- model: <!-- model-id or N/A -->

---

## Context

Paste this to your in-editor coding assistant with `figures/springs-and-die-3d.html` and
`figures/vector-field-clusters.js` open. The 2D figure `figures/terrain-vs-dice.html` is the
visual reference — match the feel of its `drawDecisionFan(...)` (line ~204) and
`drawArrow(...)` (line ~132).

The figure is a Three.js r128 scene that animates a ball through a semantic vector field
defined in `vector-field-clusters.js` (loaded as `window.VECTOR_FIELD`). Each step runs a
`travel` phase then a `dwell` phase; `dwell` begins the moment the ball arrives at a node
(`frame()`, line ~168). Today only **visited** nodes light up; there is **no fan, no die,
no temperature**, and the ball is chrome.

**Concept to encode (so the visuals are faithful):**
The springs produce the odds — a spread over the next word. The die makes the random pick.
Temperature is the dial BETWEEN them that reshapes the odds before the roll. High
temperature flattens the odds (wider fan, **more** alternative arrows, wilder die); low
temperature sharpens them (narrow fan, fewer arrows, calm die); temperature 0 is fully
deterministic (one arrow, frozen die, identical path every replay).

---

## Steps

### Step 1: Ball material

Make the ball **satin, not chrome** (low-ish metalness ~0.2, mid roughness ~0.4). It has **no
fixed colour of its own** — each frame, set `ball.material.color` (and a dim `emissive`) to the
**interpolated colour of the word the ball is on / heading to**: during travel lerp
source-node colour → destination-node colour by progress; during a dwell use the current node's
colour. So the rolling ball carries the colour and is what "colours" each node on landing. Tint
`ballGlow` to match. Keep `ballLight` readable.

### Step 2: Temperature slider

Add an `<input type=range>` to the `#controls` bar: min 0, max 1.5, step 0.01, default 0.7,
labeled "Temperature" with a live numeric readout, matching the existing dark button
styling. Store in a variable `temp`, updated on `input`.

### Step 3: Arrival choreography (the dwell phase)

When the ball **arrives** at a node (dwell start), play this sequence, driven off
`age = t - p.t0` within the dwell (like the active-glow pulse at line ~168). **Order is
mandatory** — the spread is laid out first, the die picks second:

The landscape is **always** studded with faint dormant ghost clusters at fixed positions
(persistent — see Color logic). At an arrival:

1. **Node lights only on landing.** A node (and its word, written in the top sentence bar)
   only lights up in colour when the **ball lands** on it — never pre-lit. The ball carries
   the colour and deposits it on arrival.
2. **Option ghosts light up — THIS IS THE STAR.** The decision's selected ghost clusters
   light up in colour, and arrows reach from the node to each. Arrows are at **realistic
   distances** (short hop vs. surreal leap). The **chosen arrow** points the full distance to
   the next node and is coloured (the chosen word's colour) **even before the ball lands
   there**; it **stays coloured** as a committed-path arrow afterward. (NOT uniform stubs, NOT
   same-cluster neighbours.)
3. **Options are invented "ghost clusters" — roads not taken.** Each is a **lit head word**
   (in its colour) plus a few **grey neighbour words**, so it reads as a cluster. Mostly NEW
   words/clusters, occasionally familiar; varied per node (a `GHOSTS` table).
4. **Roll — die is a SMALL floating element.** The die tumbles and settles in a small element
   floating ~0.9 units above the node, facing the camera (`CanvasTexture` sprite redrawing the
   pip face). It must **not** upstage the fan — no camera move or scale-up. ~0.7s tumble (face
   cycles, shake ∝ `temp`), then settle. At `temp` 0 it does not tumble: fixed face, steady.
5. **Stay lit until landing, then fade.** Options **stay lit through the dwell AND the travel
   to the next node** (time to read them); only after the ball **lands** do they **slowly fade
   back to dormant ghosts** (never fully gone). The chosen arrow stays brightest; ball follows
   to the actual chosen cluster.

### Step 4: Temperature shapes the spread

`temp` controls the **number of alternative arrows** (and their brightness):

- `temp ≈ 0`: only the single chosen arrow; no alternatives; die frozen.
- rising `temp`: **more** option-arrows fan out toward more (incl. never-used) clusters,
  brighter with heat — long-shot directions become visible options.

### Step 5: Determinism caption

When `temp === 0`, show a caption "temperature 0 — deterministic: same prompt, same
sentence," reflected visually by the collapsed fan and frozen die (the path is fixed data,
so replay already reproduces it).

### Step 6 (stretch, optional): Roads not taken

At high `temp`, draw 2–3 faint "ghost" branch lines from the active node toward OTHER nearby
clusters, fading in ∝ `temp`, suggesting the sentence could have gone elsewhere.

---

## Color logic (every node/word)

- **Dormant default:** ghost clusters are **always faintly present** in grey at fixed
  positions; real words the ball never reaches stay grey too.
- **Lit (active option):** a selected ghost's head word is **coloured** (neighbours a brighter
  grey) — the spread of options lighting up. Lit options stay up until the ball lands.
- **Fade back:** after landing, lit options **slowly lerp back to dormant grey** — never fully
  gone. (Use a smoothed `lit += (target - lit) * k` per ghost; `target` = 1 while selected.)
- **At rest:** **only the chosen word keeps full colour** — the path/sentence the ball built;
  ghosts idle dormant, everything else grey. (Matches the 2D figure and the sentence overlay.)

---

## Constraints

- Keep the existing v1/v2 toggle, Replay, Pause, OrbitControls, sentence overlay, trail, and
  shared-basin rings working.
- Everything data-driven from `window.VECTOR_FIELD`. Reuse `glowSprite()` where useful.
- Three.js r128 APIs only — no new dependencies.
- New per-frame work must not freeze the loop (it already wraps `frame()` in try/catch).
- **Embed blend:** keep `scene.background` and `scene.fog` at `0x1c1c1c` so the figure stays
  seamless when iframed on the `#1c1c1c` page. Don't introduce edge gradients/vignettes that
  differ from `0x1c1c1c`.

---

## Verify

No build step — open `figures/springs-and-die-3d.html` directly in a browser (Windows:
double-click, or `start figures/springs-and-die-3d.html`).

- Ball is satin grey/eggshell, somewhat shiny — clearly not chrome. Record A or B + values.
- Per node: arrive → candidates light (colored) → fan opens → die rolls → pick, **in that
  order**; the fan is visually dominant, the die is a small floating accent.
- Raising `temp` widens the fan and adds more alternative arrows; lowering narrows it.
- `temp = 0`: one arrow, frozen die, caption shows, replay reproduces the identical path.
- After each pick only the chosen word stays colored; alternatives go back to grey.
- v1/v2, Replay, Pause, OrbitControls, sentence, trail, rings all still work.
- Smooth frame rate; loop never freezes; seamless on a `#1c1c1c` iframe.

---

## Post-Completion Checklist

- [ ] Verified in a browser per the steps above
- [ ] Accuracy: spread is shown before the die picks; `temp=0` genuinely deterministic
- [ ] `../FIGURES.md` Figure 2 status/notes updated (→ built)
- [ ] `../tasks/TASK-001-3d-arrival-choreography.md` closed out (Status, verification)
- [ ] Concept-accuracy review run
- [ ] `CHANGELOG.md` updated; repo version incremented

---

## Commit Message Template

```text
feat: 3D vector landscape — fan, temperature, die, arrival choreography

Lesson 1 · figure: springs-and-die-3d · Task 001

- satin/eggshell ball; arrival → candidates colored → fan → roll → pick
- temperature scales fan width + number of alternative arrows; temp=0 deterministic
- die is a small floating element; fan is the focal element

Co-Authored-By: <AI-MODEL> <noreply@<provider>.com>
```
