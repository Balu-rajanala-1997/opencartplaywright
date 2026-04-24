# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test
- Location: tests\AccountRegistration.spec.ts:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h1:has-text(\'Your Account Has Been Creared!\')')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Success" [ref=e73] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/success
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=e76]
        - paragraph [ref=e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=e81] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=e83] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/account
      - complementary [ref=e84]:
        - generic [ref=e85]:
          - link "My Account" [ref=e86] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
          - link "Edit Account" [ref=e87] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/edit
          - link "Password" [ref=e88] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/password
          - link "Address Book" [ref=e89] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e90] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e91] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e92] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e93] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e94] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e95] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e96] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e97] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
          - link "Logout" [ref=e98] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/logout
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Information" [level=5] [ref=e103]
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "About Us" [ref=e106] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e107]:
              - link "Delivery Information" [ref=e108] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e109]:
              - link "Privacy Policy" [ref=e110] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e111]:
              - link "Terms & Conditions" [ref=e112] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e113]:
          - heading "Customer Service" [level=5] [ref=e114]
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Contact Us" [ref=e117] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e118]:
              - link "Returns" [ref=e119] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e120]:
              - link "Site Map" [ref=e121] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e122]:
          - heading "Extras" [level=5] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Brands" [ref=e126] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e127]:
              - link "Gift Certificates" [ref=e128] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e129]:
              - link "Affiliate" [ref=e130] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e131]:
              - link "Specials" [ref=e132] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e133]:
          - heading "My Account" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "My Account" [ref=e137] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e138]:
              - link "Order History" [ref=e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e140]:
              - link "Wish List" [ref=e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e142]:
              - link "Newsletter" [ref=e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e144]
      - paragraph [ref=e145]:
        - text: Powered By
        - link "OpenCart" [ref=e146] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1   | import {Page, expect, Locator} from '@playwright/test';
  2   | 
  3   | export class RegistrationPage{
  4   | 
  5   |     private readonly page:Page;
  6   | 
  7   |     private readonly txtFirstname: Locator;
  8   |     private readonly txtLastname: Locator;
  9   |     private readonly txtEmail: Locator;
  10  |     private readonly txtTelephone: Locator;
  11  |     private readonly txtPassword: Locator;
  12  |     private readonly txtConfirmPassword: Locator;
  13  |     private readonly chkPolicy: Locator;
  14  |     private readonly btnContinue: Locator;
  15  |     private readonly msgConfirmation: Locator;
  16  | 
  17  |     constructor(page: Page){
  18  | 
  19  |         this.page = page;
  20  | 
  21  |         this.txtFirstname = page.locator("#input-firstname");
  22  |         this.txtLastname = page.locator("#input-lastname");
  23  |         this.txtEmail = page.locator("#input-email");
  24  |         this.txtTelephone = page.locator("#input-telephone");
  25  |         this.txtPassword = page.locator("#input-password");
  26  |         this.txtConfirmPassword = page.locator("#input-confirm");
  27  |         this.chkPolicy = page.locator("input[name='agree']");
  28  |         this.btnContinue = page.locator("input[value='Continue']");
  29  |         this.msgConfirmation = page.locator("h1:has-text('Your Account Has Been Creared!')");
  30  | 
  31  |     }
  32  | 
  33  |     /**
  34  |      * sets the first name in the registration form
  35  |      * @param fname - first name to enter
  36  |      */
  37  |     async setFirstName(fname:string): Promise<void> {
  38  |         await this.txtFirstname.fill(fname);
  39  |     }
  40  | 
  41  |     /**
  42  |      * sets the last name in the registration form
  43  |      * @param lname last name to enter
  44  |      */
  45  |     async setLastName(lname:string): Promise<void> {
  46  |         await this.txtLastname.fill(lname);
  47  |     }
  48  | 
  49  |     /**
  50  |      * sets the email in the registration form
  51  |      * @param email - email to enter
  52  |      */
  53  |     async setEmail(email:string): Promise<void> {
  54  |         await this.txtEmail.fill(email);
  55  |     }
  56  | 
  57  |     /**
  58  |      * sets the telephone number in the registration form
  59  |      * @param tel - telephone number to enter
  60  |      */
  61  |     async setTelephone(tel:string): Promise<void> {
  62  |         await this.txtTelephone.fill(tel);
  63  |     }
  64  | 
  65  |     /**
  66  |      * sets the password in the registration form
  67  |      * @param pwd - password to enter
  68  |      */
  69  |     async setPassword(pwd:string): Promise<void> {
  70  |         await this.txtPassword.fill(pwd);
  71  |     }
  72  | 
  73  |     /**
  74  |      * sets the confirm password in the registration form
  75  |      * @param pwd - password to confirm 
  76  |      */
  77  |     async setConfirmPassword(pwd:string): Promise<void> {
  78  |         await this.txtConfirmPassword.fill(pwd);
  79  |     }
  80  | 
  81  |     /**
  82  |      * checks the privacy policy checkbox
  83  |      */
  84  |     async setPrivacyPolicy(): Promise<void> {
  85  |         await this.chkPolicy.check();
  86  |     }
  87  | 
  88  |     /**
  89  |      * click the continue button
  90  |      */
  91  |     async clickContinue(): Promise<void> {
  92  |         await this.btnContinue.click();
  93  |     }
  94  | 
  95  |     /**
  96  |      * Gets the confirmation message text
  97  |      * @returns Promise<string> - confirmation message text
  98  |      */
  99  |     async getConfirmationMsg(): Promise<string> {
> 100 |         return await this.msgConfirmation.textContent() ?? '';
      |                                           ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  101 |     }
  102 | 
  103 |     /**
  104 |      * complete registration workflow
  105 |      * @param userData - Oject containing registration data
  106 |      */
  107 |     async completeRegistration(userData: {
  108 |         firstName: string;
  109 |         lastName: string;
  110 |         email: string;
  111 |         telephone: string;
  112 |         password: string;
  113 |     }):Promise<void> {
  114 | 
  115 |         await this.setFirstName(userData.firstName);
  116 |         await this.setLastName(userData.lastName);
  117 |         await this.setEmail(userData.email);
  118 |         await this.setTelephone(userData.telephone);
  119 |         await this.setPassword(userData.password);
  120 |         await this.setConfirmPassword(userData.password);
  121 |         await this.setPrivacyPolicy();
  122 |         await this.clickContinue();
  123 |         await expect(this.msgConfirmation).toBeVisible();
  124 | 
  125 |     }
  126 | 
  127 | }
```