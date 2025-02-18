import {test, expect} from "@playwright/test";

import { VendorLoginPage } from "../../pages/Vendor/LoginPage";
import { SideNavigationPage } from "../../pages/Vendor/SideAndTopbarPage";

let vLoginPage, sideNavigationPage;
let username = "rajkumarbg_third_iteration_test";

test.beforeEach(async ({page}) => {

    await page.goto("http://dev.valianttinfo.com/")

    vLoginPage = new VendorLoginPage(page);
    sideNavigationPage = new SideNavigationPage(page);

    await vLoginPage.login(username, "Vrdella!6");

});

test("Validate the Vendor - Side Navigation's Dashboard", async () => {

    await expect(sideNavigationPage.dashboardButton).toBeVisible();

    await validateSideAndTopBar(username, "Dashboard");

});

test("Validate the Vendor - Side Navigation's Candidate Details", async () => {

    await sideNavigationPage.clickCandidateDetailsButton();

    await expect(sideNavigationPage.candidateDetailsButton).toBeVisible();

    await validateSideAndTopBar(username, "Candidate Details");

});

test.afterEach(async () => {

    await sideNavigationPage.logout();
    
});

// Helper Functions:
async function validateSideAndTopBar(username , pageTitle){
    await expect(sideNavigationPage.vendorUsername).toHaveText(username);
    await expect(sideNavigationPage.pageTitle).toHaveText(pageTitle);
    
    await expect(sideNavigationPage.searchBar).toBeVisible();
    await expect(sideNavigationPage.searchBarButton).toBeVisible();
    
    await expect(sideNavigationPage.notificationButton).toBeVisible();
}

