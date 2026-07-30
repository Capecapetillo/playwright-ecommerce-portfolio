import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export class POMManager {
  private readonly page: Page;
  private readonly homePage: HomePage;
  private readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
  }

  onHomePage(): HomePage {
    return this.homePage;
  }

  onLoginPage(): LoginPage {
    return this.loginPage;
  }
}