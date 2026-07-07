# Knowledge Vault Integration

**Type:** Canon
**Version:** 1.0.0
**Authority:** canonical
**Verified:** 2026-06-14

---

## Purpose

Define how a project that adopts this workflow relates to an external **knowledge
vault** (e.g. an Obsidian vault) used as a cross-project orchestration layer.

This is an **optional companion** convention. Projects that do not use a vault can
ignore this document entirely. It is product-neutral: nothing here assumes a
particular project, app, or tool beyond "a folder of Markdown notes."

---

## The core rule

> A vault is an **orchestration / navigation layer on top of** projects.
> It never owns project truth.

Two distinct sources of truth, neither of which is the vault:

| Source of truth | Owns | Example |
| --- | --- | --- |
| **Project files** | Content — decisions, specs, status, code | the repo / work folder |
| **Registry** | Which projects exist and their status/value | a `project_data.json` or equivalent |

The vault is **generated from** these. Information flows *into* the vault; project
truth is never authored *in* the vault and copied back out.

---

## Why this matters

The failure mode this prevents is "system sprawl" — a vault quietly becoming a
second, competing place to track projects, until the registry and the vault
disagree and neither can be trusted. Keeping the vault downstream of the registry
and the project files means there is always exactly one answer to "what is true?"

---

## How a project participates

A project opts in by recording, in its [PROJECT-WORKFLOW-OVERLAYS.md](PROJECT-WORKFLOW-OVERLAYS.md)
under **Knowledge Vault Link**:

1. Its **vault page** path (if any).
2. Its **registry key** (if registry-tracked).

That is the entire coupling. No template files change; the overlay carries the delta.

---

## What may flow into the vault

AI assistants and sync tooling MAY surface, into a clearly-marked **auto-managed
block** on the project's vault page:

- Registry facts (status, value, billing, folder path).
- A pointer/link to the project folder.
- Optionally: the project's latest **Decisions** and monthly **Status** summary
  (per the [DOCUMENT-TAXONOMY.md](DOCUMENT-TAXONOMY.md) categories).

What may **never** happen:

- Writing project truth *from* the vault back into the project, or treating a
  vault edit as authoritative over project files or the registry.
- Storing the canonical registry inside the vault.

---

## Auto-managed vs. human content

A generated vault page has two zones, separated by an explicit marker:

```text
<!-- AUTO:BEGIN ... -->   regenerated from the registry/project; do not hand-edit
<!-- AUTO:END -->
...
<!-- MY NOTES ... -->     human-owned; never overwritten by regeneration
```

Regeneration tooling MUST preserve everything in the human zone. This lets a
project page carry free-form thinking safely alongside always-fresh facts.

---

## Relationship to the taxonomy

The vault does not introduce a new document category. A vault project page is a
**navigation surface** that points at the project's real Intent, Canon, Questions,
Decisions, Experiments, and Outputs — it does not replace any of them.

---

## Minimal checklist for a vault generator

A conformant generator should:

- [ ] Read the registry as the list of projects to generate.
- [ ] Treat project files / the registry as source of truth (never the vault).
- [ ] Write each page's facts inside an `AUTO:BEGIN/END` block.
- [ ] Preserve all human content below the `MY NOTES` marker on every run.
- [ ] Be safely re-runnable (idempotent for unchanged input).
