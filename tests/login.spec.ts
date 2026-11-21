import { test, expect } from '../fixtures/fixtures'
import loginScenarios from '../test-data/users.json';

// test('standard user can log in', async ({loginPage, page }) => {

//   // const loginPage = new LoginPage(page);
//   await loginPage.navigateToURL();
//   await loginPage.login('standard_user', 'secret_sauce');

//   //Assertions
//   await expect(page).toHaveURL(/inventory\.html/);
//   await expect(page.getByText('Products')).toBeVisible();

// });


// 2. Wrap your test in a for...of loop
for (const data of loginScenarios) {
  
  // 3. Use dynamic title & tags from JSON
  test(`${data.testId}: ${data.description}`, { tag: data.tags }, async ({ loginPage, page }) => {

    await loginPage.navigateToURL();
    
    // Pass credentials from JSON instead of hardcoded strings
    await loginPage.login(data.credentials.username, data.credentials.password);

    // 4. Check expected outcome using JSON values
    if (data.expected.isSuccess) {
      await expect(page).toHaveURL(new RegExp(data.expected.url!));
      await expect(page.getByText(data.expected.headerText!)).toBeVisible();
    } else {
      await expect(loginPage.errorDescription).toHaveText(data.expected.errorMessage!);
    }
  });
}




