import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true, // Multi-user parallel contexts
  retries: 1,
  workers: 4, // Adjust based on machine capacity
  use: {
    baseURL: 'https://dummy-payment-gateway.com',
    // Use the saved auth state
    storageState: '.auth/user.json',
    trace: 'retain-on-failure',
    screenshot: 'on',
  },
  projects: [
    // Setup project to run first
    {
      name: 'setup',
      testMatch: /authSetup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'], // Depends on authSetup
    },
  ],
});