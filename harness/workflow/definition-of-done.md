# Definition of Done (DoD)

Nothing is considered "Done" until every criterion listed below is satisfied.

## 1. Task Level (Developer -> Review)
Before a developer moves a task to `board/review/`:
- [ ] Code is implemented strictly against the approved `architecture.md` and design specifications.
- [ ] Unit and component tests are written and passing locally.
- [ ] Code passes all linting and type-checking checks without warnings or errors.
- [ ] Secrets and environment-specific configs are kept in environment variables, never hardcoded.
- [ ] Work is committed to the role's designated branch with clear, descriptive commit messages.
- [ ] Task file in `board/review/` is updated with a summary of changes, test verification notes, and branch name.

## 2. QA Verification Level (Review -> Done)
Only the QA Engineer may move a task from `board/review/` to `board/done/`:
- [ ] All acceptance criteria in the task card are fully verified.
- [ ] Visual inspection matches designer specs across all states (loading, empty, populated, error).
- [ ] Edge cases tested (invalid input, boundary values, network failure/latency).
- [ ] Automated regression tests pass.
- [ ] Zero Critical or Major bugs outstanding.
- [ ] QA status documented in the task card.

## 3. Milestone / Release Level
Before a milestone release is signed off:
- [ ] All planned milestone tasks are in `board/done/`.
- [ ] CI pipeline builds and tests pass cleanly on the release branch.
- [ ] Deployed and smoke-tested on Staging.
- [ ] Owner approval received for Production deployment and/or App Store submission.
- [ ] PM status report published under `reports/`.
- [ ] Deployment entry logged in `reports/deployments.md`.
