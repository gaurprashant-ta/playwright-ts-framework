import { type Page, type Locator ,expect} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorDescription :Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorDescription = page.getByTestId('error');
  }

  async navigateToURL() {
    await this.page.goto('/');  
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }
}