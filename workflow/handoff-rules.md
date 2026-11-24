# Handoff Rules

Clear contracts between roles ensure smooth execution without miscommunication or blocking.

## 1. Owner -> Project Manager
- **Input:** Brief and project vision.
- **Handoff Artifact:** `projects/<project>/project.md` initialized.
- **Gate:** PM clarifies any ambiguity before proceeding.

## 2. Project Manager -> Owner (Gate 1: Requirements)
- **Handoff Artifact:** `projects/<project>/requirements/requirements.md` (or initial PRD).
- **Rule:** No technical design or architecture begins until the owner explicitly approves.

## 3. Project Manager -> Architect & Designer
- **Prerequisite:** Approved requirements.
- **Handoff:** PM creates tasks in `board/in-progress/` for Architect and Designer.

## 4. Architect & Designer -> Project Manager -> Owner (Gate 2: Architecture & Designs)
- **Architect Artifacts:** `projects/<project>/designs/architecture.md` (tech stack, data models, API contracts, folder structure).
- **Designer Artifacts:** `projects/<project>/designs/design-system.md` and screen specs (`projects/<project>/designs/<screen>.md`) with all states.
- **Gate:** PM submits summary to owner. No development task may start before owner approval.

## 5. Project Manager -> Developers (Frontend, Backend, Web, App)
- **Prerequisite:** Owner-approved architecture and designs.
- **Handoff Artifact:** Discrete task files in `board/in-progress/` with:
  - Exact inputs and expected outputs
  - Clear acceptance criteria
  - Assigned single developer role
  - API contracts / UI specs referenced

## 6. Developer -> QA Engineer
- **Handoff Action:** Developer moves task file from `board/in-progress/` to `board/review/`.
- **Handoff Note:** Appended to task file:
  - What changed and commit references
  - How to test / reproduction steps
  - Any known edge cases or gaps

## 7. QA Engineer -> Developer (On Failure)
- **Handoff Artifact:** Bug task created in `board/in-progress/` using `templates/bug-report.md`.
- **Required Details:** Steps to reproduce, expected result, actual result, severity, evidence.

## 8. QA Engineer -> DevOps Engineer (On Pass)
- **Handoff Action:** QA moves task to `board/done/`.
- **Handoff:** Signals DevOps that the feature branch is certified ready for merge.

## 9. DevOps -> Project Manager -> Owner (Gate 3 & 4: Production & Store Release)
- **Staging Deploy:** Merged to main, deployed to staging automatically.
- **Production Gate:** PM notifies owner with staging verification results. Owner approves before production deployment.
- **Store Submission Gate:** Owner must explicitly authorize iOS/Android app store submission.
