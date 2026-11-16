import { test, expect } from '../fixtures/fixtures'

test('user can add a product to the cart' , async({loginPage,inventoryPage,page}) => {

    await inventoryPage.addToCart('Sauce Labs Backpack');
    // await inventoryPage.expectCartCount('1');

});

