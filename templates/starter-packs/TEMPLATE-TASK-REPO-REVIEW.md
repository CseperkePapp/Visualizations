# Task NNN: Repository Review - [Scope]

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

## Summary

Assess repository health across architecture, workflow discipline, test coverage, and documentation quality.

---

## Background

Capture why this review is needed now and what decision or implementation it should inform.

---

## Scope

### In Scope

- Current architecture and module boundaries
- Testing and validation posture
- Documentation and task-traceability surfaces
- Workflow friction points

### Out of Scope

- Immediate implementation of all findings
- Broad refactors without follow-up tasks

---

## Acceptance Criteria

- [ ] Findings are ranked by severity and impact.
- [ ] Evidence links to concrete files, tests, or command outputs.
- [ ] Risks and follow-up tasks are clearly identified.

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

- Review report with severity-ranked findings
- Follow-up task list with priorities
- Verification notes listing what was actually checked

---

## AI Context Load Analysis

### Pre-read file budget

| Category | Files | Lines (approx) |
| -------- | ----- | -------------- |
| Task docs | <!-- this task + linked tasks --> | <!-- ~ --> |
| Source files to modify | <!-- list --> | <!-- ~ --> |
| Source files to understand | <!-- list --> | <!-- ~ --> |
| **Total** | | |

### Risk flags

- [ ] **Source-of-truth scattering**
- [ ] **Prop/API discovery**
- [ ] **Cross-cutting contracts**
- [ ] **Many implementation steps**
- [ ] **Guardrail amnesia**
- [ ] **Missing components**

### Mitigations

- <!-- mitigation 1 -->
- <!-- mitigation 2 -->

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
