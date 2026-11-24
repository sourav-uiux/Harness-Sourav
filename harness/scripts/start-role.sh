#!/usr/bin/env bash
# Usage: ./scripts/start-role.sh <project> <role> <tool>
# Example: ./scripts/start-role.sh shop-app backend-developer claude
set -euo pipefail

PROJECT="$1"; ROLE="$2"; TOOL="${3:-claude}"
ROOT="$(git rev-parse --show-toplevel)"
BRANCH="role/${PROJECT}/${ROLE}"
TREE="${ROOT}/../worktrees/${PROJECT}-${ROLE}"

# One worktree and branch per role, so agents never overwrite each other
if [ ! -d "$TREE" ]; then
  git worktree add -B "$BRANCH" "$TREE"
fi

PROMPT="You are the ${ROLE} on project ${PROJECT}. First read harness/roles/${ROLE}.md. Then read projects/${PROJECT}/project.md and your assigned tasks in projects/${PROJECT}/board/. Follow the role file exactly. Work only in this folder."

cd "$TREE"
case "$TOOL" in
  claude)   claude "$PROMPT" ;;
  codex)    codex "$PROMPT" ;;
  opencode) opencode run "$PROMPT" ;;
  *) echo "Unknown tool: $TOOL"; exit 1 ;;
esac
