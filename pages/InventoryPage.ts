import {type Page, type Locator ,expect} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page :Page){
        this.page = page;
        this.title =page.getByText('Products');
        this.cartBadge=page.getByTestId('shopping-cart-badge');
        this.cartLink=page.getByTestId('shopping-cart-link');

    }

    async addToCart(productName: string){
        await this.page.getByTestId('inventory-item').filter({hasText : productName}).getByRole("button" ,{name :'Add to cart'}).click();
    }
    async OpenCart(){
        await this.cartLink.click();
    }
    async expectCartCount(itemCount : string){
        await expect(this.cartBadge).toHaveText(itemCount);
        
    }

}