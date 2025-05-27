exports.CandidateDetailsPage = class CandidateDetailsPage{
    
    constructor(page){

        this.page = page;
        this.beginVerificationButton = page.locator('//div[@class="datafilteration"]//button');
        
        // Candidate Details:
        this.searchBoxIcon = page.locator("(//button)[3]");
        this.searchBox = page.locator("[id=':r11:']");
        this.searchedCandidate = page.locator("[aria-label='Candidate Sanity One']");
        this.noResultsFound = page.locator("(//p)[3]");
        this.searchBoxCancel = page.locator("button[aria-label='Clear search']");

        // Begin Verification Form:
        this.firstName = page.locator("//input[@name='firstName']");
        this.lastName = page.locator("//input[@name='lastName']");
        this.email = page.locator("//input[@name='email']");
        this.mobileNumber = page.locator("//input[@name='mobileNumber']");
        this.jobSeekerId = page.locator("//input[@name='jobSeekerId']");
        this.workOrderId = page.locator("//input[@name='workOrderId']");
        this.doItMyself = page.getByText("Do it by Myself");
        this.preOnboarding = page.getByText("Pre-Onboarding");
        this.uploadButton = page.locator("//input[@type='file']");
        this.proceedButton = page.locator("//button[@class='proceedBtn']");
        
        this.postPaidProcessButton = page.locator("(//div[@class='modalContainer']//button)[2]");
        this.formConfirm = page.locator("(//div[@class='VeriSaved']//button)[2]");

        // Checks Package:
        this.courtCheck = page.locator("(//*[@type='checkbox'])[3]");
        this.randomPackage = page.locator("(//p[@class='packageName'])[2]"); 
        this.allChecks = page.locator("//*[@class='checksList']//input");

        // Payment Method:
        this.payByWallet = page.locator("//p[text() = 'Pay Via Wallet']");

        // Background Check Invite Model:
        this.doneButton = page.locator("[class='Done']");

    }

    async enterSearchBox(word){
        await this.searchBoxIcon.click();
        await this.searchBox.fill(word);
    }

    async clickSearchBoxCancel(){
        await this.searchBoxCancel.click();
    }

    async clickBeginVerificationButton(){
        await this.beginVerificationButton.click();
    }

    async clickProceedButton(){
        await this.proceedButton.click();
    }

    async enterEmail(email){
        await this.email.fill(email);
    }

    async fillCourtCandidate(firstname, lastName, email, mobileNumber, jobSeekerId, workOrderId, fileName ,isPostPaid){

        await this.fillUpCandidateForm(firstname, lastName, email, mobileNumber, jobSeekerId, workOrderId, fileName ,isPostPaid);
        
        await this.courtCheck.click();

        await this.proceedButton.click();

        await this.postPaidProcessButton.click();

        await this.payByWallet.click();

        await this.doneButton.click();

    }

    async fillUpCandidateForm(firstname, lastName, email, mobileNumber, jobSeekerId, workOrderId, fileName ,isPostPaid){

        await this.firstName.fill(firstname);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.mobileNumber.fill(mobileNumber);
        await this.jobSeekerId.fill(jobSeekerId);
        await this.workOrderId.fill(workOrderId);
        await this.doItMyself.click();
        await this.preOnboarding.click();

        if(fileName != "")
            await this.uploadButton.setInputFiles(fileName);
    }
}