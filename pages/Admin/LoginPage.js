exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.username = page.locator("(//input[@class='EmailInput'])[1]");
        this.password = page.locator("(//input[@class='EmailInput'])[2]");
        this.passwordHideIcon = page.locator("//*[@class='EyeIcon']");
        this.loginButton = page.locator("//button[@class='ButtonInput']");
        
        this.alertTextH1 = page.locator("//article[@class='AlertContent']/h1");
        this.alertDoneButton = page.locator("//article[@class='AlertContent']/button");
    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async clickAlertDoneButton(){
        await this.alertDoneButton.click();
    }
}