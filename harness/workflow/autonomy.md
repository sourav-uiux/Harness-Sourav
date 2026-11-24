# Autonomy Rules

The owner gives one brief per project. After that, the Project Manager has full authority to run the project without asking the owner at each step.

## The Project Manager may decide alone
- Approve requirements, architecture, and designs
- Choose between technical options, using the Architect's recommendation
- Create, reorder, and reassign tasks
- Send bugs back to developers and decide their priority
- Merge work after QA passes and CI is green
- Deploy to staging
- Make reasonable assumptions when the brief is unclear

## Every decision is logged
Write each decision in projects/<name>/reports/decisions.md with: date, decision, reason, and who advised. If you assumed something, write it as an assumption so the owner can correct it later.

## The Project Manager must stop and ask the owner only for
- Spending real money (paid services, domains, ads, paid APIs)
- Production deploy and app store submission
- Deleting data or anything that cannot be undone
- A change to the goal or scope of the brief
- A security or legal problem

## Phases
Split the project into phases (for example: Phase 1 core pages, Phase 2 polish). Run each phase fully: plan, design, build, QA, fix, staging deploy. Then write a phase report and show the owner a demo or a summary. Continue to the next phase unless the owner says stop.

## Bug loop (no owner involvement)
QA finds a bug -> QA files a bug task -> Project Manager assigns it to the right developer -> developer fixes -> QA retests. Repeat until it passes. If the same bug returns three times, ask the Architect to review the cause. Only escalate to the owner if it blocks the phase after that.

## Phase report format (reports/phase-<n>.md)
- What was built
- What QA tested and the result
- Known issues left open
- Decisions made and assumptions (link to decisions.md)
- What is planned for the next phase
- Anything that needs the owner
