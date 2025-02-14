import {test, expect} from "@playwright/test";
import { LoginPage } from "../../pages/Admin/LoginPage";

let adminLoginPage;

test.beforeEach(async ({page}) => {
    await page.goto("http://13.233.232.180:3000/");

    adminLoginPage = new LoginPage(page);
});

test("Validate the Design", async ({page}) => {
    
    await expect(page).toHaveTitle("Valiantt Info Admin")

    await expect(adminLoginPage.username).toBeVisible();
    await expect(adminLoginPage.password).toBeVisible();
    await expect(adminLoginPage.passwordHideIcon).toBeVisible();
    await expect(adminLoginPage.loginButton).toBeVisible();

})

test("Validate the Username Input", async () => {  
  await expect(adminLoginPage.username).toHaveAttribute('name', 'useremail')
});

test("Validate the Password Input", async () => {
  await expect(adminLoginPage.password).toHaveAttribute("name", "password")
});

test("Validate the Invalid Login Scenarios", async () => { 
  
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
    await adminLoginPage.login(username, password);
    await expect(adminLoginPage.alertTextH1).toHaveText(alertText);
    await adminLoginPage.clickAlertDoneButton();
  }
  
});