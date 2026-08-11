
import { type Page,type Locator } from "playwright";
import { BasePage } from "./Base.page";
import { productSearch } from "./Productsearch.page";

export class cartPage extends BasePage{

    readonly agreeCheckbox:Locator;
    readonly checkoutbtn:Locator;
    readonly product_searchpage:productSearch;

    constructor(page:Page){
       super(page)
       this.agreeCheckbox=page.getByRole("checkbox").last();
       this.product_searchpage = new productSearch(page);
       this.checkoutbtn=page.getByRole("button",{name:"Checkout"});
    }

    async verifycheckoutincart(){
        
        await this.ClickElement(this.agreeCheckbox);
        await this.ClickElement(this.checkoutbtn);
    }
}