exports.SideNavigationPage = class SideNavigationPage{

    constructor(page){

        this.page = page;

        // Side Bar ---------------------------------------------------------------------

        // Top Section
        this.vendorUsername = page.locator("//span[@class='CompanyName Ellipsis']");
        this.vendorEmail = page.locator("//span[@class='CompanyEmail Ellipsis']");

        // Middle Section
        this.dashboardButton = page.getByRole("link", {name: "Dashboard"});
        this.candidateDetailsButton = page.getByRole("link", {name: "Candidate Details"});
        this.packDetailsButton = page.getByRole("link", {name: "Pack Details"});
        this.insufficiencyDetailsButton = page.getByRole("link", {name: "Insufficiency"});
        this.additionalCostButton = page.getByRole("link", {name: "Additional Cost"});
        this.billingDetailsButton = page.getByRole("link", {name: "Billing Details"});
        this.statusButton = page.getByRole("link", {name: "Status"});
        this.userManagementButton = page.getByRole("link", {name: "User Management"});
        this.accountSettingsButton = page.getByRole("link", {name: "Account Settings"});
        this.contactUsButton = page.getByRole("link", {name: "Contact Us"});


        // Bottom Section
        // LogOut Button
        this.logoutButton = page.locator("//div[@class='Logout CenterDiv']");
        this.logoutYesButton = page.locator("(//div[@class='logoutCont']//button)[2]");
        this.logoutNoButton = page.locator("(//div[@class='logoutCont']//button)[1]");
        
        // Side Bar ---------------------------------------------------------------------


        // Top Bar ---------------------------------------------------------------------
        this.pageTitle = page.locator("//h1[@class='Ellipsis']");
        this.searchBar = page.getByPlaceholder("Search Candidate");
        this.searchBarButton = page.locator("//div[@class='searchBar']//button");

        // Wallet
        this.walletButton = this.page.locator("[class='walletDetails ']");
        this.totalAmount = this.page.locator("[class='walletDetails '] p");
        this.rechargeNowButton = this.page.locator("[class='walletBtnPrimary']");
        this.moreDetailsButton = this.page.locator("[class='walletBtnSecondary']");
        
        this.lowBalanceAmount = this.page.locator("[class='balance']");
        this.editLowBalanceAlertButton = this.page.locator("p[class='lowBalanceNonEdit '] svg");
        this.editLowBalanceAmountInput = this.page.locator("[class='lowBalanceInput']");
        this.editLowBalanceCancelButton = this.page.locator("[class='cancelBtn']");
        this.editLowBalanceSaveButton = this.page.locator("[class='saveBtn']");
        
        this.rechargeAmtInput = this.page.getByPlaceholder("Enter Recharge Amount");
        this.walletRechargeFormCloseButton = this.page.locator("div[class='HeaderClose'] svg");
        this.confirmButton = this.page.locator("[class='confirmBtn']");

        this.notificationButton = page.locator("//div[@class='notificationSvg']");
        this.notificationTitle = page.locator("//header[@class='NotificationHeader']/h1");
        
        // Search Candidate List
        this.searchedCandidate = page.locator("//td[@data-index='1']/span/span");

        // Top Bar ---------------------------------------------------------------------
    };

    // Side Bar - Middle Section
    async clickDashboardButton(){
        await this.dashboardButton.click();
    }

    async clickCandidateDetailsButton(){
        await this.candidateDetailsButton.click();
    };

    async clickPackDetailsButton(){
        await this.packDetailsButton.click();
    };

    async clickInsufficiencyDetailsButton(){
        await this.insufficiencyDetailsButton.click();
    };

    async clickAdditionalCostButton(){
        await this.additionalCostButton.click();
    };

    async clickBillingDetailsButton(){
        await this.billingDetailsButton.click();
    }

    async clickStatusButton(){
        await this.statusButton.click();
    }

    async clickUserManagementButton(){
        await this.userManagementButton.click();
    }

    async clickAccountSettingsButton(){
        await this.accountSettingsButton.click();
    }

    async clickContactUsButton(){
        await this.contactUsButton.click();
    }

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

    async clickWalletButton(){
        await this.walletButton.click();
    }

    async clickEditLowBalanceAlertButton(){
        await this.editLowBalanceAlertButton.click();
    }

    async enterEditLowBalanceAmountInput(amount){
        await this.editLowBalanceAmountInput.fill(amount);
    }

    async clickEditLowBalanceSaveButton(){
        await this.editLowBalanceSaveButton.click();
    }

    async clickEditLowBalanceCancelButton(){
        await this.editLowBalanceCancelButton.click();
    }

    async clickRechargeNowButton(){
        await this.rechargeNowButton.click();
    }

    async clickWalletRechargeFormCloseButton(){
        await this.walletRechargeFormCloseButton.click();
    }

    async enterRechargeAmtInput(amount){
        this.rechargeAmtInput.fill(amount);
    }

    async clickConfirmButton(){
        await this.confirmButton.click();
    }

    async refresh(){
        await this.page.reload();
    }

    async clickNotificationButton(){
        await this.notificationButton.click();
    }

};