/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1). Navigate to the application URL
 * 2). Navigate to Login page via HomePage
 * 3). Enter valid credentials and log in
 * 4). Verify successful login by checking 'My Account' page presence
 */

import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';

let config: TestConfig;
let hp: HomePage;
let lp: LoginPage;
let map: MyAccountPage;

test.beforeEach(async ({page}) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    hp = new HomePage(page);
    lp = new LoginPage(page);
    map = new MyAccountPage(page);

});

test.afterEach(async ({page}) => {
    await page.close(); //Close browser tab
});


test('User Login Test @master @sanity @reression', async () => {

    await hp.clickMyAccount();
    await hp.clickLogin();

    //enter valid credentials and log in
    await lp.setEmail(config.email);
    await lp.setPassword(config.password);
    await lp.clickLogin();

    //alternativly
    //await lp.login(config.email, config.password);

    //verify successful login y checking 'Mu Account' page presence
    const isLoggedIn = await map.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();

})