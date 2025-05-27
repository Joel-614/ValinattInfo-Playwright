exports.CCAvenuePage = class CCAvenuePage{

    constructor(page){

        this.page = page;
        this.countrySelect = this.page.locator("[name='billCountry']");
        this.banksSelect = this.page.locator("[name='netBankingBank']");
        this.makePaymentButton = this.page.locator("[id='SubmitBillShip']"); 
        
        this.statusSelect = this.page.locator("[id='status']");
        this.sendResponseButton = this.page.locator("[id='btn']");
        this.backToValianttInfoButton = this.page.getByText("ValianttInfo");

    }

    async selectCountry(countryName){
        await this.countrySelect.selectOption(countryName);
    }

    async selectBank(bankName){
        await this.banksSelect.selectOption(bankName);
    }

    async clickMakePaymentButton(){
        await this.makePaymentButton.click();
    }

    async selectStatus(statueName){
        await this.statusSelect.selectOption(statueName);
    }

    async clickSendResponseButton(){
        await this.sendResponseButton.click();
    }

    async clickBackToValianttInfoButton(){
        await this.backToValianttInfoButton.click();
    }
    
}