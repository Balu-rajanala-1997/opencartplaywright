/**
 * Test Case: Account Registration
 *
 * Tags: @master @sanity @regression
 *
 * Stepa:
 * 1). Navigate to application URL
 * 2). Go to 'My Account' and click 'Register'
 * 3). Fill in registration details with random data
 * 4). Agree to Privacy Policy and submit the form
 * 5). Validate the confirmation message
 */

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let hp: HomePage;
let rp: RegistrationPage;
let config;
TestConfig;

test.beforeEach(async ({ page }) => {
  config = new TestConfig();
  //Navigate to application URL
  await page.goto(config.appUrl);

  hp = new HomePage(page);
  rp = new RegistrationPage(page);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(3000);
  await page.close();
});

test("User registration test @master @sanity @reression", async () => {
  //Go to 'My Account' and click 'Register'
  await hp.clickMyAccount();
  await hp.clickRegister();

  //Fill in registration details with random data
  await rp.setFirstName(RandomDataUtil.getFirstName());
  await rp.setLastName(RandomDataUtil.getLastName());
  await rp.setEmail(RandomDataUtil.getEMail());
  await rp.setTelephone(RandomDataUtil.getPhoneNumber());

  const password = RandomDataUtil.getPassword();
  await rp.setPassword(password);
  await rp.setConfirmPassword(password);

  await rp.setPrivacyPolicy();
  await rp.clickContinue();

  //validate confirmation message
  const confirmationMsg = await rp.getConfirmationMsg();
  expect(confirmationMsg).toContain("Your Account Has Been Created!");
});
