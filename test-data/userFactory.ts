export function generateNewUser(overrides: Partial<Record<string, string>> = {}) {
  const uniqueEmail = `testuser_${Date.now()}@example.com`;

  return {
    name: 'Test User',
    email: uniqueEmail,
    password: 'Testing123!',
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
    ...overrides,
  };
}