

import { Expect, type Page, type Locator, expect } from "playwright/test";

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goto(path: string):Promise<void> {
        await this.page.goto(path);
    }
    async Pagetitlecheck(title: string):Promise<void>  {
        await expect(this.page).toHaveTitle(title);
    }
    async Exceptedurl(url: RegExp) :Promise<void> {
        await expect(this.page).toHaveURL(url);
    }

    
    async FillElement(locator: Locator, value: string):Promise<void>  {
        await expect(locator).toBeVisible();
        await locator.fill(value);

    }
    async ClickElement(locator: Locator):Promise<void>  {
        await expect(locator).toBeVisible();
        await locator.click();
    }
    
    async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) ?? "";

}
}