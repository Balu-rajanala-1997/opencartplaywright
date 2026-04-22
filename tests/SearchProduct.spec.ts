/**
 * Test Case: Product Search
 * 
 * Tags: @master @regression
 * 
 * Steps: 
 * 1). Navigate to the application URL
 * 2). Enter the product name in the search field
 * 3). Ckick the search button
 * 4). Verify if the product is displayed in the search results
 */

import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import {SearchResultsPage} from '../pages/SearchResultsPage';
import {TestConfig} from '../test.config';

let config: TestConfig;
let hp: HomePage;
let srp: SearchResultsPage;


test.beforeEach(async ({page}) => {

    config = new TestConfig();
    await page.goto(config.appUrl);

    hp = new HomePage(page);
    srp = new SearchResultsPage(page);

});


test.afterEach(async ({page}) => {
    await page.close();
})


test('Product Search test @master @regression', async ({page}) => {
    const productName = config.productName;

    await hp.enterProductName(productName);
    await hp.clickSearch();

    expect(await srp.isSearchResultsPageExists()).toBeTruthy();

    expect(await srp.isProductExist(productName)).toBeTruthy();

    await page.waitForTimeout(4000);

})


