import { expect, Expect, type Locator, type Page } from "playwright/test";
import { basecomponent } from "./Basecomponent.page";

export class footerPageComponent extends basecomponent {

    //headings for the footers

    readonly footersection:Locator;

    readonly information_heading: Locator;
    readonly Customerservice_heading: Locator;
    readonly myaccount_heading: Locator;
    readonly followus_heading: Locator;


    // Information
    readonly sitemapLink: Locator;
    readonly shippingReturnsLink: Locator;
    readonly privacyNoticeLink: Locator;
    readonly conditionsOfUseLink: Locator;
    readonly aboutUsLink: Locator;
    readonly contactUsLink: Locator;

    // Customer Service
    readonly searchLink: Locator;
    readonly newsLink: Locator;
    readonly blogLink: Locator;
    readonly recentlyViewedProductsLink: Locator;
    readonly compareProductsListLink: Locator;
    readonly newProductsLink: Locator;

    // My Account
    readonly myAccountLink: Locator;
    readonly ordersLink: Locator;
    readonly addressesLink: Locator;
    readonly shoppingCartLink: Locator;
    readonly wishlistLink: Locator;

    // Follow Us
    readonly facebookLink: Locator;
    readonly twitterLink: Locator;
    readonly rssLink: Locator;
    readonly youtubeLink: Locator;
    readonly googlePlusLink: Locator;



    readonly copyrightText: Locator;
    readonly footerdisclimer:Locator;

    constructor(page: Page) {
        super(page);


        this.footersection= page.locator(".footer");

        this.Customerservice_heading = page.getByRole("heading", { name: "CUSTOMER SERVICE" });
        this.followus_heading = page.getByRole("heading", { name: "Follow us" });
        this.information_heading = page.getByRole("heading", { name: "INFORMATION" });
        this.myaccount_heading = page.getByRole("heading", { name: "MY ACCOUNT" });


        // Information
        this.sitemapLink = page.getByRole('link', { name: 'Sitemap' });
        this.shippingReturnsLink = page.getByRole('link', { name: 'Shipping & Returns' });
        this.privacyNoticeLink = page.getByRole('link', { name: 'Privacy Notice' });
        this.conditionsOfUseLink = page.getByRole('link', { name: 'Conditions of Use' });
        this.aboutUsLink = page.getByRole('link', { name: 'About us' });
        this.contactUsLink = page.getByRole('link', { name: 'Contact us' });

        // Customer Service
        this.searchLink = page.getByRole('link', { name: 'Search' });
        this.newsLink = page.getByRole('link', { name: 'News' });
        this.blogLink = page.getByRole('link', { name: 'Blog' });
        this.recentlyViewedProductsLink = page.getByRole('link', { name: 'Recently viewed products' });
        this.compareProductsListLink = page.getByRole('link', { name: 'Compare products list' });
        this.newProductsLink = page.getByRole('link', { name: 'New products' });

        // My Account
        this.myAccountLink = page.getByRole('link', { name: 'My account' });
        this.ordersLink = page.getByRole('link', { name: 'Orders' });
        this.addressesLink = page.getByRole('link', { name: 'Addresses' });
        this.shoppingCartLink = page.getByRole('link', { name: 'Shopping cart' });
        this.wishlistLink = page.getByRole('link', { name: 'Wishlist' });

        // Follow Us
        this.facebookLink = page.getByRole('link', { name: 'Facebook' });
        this.twitterLink = page.getByRole('link', { name: 'Twitter' });
        this.rssLink = page.getByRole('link', { name: 'RSS' });
        this.youtubeLink = page.getByRole('link', { name: 'YouTube' });
        this.googlePlusLink = page.getByRole('link', { name: 'Google+' });

        this.copyrightText = page.locator('.footer-powered-by');
        this.footerdisclimer=page.locator(".footer-disclaimer");
    }



    async footervisible() {
        await expect(this.footersection).toBeVisible();
    }

    


        
    
}







