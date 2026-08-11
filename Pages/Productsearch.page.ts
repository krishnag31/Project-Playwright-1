
import { BasePage } from "./Base.page";
import { expect, type Locator, type Page } from "@playwright/test"

export class productSearch extends BasePage {
    readonly product_page_title: Locator;

    readonly product_searchbox:Locator;
     readonly Product_selectfirstitemfromgrid:Locator;
     readonly Searchbtn:Locator;
     readonly AddtoCartbtn:Locator;
     readonly notification:Locator;
     readonly shopingcartlink:Locator;


    constructor(page: Page) {
        super(page);
       
        this.product_page_title = page.locator(".page-title h1");
        this.product_searchbox=page.getByRole("textbox").first();
        this.Product_selectfirstitemfromgrid=page.locator(".product-item,.a").first();
        this.Searchbtn=page.getByRole("button",{name:"Search"})
        this.AddtoCartbtn=page.getByRole("button",{name:"Add to cart"}).first();
        this.notification=page.locator(".bar-notification")
        this.shopingcartlink=this.notification.locator("p a");
    }

    async checkpageheader(pagehearder:string){
    expect (this.product_page_title).toBe(pagehearder);
    }
    async searchProduct(value:string){
      await this.FillElement(this.product_searchbox,value); 
      await this.ClickElement(this.Searchbtn);
      await this.ClickElement(this.Product_selectfirstitemfromgrid);
      await this.page.waitForLoadState("load");
      await this.ClickElement(this.AddtoCartbtn);
      await this.ProductAddedNotification();
      await this.ClickElement(this.shopingcartlink);
    }

    async ProductAddedNotification(){
    await expect(this.notification).toBeVisible();
    await expect(this.notification).toHaveText("The product has been added to your shopping cart");
    }

   
 





}

