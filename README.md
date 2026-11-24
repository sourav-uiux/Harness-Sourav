# Software Company Harness (Harness-Sourav)

A reusable repository architecture designed to operate like a modular software company. Any AI agent tool (Antigravity, Claude Code, Codex, OpenCode) can be pointed at this repository to assume a specific role.

The human owner interfaces exclusively with the **Project Manager (PM)**. The PM coordinates tasks, unblocks dependencies, and assigns work to specialized role agents working in parallel.

---

## Autonomous Mode

The harness operates under an autonomous workflow model defined in `workflow/autonomy.md`:
- **One Brief:** The owner provides a single brief to start a project.
- **Autonomous Execution:** The Project Manager runs the project phase by phase alone without stopping to ask the owner at every step. The PM approves requirements, technical plans, and designs directly.
- **Decision Logging:** Every technical choice, priority call, or assumption is logged in `projects/<name>/reports/decisions.md` with date, reason, and advising role.
- **Phase Reports:** At the end of each phase, the PM writes a report (`projects/<name>/reports/phase-<n>.md`) and presents a summary or demo for the owner. The next phase begins automatically unless the owner requests changes.
- **Strict Owner Escalation:** The PM only stops and asks the owner for spending real money, production deploy and app store submissions, deleting data/irreversible changes, scope/brief changes, or security/legal issues.

---

## Two Layers

1. **Harness Layer (`harness/`):**
   - Generic and reusable across all projects.
   - Contains role definitions, autonomy rules, workflow lifecycle rules, task/handoff templates, and launcher scripts.

2. **Project Layer (`projects/`):**
   - Specific to each product being built.
   - Contains the product goal, requirements, design specs, live Kanban task board (`backlog/`, `in-progress/`, `review/`, `done/`), and PM status/phase reports.

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
    autonomy.md          # Autonomy rules, PM authority boundaries, and escalation criteria
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
    reports/             # Periodic status reports, decisions.md, and phase reports
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
You are the Project Manager on project <project-name>. First read harness/workflow/autonomy.md, then harness/roles/project-manager.md. You now have full authority to run this project without asking me at each step. Read projects/<project-name>/project.md, make reasonable assumptions where the brief is unclear, log every decision, and run phase 1 from requirements through QA and staging. Show me the phase report when it is done.
```

---

### Step 3: Owner Touchpoints
Under autonomous mode, the owner gives one brief, and the PM handles the rest. Owner approval is required only for:
1. **Spending Real Money:** Paid APIs, domain purchases, hosting upgrades, or paid third-party tools.
2. **Production Deployments & App Store Submissions:** Authorizing live production releases and app store uploads.
3. **Irreversible Operations:** Deleting data or unrecoverable actions.
4. **Scope / Goal Changes:** Reorienting the project direction.
5. **Security & Legal Matters:** Critical vulnerabilities, compliance, or licensing questions.

---

### Step 4: Launching Other Roles
Once the PM approves requirements and architecture and populates task cards in `board/`, launch specialized role agents:
```bash
./harness/scripts/start-role.sh <project-name> <role> <tool>
```
Or open a dedicated agent window per role and paste:
```
You are the <role> on project <project-name>. First read harness/roles/<role>.md. If you are a developer, also read harness/roles/_developer-common.md. Then read projects/<project-name>/project.md and your assigned tasks in projects/<project-name>/board/. Follow your role file exactly. Work only in your own workspace and branch, and report through the board files.
```
*Supported roles:* `architect`, `designer`, `frontend-developer`, `backend-developer`, `web-developer`, `app-developer`, `qa-engineer`, `devops-engineer`.
