import { Page, expect } from '@playwright/test';

export class UIHelpers {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Common Navigate method with built-in load state check
    async openUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle'); // Ensures no active network requests
    }

    // A "Safe Click" that ensures the element is ready
    async safeClick(selector: string) {
        const locator = this.page.locator(selector);
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    // Common method to handle dynamic wait for payment processing
    async waitForProcessing() {
        await this.page.waitForLoadState('domcontentloaded');
        // You could add a custom wait for a 'Processing...' spinner here
    }
}