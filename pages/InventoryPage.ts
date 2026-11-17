import {type Page, type Locator ,expect} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;
    readonly inventoryItem: Locator;



    constructor(page :Page){
        this.page = page;
        this.title =page.getByText('Products');
        this.cartBadge=page.getByTestId('shopping-cart-badge');
        this.cartLink=page.getByTestId('shopping-cart-link');
        this.inventoryItem = page.getByTestId('inventory-item');



    }

    async addToCart(productName: string){
        await this.inventoryItem.filter({hasText : productName}).getByRole("button" ,{name :'Add to cart'}).click();

    }
    async OpenCart(){
        await this.cartLink.click();
    }


    
    async verifyButtonVisibility(productName:string ,buttonName :string){
        await expect(this.inventoryItem.filter({hasText : productName}).getByRole("button" ,{name :buttonName })).toBeVisible();

    }

    async expectCartCount(itemCount : string){
        await expect(this.cartBadge).toHaveText(itemCount);
        
    }



}