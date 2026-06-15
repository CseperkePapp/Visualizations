# Workflow Automation Kit

Optional automation extracted from the Decision Themes Studio workflow system and genericized for the portable template.

This kit is intentionally separate from the base template docs.

- The base template remains a Markdown-first workflow kernel.
- This folder is the optional automation layer for projects that want mechanical enforcement.

## What This Kit Includes

- `scripts/validate-headers.ts` — per-file header validation for project-management docs
- `scripts/sync-task-index.ts` — syncs task index status cells and next-task counters from task headers
- `scripts/rename-done-tasks.ts` — applies `DONE-` / `DEPR-` lifecycle prefixes and rewrites markdown references
- `src/__tests__/task-workflow-integrity.test.ts` — cross-file task workflow integrity guardrail
- `src/__tests__/sync-task-index.test.ts` — sync-script tests
- `.githooks/commit-msg` — task-traceability commit hook
- `.githooks/pre-push` — optional fast local pre-flight
- `.github/workflows/workflow-automation-ci.yml` — portable CI example for the automation layer
- `templates/TEMPLATE-TASKS-README.md` — recommended task-index shape for the automation to target
- `package.workflow-automation.json` — merge reference for scripts and dev dependencies
- `tsconfig.workflow-automation.json` — isolated TypeScript config for the automation files
- `install/install-workflow-kit.ps1` — PowerShell helper to copy automation files into an adopting repo without nested-folder mistakes
- `install/install-workflow-kit.sh` — Bash helper with the same safe-copy behavior

## What This Kit Does Not Include

This kit does **not** carry DTS-specific guardrails such as composition integrity, role/system checks, version drift checks, or product-specific CI policy.

## Assumptions

This portable kit assumes the adopting project uses:

- `docs/project-management/tasks/` for task files
- `docs/project-management/tasks/README.md` for the task index
- generic task filenames:
  - `TASK-NNN-name.md`
  - `TASK-NNN.N-name.md`
  - `DONE-TASK-NNN-name.md`
  - `DEPR-TASK-NNN-name.md`

It does **not** assume DTS-style priority segments or agent-route filename markers.

## Adoption

Copy this folder's contents into the root of the adopting project, removing the leading `automation/` segment as you place files.

Example target layout:

```text
your-project/
├── .githooks/
├── scripts/
├── src/
│   └── __tests__/
├── docs/
│   └── project-management/
│       └── tasks/
│           └── README.md
├── package.json
└── tsconfig.workflow-automation.json
```

Recommended setup order:

1. Merge `package.workflow-automation.json` into your root `package.json`
1. Copy `tsconfig.workflow-automation.json` to repo root
1. Copy `scripts/`, `src/__tests__/`, and `.githooks/` contents to repo root
1. If your task index is new, start from `templates/TEMPLATE-TASKS-README.md`
1. Enable hooks if wanted: `git config core.hooksPath .githooks`

### Fast install helpers

If you cloned this template locally and want a safer one-command install of the automation layer:

```powershell
pwsh ./automation/install/install-workflow-kit.ps1 -TargetRepo "E:\path\to\repo" -SetHooksPath
```

```bash
./automation/install/install-workflow-kit.sh /path/to/repo --set-hooks
```

These helpers copy folder contents (not parent folders), preventing accidental nesting like `scripts/scripts` or `.githooks/.githooks`.

### Important copy detail

If your repo already has `scripts/` or `.githooks/`, copy the contents of the automation folders into those directories rather than copying the parent folder itself. This avoids accidental nesting such as `scripts/scripts/` or `.githooks/.githooks/`.

## Commands

After wiring the package scripts, the intended commands are:

```text
npm run validate-headers
npm run workflow:test
npm run task:sync
npm run rename-done-tasks -- --write
```

Adjust the package-manager invocation for your project.
