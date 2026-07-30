import { test, expect } from '@playwright/test';
import { POMManager } from '../../pages/POMManager';

test.describe('Login Page', () => {
  test('shows an error for invalid credentials', async ({ page }) => {
    const pm = new POMManager(page);

    await pm.onHomePage().open();
    await pm.onHomePage().goToLogin();
    await pm.onLoginPage().login('invalid_user@example.com', 'wrongpassword123');

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  });
});