exports.OutlookPage = class OutlookPage{

    constructor(page){
        
        this.page = page;
        this.emailInp = page.locator("[id='i0116']");
        this.nextBtn = page.locator("[id='idSIButton9']");
        this.passwowrdInp = page.locator("[id='i0118']");   

        // Stay Signed Section:
        this.signedInNoBtn = page.locator("[id='idBtn_Back']");

        // Inbox Section:
        this.profilePicDiv = page.locator("[id='meInitialsButton']");
        this.signOutAnchor = page.locator("[id='mectrl_body_signOut']");
        this.signedOutMessage = page.getByText("You signed out of your account");

        // Favourites Section:
        this.valianttInfoFolder = page.locator("(//*[@data-folder-name='valianttinfo'])[1]");
        this.firstMailDiv = page.locator("(//*[@aria-label='Select a conversation'])[1]");
        this.selectAllMessagesInp = page.locator("[aria-label='Select all messages']");
        
        this.deleteIcon = page.locator("(//div[@aria-label='Empty folder'])[1]");
        this.emptyFolder = page.locator("//span[text() = 'Empty folder']");
        this.deleteAll = page.locator("//button[text() = 'Delete all']");

    }

    async login(username, password){
        
        await this.emailInp.fill(username);
        await this.nextBtn.click();
        
        await this.passwowrdInp.fill(password);
        await this.nextBtn.click();
        
        await this.signedInNoBtn.click();
    }

    async logout(){

        await this.profilePicDiv.click();
        await this.signOutAnchor.click();

    }

    async clickValianttInfoFolder(){
        await this.valianttInfoFolder.click();
    }

    async clickFirstMailDiv(){
        await this.firstMailDiv.click();
    }

    async clickSelectAllMessagesInp(){
        await this.selectAllMessagesInp.click();
    }

    async clickDeleteIcon(){
        await this.deleteIcon.click();
    }

    async clickEmptyFolder(){
        await this.emptyFolder.click();
    }

    async clickDeleteAll(){
        await this.deleteAll.click();
    }
}