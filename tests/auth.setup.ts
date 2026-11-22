// import {test as setup , expect} from '@playwright/test'
    import { test as setup, expect } from '../fixtures/fixtures'

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ loginPage,page }) => {
    await loginPage.navigateToURL();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory\.html/);
    await page.context().storageState({ path: authFile });   // saves the session
});