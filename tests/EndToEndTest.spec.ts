/**
 * Test Case: End to End test on demo E-commerce application
 * 
 * Purpose:
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps: 
 * 1). Register a new account
 * 2). Logout after registration
 * 3). Login with the same account
 * 4). Search for a product and add it to the shopping cart
 * 5). Verify cart contents
 * 6). Attempt checkout (disabled since feature isn't available on demo site)
 */

import {test, expect, Page} from '@playwright/test';
import {RegistrationPage} from '../pages/RegistrationPage';
import {HomePage} from '../pages/HomePage';
import {TestConfig} from '../test.config';
import {LogoutPage} from '../pages/LogoutPage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import {SearchResultsPage} from '../pages/SearchResultsPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductPage } from '../pages/ProductPage';
import {RandomDataUtil} from '../utils/randomDataGenerator';


test('Execute end-to-end test flow @end-to-end', async ({page}) => {

    const config = new TestConfig();

    await page.goto(config.appUrl);

    let registeredEmail:string = await performRegistration(page);
    console.log("✅ Registration is completed!");

    await performLogout(page);
    console.log("🔓 Logout is completed!");

    await performLogin(page, registeredEmail);
    console.log("🔐 Login is completed!");

    await addProductToCart(page);
    console.log("🛒 Product added to cart!");

    await verifyShoppingCart(page);
    console.log("📦 Shopping cart verification completed!");
    
    console.log("🎉 End-to-End Test Flow Completed Successfully!");

});


//function to register a new user account
async function performRegistration(page:Page) {
    const hp = new HomePage(page);
    await hp.clickMyAccount();
    await hp.clickRegister();

    const rp = new RegistrationPage(page);
    
    await rp.setFirstName(RandomDataUtil.getFirstName());
    await rp.setLastName(RandomDataUtil.getLastName());

    let email:string = RandomDataUtil.getEMail();
    await rp.setEmail(email);
    await rp.setTelephone(RandomDataUtil.getPhoneNumber());

    await rp.setPassword("test123");
    await rp.setConfirmPassword("test123");

    await rp.setPrivacyPolicy(); //accept the privacy policy
    await rp.clickContinue(); //submit the registration form

    const confirmationMsg = await rp.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!');

    return email; //return the email for later use in login

}

async function performLogout(page:Page) {

    const map = new MyAccountPage(page);
    const lop:LogoutPage = await map.clickLogout();

    expect(await lop.isContinueButtonVisible()).toBe(true);

    const hp:HomePage = await lop.clickContinue();
    expect(await hp.isHomePageExists()).toBe(true);

}

async function performLogin(page:Page, email: string) {

    const config = new TestConfig();
    await page.goto(config.appUrl);

    const hp = new HomePage(page);
    await hp.clickMyAccount();
    await hp.clickLogin();

    const lip  = new LoginPage(page);
    lip.login(email, "test123"); //use the registered credentials

    await page.waitForTimeout(4000);
    
    const map = new MyAccountPage(page);
    expect(await map.isMyAccountPageExists()).toBeTruthy();

}

async function addProductToCart(page:Page) {
    
    const hp = new HomePage(page);
    
    const config = new TestConfig();
    const productName:string = config.productName;
    const productQuantity:string = config.productQuantity;

    await hp.enterProductName(productName);
    await hp.clickSearch();

    const srp = new SearchResultsPage(page);

    //Validate search results page
    expect(await srp.isSearchResultsPageExists()).toBeTruthy();

    //Validate that the desired product exists in the results
    expect(await srp.isProductExist(productName)).toBeTruthy();

    //Select product and set quantity
    const pp = await srp.selectProduct(productName);
    await pp?.setQuantity(productQuantity);
    await pp?.addToCart();  //add product to shopping cart

    await page.waitForTimeout(3000); //wait for simulate user delay

    //Confirm product was added
    expect(await pp?.isConfirmationMessageVisible()).toBe(true);


}

async function verifyShoppingCart(page:Page) {

    const pp = new ProductPage(page);

    //Navigate to shopping cart from product page
    await pp.clickItemsToNavigateToCart();
    const scp: ShoppingCartPage = await pp.clickViewCart();

    console.log("🛒 Navigate to shopping cart!");
    
    const config = new TestConfig();

    //Validate that total price is correct (based on config)
    expect(await scp.getTotalPrice()).toBe(config.totalPrice);

}















