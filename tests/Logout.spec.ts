/**
 * Test case: User Logout
 * 
 * Steps:
 * 1). Navigate to the application URL
 * 2). Go to Login page from Home page
 * 3). Login with valid credentials
 * 4). Verify 'My Account' page
 * 5). click on Logout link
 * 6). click on Continue bytton
 * 7). Verify user is redirected to Home page
 */

import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import { LogoutPage } from '../pages/LogoutPage';
import {TestConfig} from '../test.config';

let config: TestConfig;
let hp: HomePage;
let lip: LoginPage;
let map: MyAccountPage;
let lop: LogoutPage;

//setup before each test 
test.beforeEach(async ({page}) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    config = new TestConfig();
    hp = new HomePage(page);
    lip = new LoginPage(page);
    map = new MyAccountPage(page);
    lop = new LogoutPage(page);
});

//Optional cleanup after each test
test.afterEach(async ({page}) => {
    await page.close();
})


test('User logout test @master @regression', async () => {

    await hp.clickMyAccount();
    await hp.clickLogin();

    await lip.login(config.email, config.password);

    expect(await map.isMyAccountPageExists()).toBeTruthy();

    lop = await map.clickLogout();

    expect(await lop.isContinueButtonVisible()).toBe(true);

    hp = await lop.clickContinue();
    expect(await hp.isHomePageExists()).toBe(true);

})

