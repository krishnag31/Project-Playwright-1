import { type Locator, type Page, expect } from "playwright/test";
import { BasePage } from "./Base.page";
import { Loginuser } from "../Types/Login.types";


export class loginPage extends BasePage {
    readonly welcomemessage: Locator;

    readonly customerBlock: Locator;

    readonly usermail: Locator;
    readonly userpassword: Locator;
    readonly remembermeCheckbox: Locator;
    readonly remembermetext: Locator;
    readonly forgotpasswordLink: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);

        this.welcomemessage = page.getByText("Welcome, Please Sign In!")
        this.customerBlock = page.getByText("Returning Customer");
        this.usermail = page.getByRole("textbox", { name: "Email" });
        this.userpassword = page.getByRole("textbox", { name: "Password" });
        this.remembermetext = page.getByText("Remember me?");
        this.remembermeCheckbox = page.getByRole("checkbox", { name: "Remember me?" });
        this.forgotpasswordLink = page.getByRole("link", { name: "Forgot password?" });
        this.loginButton = page.getByRole("button", { name: "Log in" });

    }

    async loginToApplication(usermail: string, userpassword: string) {
        await this.FillElement(this.usermail, usermail);
        await this.FillElement(this.userpassword, userpassword);
        await this.ClickElement(this.loginButton);
    }

    async verifyRememberMe(email: string, password: string,locator:Locator){
        await this.loginToApplication(email, password);
        await this.ClickElement(this.remembermetext);
        await this.ClickElement(this.loginButton);
    }

    async verifyForgotPasswordLink(locator:Locator){
        await this.ClickElement(this.forgotpasswordLink);
         await expect(this.page).toHaveTitle("Demo Web Shop. Password Recovery");
    }

    async enterUserName(value:string){
        await this.FillElement(this.usermail,value);
    }

    async enterUserPassword(value:string){
        await this.FillElement(this.userpassword,value);
    }
   async clickLoginBtn(){
    await this.ClickElement(this.loginButton);
   }
   async loginToApp(data:Loginuser):Promise<void>{
   await this.enterUserName(data.UserEmail);
   await this.enterUserPassword(data.UserPassword);
   await this.clickLoginBtn();

   }
}