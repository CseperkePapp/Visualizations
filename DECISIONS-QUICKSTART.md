# Decisions Quickstart

Use this helper when introducing decision records in a project adopting this template.

## Minimal Setup

1. Create `docs/project-management/decisions/`
1. Add `docs/project-management/decisions/README.md`
1. Add `docs/project-management/decisions/DECISION-LOG.md`

## Minimal Decision Log Skeleton

```markdown
# Decision Log

## 2026-06-11: Example decision

**Decision:** Keep task and prompt numbering independent.
**Why:** One task can involve multiple prompts.
**Alternatives:** Shared numbering.
**Impact:** Prompt docs always link back to a task.
**Status:** implemented
```

## When To Create A Standalone Decision File

Use a standalone file when the decision needs extensive evidence, migration detail, or links that would make the main decision log noisy.
