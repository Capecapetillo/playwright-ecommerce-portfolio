import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = '') {
    await this.page.goto(`https://automationexercise.com${path}`);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}