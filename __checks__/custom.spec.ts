// @ts-ignore
import { test, expect } from '@playwright/test';
// @ts-ignore
import { Page } from '@playwright';

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test('Custom Browser Check', async ({ page }: { page: Page }) => {
  const response = await page.goto('https://docteurs-abasq-paire.fr');
  expect(response?.status()).toBeLessThan(400);
  await page.screenshot({ path: 'screenshot.jpg' });
});
