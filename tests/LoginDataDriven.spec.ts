import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import {TestConfig} from '../test.config';
import { HomePage } from '../pages/HomePage';


//Load JSON test data logindata.json
//const jsonPath = "testdata/logindata.json";
//const jsonTestData = DataProvider.getTestDataFromJson(jsonPath);

/* for (const data of jsonTestData) {
    
    test(`Login Test with JSON Data: ${data.testName} @datadriven`, async ({page}) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const hp = new HomePage(page);
        await hp.clickMyAccount();
        await hp.clickLogin();

        const lp = new LoginPage(page);
        await lp.login( data.email , data.password )

        if (data.expected.toLowerCase() === 'success') {
            const map = new MyAccountPage(page);
            const isLoggedIn = await map.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();
        }
        else{
            const errorMessage = await lp.getLoginErrorMessage();
            expect(errorMessage).toBe(' Warning: No match for E-Mail Address and/or Password.');
        }

    });

} */


//Load CSV test data logindata.csv
const csvPath = "testdata/logindata.csv";
const csvTestData = DataProvider.getTestDataFromCSV(csvPath);

for (const data of csvTestData) {
    
    test(`Login Test with CSV Data: ${data.testName} @datadriven`, async ({page}) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const hp = new HomePage(page);
        await hp.clickMyAccount();
        await hp.clickLogin();

        const lp = new LoginPage(page);
        await lp.login( data.email , data.password )

        if (data.expected.toLowerCase() === 'success') {
            const map = new MyAccountPage(page);
            const isLoggedIn = await map.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();
        }
        else{
            const errorMessage = await lp.getLoginErrorMessage();
            expect(errorMessage).toBe(' Warning: No match for E-Mail Address and/or Password.');
        }

    });

} 
