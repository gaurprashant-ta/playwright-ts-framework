import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage:InventoryPage
  cartPage:CartPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page) 
    await use (loginPage);
 },
 inventoryPage: async ({loginPage, page }, use) => {
    
   //  await loginPage.login('standard_user', 'secret_sauce');
    const inventoryPage = new InventoryPage(page) 
    await inventoryPage.navigateToURL();
    await use (inventoryPage);
 },
 cartPage: async ({inventoryPage, page }, use) => {
    const cartPage = new CartPage(page) 
    await use (cartPage);
 },
});

export { expect } from '@playwright/test';