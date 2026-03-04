// Logs in once and saves cookies/tokens to a JSON file
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://payment-gateway.com/login');
  await page.fill('#user', 'admin');
  await page.fill('#pass', 'password');
  await page.click('#login');
  // Store the state so all workers can use it
  await page.context().storageState({ path: 'state.json' });
  await browser.close();
}
export default globalSetup;