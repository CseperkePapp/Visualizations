# Task NNN: Root Cause Investigation - [Issue]

**Status:** planning | future | todo | in-progress | on-hold | done | blocked | cancelled
**Priority:** P0 | P1 | P2 | P3 | P4
**Created:** YYYY-MM-DD
**Updated:** <!-- YYYY-MM-DD when materially revised; remove if unused -->
**Completed:** <!-- YYYY-MM-DD when done -->
**Parent:** <!-- [TASK-NNN](TASK-NNN-name.md) if this is a subtask; remove if standalone -->
**Effort:** S | M | L | XL | --
**Dependencies:** none | TASK-NNN | TASK-NNN, TASK-NNN.N | free text
**Phase:** <!-- optional -->

## Source

- agent: human | Claude | ChatGPT | Gemini | mixed
- model: <!-- model-id or N/A -->

---

## Problem Statement

Describe the observed symptom and affected surface.

---

## Background

Summarize prior attempts, recent regressions, and known constraints that frame the investigation.

---

## Investigation Questions

- What is the most likely root cause?
- What evidence supports or contradicts it?
- What is the smallest coherent write set to fix it?

---

## Acceptance Criteria

- [ ] Root cause is identified with evidence.
- [ ] Assumptions are separated from verified facts.
- [ ] Proposed fix scope and invariants are documented.

---

## Documentation & Versioning Impact

### Always review on closeout

- [ ] This task file (`Status`, `Completed`, completion notes, verification)
- [ ] `docs/project-management/tasks/README.md`
- [ ] Project status surface (`START-HERE.md`, `STATUS.md`, or equivalent)

### Update if this task changes them

- [ ] Root `package.json` and any affected package versions
- [ ] `CHANGELOG.md`
- [ ] `DECISION-LOG.md`
- [ ] Canon/reference docs, including metadata fields your project tracks
- [ ] Wiki/contributor docs

---

## Deliverables

- Root cause summary
- Impacted file list and estimated blast radius
- Verification plan for the eventual fix

---

## Risks To Control

- <!-- risk -->

---

## Open Questions

- <!-- question -->

---

## Verification Notes

- Automated:
	- <!-- commands run -->
- Manual:
	- <!-- checks performed -->
- Deferred / Not Run:
	- <!-- intentionally not run -->

---

## Related

- <!-- related tasks, prompts, docs -->
