exports.PackDetailsPage = class PackDetailsPage{

    constructor(page){

        // /pack-details
        this.page = page;
        this.pageTitle = this.page.locator("[class='topBar'] h1");
        this.customizePackBtn = this.page.locator("//button[text() = 'Customize pack']");
        
        this.allChecksPack = this.page.locator("[title='All Checks Pack']");
        this.allChecksPackDeleteBtn = this.page.locator("[title='All Checks Pack'] ~ svg")

        // pack-details/customizepack
        this.selectAllChecksInp = this.page.locator("[class='SelectAll'] input");
        this.clearAllChecksInp = this.page.locator("[class='Clear']");
        this.makeAPlanBtn = this.page.getByText("Make a plan");
        this.packNameInp = this.page.locator("[placeholder='Pack name']");
        this.createPackBtn = this.page.locator("[type='submit']");
        this.createdPackDoneBtn = this.page.locator("[class='AlertContent'] button");

    }

    async clickAllChecksPackDeleteBtn(){
        await this.allChecksPackDeleteBtn.click();
    }

    async clickCustomizePackBtn(){
        await this.customizePackBtn.click();
    }

    async clickSelectAllChecksInp(){
        await this.selectAllChecksInp.click();
    }

    async clickClearAllChecksInp(){
        await this.clearAllChecksInp.click();
    }

    async clickMakeAPlanBtn(){
        await this.makeAPlanBtn.click();
    }

    async enterPackName(packName){
        await this.packNameInp.fill(packName);
    }

    async clickCreatePackBtn(){
        await this.createPackBtn.click();
    }

    async clickCreatedPackDoneBtn(){
        await this.createdPackDoneBtn.click();
    }

}