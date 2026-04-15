# Playwright + Screenplay Review

This repository already uses Screenplay concepts (Tasks, Questions, and Screens), which is a good foundation. The recommendations below focus on maintainability, scalability, and reliability.

## Improvements applied in this PR

1. **Consolidated actor fixture setup/teardown**
   - Removed duplicated browser context setup logic in fixtures.
   - Added a shared helper to create and close actor contexts safely.

2. **Fail-fast validation for test credentials**
   - Replaced non-null assertions on environment variables with explicit error checks.
   - Failures now show actionable messages when variables are missing.

3. **Stabilized selector strategy**
   - Updated login submit control from text-based selection to role-based button selection.

4. **Reduced afterEach masking failures**
   - Sign-out now runs only if authentication succeeded.
   - This prevents teardown from hiding root-cause failures in sign-in.

5. **Removed non-Screenplay example spec**
   - Deleted starter Playwright example tests that are unrelated to this project architecture.

## Additional recommendations (next steps)

1. **Introduce a domain-level "abilities" layer**
   - Add abilities like `UsePortalApi` for API-assisted setup/cleanup.
   - Keep UI tasks focused on user actions and move system setup to APIs for speed/reliability.

2. **Move environment and credential access behind typed config objects**
   - Build a `TestConfig` model with validation at startup.
   - This avoids repeated env lookups and enables per-environment overrides.

3. **Create composable high-level tasks**
   - Example: `Authenticate.asAdmin()` wrapping `SignIn` + optional verification.
   - This reduces test duplication and keeps scenarios readable.

4. **Harden assertions with explicit business outcomes**
   - Prefer user-visible acceptance outcomes (URL, user menu, role-specific element) over a single header visibility check.
   - Add negative-path questions (`AuthenticationError.isVisible()`) for better defect diagnostics.

5. **Adopt tagging conventions and execution matrices**
   - Normalize tags (`@smoke`, `@sanity`, `@regression`, `@defect`, `@a11y`) and use Playwright projects for targeted CI slices.

6. **Add shared wait policies and deterministic timeouts**
   - Replace broad load-state waits (`networkidle`) with element/state-driven waits whenever possible.
   - Centralize timeout defaults for consistency.

7. **Introduce test data factories**
   - Replace static credential classes with typed data factories and per-suite data ownership.

8. **Capture richer failure artifacts in CI**
   - Keep traces, plus videos/screenshots for failed tests and attach actor/test metadata for debugging.
