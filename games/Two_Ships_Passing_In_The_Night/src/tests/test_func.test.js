import { test, expect } from '@playwright/test';

test('Le jeu doit se charger correctement', async ({ page }) => {
  // goto la page
  await page.goto('http://localhost:5173');

  // verif le titre
  await expect(page).toHaveTitle(/Two Ships/);

  // verif que le canvas est visible
  const canvas = await page.locator('canvas');
  await expect(canvas).toBeVisible();
});