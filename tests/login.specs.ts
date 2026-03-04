import { test, expect } from '../../src/fixtures/test-base';

test.describe('Secure Login Flow', () => {
  test('User should login using environment credentials', async ({ loginPage }) => {
    
    // Pulling directly from .env file via process.env
    const user = process.env.DB_USERNAME!;
    const pass = process.env.DB_PASSWORD!;

    await loginPage.navigate();
    
    // Optional: Add a check to ensure env variables are loaded
    if (!user || !pass) {
      throw new Error("Missing environment variables for Login");
    }

    await loginPage.login(user, pass);
    
    // Assert login success (e.g., URL change or element visibility)
    await expect(loginPage.page).not.toHaveURL(/login/);
  });
});