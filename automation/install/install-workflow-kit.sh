#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: ./automation/install/install-workflow-kit.sh <target-repo> [--set-hooks]"
  exit 1
fi

TARGET_REPO="$1"
SET_HOOKS="false"
if [[ "${2:-}" == "--set-hooks" ]]; then
  SET_HOOKS="true"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
AUTOMATION_ROOT="$TEMPLATE_ROOT/automation"
TARGET_ROOT="$(cd "$TARGET_REPO" && pwd)"

if [[ ! -f "$TARGET_ROOT/package.json" ]]; then
  echo "Target repo must contain package.json: $TARGET_ROOT"
  exit 1
fi

copy_contents() {
  local src="$1"
  local dst="$2"
  mkdir -p "$dst"
  cp -R "$src"/. "$dst"/
}

copy_contents "$AUTOMATION_ROOT/scripts" "$TARGET_ROOT/scripts"
copy_contents "$AUTOMATION_ROOT/src/__tests__" "$TARGET_ROOT/src/__tests__"
copy_contents "$AUTOMATION_ROOT/.githooks" "$TARGET_ROOT/.githooks"

mkdir -p "$TARGET_ROOT/.github/workflows"
cp "$AUTOMATION_ROOT/.github/workflows/workflow-automation-ci.yml" "$TARGET_ROOT/.github/workflows/workflow-automation-ci.yml"
cp "$AUTOMATION_ROOT/tsconfig.workflow-automation.json" "$TARGET_ROOT/tsconfig.workflow-automation.json"
cp "$AUTOMATION_ROOT/package.workflow-automation.json" "$TARGET_ROOT/package.workflow-automation.json"

TASKS_README="$TARGET_ROOT/docs/project-management/tasks/README.md"
if [[ ! -f "$TASKS_README" ]]; then
  mkdir -p "$(dirname "$TASKS_README")"
  cp "$AUTOMATION_ROOT/templates/TEMPLATE-TASKS-README.md" "$TASKS_README"
fi

if [[ "$SET_HOOKS" == "true" ]]; then
  if git -C "$TARGET_ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    git -C "$TARGET_ROOT" config core.hooksPath .githooks
  else
    echo "Warning: target is not a git repo; skipped hooks setup"
  fi
fi

echo "Workflow automation kit installed."
echo "Target: $TARGET_ROOT"
echo
echo "Next steps:"
echo "1) Merge package.workflow-automation.json into package.json scripts/devDependencies."
echo "2) Install dependencies (for example: npm install)."
echo "3) Run: npm run workflow:typecheck ; npm run workflow:test ; npm run validate-headers."
