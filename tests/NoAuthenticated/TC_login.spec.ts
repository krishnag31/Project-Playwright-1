
import { test, expect } from "@playwright/test";
import { loginPage } from "../../Pages/Login.page";
import { LoginDataFile } from "../../Types/Login.types";
import Logindata from "../../TestData/LoginTestdata.json";
import { loadJsonWithEnv } from "../../Helpers/jsonLoader";

const data = loadJsonWithEnv(Logindata) as LoginDataFile;
for (const testCase of data.LoginTest) {
    test(testCase.title, async ({ page }) => {
        const loginPageInstance = new loginPage(page);
          
        await loginPageInstance.goto("/login");
        const testData={...testCase.data};
        await loginPageInstance.loginToApp(testData);
        const expectedMessages = Array.isArray(testCase.expected.contains)
                ? testCase.expected.contains
                : [testCase.expected.contains];
        
            for (const message of expectedMessages) {
              await expect(page.getByText(message)).toBeVisible();
            }
        
    });
}