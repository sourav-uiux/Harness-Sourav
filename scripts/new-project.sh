#!/usr/bin/env bash
# Usage: ./scripts/new-project.sh <project-name>
# Example: ./scripts/new-project.sh pet-love
set -euo pipefail

PROJECT="${1:-}"
if [ -z "$PROJECT" ]; then
  echo "Usage: $0 <project-name>"
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
TARGET="${ROOT}/projects/${PROJECT}"

mkdir -p "${TARGET}/requirements"
mkdir -p "${TARGET}/designs"
mkdir -p "${TARGET}/board/backlog"
mkdir -p "${TARGET}/board/in-progress"
mkdir -p "${TARGET}/board/review"
mkdir -p "${TARGET}/board/done"
mkdir -p "${TARGET}/reports"

# Create placeholder .gitkeep in empty directories
touch "${TARGET}/requirements/.gitkeep"
touch "${TARGET}/designs/.gitkeep"
touch "${TARGET}/board/backlog/.gitkeep"
touch "${TARGET}/board/in-progress/.gitkeep"
touch "${TARGET}/board/review/.gitkeep"
touch "${TARGET}/board/done/.gitkeep"
touch "${TARGET}/reports/.gitkeep"

if [ ! -f "${TARGET}/project.md" ]; then
  cat << 'EOF' > "${TARGET}/project.md"
# Project: Project Name

## Goal
<describe what you want built>

## Tech Stack
<stack choices by architect>

## Constraints
<constraints, supported platforms, deadlines>
EOF
fi

echo "Successfully created project layout at: ${TARGET}"
