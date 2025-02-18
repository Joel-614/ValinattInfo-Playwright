exports.SideNavigationPage = class SideNavigationPage{

    constructor(page){

        this.page = page;

        // Side Bar - Top Section
        this.vendorUsername = page.locator("//span[@class='CompanyName Ellipsis']");
        this.vendorEmail = page.locator("//span[@class='CompanyEmail Ellipsis']");

        // Side Bar - Middle Section
        this.dashboardButton = page.getByRole("link", {name: "Dashboard"});
        this.candidateDetailsButton = page.getByRole("link", {name: "Candidate Details"});

        // Side Bar - Bottom Section
        // LogOut Button
        this.logoutButton = page.locator("//div[@class='Logout CenterDiv']");
        this.logoutYesButton = page.locator("(//div[@class='logoutCont']//button)[2]");
        this.logoutNoButton = page.locator("(//div[@class='logoutCont']//button)[1]");
        
        // Top Bar
        this.pageTitle = page.locator("//h1[@class='Ellipsis']");
        this.searchBar = page.getByPlaceholder("Search Candidate");
        this.searchBarButton = page.locator("//div[@class='searchBar']//button");
        this.notificationButton = page.locator("//div[@class='notificationSvg']");
        this.notificationTitle = page.locator("//header[@class='NotificationHeader']/h1");
    };

    // Side Bar - Middle Section
    async clickDashboardButton(){
        await this.dashboardButton.click();
    }

    async clickCandidateDetailsButton(){
        await this.candidateDetailsButton.click();
    };

    // Side Bar - Bottom Section
    async logout(){
        await this.logoutButton.click();
        await this.logoutYesButton.click();
    }

    // Top Bar
    async searchCandidate(candidateName){
        await this.searchBar.fill(candidateName);
        await this.searchBarButton.click();
    }

    async clickNotificationButton(){
        await this.notificationButton.click();
    }

};