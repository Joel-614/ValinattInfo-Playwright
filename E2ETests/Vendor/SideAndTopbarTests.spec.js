import {test, expect} from "@playwright/test";

import { VendorLoginPage } from "../../pages/Vendor/LoginPage";
import { SideNavigationPage } from "../../pages/Vendor/SideAndTopbarPage";

let vLoginPage, sideNavigationPage;
let username = "joel_the_03";
let candidateName = "CandidateSixSix";

test.beforeEach(async ({page}) => {

    await page.goto("http://dev.valianttinfo.com/")

    vLoginPage = new VendorLoginPage(page);
    sideNavigationPage = new SideNavigationPage(page);

    await vLoginPage.login(username, "Vrdella!6");

});

test("Validate the Vendor - Side Navigation's Dashboard", async () => {

    await expect(sideNavigationPage.dashboardButton).toBeVisible();
    
    await validateOptionalScenarios(username, "Dashboard");
    
});

test("Validate the Vendor - Side Navigation's Candidate Details", async () => {

    await expect(sideNavigationPage.candidateDetailsButton).toBeVisible();
    await sideNavigationPage.clickCandidateDetailsButton();

    await validateOptionalScenarios(username, "Candidate Details");
});

test("Validate the Vendor - Side Navigation's Pack Details", async () => {
   
    await expect(sideNavigationPage.packDetailsButton).toBeVisible();
    await sideNavigationPage.clickPackDetailsButton();

    await validateOptionalScenarios(username, "Pack Details");
});

test("Validate the Vendor - Side Navigation's Insufficiency Details", async () => {
    
    await expect(sideNavigationPage.insufficiencyDetailsButton).toBeVisible();
    await sideNavigationPage.clickInsufficiencyDetailsButton();

    await validateOptionalScenarios(username, "Insufficiency Details");
})

test("Validate the Vendor - Side Navigation's Additional Cost", async () => {
    
    await expect(sideNavigationPage.additionalCostButton).toBeVisible();
    await sideNavigationPage.clickAdditionalCostButton();

    await validateOptionalScenarios(username, "Additional Cost List");
});

test("Validate the Vendor - Side Navigation's Billing Details", async () => {

    await expect(sideNavigationPage.billingDetailsButton).toBeVisible();
    await sideNavigationPage.clickBillingDetailsButton();

    await validateOptionalScenarios(username, "Billing Details");
});

test("Validate the Vendor - Side Navigation's Status", async () => {

    await expect(sideNavigationPage.statusButton).toBeVisible();
    await sideNavigationPage.clickStatusButton();

    await validateOptionalScenarios(username, "Status");
});

test("Validate the Vendor - Side Navigation's User Management", async () => {

    await expect(sideNavigationPage.userManagementButton).toBeVisible();
    await sideNavigationPage.clickUserManagementButton();

    await validateOptionalScenarios(username, "User Management");
});

test("Validate the Vendor - Side Navigation's Account Settings", async () => {
    await expect(sideNavigationPage.accountSettingsButton).toBeVisible();
    await sideNavigationPage.clickAccountSettingsButton();

    await validateOptionalScenarios(username, "Account Settings");    
});

test("Validate the Vendor - Side Navigation's Contact Us", async () => {
    await expect(sideNavigationPage.contactUsButton).toBeVisible();
    await sideNavigationPage.clickContactUsButton();

    await validateOptionalScenarios(username, "Contact Us");
});

test.afterEach(async () => {

    await sideNavigationPage.logout();
    
});

// Helper Functions:
async function validateOptionalScenarios(username , pageTitle){
    // Combined validateSearchBar() and validateSideAndTopBar() in one function to reduce code lines
    await expect(sideNavigationPage.vendorUsername).toHaveText(username);
    await expect(sideNavigationPage.pageTitle).toHaveText(pageTitle);
    await expect(sideNavigationPage.searchBar).toBeVisible();
    await expect(sideNavigationPage.searchBarButton).toBeVisible();
    await expect(sideNavigationPage.notificationButton).toBeVisible();

    await sideNavigationPage.searchCandidate(candidateName);
    await expect(sideNavigationPage.searchedCandidate).toHaveText(candidateName);
}