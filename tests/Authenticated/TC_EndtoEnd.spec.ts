
import { test, Locator, expect } from "@playwright/test";
import { CheckoutPage } from "../../Pages/Checkout.page";


test("viewitem ", async ({ page }) => {
    await page.goto("/");
    await page.goto("/apparel-shoes");
    const Checkout_Page = new CheckoutPage(page);
    await Checkout_Page.product_searchpage.searchProduct("Blue Jeans");
    await Checkout_Page.product_cartpage.verifycheckoutincart();
    await Checkout_Page.BillingAddressStep();
    await Checkout_Page.ShippingAddressStep();
    await Checkout_Page.ShippingMethodStep();
    await Checkout_Page.PaymentMethodStep();
    await Checkout_Page.PaymentInformationStep();
    await Checkout_Page.ConfirmOrderStep();
    
     await expect(page).toHaveURL("/checkout/completed/")
     await expect(Checkout_Page.successmessage).toBeVisible();
 
});
