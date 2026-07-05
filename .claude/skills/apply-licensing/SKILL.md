---
name: apply-licensing
description: Apply Cseperke's dual-license apparatus (code MIT / content CC-BY-4.0) to a repository — place root LICENSE + LICENSES/ + FUNDING.yml, and add the license comment header and visible footer to standalone HTML visualization pages. Plan-first and idempotent. Use when setting up or normalizing licensing/attribution/sponsorship in a repo.
allowed-tools: Read, Grep, Glob, Edit, Write, Bash(git status:*), Bash(git add:*), Bash(git commit:*), Bash(git diff:*)
argument-hint: "[repo-relative path to scope, optional — defaults to whole repo]"
---

# Apply licensing apparatus

Apply the dual-license convention to this repo. **Do not skip the plan step.**
This task is *only* licensing/attribution/sponsorship. It must not refactor,
extract engines, rename, reformat, or "improve" any visualization logic.

## The convention (also in CLAUDE.md)
- **Code** (rendering engine, interaction logic, build scripts) → **MIT**
- **Content, data & design** (curation, copy, palette, typography, composition) → **CC BY 4.0**
- Precedence, most specific wins: per-file header > per-folder LICENSE > root LICENSE.
- Applies repo-wide, including future visualization types.

## Fixed values (use verbatim; override only if I say so)
- Author: `Cseperke Papp`
- Author URL: `https://pappcseperke.hu`
- Sponsor URL: `https://github.com/sponsors/CseperkePapp`
- Copyright year: current year
- Repo LICENSE URL: `<origin repo>/blob/main/LICENSE` (derive from `git remote`)

## Step 1 — Inventory (READ ONLY, no edits yet)
1. Confirm repo root and current branch. If the branch is `main`, create/switch
   to a `licensing` branch before any edit.
2. Check for existing `LICENSE`, `LICENSES/`, `.github/FUNDING.yml`. Note which exist.
3. Find candidate HTML pages with Glob. A page **qualifies** only if ALL hold:
   - starts with `<!DOCTYPE html>` and has `<head>` and `</body>` (a full, standalone page)
   - is not under `node_modules/`, `vendor/`, `dist/`, `build/`, or any generated-output dir
   - is not a fragment/partial/template include
   - does NOT already contain the license comment (`Dual-licensed`) — skip if present (idempotent)
4. Produce a **plan**: files to create, HTML pages to modify, anything ambiguous
   flagged as "skip + ask". Show it and STOP for my confirmation. Do not edit yet.

## Step 2 — Place repo-level files (after I confirm)
- If missing, create `LICENSE`, `LICENSES/MIT.txt`, `LICENSES/CC-BY-4.0.txt`,
  `.github/FUNDING.yml` from the copies already in this repo's template set
  (do not regenerate license text from memory; copy the existing files).
- **Never overwrite an existing LICENSE** without asking. If one exists and differs, flag it.

## Step 3 — Per-page edits (only qualifying pages)
For each qualifying page, make exactly two additions and nothing else:
1. **License comment** immediately AFTER `<!DOCTYPE html>`, BEFORE `<html>`
   (never before the doctype — that risks quirks mode). Fill the fixed values;
   derive TITLE from the page's `<title>`.
2. **Visible footer** immediately before the closing `</body>` (or before a
   trailing fixed-position overlay/canvas if one is the last node). Use the
   footer markup+CSS from `templates/html-footer.html`.
   - The footer CSS uses vars `--line --ink-faint --ink-soft --red --fdisplay --maxw`.
     If the page does NOT define them, add literal fallback values inside the
     footer's own `.pagefoot` rules — do not assume, and do not touch the page's
     existing styles.
- Do not duplicate: if a `.pagefoot` footer already exists, leave it.

## Step 4 — Verify, then commit
- For each edited page, confirm: doctype is still first, `<p>`/`<footer>` tags
  balance, file still parses. Report a short before/after summary.
- Run `git diff --stat` and show it. On my go-ahead, `git add` the changed files
  and commit: `chore(licensing): apply dual-license headers, footer, and repo license files`.
- Do not push. Leave that to me.

## Explicitly OUT of scope
- Extracting a shared timeline/render engine into its own module (that is a
  separate, later task with its own trigger — a second visualization causing copy-paste).
- Any change to visualization data, layout, colors, or behavior.
- Adding SPDX single-license tags to mixed code+content files (they get the
  descriptive comment header instead; single SPDX tags are only for single-license files).
