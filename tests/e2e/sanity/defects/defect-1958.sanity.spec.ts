import { test, expect } from '../../../../src/fixtures/actors.fixture';
import { SignIn, SignOut } from '../../../../src/screenplay/tasks';
import { IsAuthenticated } from '../../../../src/screenplay/questions';
import { AdminUserCredentials } from '../../../../src/data/test-data/users';

test.describe('EportalV2 Prod Issues', { tag: ['@prodIssues'] }, () => {
  /**
   * @testId defect-1958
   * Issue: User should be signed in when pressing the Enter key on the keyboard.
   */
  test.describe('Defect #1958', { tag: ['@defect#1958'] }, () => {
    test.afterEach(async ({ Admin }) => {
      const isAuthenticated = await Admin.asks(IsAuthenticated.successfully());
      if (isAuthenticated) {
        await Admin.attemptsTo(SignOut.fromTheApp());
      }
    });

    /**
     * @testId defect-1958
     * @description Verifies that a user is signed in successfully when pressing the Enter key.
     */
    test(
      'should sign in successfully when pressing Enter key',
      { tag: ['@sanity', '@keyboard-accessibility', '@authentication'] },
      async ({ Admin }) => {
        await test.step('Sign in using valid credentials and press Enter', async () => {
          await Admin.attemptsTo(
            SignIn.byPressingEnter().usingCredentials(
              AdminUserCredentials.valid.email,
              AdminUserCredentials.valid.password,
            ),
          );
        });

        await test.step('Verify successful authentication', async () => {
          const isAuthenticated = await Admin.asks(IsAuthenticated.successfully());
          expect(isAuthenticated).toBe(true);
        });
      },
    );
  });
});
