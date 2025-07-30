import {test, expect} from "@playwright/test";
import { VendorLoginPage } from "../../pages/Vendor/LoginPage";
import { SideNavigationPage } from "../../pages/Vendor/SideAndTopbarPage";
import { PackDetailsPage } from "../../pages/Vendor/PackDetailsPage";

let vendorLoginPage, sideAndTopBarTests, packDetailsPage;

test.beforeEach(async ({page}) => {

    await page.goto(process.env.URL);

    vendorLoginPage = new VendorLoginPage(page);
    sideAndTopBarTests = new SideNavigationPage(page);
    packDetailsPage = new PackDetailsPage(page)

    await vendorLoginPage.login(process.env.USERID, process.env.PASSID);
    await sideAndTopBarTests.clickPackDetailsButton();

});

test("Validate the Design", async () => {

    await expect(packDetailsPage.pageTitle).toHaveText("Pack Details");
    await expect(packDetailsPage.customizePackBtn).toBeVisible();

});

test("Validating Pack Creation Process", async ({page}) => {

    await sideAndTopBarTests.clickPackDetailsButton();

    await page.waitForTimeout(2000);
    if(await packDetailsPage.allChecksPack.isVisible()){
        await packDetailsPage.allChecksPack.hover();
        await packDetailsPage.clickAllChecksPackDeleteBtn();
        await packDetailsPage.clickCreatedPackDoneBtn();
    }

    await packDetailsPage.clickCustomizePackBtn();

    await packDetailsPage.clickSelectAllChecksInp();

    await packDetailsPage.clickMakeAPlanBtn();

    await packDetailsPage.enterPackName("All Checks Pack");

    await packDetailsPage.clickCreatePackBtn();

    await packDetailsPage.clickCreatedPackDoneBtn();

    await page.waitForTimeout(3000);
    await expect(packDetailsPage.allChecksPack).toBeVisible();

});

test("Validate error when creating a pack with an existing pack name", async ({page}) => {

    await page.waitForTimeout(2000);
    if(await packDetailsPage.allChecksPack.isVisible()){

        await packDetailsPage.clickCustomizePackBtn();

        await packDetailsPage.clickSelectAllChecksInp();

        await packDetailsPage.clickMakeAPlanBtn();

        await packDetailsPage.enterPackName("All Checks Pack");

        await packDetailsPage.clickCreatePackBtn();

        await expect(packDetailsPage.alertMessage).toHaveText("Pack name already exists");

        await packDetailsPage.clickAlertDoneBtn();

        await packDetailsPage.clickCancelPackBtn();

    }
})