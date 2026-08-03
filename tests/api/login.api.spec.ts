import { test, expect } from '../../fixtures/test-fixtures';
import { generateNewUser } from '../../test-data/userFactory';

test.describe('Login API', () => {
  test('returns 400 for a non-existent user', async ({ apiClient }) => {
    const response = await apiClient.verifyLogin('doesnotexist@example.com', 'wrongpassword');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.message).toBe('User not found!');
  });

  test('creates an account via API, then verifies login with those credentials', async ({ apiClient }) => {
    const newUser = generateNewUser();

    const createResponse = await apiClient.createAccount(newUser);
    const createBody = await createResponse.json();
    expect(createBody.message).toBe('User created!');

    const loginResponse = await apiClient.verifyLogin(newUser.email, newUser.password);
    const loginBody = await loginResponse.json();

    expect(loginResponse.status()).toBe(200);
    expect(loginBody.message).toBe('User exists!');
  });
});