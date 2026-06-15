# Task 001: Amend 3D figure — ball material + arrival choreography

**Status:** in-progress (implemented; pending browser verification)
**Priority:** P2
**Created:** 2026-06-15
**Updated:** 2026-06-15
**Completed:**
**Project:** VectorField-Visualizations
**Figure:** `figures/springs-and-die-3d.html`
**Spec source:** [../article.md](../article.md) §"The springs set the odds; the die makes the pick" · [../FIGURES.md](../FIGURES.md) Figure 2
**Effort:** M
**Build prompt:** [../prompts/build-3d-springs-fan-die.md](../prompts/build-3d-springs-fan-die.md) — the single self-contained brief that merges this task's choreography/color logic with the die/fan/temperature mechanics.

## Source

- agent: human | Claude | Codex | mixed
- model: <!-- model-id or N/A -->

---

## Summary

Two amendments to the 3D vector-landscape figure: (1) restyle the ball so it reads as a
satin grey/eggshell sphere rather than mirror chrome, and (2) choreograph the **arrival
(dwell) phase** so it matches the 2D figure's logic — when the ball lands on a node, a fan
of option-arrows opens toward other clusters (the spread of possibilities), and only *then*
are the thermostat (temperature) and die rolled to make the pick.

---

## Background — current behavior

In `figures/springs-and-die-3d.html` today:

- **Ball material** (line ~114): `MeshStandardMaterial({color:0xdfe4ea, emissive:0x223,
  emissiveIntensity:0.3, roughness:0.15, metalness:0.95})` — effectively a chrome mirror.
- **Phases:** each step is a `travel` phase then a `dwell` phase; `dwell` begins the instant
  the ball arrives at the node (`frame()`, line ~168).
- **Lighting:** `dimAll()` dims everything; only **visited** nodes light up (lines ~142,
  161–163). **Neighbor words never light up.**
- **Arrows/fan:** there are **none** in 3D yet. The 2D figure
  (`figures/terrain-vs-dice.html`) is the reference — see `drawDecisionFan(...)` (line ~204)
  and `drawArrow(...)` (line ~132): the chosen arrow points at the next node and is
  brightest; dim alternatives fan around it.
- **Die / temperature:** not built yet — defined in `prompts/build-3d-springs-fan-die.md`.

So the figure currently just lights visited nodes and moves on; there is no
arrival → fan of options → roll → pick beat.

---

## Scope

### In scope

1. **Ball material restyle.**
2. **Arrival choreography** for the dwell phase: a fan of option-arrows opens toward other
   clusters (2D style), then the thermostat + die roll, then the pick.

### Out of scope

- The temperature slider, die geometry, and fan-width mechanics themselves — those live in
  the build prompt `prompts/build-3d-springs-fan-die.md`. This task defines *when* they fire
  and the color logic; it doesn't redefine *how* they look.
- The 2D figure (it already does this; it's the reference).

---

## Requirement 1 — Ball material

The ball should read as **grey but chromatic, or eggshell — somewhat shiny**, not a chrome
mirror. Two acceptable directions (pick one in build; record which in Verification):

| Option | Look | Material direction |
| ------ | ---- | ------------------ |
| **A — Eggshell satin** *(recommended)* | warm off-white, soft sheen | low metalness (~0.0–0.2), mid roughness (~0.4–0.5), color ~`0xece7dd`, gentle emissive |
| **B — Grey chromatic** | neutral grey metal with a faint iridescent/chromatic sheen | mid metalness (~0.5–0.7), low-mid roughness (~0.25–0.4), color ~`0xb8bcc2`, subtle colored specular/environment tint |

Either way: **somewhat** shiny, not full mirror. Reduce `metalness` and raise `roughness`
from the current `0.95 / 0.15` so it stops acting as a perfect reflector. Keep the existing
`ballGlow` and `ballLight` readable against it.

---

## Requirement 2 — Arrival choreography (dwell phase)

When the ball **arrives** at a node (start of the `dwell` phase), play this sequence. Drive
it off `age = t - p.t0` within the dwell, the way the active-glow pulse already does
(line ~168).

1. **Arrive.** Ball lands on the node; the node lights as it does now.
2. **Fan of options opens — the fan is the star.** Arrows radiate from the active node, fanned
   across angles around the chosen direction, each at its **own realistic distance** (short
   hop vs. surreal leap — NOT a uniform stub, NOT bunched same-cluster neighbours, which was
   the wrong simulation). The **chosen** arrow points the full distance to the actual next
   path node and is brightest. Render in 3D (camera-facing `Line`s / `ArrowHelper`s).
3. **Options are PERSISTENT invented "ghost clusters" — roads not taken.** The landscape is
   *always* studded with faint dormant ghost clusters at fixed positions — each one a head
   word with a few neighbour words. On a decision, the selected ones **light up in colour**; they
   **never fully disappear** — when the choice resolves they **slowly fade back to dormant**.
   Mostly NEW words/clusters, occasionally familiar; varied per node (a `GHOSTS` table —
   invent/extend freely). See **Color logic**.
4. **Roll — the die is a small floating element.** The thermostat (temperature) sets how many
   options light up, and the die tumbles and settles at the node to mark the pick (mechanics
   per `build-3d-springs-fan-die.md`). The die stays a **small floating element** above the
   node — it must not upstage the fan; no camera move or scale-up. The roll happens **at** the
   node, not during travel.
5. **Stay lit until landing, then fade.** The lit options **stay active until the ball LANDS
   at the next node** (through the dwell AND the travel — more time to read them); only then
   do they **slowly fade back to dormant ghosts**. The chosen arrow stays brightest and the
   ball follows to the actual chosen cluster.

**Ordering matters:** options light first, *then* the die picks. The springs lay out the
spread and only then does the die pick — show that order.

At `temperature = 0`: only the chosen arrow, no lit options, die frozen (consistent with
`build-3d-springs-fan-die.md`). The dormant ghosts remain faintly present.

### Color logic

- **Dormant default:** every ghost cluster is always faintly present in grey; real words the
  ball never reaches stay grey too.
- **Lit (an active option):** the ghost cluster's head word is **coloured** (neighbours a
  brighter grey) — the "spread of options lighting up," mostly invented never-used clusters.
- **After landing:** lit options **slowly fade back to dormant grey** (never fully gone).
- **At rest:** **only the chosen word keeps full colour.** The coloured words are exactly the
  path the ball took (the built sentence); ghosts idle dormant; everything else is grey.

This matches the 2D figure and the sentence overlay (chosen words colored, possibilities grey).

---

## Acceptance Criteria

- [ ] Ball has **no fixed colour** — it interpolates the path colours (source→destination
      node) as it rolls; satin, not chrome. It is what "colours" each node on landing.
- [ ] **Node lights (and its word on top) only when the ball LANDS there** — no pre-lighting.
      Until then only the **chosen arrow** to it is coloured.
- [ ] Chosen-path arrows are coloured (chosen word's colour) and **persist** after the node
      activates — the committed route reads as a coloured chain.
- [ ] Persistent ghost clusters fan out as options: grey+transparent → colourful → faded back;
      they **stay lit until landing**, then slowly return to dormant (never fully gone).
- [ ] The die rolls **at** the node to mark the pick; small floating element, fan stays the star.
- [ ] `temperature = 0`: no lit options, frozen die, deterministic replay still holds.
- [ ] Existing controls (v1/v2, Replay, Pause, OrbitControls), sentence overlay, trail, and
      shared-basin rings still work.

---

## Quality bars

- [ ] Holds a smooth frame rate; the loop's `try/catch` still guards `frame()`; new
      per-frame work doesn't freeze it.
- [ ] Still data-driven from `window.VECTOR_FIELD`; no new dependencies (Three.js r128 only).
- [ ] **Embed blend:** background stays `0x1c1c1c` and fog `0x1c1c1c`; no seam when iframed
      on the `#1c1c1c` page.
- [ ] Reuses `glowSprite()` where useful.

---

## Verification Notes

- **Ball option chosen:** A — eggshell satin. `MeshStandardMaterial({color:0xece7dd,
  emissive:0x1a1814, emissiveIntensity:0.18, roughness:0.45, metalness:0.15})`, 32-seg sphere.
- **Implemented (2026-06-15):** temperature slider (0–1.5, default 0.7); long dwell (T_dwell
  3.8 / T_fork 4.6). **14 persistent ghost clusters** (`GHOSTS` table) at fixed scattered
  positions, always faintly present (dormant grey), each a head word + grey neighbours.
  Decision-node model: a node's selected ghosts light up in colour and stay lit through the
  dwell AND the travel to the next node, then **lerp slowly back to dormant** after landing
  (`lit += (target-lit)*0.06`) — never fully gone. Arrows from the decision node to each lit
  ghost at realistic distances; chosen arrow reaches the real next node (brightest); count
  scales with temp. Small floating pip-die rolls at the node; deterministic caption at temp 0.
  Arrow pool raised to 13 (fading-out + fading-in sets). Embed bg untouched (`0x1c1c1c`+fog).
  **Node lights only on landing** (removed pre-light); **persistent chosen-path arrows**
  (separate pool, coloured by chosen word, stay lit); **ball has no own colour** — interpolates
  source→destination node colour each frame and colours the node on landing. Ghosts + arrows
  ride one `lit`: grey+transparent → colour → back. Parses clean; ~56 ghost sprites + one
  lerp/frame (no measurable cost).
- **Static check:** inline script parses cleanly via node.
- **Opened in:** <!-- PENDING — open in a browser; verify the sequence, temp sweep, temp=0 -->
- **Sequence check:** <!-- PENDING -->
- **temp=0:** <!-- PENDING — collapsed fan, frozen die, identical replay -->
- **Embed:** <!-- PENDING — confirm blended in an iframe on #1c1c1c -->

---

## Closeout

- [ ] Figure updated and verified in a browser
- [ ] `FIGURES.md` Figure 2 status/notes updated
- [ ] Concept-accuracy review run (springs-set-odds-then-die-picks order is honored)
- [ ] `CHANGELOG.md` updated and repo version incremented on ship

---

## Related

- Build prompt: [../prompts/build-3d-springs-fan-die.md](../prompts/build-3d-springs-fan-die.md)
- Visual reference: `figures/terrain-vs-dice.html` — `drawDecisionFan`, `drawArrow`
- Figure map: [../FIGURES.md](../FIGURES.md)
