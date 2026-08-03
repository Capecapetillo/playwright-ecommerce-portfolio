import { test, expect } from '../../fixtures/test-fixtures';

test.describe('Products API', () => {
  test('GET productsList returns 200 and a non-empty product list', async ({ apiClient }) => {
    const response = await apiClient.getProductsList();

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.products.length).toBeGreaterThan(0);
  });
});