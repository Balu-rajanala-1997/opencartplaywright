/**
 * Test Case: Add Product to Cart
 * 
 * Tags: @master @regression
 * 
 * Steps: 
 * 1).Navigate to application URL
 * 2).Enter an existing product name in the search box
 * 3).Click on search button
 * 4).Verify the product appears in the search results
 * 5).Select the product
 * 6).Set quantity
 * 7).Add the product to the cart
 * 8).Verify the success message
 */


import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {TestConfig} from '../test.config';
import {SearchResultsPage} from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';

let config: TestConfig;
let hp: HomePage;
let srp: SearchResultsPage;
let pp: ProductPage;

test.beforeEach(async ({page}) => {

    config = new TestConfig(); //Load test configuration
    await page.goto(config.appUrl); //open application URL

    hp = new HomePage(page);
    srp = new SearchResultsPage(page);
    pp = new ProductPage(page);

});

test.afterEach(async ({page}) => {
    await page.close();
})


test('Add product to cart test @master @regression', async ({page}) => {

    await hp.enterProductName(config.productName);

    await hp.clickSearch();

    expect(await srp.isSearchResultsPageExists()).toBeTruthy();

    const productName = config.productName;
    expect(await srp.isProductExist(productName)).toBeTruthy();

    if (await srp.isProductExist(productName)) {
        
        await srp.selectProduct(productName);
        await pp.setQuantity(config.productQuantity);
        await pp.addToCart();

        expect(await pp.isConfirmationMessageVisible()).toBeTruthy();
        await page.waitForTimeout(4000);
    }

})






