import { test as base, Page, BrowserContext } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { MerchantDashboard } from '../pages/MerchantDashboard';

type MyFixtures = {
  buyerPage: Page;
  merchantPage: Page;
};

export const test = base.extend<MyFixtures>({
  buyerPage: async ({ browser }, use) => {
    // Create context using buyer's auth state
    const context = await browser.newContext({ storageState: '.auth/buyer.json' });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
  merchantPage: async ({ browser }, use) => {
    // Create context using merchant's auth state
    const context = await browser.newContext({ storageState: '.auth/merchant.json' });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});