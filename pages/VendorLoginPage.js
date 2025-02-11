const { expect } = require("@playwright/test");

exports.VendorLoginPage = class VendorLoginPage{

    constructor(page){
        this.page = page;
         
        this.username = page.getByPlaceholder("Enter Registered Username");
        this.password = page.getByPlaceholder("Enter password");
        this.loginButton = page.getByText("Log In");
        this.forgotPasswordButton = page.locator('//p[@class="forgotPassword"]');
    }

    async enterUsername(username){
        this.username.fill(username);
    }
}