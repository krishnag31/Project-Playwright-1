
import{type Page, type Locator, expect} from "@playwright/test"


export class basecomponent{

    protected readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }


async ClickElement(locator: Locator, name: "Element") {
        await expect(locator).toBeVisible();
        await locator.click();
    }
async ElementVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

     async Pagetitlecheck(title: string) {
        await expect(this.page).toHaveTitle(title);
    }
}