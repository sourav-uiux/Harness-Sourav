# Software Company Harness (Harness-Sourav)

A reusable repository architecture designed to operate like a modular software company. Any AI agent tool (Antigravity, Claude Code, Codex, OpenCode) can be pointed at this repository to assume a specific role.

The human owner interfaces exclusively with the **Project Manager (PM)**. The PM coordinates tasks, unblocks dependencies, and assigns work to specialized role agents working in parallel.

---

## Two Layers

1. **Harness Layer (`harness/`):**
   - Generic and reusable across all projects.
   - Contains role definitions, workflow lifecycle rules, task/handoff templates, and launcher scripts.

2. **Project Layer (`projects/`):**
   - Specific to each product being built.
   - Contains the product goal, requirements, design specs, live Kanban task board (`backlog/`, `in-progress/`, `review/`, `done/`), and PM status reports.

---

## Repository Layout

```
harness/
  README.md              # Documentation on how to use the harness
  roles/
    project-manager.md   # Plans, assigns, tracks, reports; sole owner liaison
    architect.md         # System design, data models, APIs, folder structure
    _developer-common.md # Shared rules all developers must read first
    designer.md          # User flows, design system, screen specs, mockups
    frontend-developer.md# UI components, state, API consumption
    backend-developer.md # Server logic, DB migrations, auth, APIs
    web-developer.md     # Web routing, SEO, responsive UI, browser performance
    app-developer.md     # iOS & Android mobile apps, gestures, native APIs
    qa-engineer.md       # Test plans, automated/manual QA, bug reports
    devops-engineer.md   # Worktree setup, CI/CD, environments, deployments
  workflow/
    lifecycle.md         # Full delivery lifecycle and task state transitions
    handoff-rules.md     # What each role must produce before handoff
    definition-of-done.md# Verification checklist before closing tasks
  templates/
    task.md              # Template for task creation
    requirements.md      # Template for requirements specifications
    design-spec.md       # Template for screen and component design specs
    bug-report.md        # Template for QA bug reports
    status-update.md     # Template for PM milestone updates to owner
  scripts/
    start-role.sh        # Launches an agent in an isolated git worktree
    new-project.sh       # Scaffolds a new project folder structure
projects/
  <project-name>/
    project.md           # Goal, tech stack, constraints
    requirements/        # Approved requirement specs
    designs/             # Architecture and design specs
    board/               # Kanban board
      backlog/
      in-progress/
      review/
      done/
    reports/             # Periodic status reports from the PM
```

---

## How to Start a Project

### Step 1: Create the Project Directory
Run the project scaffolding script or create the folders manually:
```bash
./harness/scripts/new-project.sh <project-name>
```
Or create `projects/<project-name>/` with:
- `project.md`
- `requirements/`
- `designs/`
- `board/backlog/`
- `board/in-progress/`
- `board/review/`
- `board/done/`
- `reports/`

In `projects/<project-name>/project.md`, specify:
```markdown
# Project: <project-name>

## Goal
<Describe what you want built>

## Tech Stack
<To be determined by the Architect>

## Constraints
<Platforms, target deadlines, performance requirements>
```

---

### Step 2: Start the Project Manager
Open an agent (e.g. in Antigravity) and paste:
```
You are the Project Manager on project <project-name>. First read harness/roles/project-manager.md and follow it exactly. Then read projects/<project-name>/project.md and the board folders. I am the owner. Start by asking me any questions you need about the goal, then write the requirements for my approval.
```

---

### Step 3: Owner Approval Gates
As owner, you speak only to the Project Manager and approve work at **four critical gates**:
1. **Requirements Approval:** Review and approve `requirements/requirements.md`.
2. **Architecture & Designs Approval:** Review and approve `designs/architecture.md` and design specifications.
3. **Production Deployment Approval:** Review staging results before triggering production release.
4. **App Store Submission Approval:** Authorize mobile builds before app store release.

---

### Step 4: Launching Other Roles
Once requirements and architecture are approved and the PM populates task cards in `board/`, launch specialized role agents:
```bash
./harness/scripts/start-role.sh <project-name> <role> <tool>
```
Or open a dedicated agent window per role and paste:
```
You are the <role> on project <project-name>. First read harness/roles/<role>.md. If you are a developer, also read harness/roles/_developer-common.md. Then read projects/<project-name>/project.md and your assigned tasks in projects/<project-name>/board/. Follow your role file exactly. Work only in your own workspace and branch, and report through the board files.
```
*Supported roles:* `architect`, `designer`, `frontend-developer`, `backend-developer`, `web-developer`, `app-developer`, `qa-engineer`, `devops-engineer`.
