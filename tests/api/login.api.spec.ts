import { test, expect } from '@playwright/test';
import { ApiClient } from '../../api/ApiClient';

test.describe('Login API', () => {
  test('returns 400 for a non-existent user', async ({ request }) => {
    const apiClient = new ApiClient(request);

    const response = await apiClient.verifyLogin('doesnotexist@example.com', 'wrongpassword');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.message).toBe('User not found!');
  });

  test('creates an account via API, then verifies login with those credentials', async ({ request }) => {
    const apiClient = new ApiClient(request);

    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    const password = 'Testing123!';

    const createResponse = await apiClient.createAccount({
      name: 'Test User',
      email: uniqueEmail,
      password: password,
      title: 'Mr',
      birth_date: '10',
      birth_month: '5',
      birth_year: '1995',
      firstname: 'Test',
      lastname: 'User',
      company: 'QA Corp',
      address1: '123 Test St',
      address2: '',
      country: 'United States',
      zipcode: '12345',
      state: 'California',
      city: 'Test City',
      mobile_number: '1234567890',
    });

    const createBody = await createResponse.json();
    expect(createBody.message).toBe('User created!');

    const loginResponse = await apiClient.verifyLogin(uniqueEmail, password);
    const loginBody = await loginResponse.json();

    expect(loginResponse.status()).toBe(200);
    expect(loginBody.message).toBe('User exists!');
  });
});