#!/usr/bin/env pwsh
[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$TargetRepo,
  [switch]$SetHooksPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$templateRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$automationRoot = Join-Path $templateRoot 'automation'
$targetRoot = (Resolve-Path $TargetRepo).Path

if (-not (Test-Path -LiteralPath (Join-Path $targetRoot 'package.json'))) {
  throw "Target repo must contain package.json: $targetRoot"
}

foreach ($dir in @('scripts', 'src\__tests__', '.githooks')) {
  $destDir = Join-Path $targetRoot $dir
  if (-not (Test-Path -LiteralPath $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
  }
  Copy-Item -Path (Join-Path $automationRoot ($dir + '\*')) -Destination $destDir -Recurse -Force
}

$workflowsDir = Join-Path $targetRoot '.github\workflows'
if (-not (Test-Path -LiteralPath $workflowsDir)) {
  New-Item -ItemType Directory -Path $workflowsDir | Out-Null
}
Copy-Item -Path (Join-Path $automationRoot '.github\workflows\workflow-automation-ci.yml') -Destination (Join-Path $targetRoot '.github\workflows\workflow-automation-ci.yml') -Force

Copy-Item -Path (Join-Path $automationRoot 'tsconfig.workflow-automation.json') -Destination (Join-Path $targetRoot 'tsconfig.workflow-automation.json') -Force
Copy-Item -Path (Join-Path $automationRoot 'package.workflow-automation.json') -Destination (Join-Path $targetRoot 'package.workflow-automation.json') -Force

$tasksReadmePath = Join-Path $targetRoot 'docs\project-management\tasks\README.md'
if (-not (Test-Path -LiteralPath $tasksReadmePath)) {
  $tasksDir = Split-Path -Parent $tasksReadmePath
  if (-not (Test-Path -LiteralPath $tasksDir)) {
    New-Item -ItemType Directory -Path $tasksDir | Out-Null
  }
  Copy-Item -Path (Join-Path $automationRoot 'templates\TEMPLATE-TASKS-README.md') -Destination $tasksReadmePath -Force
}

if ($SetHooksPath) {
  try {
    git -C $targetRoot config core.hooksPath .githooks
  }
  catch {
    Write-Warning "Could not set hooks path automatically. Run: git -C '$targetRoot' config core.hooksPath .githooks"
  }
}

Write-Host 'Workflow automation kit installed.'
Write-Host "Target: $targetRoot"
Write-Host ''
Write-Host 'Next steps:'
Write-Host '1) Merge package.workflow-automation.json into package.json scripts/devDependencies.'
Write-Host '2) Install dependencies (for example: npm install).'
Write-Host '3) Run: npm run workflow:typecheck ; npm run workflow:test ; npm run validate-headers.'
