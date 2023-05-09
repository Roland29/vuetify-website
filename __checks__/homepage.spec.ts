// @ts-ignore
import { test, expect } from '@playwright/test';
// @ts-ignore
import { Page } from '@playwright';

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test('Checkly Homepage', async ({ page }: { page: Page }) => {
  const response = await page.goto('https://checklyhq.com');
  expect(response?.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/Build and Run Synthetics That Scale/);
  await page.screenshot({ path: 'homepage.jpg' });
});
