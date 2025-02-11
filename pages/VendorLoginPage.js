exports.VendorLoginPage = class VendorLoginPage{

    constructor(page){
        this.page = page;
         
        this.username = page.getByPlaceholder("Enter Registered Username");
        this.password = page.getByPlaceholder("Enter password");
        this.loginButton = page.getByText("Log In");
        this.forgotPasswordButton = page.locator('//p[@class="forgotPassword"]');
        
        //Invalid Login Alert Scenarios 
        this.alertTextH1 = page.locator("//article/h1");
        this.alertDoneButton = page.locator("//article/button");
    }

    async enterUsername(username){
        await this.username.fill(username);
    }

    async enterPassword(password){
        await this.password.fill(password);
    }

    async clickLogin(){
        await this.loginButton.click();
    }

    async clickAlertDoneButton() {
        await this.alertDoneButton.click();
    }

    async clickForgotPasswordButton(){
        await this.forgotPasswordButton.click();
    }

    async login(username, password){

        this.enterUsername("");
        this.enterPassword("");

        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}