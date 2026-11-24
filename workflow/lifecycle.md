# Lifecycle

1. Brief: owner talks to the Project Manager.
2. Requirements: Project Manager writes them. OWNER APPROVES.
3. Plan: Architect and Designer work in parallel.
4. Plan review: Project Manager summarizes. OWNER APPROVES architecture and designs.
5. Build: Frontend, Backend, Web, and App developers work in parallel on separate tasks.
6. QA: every finished task is tested. Failures return to the developer as bug tasks.
7. Ship: DevOps merges after QA pass, deploys to staging, then to production after OWNER APPROVES.
8. Report: Project Manager sends the owner a status update after each milestone.

## Task states (folders under board/)
backlog -> in-progress -> review -> done

## Rules
- One task has exactly one owner role.
- A task without acceptance criteria cannot start.
- Only the Project Manager creates or reassigns tasks.
- Only QA moves a task to done.
- Blocked tasks stay in place with a Blocked note at the top of the file.
