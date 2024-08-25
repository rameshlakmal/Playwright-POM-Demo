import { expect,test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;



test.describe('Purchase Product' , () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
        await pm.loginPage.navigate()
        await pm.loginPage.login('standard_user','secret_sauce')
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    
    test('Purchase Products', async () => {
        await pm.homePage.AddProductsToCart()
        await pm.homePage.clickCart()
        await pm.purchasePage.clickCheckoutButton()
        await pm.purchasePage.enterFirstName()
        await pm.purchasePage.enterLastName()
        await pm.purchasePage.enterPostalCode()
        await pm.purchasePage.clickContinueButton()
        await pm.purchasePage.assertTotal('Item total: $113.94999999999999')
        await pm.purchasePage.assertTax('Tax: $9.12')
        await pm.purchasePage.assertTotalWithTax('Total: $123.07')
        await pm.purchasePage.clickFinishButton()
        await pm.purchasePage.assertSuccess('Thank you for your order!')
    })


})