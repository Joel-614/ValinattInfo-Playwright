Valiantt Info Regression Automation Suite:
    Created using Playwright with Javascript

No of Testcases Currently: 

Testcases Covered: 47

Vendor:

    1. LoginTests:
        1. Validate the Design
        2. Validate the Username Input
        3. Validate the Password Input
        4. Validate Invalid Login Scenarios (Without Username and Password)
        5. Validate Invalid Login Scenarios (With Username and without Password)
        6. Validate Invalid Login Scenarios (Without Username and with Password)
        7. Validate Invalid Login Scenarios (With Invalid Username and with Valid Password)
        8. Validate Invalid Login Scenarios (With Valid Username and with Inalid Password)
        9. Validate Invalid Login Scenarios (With Invalid Username and Password)
        10. Valdidate Valid Login
        11. Validate the Forgot Password Link

    2. ForgotPasswordTests:
        1. Validate the Design
        2. Validate the Invalid Forgot Password Scenarios (Clicking Next Button without entering username)
        3. Validate the Invalid Forgot Password Scenarios (Clicking Next Button with an Invalid username)
        4. Validate the Valid Forgot Password Scenario

    3. SideAndTopbarTests:
        1. Validate the Vendor - Side Navigation's Dashboard
        2. Validate the Vendor - Side Navigation's Candidate Details
        3. Validate the Vendor - Side Navigation's Pack Details
        4. Validate the Vendor - Side Navigation's Insufficiency Details
        5. Validate the Vendor - Side Navigation's Additional Cost
        6. Validate the Vendor - Side Navigation's Billing Details
        7. Validate the Vendor - Side Navigation's Status
        8. Validate the Vendor - Side Navigation's User Management
        9. Validate the Vendor - Side Navigation's Account Settings
        10. Validate the Vendor - Side Navigation's Contact Us

    4. CandidateDetailsTests:
        1. Validating the Searchbox (Validating if the search candidate is being retrieved)
        2. Validating the Searchbox (Validating the list if we given an invalid candidate Name)
        3. Validating the Searchbox (Validating the list after clicking on cancel)

        4. BGV Form (Clicking on 'Proceed' Button without filling up)
        5. BGV Form (Clicking on 'Proceed' Button without giving any resume file)
        6. BGV Form (Clicking on 'Proceed' Button with Invalid Email Address)

        7. Validating the Custom Package Checks
        8. Validating the Check Search Bar

    5. PackDetailsTests:
        1. Validate the Design
        2. Validating Pack Creation Process
        3. Validate error when creating a pack with an existing pack name
        4. Validate Naming Packs Negative Scenarios
    
    6. RegressionTests:
        1. Validating Court Check Candidate

    7. WalletTests:
        Validate the Low Balance Alert
            1. Clicking on 'Edit' Button
            2. Clicking on 'Cancel' Button
            3. Click on 'Edit' and add a new amount then click on 'Save'
            4. Clicking on 'Save' without entering nothing in the amount input

        Validate the Wallet Recharge
            1. Without entering any amount, click on 'Confirm'
            2. Entering 0 as a amount and clicking on 'Confirm'
            3. Enter a valid amount in the field and recharge it
            4. Go back when the user is in CCAvenue Payment Page
            5. Simulate Failure Status in the CCAvenue Payment Page
