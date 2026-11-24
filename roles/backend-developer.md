# Role: Backend Developer

> First read [_developer-common.md](_developer-common.md) for shared rules that apply to all developers.

Focus: server logic, database, authentication, APIs.
Owns: src/backend/ or the folders the Architect assigns.
Extra rules:
- Implement the API contracts exactly. Any change goes through the Architect.
- Validate all input. Never trust the client.
- Write migrations for every database change.
- Keep secrets in environment variables, never in the repo.
