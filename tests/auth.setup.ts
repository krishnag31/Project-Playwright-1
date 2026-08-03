import { test as setup } from "@playwright/test";
import LoginData from "../TestData/LoginTestdata.json";
import {loginPage} from "../Pages/Login.page";

import { loadJsonWithEnv } from "../Helpers/jsonLoader";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  const data = loadJsonWithEnv(LoginData);
  const login = data.LoginTest[0];

  const LoginpageObj = new loginPage(page);
  await page.goto("/login");
  await LoginpageObj.loginToApp(login.data);

  await page.context().storageState({ path: authFile });
});