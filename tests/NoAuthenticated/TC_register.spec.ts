import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../Pages/Registration.page";
import Registrationdata from "../../TestData/Registrationdata.json";
import { RegistrationDataFile } from "../../Types/Register.types";
import { Uniquemailgenerator } from "../../Helpers/UniqueEmailGenerater";

const data = Registrationdata as RegistrationDataFile;

for (const testCase of data.registrationTests) {

  test(testCase.title , { tag: testCase.tags }, async ({ page }) => {

    const registrationPage = new RegisterPage(page);

    await registrationPage.goto("/register");

    const testData = { ...testCase.data };

    if (testCase.emailMode === "unique") {
      testData.email = Uniquemailgenerator(testData.email);
    }

    await registrationPage.registerUser(testData);

      const expectedMessages = Array.isArray(testCase.expected.contains)
        ? testCase.expected.contains
        : [testCase.expected.contains];

    for (const message of expectedMessages) {
      await expect(page.getByText(message)).toBeVisible();
    }

  });

}