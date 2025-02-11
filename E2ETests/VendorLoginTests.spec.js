// @ts-chec
const { test, expect } = require('@playwright/test');
import { VendorLoginPage } from '../pages/VendorLoginPage';

test.beforeEach(async ({page}) => {

  await page.goto("http://dev.valianttinfo.com/")

})

test("Validate the Design", async ({page})=> {
  
  var vLoginPage = new VendorLoginPage(page);

  await expect(page).toHaveTitle("Valiantt Info")

  await expect(vLoginPage.username).toBeVisible();
  await expect(vLoginPage.password).toBeVisible();
  await expect(vLoginPage.loginButton).toBeVisible();
  await expect(vLoginPage.forgotPasswordButton).toBeVisible();

})

test("Validate the Username Input", async ({page}) => {  

  var vLoginPage = new VendorLoginPage(page);

})