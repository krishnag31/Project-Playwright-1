

import { Expect,type Location,type Page, type Locator } from "playwright/test";
import { basecomponent } from "./Basecomponent.page";

export class headercomponent extends basecomponent{

    //Top Links
   readonly registerLink: Locator;
   readonly LoginLink:Locator;
   readonly shoppingcartLink: Locator;
   readonly WishlistLink:Locator;

    //middle liksbar

  readonly Books:Locator;
  readonly  Electronics:Locator;
  readonly  Computers:Locator;
  readonly  Giftcards:Locator;
  readonly  jewelry:Locator;
   readonly digitaldownloads:Locator;
   readonly apperelandshoes:Locator;

    //searching


   readonly searchStoretextbox:Locator;
   readonly searchbutton:Locator;
    
    constructor(page:Page){
    super(page);

    this.registerLink = page.getByRole("link",{name:"Register"});
    this.LoginLink = page.getByRole("link",{name:"Log in"});
    this.shoppingcartLink =page.locator('span:has-text("Shopping cart")')
    this.WishlistLink = page.locator('span:has-text("Wishlist")');

   this.Books= page.getByRole("link",{name:"BOOKS"});
   this.Computers=page.getByRole("link",{name:"COMPUTERS"});
   this.Electronics=page.getByRole("link",{name:"ELECTRONICS"});
   this.Giftcards=page.getByRole("link",{name:"GIFT CARDS"});
   this.jewelry=page.getByRole("link",{name:"JEWELRY"});
   this.digitaldownloads=page.getByRole("link",{name:"DIGITAL DOWNLOADS"});
   this.apperelandshoes=page.getByRole("link",{name:"APPAREL & SHOES"})


    this.searchStoretextbox=page.locator('#small-searchterms');
    this.searchbutton=page.getByRole("button",{name:"Search"});

    }
}

      



    