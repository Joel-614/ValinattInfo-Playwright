exports.BillingDetailsPage = class BillingDetailsPage{

    constructor(page){

        this.page = page;
        this.invoiceDetails = this.page.locator("//p[text()='Invoice Details']");
        this.transactionDetails = this.page.locator("//p[text()='Transaction Details']");
        this.walletTransaction = this.page.locator("//p[text()='Wallet Transaction']");

        this.firstWalletTransactionAmount = this.page.locator("(//tbody/tr/td)[4]");
        this.firstWalletTransactionStatus = this.page.locator("(//tbody/tr/td/div)[2]");

    }

    async clickInvoicDetail(){
        await this.invoiceDetails.click();
    }

    async clickTransactionDetails(){
        await this.transactionDetails.click();
    }

    async clickWalletTransaction(){
        await this.walletTransaction.click();
    }

}