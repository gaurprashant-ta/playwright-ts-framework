import { test, expect } from '../fixtures/fixtures'

test('user can add a product to the cart' , async({inventoryPage}) => {

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.expectCartCount('1');
    await inventoryPage.verifyButtonVisibility('Sauce Labs Backpack' ,'Remove');
    await inventoryPage.addToCart('Sauce Labs Bike Light');
    await inventoryPage.expectCartCount('2');
    await inventoryPage.verifyButtonVisibility('Sauce Labs Bike Light','Remove');
    await inventoryPage.OpenCart();


});

test('user can remove products from cart' , async({inventoryPage,cartPage}) => {

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.expectCartCount('1');
    await inventoryPage.verifyButtonVisibility('Sauce Labs Backpack' ,'Remove');
    await inventoryPage.OpenCart();
    await cartPage.removeItemFromCart('Sauce Labs Backpack');
    await cartPage.clickContinueShopping();
    await inventoryPage.verifyButtonVisibility('Sauce Labs Backpack' ,'Add to Cart');

});
