// @ts-chec
const { test, expect } = require('@playwright/test');
import { VendorLoginPage } from '../pages/VendorLoginPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

let vLoginPage, fPasswordPage;

test.beforeEach(async ({page}) => {

  await page.goto("http://dev.valianttinfo.com/")
  vLoginPage = new VendorLoginPage(page);
  fPasswordPage = new ForgotPasswordPage(page);

});

test("Validate the Design", async ({page})=> {

  await expect(page).toHaveTitle("Valiantt Info")

  await expect(vLoginPage.username).toBeVisible();
  await expect(vLoginPage.password).toBeVisible();
  await expect(vLoginPage.loginButton).toBeVisible();
  await expect(vLoginPage.forgotPasswordButton).toBeVisible();

});

test("Validate the Username Input", async ({page}) => {  
  await expect(vLoginPage.username).toHaveAttribute('placeholder', 'Enter Registered Username')
});

test("Validate the Password Input", async ({page}) => {
  await expect(vLoginPage.password).toHaveAttribute("placeholder", "Enter password")
});

test("Validate the Invalid Login Scenarios", async ({page}) => { 
  
  const alertText = "Failed";
  const loginTestData = [
    { username: "", password: "" },
    { username: "joel_the_03", password: ""},
    { username: "", password: "Vrdella!6"},
    { username: "joeltest01", password: "Vrdella!6" },
    { username: "joel_the_03", password: "Vrdella@123"},
    { username: "joelthe03", password: "Vrdella@123"},
  ];

  for (const { username, password} of loginTestData) {
    await vLoginPage.login(username, password);
    await expect(vLoginPage.alertTextH1).toHaveText(alertText);
    await vLoginPage.clickAlertDoneButton();
  }

});

test("Validate the Forgot Password Link", async ({page}) => {
  await vLoginPage.clickForgotPasswordButton();
  await expect(fPasswordPage.pagetitle).toHaveText("Forgot Password?");
});