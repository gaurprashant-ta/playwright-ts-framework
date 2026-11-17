import {type Page, type Locator} from '@playwright/test';

export class CartPage{
        readonly page: Page;
        readonly continueShoppingButton :Locator;
        readonly cartItem :Locator;
        

    constructor(page:Page){
             this.page = page;
             this.continueShoppingButton = page.getByTestId('continue-shopping');
             this.cartItem = page.locator('.cart_item_label');

    }

    async removeItemFromCart(productName: string){
        await this.cartItem.filter({hasText :productName}).getByRole("button",{name:'Remove'}).click();
    }
    async clickContinueShopping(){
        await this.continueShoppingButton.click();
    }
}