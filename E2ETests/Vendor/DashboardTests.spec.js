import {test, expect} from "@playwright/test";
import { DashboardPage } from "../../pages/Vendor/DashboardPage";
import { SideNavigationPage } from "../../pages/Vendor/SideAndTopbarPage";
import { VendorLoginPage } from "../../pages/Vendor/LoginPage";

let dashboardPage, sideNavigationPage, vendorLoginPage; 

test.beforeEach(async ({page}) => {
    
    vendorLoginPage = new VendorLoginPage(page);
    dashboardPage = new DashboardPage(page);
    sideNavigationPage = new SideNavigationPage(page);

    await page.goto("https://devapp.valianttinfo.com/");

    await vendorLoginPage.login("joel_the_03", "Vrdella!6");

})

test("Validate the Sub Section Titles", async () => {

    await expect(dashboardPage.checkStatusTitle).toHaveText("Check Status");
    await expect(dashboardPage.tatOverviewTitle).toHaveText("TAT Overview");
    await expect(dashboardPage.amountSpentTitle).toHaveText("Amount Spent");
    await expect(dashboardPage.statusTitle).toHaveText("Status");
    await expect(dashboardPage.packUsageOverviewTitle).toHaveText("Pack Usage Overview");
    await expect(dashboardPage.averageCompletionOfChecksTitle).toHaveText("Average Completion of Checks (in days)");
    await expect(dashboardPage.candidateDetailTitle).toHaveText("Candidate Details");

});

test.afterEach(async () => {

    await sideNavigationPage.logout();

});