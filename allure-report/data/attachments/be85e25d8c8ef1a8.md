# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataDriven.spec.ts >> Login Test with CSV Data: Valid login @datadriven
- Location: tests\LoginDataDriven.spec.ts:48:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import {LoginPage} from '../pages/LoginPage';
  3  | import {MyAccountPage} from '../pages/MyAccountPage';
  4  | import { DataProvider } from '../utils/dataProvider';
  5  | import {TestConfig} from '../test.config';
  6  | import { HomePage } from '../pages/HomePage';
  7  | 
  8  | 
  9  | //Load JSON test data logindata.json
  10 | //const jsonPath = "testdata/logindata.json";
  11 | //const jsonTestData = DataProvider.getTestDataFromJson(jsonPath);
  12 | 
  13 | /* for (const data of jsonTestData) {
  14 |     
  15 |     test(`Login Test with JSON Data: ${data.testName} @datadriven`, async ({page}) => {
  16 | 
  17 |         const config = new TestConfig();
  18 |         await page.goto(config.appUrl);
  19 | 
  20 |         const hp = new HomePage(page);
  21 |         await hp.clickMyAccount();
  22 |         await hp.clickLogin();
  23 | 
  24 |         const lp = new LoginPage(page);
  25 |         await lp.login( data.email , data.password )
  26 | 
  27 |         if (data.expected.toLowerCase() === 'success') {
  28 |             const map = new MyAccountPage(page);
  29 |             const isLoggedIn = await map.isMyAccountPageExists();
  30 |             expect(isLoggedIn).toBeTruthy();
  31 |         }
  32 |         else{
  33 |             const errorMessage = await lp.getLoginErrorMessage();
  34 |             expect(errorMessage).toBe(' Warning: No match for E-Mail Address and/or Password.');
  35 |         }
  36 | 
  37 |     });
  38 | 
  39 | } */
  40 | 
  41 | 
  42 | //Load CSV test data logindata.csv
  43 | const csvPath = "testdata/logindata.csv";
  44 | const csvTestData = DataProvider.getTestDataFromCSV(csvPath);
  45 | 
  46 | for (const data of csvTestData) {
  47 |     
  48 |     test(`Login Test with CSV Data: ${data.testName} @datadriven`, async ({page}) => {
  49 | 
  50 |         const config = new TestConfig();
> 51 |         await page.goto(config.appUrl);
     |                    ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  52 | 
  53 |         const hp = new HomePage(page);
  54 |         await hp.clickMyAccount();
  55 |         await hp.clickLogin();
  56 | 
  57 |         const lp = new LoginPage(page);
  58 |         await lp.login( data.email , data.password )
  59 | 
  60 |         if (data.expected.toLowerCase() === 'success') {
  61 |             const map = new MyAccountPage(page);
  62 |             const isLoggedIn = await map.isMyAccountPageExists();
  63 |             expect(isLoggedIn).toBeTruthy();
  64 |         }
  65 |         else{
  66 |             const errorMessage = await lp.getLoginErrorMessage();
  67 |             expect(errorMessage).toBe(' Warning: No match for E-Mail Address and/or Password.');
  68 |         }
  69 | 
  70 |     });
  71 | 
  72 | } 
  73 | 
```