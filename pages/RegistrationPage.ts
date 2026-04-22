import {Page, expect, Locator} from '@playwright/test';

export class RegistrationPage{

    private readonly page:Page;

    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConfirmation: Locator;

    constructor(page: Page){

        this.page = page;

        this.txtFirstname = page.locator("#input-firstname");
        this.txtLastname = page.locator("#input-lastname");
        this.txtEmail = page.locator("#input-email");
        this.txtTelephone = page.locator("#input-telephone");
        this.txtPassword = page.locator("#input-password");
        this.txtConfirmPassword = page.locator("#input-confirm");
        this.chkPolicy = page.locator("input[name='agree']");
        this.btnContinue = page.locator("input[value='Continue']");
        this.msgConfirmation = page.locator("div[id='content'] h1");

    }

    /**
     * sets the first name in the registration form
     * @param fname - first name to enter
     */
    async setFirstName(fname:string): Promise<void> {
        await this.txtFirstname.fill(fname);
    }

    /**
     * sets the last name in the registration form
     * @param lname last name to enter
     */
    async setLastName(lname:string): Promise<void> {
        await this.txtLastname.fill(lname);
    }

    /**
     * sets the email in the registration form
     * @param email - email to enter
     */
    async setEmail(email:string): Promise<void> {
        await this.txtEmail.fill(email);
    }

    /**
     * sets the telephone number in the registration form
     * @param tel - telephone number to enter
     */
    async setTelephone(tel:string): Promise<void> {
        await this.txtTelephone.fill(tel);
    }

    /**
     * sets the password in the registration form
     * @param pwd - password to enter
     */
    async setPassword(pwd:string): Promise<void> {
        await this.txtPassword.fill(pwd);
    }

    /**
     * sets the confirm password in the registration form
     * @param pwd - password to confirm 
     */
    async setConfirmPassword(pwd:string): Promise<void> {
        await this.txtConfirmPassword.fill(pwd);
    }

    /**
     * checks the privacy policy checkbox
     */
    async setPrivacyPolicy(): Promise<void> {
        await this.chkPolicy.check();
    }

    /**
     * click the continue button
     */
    async clickContinue(): Promise<void> {
        await this.btnContinue.click();
    }

    /**
     * Gets the confirmation message text
     * @returns Promise<string> - confirmation message text
     */
    async getConfirmationMsg(): Promise<string> {
        return await this.msgConfirmation.textContent() ?? '';
    }

    /**
     * complete registration workflow
     * @param userData - Oject containing registration data
     */
    async completeRegistration(userData: {
        firstName: string;
        lastName: string;
        email: string;
        telephone: string;
        password: string;
    }):Promise<void> {

        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setTelephone(userData.telephone);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.password);
        await this.setPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgConfirmation).toBeVisible();

    }

}