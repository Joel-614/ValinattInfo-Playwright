import {test, expect} from "@playwright/test"
import { VendorLoginPage } from "../../pages/Vendor/LoginPage";
import { SideNavigationPage } from "../../pages/Vendor/SideAndTopbarPage";
import { CandidateDetailsPage } from "../../pages/Vendor/CandidateDetailsPage";

let loginPage, sideNavigationPage, candidateDetailsPage;
let candidateName = process.env.CANDIDATENAME;

test.beforeEach(async ({page}) => {

    loginPage = new VendorLoginPage(page);
    sideNavigationPage = new SideNavigationPage(page);
    candidateDetailsPage = new CandidateDetailsPage(page);

    await page.goto(process.env.URL);

    await loginPage.login(process.env.USERID, process.env.PASSID);
    await sideNavigationPage.clickCandidateDetailsButton();

})

test.describe("Validate the Candidate Details", async () => {
    
    test("Validating the Searchbox", async ({page}) => {

        // Validating if the search candidate is being retrieved
        await candidateDetailsPage.enterSearchBox(candidateName);
        await expect(candidateDetailsPage.searchedCandidate).toBeVisible();

        await page.waitForTimeout(1500);
        // Validating the list if we given an invalid candidate Name
        await candidateDetailsPage.enterSearchBox("TEST TEST TEST");
        await page.waitForTimeout(1500);
        await expect(candidateDetailsPage.noResultsFound).toHaveText("No results found");

        // Validating the list after clicking on cancel
        await candidateDetailsPage.clickSearchBoxCancel();
        await expect(candidateDetailsPage.noResultsFound).toBeHidden();

    });

})

test.describe("Validate the Begin Verification Form Scenarios", async () => {

    test.beforeEach(async () => {
        await candidateDetailsPage.clickBeginVerificationButton();
    })

    test("Clicking on 'Proceed' Button without filling up", async ({page}) => {
        
        await validateAlertMessage(page, "Please fill in all required fields.");

        await candidateDetailsPage.clickProceedButton();

    });

    test("Clicking on 'Proceed' Button without giving any resume file", async ({page}) => {

        await validateAlertMessage(page, "Please attach candidate's resume.");

        await candidateDetailsPage.fillUpCandidateForm("Joel", "Andrews", "joelandrews614@gmail.com", "9283848844", "103", "103", "", true);
        await candidateDetailsPage.clickProceedButton();

    });

    test("Clicking on 'Proceed' Button with Invalid Email Address", async ({page}) => {

        await validateAlertMessage(page, "Please enter a valid email address.");

        // EMAIL REGEX EXPRESSION: username only
        await candidateDetailsPage.fillUpCandidateForm("Joel", "Andrews", "joela", "9283848844", "103", "103", "", true);
        await page.waitForTimeout(1100);
        await candidateDetailsPage.clickProceedButton();  

        // EMAIL REGEX EXPRESSION: username@ without domain value
        await candidateDetailsPage.enterEmail("joel@");
        await candidateDetailsPage.clickProceedButton();

        // EMAIL REGEX EXPRESSION: numbers as value
        await candidateDetailsPage.enterEmail("123456789");
        await candidateDetailsPage.clickProceedButton();

    });

    test("Validating the Custom Package Checks", async ({page}) => {
        await page.waitForTimeout(2500);

        const allChecksItems = page.locator("//*[@class='Checks']/input")

        for(var i = 0; i < await allChecksItems.count(); i++){
            await allChecksItems.nth(i).click();       
        }
    })

    test("Validating the Check Search Bar", async () => {

        var checkName = "BGV286";

        // TC: Validating the search bar when we enter a valid check name
        await candidateDetailsPage.enterSearchCheckInp(checkName);
        await expect(candidateDetailsPage.searchedCheck).toHaveText(checkName);

        // TC: Validating the search bar when we enter a invalid check name
        await candidateDetailsPage.enterSearchCheckInp("TESTESTTEST");
        await expect(candidateDetailsPage.searchedCheck).toBeHidden();

    })
});

test.skip("Validate Candidate Begin Verification Process for Successful Scenario", async () => {
    
    await candidateDetailsPage.clickBeginVerificationButton();

    await candidateDetailsPage.fillUpCandidateForm("JoelJ", 
        "AndrewsA", 
        "joelandrewstest02@gmail.com", 
        "9597337506", 
        "AUTO102", 
        "AUTO102",
        'TestFiles\\JoelAndrewsJeyakumar_QA_Automation.docx', 
        true);
    
})

test.afterEach(async ({page}) => {
    await page.reload();
    await sideNavigationPage.logout();
})

// Helper Methods:
async function validateAlertMessage(page, message){

    page.on('dialog', async dialog => {
        await expect(dialog.message()).toBe(message);
        await dialog.accept();
    });

}