# Understanding Vector Landscapes — Lesson 1

## The pinball-machine model

A language model can be pictured as a pinball machine. The picture is a simplification — the real system has thousands of dimensions, and its inner workings can be read only partially, even with specialized tools — but the shape it gives is faithful, and it makes everything that follows easier to see. So before the examples, here is the machine, part by part.

### The board is fixed

Training builds the board: a vast, frozen landscape studded with springs. This is the "vector landscape" the series is named for. Once training ends, the board does not change. It is identical from one prompt to the next and from one user to the next. Nothing about running the model alters its shape — every interaction plays out on the same surface.

### The plunger is the prompt

The prompt is the plunger that puts the ball in motion. But it does two jobs at once. It launches the ball, and it also decides *which part of the board is live* — which springs are reachable and which sit walled off for this particular run. A prompt is therefore not just an amount of energy; it is a choice of terrain. The same machine, launched two different ways, can behave as though it were two different boards.

### The ball rewrites its own launch

A pinball is normally launched once and then runs free. This ball is stranger. The model generates its output one small piece at a time — roughly a fraction of a word per step, called a *token* — and each piece, once produced, is fed back in as part of the next launch. So the ball relaunches itself hundreds of times in a single answer, each launch starting from wherever the last one left it. The output is not read off one resting place; it is a path the ball builds underneath itself as it travels.

### The board is studded with springs

The board is not a smooth surface that merely steers a rolling ball. It is covered in springs — kickers that sit quiet until the ball reaches their zone, then push. Each spring corresponds to a concept, a tone, or a behavior, and most of them stay dormant on any given run. Context decides which the ball reaches and which it never touches. The word "bank" lands the ball among the money springs beside "deposit," and among the riverside springs beside "current"; the unused springs are not overruled, they are simply never struck. Interpretability researchers have found that some of these springs behave like emotions — a "desperate" or "loving" kicker that fires in the situations one would expect, and that measurably bends the ball's path when it does. An emotion, in this picture, is not a decoration on the output; it is a spring in the board.

### The springs set the odds; the die makes the pick

It is tempting to imagine the randomness living in the springs — as though each kick varied in strength from run to run. It does not. Every spring's push is set by the context and computed exactly: the same situation produces the same kicks every time. That entire stage is deterministic.

The randomness enters at a single point. On each step, all the live springs fire, and their combined push does not point at one exit — it produces a *spread* of likely next positions. Only then does one die roll select a single position out of that spread. The springs set the odds; the die makes the pick.

This also means the die can be switched off. Its weight is a setting (called *temperature*); lowered to zero, the machine stops rolling altogether and takes the single strongest push at every step. The same prompt then yields the identical result every time — which is proof that the springs are the computation and the die is only an optional coin flip bolted onto the output.

A compact map of the metaphor:

- The board, studded with springs — the trained weights: a fixed landscape of mostly-dormant kickers.
- The plunger — the prompt, which both launches the ball and selects which region of the board is live.
- A spring firing as the ball arrives — an internal representation activating in context.
- The die, rolled once per step — the sampling that picks the next position out of the spread the springs produce.
- Where the ball comes to rest — the generated text.

### Entropy is how narrow the live region is

How predictable an answer is depends on how the live springs share the push. A sharply specified prompt leaves one direction overwhelmingly strongest — "the capital of France is" points almost entirely at *Paris*, the spread collapses to a point, and the die has nothing left to decide. An open-ended prompt lets many springs contribute comparable pushes, so the spread stays wide and the die has real room to choose. Watching how quickly that spread narrows, as each generated token re-tilts the board, is most of what it means to read the machine.

### The terrain is what survives the re-roll

This is the idea the examples are built to show. Because of the die, running one prompt twice produces two different paths. But the *board* is the same both times, and its true shape is revealed by what stays constant across the re-rolls. Surface details diverge; the same springs fire again and again. Randomness is what makes the machine non-deterministic; the terrain is what makes its output recognizably the same shape regardless. One sample shows where the ball happened to land. Only the invariants across many samples show the landscape underneath.

The two examples that follow run the identical prompt — *a surreal story about guilt* — twice. Reading them side by side, the divergences are the dice; the repetitions are the terrain.
