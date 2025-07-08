import {test, expect} from "@playwright/test"
import {VendorLoginPage} from "../../pages/Vendor/LoginPage";
import {SideNavigationPage} from "../../pages/Vendor/SideAndTopbarPage";
import { CCAvenuePage } from "../../pages/Vendor/CCAvenuePage";
import { BillingDetailsPage } from "../../pages/Vendor/BillingDetailsPage";

var loginPage, sideAndTopbarPage, ccAvenuePage, billingDetailsPage;

test.beforeEach(async ({page}) => {

    await page.goto(process.env.URL);

    loginPage = new VendorLoginPage(page);
    sideAndTopbarPage = new SideNavigationPage(page);
    ccAvenuePage = new CCAvenuePage(page);
    billingDetailsPage = new BillingDetailsPage(page);

    await loginPage.login(process.env.USERID, process.env.PASSID);    

    await sideAndTopbarPage.clickWalletButton();

});

test.describe("Validate the Low Balance Alert", async () => {

    test("TC: 141 - Clicking on 'Edit' Button", async () => {

        await sideAndTopbarPage.clickEditLowBalanceAlertButton();
        await expect(sideAndTopbarPage.editLowBalanceSaveButton).toBeVisible();
        await expect(sideAndTopbarPage.editLowBalanceCancelButton).toBeVisible();
        
    });

    test("TC: 142 - Clicking on 'Cancel' Button", async () => {

        var amount = await sideAndTopbarPage.lowBalanceAmount.innerHTML();

        await sideAndTopbarPage.clickEditLowBalanceAlertButton();

        await sideAndTopbarPage.clickEditLowBalanceCancelButton();
        await expect(sideAndTopbarPage.lowBalanceAmount).toHaveText(amount);

    });

    test("TC: 143 - Click on 'Edit', add a new amount then click on 'Save'", async () => {

        // await sideAndTopbarPage.clickEditLowBalanceAlertButton();
        // await sideAndTopbarPage.enterEditLowBalanceAmountInput("3003");
        // await sideAndTopbarPage.clickEditLowBalanceSaveButton();
        // await expect(sideAndTopbarPage.lowBalanceAmount).toHaveText("₹ 3003");

    });

    test("TC: XX - Clicking on 'Save' without entering nothing in the amount input", async ({page}) => {
        // XXX: New Test Case
        await page.on("dialog", async dialog => {
            await expect(await dialog.message()).toBe("Please enter a valid numeric amount")
            await dialog.accept();
        });
    
        await sideAndTopbarPage.clickEditLowBalanceAlertButton();
        await sideAndTopbarPage.enterEditLowBalanceAmountInput("");
        await sideAndTopbarPage.clickEditLowBalanceSaveButton();
    });
});


test.describe("Validate the Wallet Recharge", async () => {
    test("TC:146 - Without entering any amount, click on 'Confirm'", async ({page}) => {
        await page.on("dialog", async dialog => {
            await expect(await dialog.message()).toBe("Please enter the amount")
            await dialog.accept();
        })

        await sideAndTopbarPage.clickRechargeNowButton();
        await sideAndTopbarPage.clickConfirmButton();
    });
    
    test("TC:147 - Entering 0 as a amount and clicking on 'Confirm'", async ({page}) => {
        await page.on("dialog", async dialog => {
            await expect(await dialog.message()).toBe("Please enter a valid amount")
            await dialog.accept();
        })

        await rechargeAmount("0"); // Helper Method #1
    });

    test.skip("TC:149 - Enter a valid amount in the field and recharge it", async ({page}) => {
        
        const amount = "2034";

        await simulateTransactionStatus(page, amount, "Success");

    });

    test.skip("TC:150 - Go back when the user is in CCAvenue Payment Page", async ({page}) => {

        const amount = "1055";

        await rechargeAmount(amount); // Helper Method #1

        await page.waitForTimeout(2000);
        await page.goBack();

        await VerifyAmountAndStatus(amount, "initiated") // Helper Method #2
    })

    test.skip("TC:152 - Simulate Failure Status in the CCAvenue Payment Page", async ({page}) => {

        const amount = "115";

        await simulateTransactionStatus(page ,amount, "Failed")

    });
})

test.afterEach(async () => {

    await sideAndTopbarPage.refresh();
    await sideAndTopbarPage.logout();    

});

// Helper Functions:
async function rechargeAmount(amount){
        await sideAndTopbarPage.clickRechargeNowButton();
        await sideAndTopbarPage.enterRechargeAmtInput(amount);
        await sideAndTopbarPage.clickConfirmButton();
}

async function VerifyAmountAndStatus(amount, status){
        await sideAndTopbarPage.clickBillingDetailsButton();

        await billingDetailsPage.clickWalletTransaction();
        await expect(billingDetailsPage.firstWalletTransactionAmount).toHaveText(amount);
        await expect(billingDetailsPage.firstWalletTransactionStatus).toHaveText(status);
}

async function simulateTransactionStatus(page, amount, status){

        await rechargeAmount(amount); // Helper Method #1

        // CC Avenue Process:
        await page.waitForTimeout(3000);
        await ccAvenuePage.selectCountry("India");
        await page.waitForTimeout(3000);
        await ccAvenuePage.selectBank("Avenues Test for New TC");
        await ccAvenuePage.clickMakePaymentButton();

        await ccAvenuePage.selectStatus(status);
        await ccAvenuePage.clickSendResponseButton();

        await ccAvenuePage.clickBackToValianttInfoButton();

        if(status == "Failed"){
            await VerifyAmountAndStatus(amount, "Failure") // Helper Method #2
        }else{
            await VerifyAmountAndStatus(amount, "Success") // Helper Method #2
        }
}