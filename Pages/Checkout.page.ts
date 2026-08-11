
import {type Page,type Locator,expect} from "@playwright/test"
import { BasePage } from "./Base.page"
import { cartPage } from "./Cart.Page"
import { productSearch } from "./Productsearch.page"
import {CheckOuts} from "../Types/Checkout.types"

export class CheckoutPage extends BasePage{
    readonly stepHeaders: Locator;
    readonly confirmbtn:Locator;
    readonly billingAddressDropdown: Locator;
    readonly continueBtn: Locator;
    readonly successmessage:Locator;
    readonly Dropdownname:Locator;

   readonly product_searchpage:productSearch;
   readonly product_cartpage:cartPage;

    constructor(page:Page){
        super(page);
        this.stepHeaders=page.locator(".step-title");
        this.Dropdownname=page.getByRole("combobox",{name:"Select a billing address from your address book or enter a new address"})
        this.billingAddressDropdown=this.Dropdownname.locator("select option");
        this.continueBtn=page.getByRole("button",{name:"Continue"});
        this.confirmbtn=page.getByRole("button",{name:"Confirm"});
        this.successmessage=page.getByText("Your order has been successfully processed!")
        this.product_searchpage= new productSearch(page);
        this.product_cartpage= new cartPage(page);

    }
    async selectExistingBillingAddress() {
      await  this.billingAddressDropdown.first();
    }

    async verifyStepHeader(step: CheckOuts) {
    const currentStep = this.stepHeaders.filter({ hasText: step });
    await expect(currentStep).toBeVisible();
}

   async Clickcontinebtn(){

     await this.ClickElement(this.continueBtn);
   }

  async BillingAddressStep(){
     await this.verifyStepHeader("Billing Address");
     await this.selectExistingBillingAddress();
     await this.Clickcontinebtn();
    
   }
    async ShippingAddressStep(){
     //await this.verifyStepHeader("Shipping Address");
     await this.Clickcontinebtn();
    
   }
   async ShippingMethodStep(){
     await this.verifyStepHeader("Shipping Method");
     await this.Clickcontinebtn();
     
   }
    async PaymentMethodStep(){
     await this.verifyStepHeader("Payment Method");
     await this.Clickcontinebtn();
     await this.verifyStepHeader("Payment Information");
   }
    async PaymentInformationStep(){
     await this.verifyStepHeader("Payment Information");
     await this.Clickcontinebtn();
     await this.verifyStepHeader("Confirm Order");
   }
    async ConfirmOrderStep(){
     await this.verifyStepHeader("Confirm Order");
     await this.ClickElement(this.confirmbtn);
   }

    
  
};