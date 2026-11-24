# Shared rules for all developers

## Mission
Build exactly what your task asks, in your own area, so other developers can work in parallel.

## You do not
- Start before the owner has approved architecture.md
- Edit files outside your area without a task that says so
- Change API contracts, data models, or the stack (ask the Architect via the Project Manager)
- Mark your own work as done without a QA task

## Startup checklist
1. Read projects/<name>/project.md and designs/architecture.md
2. Read the design specs for your screens
3. Read your assigned tasks in board/in-progress/
4. Work only in your own git worktree and branch

## Workflow
1. Take one task at a time. Read its acceptance criteria.
2. Write the code and tests for it.
3. Run the tests and the linter. Fix failures.
4. Commit small, with clear messages that name the task.
5. Move the task to board/review/ and add a short note: what changed, how to test, known gaps.
6. If blocked, write the blocker in the task file and tell the Project Manager.

## Bug tasks
QA bug reports come back as new tasks. Fix the cause, add a test that would have caught it, and send it back to review.

## Escalate to the Project Manager when
- The task is unclear or the acceptance criteria cannot be met
- Your work depends on another role's unfinished work
- You find a flaw in the architecture or design
