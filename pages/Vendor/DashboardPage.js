exports.DashboardPage = class DashboardPage{

    constructor(page){

        this.page = page;
        this.checkStatusTitle = page.locator("[class='statusContainer'] h1"); 
        this.tatOverviewTitle = page.locator("[class='overview'] h1");
        this.amountSpentTitle = page.locator("[class='amountSpent'] h1");
        this.statusTitle = page.locator("[class='statusChart'] h1");
        this.packUsageOverviewTitle = page.locator("[class='packDetails'] h1");
        this.averageCompletionOfChecksTitle = page.locator("[class='verticalBarContainer'] h1");
        this.candidateDetailTitle = page.locator("[class='userCred'] h1");

    }

}