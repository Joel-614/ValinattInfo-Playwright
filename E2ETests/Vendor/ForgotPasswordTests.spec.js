const {test, expect} = require('@playwright/test');

import { VendorLoginPage } from '../../pages/Vendor/LoginPage'; 
import { ForgotPasswordPage } from '../../pages/Vendor/ForgotPasswordPage';

let vLoginPage, fPasswordPage;

test.beforeEach(async ({page}) => {
    
    await page.goto("http://dev.valianttinfo.com/")
    
    vLoginPage = new VendorLoginPage(page);
    fPasswordPage = new ForgotPasswordPage(page);

    await vLoginPage.clickForgotPasswordButton();

});

test("Validate the Design", async () => {

    await expect(fPasswordPage.pagetitle).toHaveText("Forgot Password?");
    await expect(fPasswordPage.username).toBeVisible();

});

test("Validate the Invalid Forgot Password Scenarios", async () => {

    // TC1: Click Next Button without entering username
    await fPasswordPage.clickNextButton();
    await expect(fPasswordPage.alertTitle).toHaveText("Failed");
    await expect(fPasswordPage.alertText).toHaveText("Please enter username");
    await fPasswordPage.clickAlertDoneButton();
    
    // TC2: Click Next Button with an Invalid username
    await fPasswordPage.username.fill("invalidusername");
    await fPasswordPage.clickNextButton();
    await expect(fPasswordPage.alertTitle).toHaveText("Failed");
    await expect(fPasswordPage.alertText).toHaveText("Given Username is not registered");
    await fPasswordPage.clickAlertDoneButton();

});

test("Validate the Valid Forgot Password Scenario", async () => {

    var username = "joel_the_02";

    // TC1: Click Next Button with a valid username
    await fPasswordPage.username.fill(username);
    await fPasswordPage.clickNextButton();
    await expect(fPasswordPage.validUsernameProcessTitle).toHaveText("Email Confirmation");
    await expect(fPasswordPage.validUsernameProcessText).toBeVisible();  

});