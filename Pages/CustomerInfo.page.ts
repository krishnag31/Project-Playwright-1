
import { type Locator,type Page } from "playwright";
import { BasePage } from "./Base.page";
import { RegisterPage } from "./Registration.page";


export class customerInfo extends BasePage{

    readonly page_heading:Locator;
    readonly title_blockName:Locator;
    readonly select_Gender_Male:Locator;
    readonly select_Gender_Female:Locator;
    readonly First_Name:Locator;
    readonly Last_Name:Locator;
    readonly Email:Locator;
    readonly saveBtn:Locator;
       Register_page:RegisterPage;



    constructor(page: Page){
        super(page);
        this.Register_page= new RegisterPage(page);
        this.page_heading = page.getByRole("heading",{name:"My account - Customer info"});
        this.title_blockName=page.getByText('Your Personal Details');
        this.select_Gender_Female=page.getByRole("radio",{name:"Female"});
        this.select_Gender_Male=page.getByRole("radio",{name:"Male"});
        this.First_Name=page.getByRole("textbox",{name:"First name:"});
        this.Last_Name=page.getByRole("textbox",{name:"Last name:"});
        this.Email=page.getByRole("textbox",{name:"Email:"});
        this.saveBtn=page.getByRole("button",{name:"Save"});
        

    }


    async UpadtecustomerInfo(gender:string,userfirstname:string,userlastname:string,){}
}