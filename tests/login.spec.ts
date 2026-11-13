import { test, expect, type Locator } from '@playwright/test';
import { url } from 'node:inspector';

test('Launch App and Enter Username', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Verify the page title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Locate and fill the username field
  const usernameInput: Locator = page.getByPlaceholder('Username');
  await usernameInput.fill('standard_user');

  await expect(usernameInput).toHaveValue('standard_user');

  await page.getByPlaceholder('password').fill("secret_sauce");
 await page.getByRole('button', { name: 'Login' }).click();
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});