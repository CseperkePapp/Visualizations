# Header Template: Task

## Purpose

Use this header for **task specifications** - discrete units of work to be done.

## When to Use

- Feature implementation tasks
- Bug fix tasks
- Refactoring tasks
- Documentation tasks
- Any bounded unit of work

See [TASK-SCOPE-GUIDELINES.md](../TASK-SCOPE-GUIDELINES.md) for guidance on task sizing and parent/subtask relationships.

## Template (Standalone Task)

```markdown
# Task NNN: [Name]

**Status:** planning | future | todo | in-progress | on-hold | done | blocked | cancelled
**Priority:** P0 | P1 | P2 | P3 | P4
**Created:** YYYY-MM-DD
**Updated:** YYYY-MM-DD [optional]
**Completed:** YYYY-MM-DD [when done, or remove if not done]
**Effort:** S | M | L | XL | -- [optional; add a short note if needed]
**Dependencies:** none | TASK-NNN | TASK-NNN, TASK-NNN.N | free text [optional]
**Phase:** N | free text [optional; use when your repo groups tasks into named/numbered phases]

## Source
- agent: human | Claude | ChatGPT | Gemini | mixed
- model: [model-id or N/A]

---

## Summary

[Brief description of what this task accomplishes]

## Scope

[What's included]

## Non-Goals

[What's explicitly excluded]

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

## Template (Parent Task with Subtasks)

```markdown
# Task NNN: [Parent Name]

**Status:** planning | future | todo | in-progress | on-hold | done | blocked | cancelled
**Priority:** P0 | P1 | P2 | P3 | P4
**Created:** YYYY-MM-DD
**Updated:** YYYY-MM-DD [optional]
**Completed:** YYYY-MM-DD [when done, or remove if not done]
**Effort:** S | M | L | XL | -- [optional; add a short note if needed]
**Dependencies:** none | TASK-NNN | TASK-NNN, TASK-NNN.N | free text [optional]
**Phase:** N | free text [optional; use when your repo groups tasks into named/numbered phases]

## Source
- agent: human | Claude | ChatGPT | Gemini | mixed
- model: [model-id or N/A]

---

## Summary

[What this initiative achieves overall]

## Subtasks

| ID | Subtask | Status |
| -- | ------- | ------ |
| NNN.1 | [Subtask 1](TASK-NNN.1-name.md) | todo |
| NNN.2 | [Subtask 2](TASK-NNN.2-name.md) | todo |

## Background

[Shared context for all subtasks - subtasks reference this, don't repeat it]
```

## Template (Subtask)

```markdown
# Task NNN.N: [Subtask Name]

**Status:** planning | future | todo | in-progress | on-hold | done | blocked | cancelled
**Priority:** P0 | P1 | P2 | P3 | P4
**Created:** YYYY-MM-DD
**Updated:** YYYY-MM-DD [optional]
**Parent:** [TASK-NNN](TASK-NNN-name.md)
**Effort:** S | M | L | XL | -- [optional; add a short note if needed]
**Dependencies:** none | TASK-NNN | TASK-NNN, TASK-NNN.N | free text [optional]
**Phase:** N | free text [optional; use when your repo groups tasks into named/numbered phases]

## Source
- agent: human | Claude | ChatGPT | Gemini | mixed
- model: [model-id or N/A]

---

## Summary

[What this subtask delivers]

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
```

Note: Subtasks don't repeat Background - it lives in the parent task.

## Field Definitions

| Field | Required | Values | Description |
| ----- | -------- | ------ | ----------- |
| Task Number | Yes | `NNN` or `NNN.N` | Sequential; subtasks use decimal |
| Status | Yes | `planning`, `future`, `todo`, `in-progress`, `on-hold`, `done`, `blocked`, `cancelled` | Current state |
| Priority | Yes | `P0`, `P1`, `P2`, `P3`, `P4` | Project priority scale |
| Created | Yes | `YYYY-MM-DD` | When task was created |
| Updated | No | `YYYY-MM-DD` | Last material revision to the task spec |
| Completed | Conditional | `YYYY-MM-DD` | Required when `done` |
| Parent | Subtasks only | Link to parent | Required for subtasks |
| Effort | No | `S`, `M`, `L`, `XL`, `--` (+ optional short note) | Estimated scope/effort |
| Dependencies | No | task ids, comma-separated task ids, `none`, or free text | Work that must land first or baseline assumptions |
| Phase | No | number or free text | Optional planning grouping, for example `7` or `Launch Prep` |
| Source.agent | Yes | `human`, `Claude`, `ChatGPT`, `Gemini`, `mixed` | Who wrote this |
| Source.model | Yes | Model ID or `N/A` | Specific model if AI |

## Completion Reminder

On task closeout, review what else needs updating. The exact list depends on your project — see your project's `PROJECT-WORKFLOW-OVERLAYS.md` for the full closeout checklist. Universal items:

- Update the task file: `Status: done`, add `Completed:` date
- Update the task index (`tasks/README.md`)
- Update the project's status doc (START-HERE.md, STATUS.md, or equivalent — your project's overlay names it)
- Update `CHANGELOG.md` if shipped behavior changed
- Update `DECISION-LOG.md` if architecture or durable guidance changed

Project-specific closeout steps (in-app changelog, canon doc metadata, wiki pages, guardrail runs, etc.) are documented in each project's overlay.

## Task Numbering

- **Parent tasks:** `TASK-NNN` (e.g., TASK-006)
- **Subtasks:** `TASK-NNN.N` (e.g., TASK-006.1, TASK-006.2)
- **Max depth:** 2 levels (parent + subtask only)
- Numbers are never reused, even after archival
- Check `tasks/README.md` for next available number
