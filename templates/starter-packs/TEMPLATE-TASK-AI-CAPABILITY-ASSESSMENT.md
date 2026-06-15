# Task NNN: AI Capability Assessment - [Repository]

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

## Objective

Assess which AI supports would most benefit this repository, with focus on practical adoption cost versus value.

---

## Background

Document the current AI operating model and known pain points that this assessment should address.

---

## Scope

Evaluate potential additions or improvements across:

- AI tools and command-line helpers
- MCP servers and tool categories
- Repo skills (`.github/skills/`)
- Specialized agents (`.github/agents/`)
- Reusable workflow docs and automations

---

## Acceptance Criteria

- [ ] Current-state inventory is documented.
- [ ] Gaps are ranked by impact and implementation effort.
- [ ] Recommendations include adoption order and rollback considerations.

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

- AI capability inventory (current vs proposed)
- Prioritized roadmap (quick wins, medium lifts, strategic investments)
- Follow-up task proposals for selected additions

---

## AI Context Load Analysis

### Pre-read file budget

| Category | Files | Lines (approx) |
| -------- | ----- | -------------- |
| Task docs | <!-- this task + linked tasks --> | <!-- ~ --> |
| Source files to modify | <!-- list --> | <!-- ~ --> |
| Source files to understand | <!-- AI-guide, package, skills, workflows --> | <!-- ~ --> |
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
