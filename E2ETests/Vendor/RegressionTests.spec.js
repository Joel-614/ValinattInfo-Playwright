import {test, expect} from "@playwright/test"
import { VendorLoginPage } from "../../pages/Vendor/LoginPage";
import { SideNavigationPage } from "../../pages/Vendor/SideAndTopbarPage";
import {CandidateDetailsPage} from "../../pages/Vendor/CandidateDetailsPage";
import { OutlookPage } from "../../pages/Vendor/OutlookPage";

var loginPage, sideAndTopbarPage, candidateDetailsPage, outlookPage;
let outlookEmail = "joel@vivyacorp.com", outlookPassword = "vrvictory!6";

test.beforeEach(async ({page}) => {

    loginPage = new VendorLoginPage(page);
    sideAndTopbarPage = new SideNavigationPage(page);
    candidateDetailsPage = new CandidateDetailsPage(page);
    outlookPage = new OutlookPage(page);

    await page.goto(process.env.URL);

    await loginPage.login(process.env.USERID, process.env.PASSID);
    

})

test.skip("Validating Court Check Candidate", async ({page}) => {

    await deleteMails(page);

    await sideAndTopbarPage.clickCandidateDetailsButton();

    await candidateDetailsPage.clickBeginVerificationButton();

    await candidateDetailsPage.fillCourtCandidate();

})

async function openCandidateMail(){

}

async function deleteMails(page){

    await page.goto("https://outlook.office.com/");

    await outlookPage.login(outlookEmail, outlookPassword);

    await outlookPage.clickValianttInfoFolder();

    await outlookPage.clickDeleteIcon();
    
    await outlookPage.clickDeleteAll();

    await outlookPage.logout();

    await expect(outlookPage.signedOutMessage).toBeVisible();

}