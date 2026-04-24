# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> Execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
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
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  9   |  * 2). Logout after registration
  10  |  * 3). Login with the same account
  11  |  * 4). Search for a product and add it to the shopping cart
  12  |  * 5). Verify cart contents
  13  |  * 6). Attempt checkout (disabled since feature isn't available on demo site)
  14  |  */
  15  | 
  16  | import {test, expect, Page} from '@playwright/test';
  17  | import {RegistrationPage} from '../pages/RegistrationPage';
  18  | import {HomePage} from '../pages/HomePage';
  19  | import {TestConfig} from '../test.config';
  20  | import {LogoutPage} from '../pages/LogoutPage';
  21  | import {LoginPage} from '../pages/LoginPage';
  22  | import {MyAccountPage} from '../pages/MyAccountPage';
  23  | import {SearchResultsPage} from '../pages/SearchResultsPage';
  24  | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  25  | import { CheckoutPage } from '../pages/CheckoutPage';
  26  | import { ProductPage } from '../pages/ProductPage';
  27  | import {RandomDataUtil} from '../utils/randomDataGenerator';
  28  | 
  29  | 
  30  | test('Execute end-to-end test flow @end-to-end', async ({page}) => {
  31  | 
  32  |     const config = new TestConfig();
  33  | 
  34  |     await page.goto(config.appUrl);
  35  | 
  36  |     let registeredEmail:string = await performRegistration(page);
  37  |     console.log("✅ Registration is completed!");
  38  | 
  39  |     await performLogout(page);
  40  |     console.log("🔓 Logout is completed!");
  41  | 
  42  |     await performLogin(page, registeredEmail);
  43  |     console.log("🔐 Login is completed!");
  44  | 
  45  |     await addProductToCart(page);
  46  |     console.log("🛒 Product added to cart!");
  47  | 
  48  |     await verifyShoppingCart(page);
  49  |     console.log("📦 Shopping cart verification completed!");
  50  |     
  51  |     console.log("🎉 End-to-End Test Flow Completed Successfully!");
  52  | 
  53  | });
  54  | 
  55  | 
  56  | //function to register a new user account
  57  | async function performRegistration(page:Page) {
  58  |     const hp = new HomePage(page);
  59  |     await hp.clickMyAccount();
  60  |     await hp.clickRegister();
  61  | 
  62  |     const rp = new RegistrationPage(page);
  63  |     
  64  |     await rp.setFirstName(RandomDataUtil.getFirstName());
  65  |     await rp.setLastName(RandomDataUtil.getLastName());
  66  | 
  67  |     let email:string = RandomDataUtil.getEMail();
  68  |     await rp.setEmail(email);
  69  |     await rp.setTelephone(RandomDataUtil.getPhoneNumber());
  70  | 
  71  |     await rp.setPassword("test123");
  72  |     await rp.setConfirmPassword("test123");
  73  | 
  74  |     await rp.setPrivacyPolicy(); //accept the privacy policy
  75  |     await rp.clickContinue(); //submit the registration form
  76  | 
  77  |     const confirmationMsg = await rp.getConfirmationMsg();
  78  |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  79  | 
  80  |     return email; //return the email for later use in login
  81  | 
  82  | }
  83  | 
  84  | async function performLogout(page:Page) {
  85  | 
  86  |     const map = new MyAccountPage(page);
  87  |     const lop:LogoutPage = await map.clickLogout();
  88  | 
  89  |     expect(await lop.isContinueButtonVisible()).toBe(true);
  90  | 
  91  |     const hp:HomePage = await lop.clickContinue();
  92  |     expect(await hp.isHomePageExists()).toBe(true);
  93  | 
  94  | }
  95  | 
  96  | async function performLogin(page:Page, email: string) {
  97  | 
  98  |     const config = new TestConfig();
  99  |     await page.goto(config.appUrl);
  100 | 
  101 |     const hp = new HomePage(page);
  102 |     await hp.clickMyAccount();
  103 |     await hp.clickLogin();
  104 | 
  105 |     const lip  = new LoginPage(page);
  106 |     lip.login(email, "test123"); //use the registered credentials
  107 | 
  108 |     const map = new MyAccountPage(page);
> 109 |     expect(await map.isMyAccountPageExists()).toBeTruthy();
      |                                               ^ Error: expect(received).toBeTruthy()
  110 | 
  111 | }
  112 | 
  113 | async function addProductToCart(page:Page) {
  114 |     
  115 |     const hp = new HomePage(page);
  116 |     
  117 |     const config = new TestConfig();
  118 |     const productName:string = config.productName;
  119 |     const productQuantity:string = config.productQuantity;
  120 | 
  121 |     await hp.enterProductName(productName);
  122 |     await hp.clickSearch();
  123 | 
  124 |     const srp = new SearchResultsPage(page);
  125 | 
  126 |     //Validate search results page
  127 |     expect(await srp.isSearchResultsPageExists()).toBeTruthy();
  128 | 
  129 |     //Validate that the desired product exists in the results
  130 |     expect(await srp.isProductExist(productName)).toBeTruthy();
  131 | 
  132 |     //Select product and set quantity
  133 |     const pp = await srp.selectProduct(productName);
  134 |     await pp?.setQuantity(productQuantity);
  135 |     await pp?.addToCart();  //add product to shopping cart
  136 | 
  137 |     await page.waitForTimeout(3000); //wait for simulate user delay
  138 | 
  139 |     //Confirm product was added
  140 |     expect(await pp?.isConfirmationMessageVisible()).toBe(true);
  141 | 
  142 | 
  143 | }
  144 | 
  145 | async function verifyShoppingCart(page:Page) {
  146 | 
  147 |     const pp = new ProductPage(page);
  148 | 
  149 |     //Navigate to shopping cart from product page
  150 |     await pp.clickItemsToNavigateToCart();
  151 |     const scp: ShoppingCartPage = await pp.clickViewCart();
  152 | 
  153 |     console.log("🛒 Navigate to shopping cart!");
  154 |     
  155 |     const config = new TestConfig();
  156 | 
  157 |     //Validate that total price is correct (based on config)
  158 |     expect(await scp.getTotalPrice()).toBe(config.totalPrice);
  159 | 
  160 | }
  161 | 
  162 | 
  163 | 
  164 | 
  165 | 
  166 | 
  167 | 
  168 | 
  169 | 
  170 | 
  171 | 
  172 | 
  173 | 
  174 | 
  175 | 
  176 | 
```