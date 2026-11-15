import { test, expect } from '../fixtures/fixtures'
// import { LoginPage } from '../pages/LoginPage';

test('standard user can log in', async ({loginPage, page }) => {

  // const loginPage = new LoginPage(page);
  await loginPage.navigateToURL();
  await loginPage.login('standard_user', 'secret_sauce');

  //Assertions
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();

});