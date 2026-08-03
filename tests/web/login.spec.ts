import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Login Page', () => {
  test('shows an error for invalid credentials', async ({ pm, page }) => {
    await pm.onHomePage().open();
    await pm.onHomePage().goToLogin();
    await pm.onLoginPage().login('invalid_user@example.com', 'wrongpassword123');

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  });
});