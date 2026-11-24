# Lifecycle

1. Brief: owner gives one brief to the Project Manager.
2. Requirements: Project Manager writes and approves them. Decision logged.
3. Plan: Architect and Designer work in parallel. Project Manager approves both. Decisions logged.
4. Build: developers work in parallel on separate tasks.
5. QA: every finished task is tested. Failures go back through the Project Manager as bug tasks.
6. Fix loop: repeat until QA passes.
7. Ship: DevOps merges and deploys to staging.
8. Phase report: Project Manager shows the owner a demo or summary.
9. Next phase starts automatically unless the owner says stop.

Owner approval is required only for: spending money, production deploy, app store submission, irreversible changes, scope changes, and security or legal problems.

## Task states (folders under board/)
backlog -> in-progress -> review -> done

## Rules
- One task has exactly one owner role.
- A task without acceptance criteria cannot start.
- Only the Project Manager creates or reassigns tasks.
- Only QA moves a task to done.
- Blocked tasks stay in place with a Blocked note at the top of the file.
