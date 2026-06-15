# Adoption Guide

**Type:** Canon
**Version:** 1.3.0
**Authority:** canonical
**Verified:** 2026-06-14

---

## Purpose

Step-by-step instructions for adopting the `ai-project-workflow` template in your project.

---

## Prerequisites

- Git-tracked project
- A `docs/` directory (or willingness to create one)
- Decision about whether to use this workflow for one project or several (doesn't matter much — approach is the same)

---

## Adoption Steps

### Step 1: Copy the Template

Copy the contents of this repo (except `README.md`, `CHANGELOG.md`, `LICENSE`, `ADOPTION-GUIDE.md`, and `.git/`) into your project at:

```text
your-project/
└── docs/
    └── project-management/
        └── 000-WORKFLOW-SYSTEM/
            ├── DOCUMENT-TAXONOMY.md
            ├── TASK-SCOPE-GUIDELINES.md
            ├── system-operating-agreement.md
            ├── headers/
            │   └── ...
            └── templates/
                └── ...
```

The template's own `README.md`, `CHANGELOG.md`, `LICENSE`, and this `ADOPTION-GUIDE.md` do NOT get copied — they're about the template itself, not about what a consumer needs.

**Quick copy:** if you've cloned this repo locally, you can do:

```bash
# From your project root
mkdir -p docs/project-management/000-WORKFLOW-SYSTEM
cp -r /path/to/ai-project-workflow/headers docs/project-management/000-WORKFLOW-SYSTEM/
cp -r /path/to/ai-project-workflow/templates docs/project-management/000-WORKFLOW-SYSTEM/
cp /path/to/ai-project-workflow/DOCUMENT-TAXONOMY.md docs/project-management/000-WORKFLOW-SYSTEM/
cp /path/to/ai-project-workflow/TASK-SCOPE-GUIDELINES.md docs/project-management/000-WORKFLOW-SYSTEM/
cp /path/to/ai-project-workflow/system-operating-agreement.md docs/project-management/000-WORKFLOW-SYSTEM/
```

---

### Step 2: Create the Overlay Doc

Copy `PROJECT-WORKFLOW-OVERLAYS.md` from the template into your project's `docs/project-management/` folder (NOT inside `000-WORKFLOW-SYSTEM/`):

```text
your-project/
└── docs/
    └── project-management/
        ├── 000-WORKFLOW-SYSTEM/   ← template files (don't edit)
        └── PROJECT-WORKFLOW-OVERLAYS.md  ← your project's customizations
```

**Why outside `000-WORKFLOW-SYSTEM/`?** The 000-WORKFLOW-SYSTEM folder stays pure template content so you can pull template updates without conflicts. Your customizations live alongside it.

Fill in the overlay doc with your project's choices: package manager, guardrail tools, whether you use in-app changelogs, etc. Delete sections that don't apply.

---

### Step 3: Create the Sibling Folders

Set up the rest of the project-management structure:

```text
your-project/
└── docs/
    └── project-management/
        ├── 000-WORKFLOW-SYSTEM/
        ├── PROJECT-WORKFLOW-OVERLAYS.md
        ├── tasks/
        │   └── README.md         ← task index (create)
        ├── prompts/              ← OPTIONAL, if your project uses prompts
        │   └── README.md
        ├── status/               ← OPTIONAL, if you want monthly tracking
        │   └── YYYY-MM.md
        ├── decisions/            ← OPTIONAL, if you want decision records
        │   └── README.md
        └── archive/              ← Auto-populated as work completes
            ├── tasks/
            └── prompts/
```

### Task index (`tasks/README.md`)

Minimum viable content:

```markdown
# Tasks

## Active Tasks

| ID | Task | Priority | Status |
| -- | ---- | -------- | ------ |
| 001 | _(your first task)_ | P2 | todo |

## Completed Tasks

_(none yet)_
```

---

### Step 4: Create Your First Task

Copy `000-WORKFLOW-SYSTEM/templates/TEMPLATE-TASK.md` to `tasks/TASK-001-<name>.md` and fill it in. Reference it in the task index.

That's the minimum viable setup.

---

### Step 5: Optional — Project Instructions Doc

If your project has AI-facing instructions (like a `CLAUDE.md` or `AGENTS.md` at the root), link to this workflow from there:

```markdown
## Task Management

This project uses the ai-project-workflow system. See:

- Document taxonomy: `docs/project-management/000-WORKFLOW-SYSTEM/DOCUMENT-TAXONOMY.md`
- Task templates: `docs/project-management/000-WORKFLOW-SYSTEM/templates/`
- Project customizations: `docs/project-management/PROJECT-WORKFLOW-OVERLAYS.md`
```

---

### Step 6: Commit

```bash
git add docs/project-management/
git commit -m "chore: adopt ai-project-workflow v1.1.0"
```

Done.

### Optional: create report/workflow surfaces now

If your project expects recurring audits, release recipes, or other reusable process documents, create sibling folders up front:

```text
your-project/
└── docs/
    └── project-management/
        ├── reports/
        └── workflows/
```

Use the canonical templates from `000-WORKFLOW-SYSTEM/`:

- `templates/TEMPLATE-REPORT.md`
- `templates/TEMPLATE-WORKFLOW.md`

Recommended workflow naming convention:

- lower-kebab-case filenames such as `release-closeout.md`
- keep workflow files unnumbered; numbered executions belong in `tasks/`

### Optional: add workflow automation

If your project wants mechanical workflow checks, task lifecycle rename/sync scripts, or git hooks, use the isolated automation kit in [automation/README.md](automation/README.md).

For local adoption from a checked-out template copy, you can also use the installer helpers:

- PowerShell: `pwsh ./automation/install/install-workflow-kit.ps1 -TargetRepo "<repo-path>" -SetHooksPath`
- Bash: `./automation/install/install-workflow-kit.sh <repo-path> --set-hooks`

That kit is intentionally separate from the base template so projects can adopt the Markdown workflow kernel without taking on a Node/Vitest toolchain unless they want it.

### Optional: add reusable Copilot skills

If your project uses workspace-level Copilot skills, copy the generic skills from:

- `.github/skills/workflow-investigation/SKILL.md`
- `.github/skills/workflow-qa-evidence/SKILL.md`
- `.github/skills/workflow-docs-sync/SKILL.md`

These are portable patterns extracted from real project usage, but kept product-neutral so they can be used outside their original project.

### Optional: start from runnable examples

If you prefer a copy-ready starting point instead of creating each PM file manually, use [examples/project-management/README.md](examples/project-management/README.md).

The examples include:

- task index + active/completed task samples
- workflow folder guidance
- decision folder guidance

If you want a concrete example of the target shape before copying files into your own repo, see [examples/project-management/README.md](examples/project-management/README.md).

### Optional: use assessment starter templates

For common analysis work (review, investigation, SWOT, code QA, and AI capability planning), copy templates from:

- `templates/starter-packs/README.md`

These include paired task and prompt templates so projects can run structured assessments before implementation work starts.

---

## Updating the Template

When the template repo releases a new version:

### Review the CHANGELOG

Read the template's `CHANGELOG.md` for what changed. Decide if you want to pull the update.

### Pull the updates

```bash
# In your project
cd docs/project-management/000-WORKFLOW-SYSTEM

# Replace template files with new versions
# (assumes you have the template checked out locally)
rm -rf headers/ templates/ *.md
cp -r /path/to/ai-project-workflow/headers .
cp -r /path/to/ai-project-workflow/templates .
cp /path/to/ai-project-workflow/DOCUMENT-TAXONOMY.md .
cp /path/to/ai-project-workflow/TASK-SCOPE-GUIDELINES.md .
cp /path/to/ai-project-workflow/system-operating-agreement.md .

# Do NOT overwrite your PROJECT-WORKFLOW-OVERLAYS.md
```

### Update the sync record in your overlay

In your `PROJECT-WORKFLOW-OVERLAYS.md`:

```markdown
## Template Version in Use

**Template version:** v1.X.Y  ← update
**Last template sync:** YYYY-MM-DD  ← update
```

### Review your overlay for relevance

If the template version introduced new overlay options, your overlay doc may need new sections. Check the template's `PROJECT-WORKFLOW-OVERLAYS.md` against yours.

### Commit

```bash
git add docs/project-management/
git commit -m "chore: sync ai-project-workflow to v1.X.Y"
```

---

## What NOT to Do

**Don't edit files inside `000-WORKFLOW-SYSTEM/`.** Those are template files. Editing them means future template updates will conflict. Customize via the overlay doc instead.

**Don't commit your overlay back to the template repo.** Your customizations are project-specific and don't belong upstream.

**Don't rename template files.** Rename means more friction on next update. Prefer keeping the base template files stable and recording stricter project naming in your overlay.

**Don't add project-specific examples to template files.** If you want a project-specific prompt template (e.g., one that embeds your architectural base rules), create it at `docs/project-management/000-WORKFLOW-SYSTEM/templates/TEMPLATE-PROMPT-<YOUR-PROJECT>.md` or better, at `docs/project-management/templates/` outside the template folder entirely.

---

## Troubleshooting

### "Something from the template doesn't fit my project"

That's what the overlay is for. Document the delta in `PROJECT-WORKFLOW-OVERLAYS.md`. If the delta is general enough that many projects would share it, also consider opening an issue on the template repo.

### "I want to use a different folder layout"

The template assumes `docs/project-management/`. If you prefer `project-management/` at the root or `pm/` or `.pm/`, adjust paths in your overlay. The template references are relative-path-flexible.

### "I just want one template file, not the whole system"

That's fine — copy only what you need. The system is designed to be useful as a whole but not all-or-nothing.

### "Pulling template updates is causing merge conflicts"

You've probably edited a template file instead of using the overlay. Move your customization to the overlay, revert the template file, then pull updates cleanly.
