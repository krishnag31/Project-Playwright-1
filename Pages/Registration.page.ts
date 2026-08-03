import { type Locator, type Page, expect } from "playwright/test";
import { BasePage } from "./Base.page";
import { RegistrationUser } from "../Types/Register.types"



export class RegisterPage extends BasePage {

    readonly register_hearder: Locator;
    readonly genderMaleCheck: Locator;
    readonly genderFemalecheck: Locator;
    readonly First_name: Locator;
    readonly Last_name: Locator;
    readonly Email: Locator;
    
    readonly password_new: Locator;
    readonly confirmPassword: Locator;
    readonly register_button: Locator;

    constructor(page: Page) {
        super(page)

        this.register_hearder = page.getByText("Register");
        this.genderMaleCheck = page.getByRole("radio", { name: "Male",exact: true  });
        this.genderFemalecheck = page.getByRole("radio", { name: "Female",exact: true  });
        this.First_name = page.getByRole("textbox", { name: "First name:" })
        this.Last_name = page.getByRole("textbox", { name: "Last name:" })
        this.Email = page.getByRole("textbox", { name: "Email" })
        this.password_new = page.getByRole("textbox", { name: "Password:",exact: true  });
        this.confirmPassword = page.getByRole("textbox", { name: "Confirm password:" });
        this.register_button = page.getByRole("button", { name: "Register" });
    }
    async enterFirstName(value: string) {
       
        await this.FillElement(this.First_name, value);
    }
     async enterEmail(value: string ) {
        
        await this.FillElement(this.Email, value);
    }
    async enterLastName(value: string) {
       
        await this.FillElement(this.Last_name, value);
    }
   
    async enterConfirmpassword(value: string ) {
       
        await this.FillElement(this.confirmPassword, value);
    }
    async enterPassword(value: string ) {
        
        await this.FillElement(this.password_new, value);
    }
    async registerbtnclick() {
        
        await this.ClickElement(this.register_button);
    }
    async selectGender(genderselection: string) {
        if (genderselection === 'Female') {
            await this.ClickElement(this.genderFemalecheck);
        }
        else {
            await this.ClickElement(this.genderMaleCheck);
        }
    }
    async registerUser(data: RegistrationUser): Promise<void> {
    await this.selectGender(data.gender);
    await this.enterFirstName(data.firstname);
    await this.enterLastName(data.lastname);
    await this.enterEmail(data.email);
    await this.enterPassword(data.password);
    await this.enterConfirmpassword(data.confirmpassword);

    await this.registerbtnclick();
}
    
}





