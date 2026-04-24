# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User Login Test
- Location: tests\Login.spec.ts:39:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1). Navigate to the application URL
  8  |  * 2). Navigate to Login page via HomePage
  9  |  * 3). Enter valid credentials and log in
  10 |  * 4). Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | import {test, expect} from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from '../pages/LoginPage';
  16 | import { MyAccountPage } from '../pages/MyAccountPage';
  17 | import { TestConfig } from '../test.config';
  18 | 
  19 | let config: TestConfig;
  20 | let hp: HomePage;
  21 | let lp: LoginPage;
  22 | let map: MyAccountPage;
  23 | 
  24 | test.beforeEach(async ({page}) => {
  25 |     config = new TestConfig();
  26 |     await page.goto(config.appUrl);
  27 | 
  28 |     hp = new HomePage(page);
  29 |     lp = new LoginPage(page);
  30 |     map = new MyAccountPage(page);
  31 | 
  32 | });
  33 | 
  34 | test.afterEach(async ({page}) => {
  35 |     await page.close(); //Close browser tab
  36 | });
  37 | 
  38 | 
  39 | test('User Login Test', async () => {
  40 | 
  41 |     await hp.clickMyAccount();
  42 |     await hp.clickLogin();
  43 | 
  44 |     //enter valid credentials and log in
  45 |     await lp.setEmail(config.email);
  46 |     await lp.setPassword(config.password);
  47 |     await lp.clickLogin();
  48 | 
  49 |     //alternativly
  50 |     //await lp.login(config.email, config.password);
  51 | 
  52 |     //verify successful login y checking 'Mu Account' page presence
  53 |     const isLoggedIn = await map.isMyAccountPageExists();
> 54 |     expect(isLoggedIn).toBeTruthy();
     |                        ^ Error: expect(received).toBeTruthy()
  55 | 
  56 | })
```