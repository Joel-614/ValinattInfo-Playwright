import {page} from 'playwright';

exports.ForgotPasswordPage = class ForgotPasswordPage {
    
    constructor(page) {
        
        this.page = page;
        this.pagetitle = page.locator("(//div[@class='top']/h1)[1]");
        this.username = page.locator('#Email');
        this.nextButton = page.locator('button[type="button"]');
    }

}