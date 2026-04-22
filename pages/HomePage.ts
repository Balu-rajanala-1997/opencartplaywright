import {Page, expect, Locator} from '@playwright/test';

export class HomePage{

    private readonly page: Page;
    private readonly myAccountLink: Locator;
    private readonly registrationLink: Locator;
    private readonly loginLink: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;


    constructor(page: Page){

        this.page = page;
        this.myAccountLink = page.locator("span:has-text('My Account')");
        this.registrationLink = page.locator("a:has-text('Register')");
        this.loginLink = page.locator("a:has-text('Login')");
        this.txtSearchbox = page.locator("input[placeholder='Search']");
        this.btnSearch = page.locator("button[class='btn btn-default btn-lg']")
        //this.btnSearch = page.locator("#search button[]type='button']"); 

    }

    //check if HomePage exists
    async isHomePageExists(){

        let title:string = await this.page.title();
        if (title) {
            return true;
        }
        return false;

    }

    //click My Account link
    async clickMyAccount(){

        try {
            await this.myAccountLink.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'My Account': ${error}`);
            throw error;           
        }

    }

    //click Register link
    async clickRegister(){
        try {
            await this.registrationLink.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'Register': ${error}`);
            throw error;
        }
    }

    //click Login link
    async clickLogin(){

        try {
            await this.loginLink.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'Login': ${error}`);
            throw error;            
        }

    }

    //Enter product name in the search box
    async enterProductName(pName:string){

        try {
            await this.txtSearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occured while entering product name: ${error}`);
            throw error;
        }

    }

    //click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occured while clicking 'Search': ${error}`);
            throw error;
        }
    }



}