import { test as base } from '@playwright/test';
import { POMManager } from '../pages/POMManager';
import { ApiClient } from '../api/ApiClient';

type MyFixtures = {
  pm: POMManager;
  apiClient: ApiClient;
};

export const test = base.extend<MyFixtures>({
  pm: async ({ page }, use) => {
    const pm = new POMManager(page);
    await use(pm);
  },

  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);
    await use(apiClient);
  },
});

export { expect } from '@playwright/test';