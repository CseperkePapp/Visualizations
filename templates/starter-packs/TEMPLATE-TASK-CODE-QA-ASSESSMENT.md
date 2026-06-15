# Task NNN: Code QA Assessment - [Scope]

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

## Assessment Focus

Evaluate code quality, test rigor, maintainability, and regression risk in the scoped area.

---

## Background

Capture relevant release context, recent changes, and risk indicators that justify this QA assessment.

---

## Acceptance Criteria

- [ ] Findings prioritize bugs, regressions, and risk over style preferences.
- [ ] Missing tests are identified by behavior, not just file counts.
- [ ] Residual risk is stated when confidence is partial.

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

- Severity-ranked QA findings
- Suggested tests to add (unit, integration, end-to-end as relevant)
- Go/no-go recommendation for merge or release readiness

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
