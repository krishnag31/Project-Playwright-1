
import { test } from "@playwright/test";

test("viewitem ", async ({ page }) => {
    await page.goto("/");
    await page.goto("/apparel-shoes");
    

    console.log("Krishna");
});