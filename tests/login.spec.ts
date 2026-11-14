import { test, expect, type Locator } from '@playwright/test';

test('standard user can log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Verify the page title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Locate and fill the username field
  const usernameInput: Locator = page.getByPlaceholder('Username');
  await usernameInput.fill('standard_user');

  await expect(usernameInput).toHaveValue('standard_user');

  await page.getByPlaceholder('password').fill("secret_sauce");
  await page.getByRole('button', { name: 'Login' }).click();
  //Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.getByText('Products')).toBeVisible();

});