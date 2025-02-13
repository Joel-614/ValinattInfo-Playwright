import {page} from 'playwright';

exports.ForgotPasswordPage = class ForgotPasswordPage {
    
    constructor(page) {
        
        this.page = page;
        this.pagetitle = page.locator("(//div[@class='top']/h1)[1]");
        this.username = page.locator('#Email');
        this.nextButton = page.locator("(//div[@class='bottom'])[1]/button");
        
        // Invalid Forgot Password Scenario Alerts
        this.alertTitle = page.locator("//article[@class='AlertContent']/h1");
        this.alertText = page.locator("//article[@class='AlertContent']/span");
        this.alertDoneButton = page.locator("//article[@class='AlertContent']/button");
        
        // Valid Forgot Password Scenario Alerts
        this.validUsernameProcessTitle = page.locator("(//div[@class='top']/h1)[1]");
        this.validUsernameProcessText = page.locator("(//div[@class='top']/p)[1]");
    }

    clickNextButton = async () => {
        await this.nextButton.click();
    }

    clickAlertDoneButton = async () => {
        await this.alertDoneButton.click();
    }

}