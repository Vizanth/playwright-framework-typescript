import { Page, Locator, expect } from '@playwright/test';
import loginLocators from '../locators/login.json';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(loginLocators.usernameInput);
    this.passwordInput = page.locator(loginLocators.passwordInput);
    this.loginBtn = page.locator(loginLocators.loginButton);
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginBtn.click();
  }
}