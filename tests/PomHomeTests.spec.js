import { expect,test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;



test.describe('Item Add and Remove from Cart Test' , () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
        await pm.loginPage.navigate();
        await pm.loginPage.login('standard_user','secret_sauce')
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Add to Cart', async () => {
        await pm.homePage.Add_SauceLabsBackPack_ToCart();
        await pm.homePage.assertCartCount('1')
        await pm.homePage.Add_SauceLabsBikeLight_ToCart();
        await pm.homePage.assertCartCount('2')
        await pm.homePage.Add_SauceLabsBoltTshirt_ToCart();
        await pm.homePage.assertCartCount('3')
        await pm.homePage.Add_SauceLabsFleeceJacket_ToCart();
        await pm.homePage.assertCartCount('4')
        await pm.homePage.Add_SauceLabsOnesie_ToCart();
        await pm.homePage.assertCartCount('5')
        
    })

    test('Remove from Cart', async () =>{
        await pm.homePage.AddProductsToCart();
        await pm.homePage.assertCartCount('5')
        await pm.homePage.Remove_SauceLabsBackPack_FromCart();
        await pm.homePage.assertCartCount('4')
        await pm.homePage.Remove_SauceLabsBikeLight_FromCart();
        await pm.homePage.assertCartCount('3')
        await pm.homePage.Remove_SauceLabsBoltTshirt_FromCart();
        await pm.homePage.assertCartCount('2')
        await pm.homePage.Remove_SauceLabsFleeceJacket_FromCart();
        await pm.homePage.assertCartCount('1')
        await pm.homePage.Remove_SauceLabsOnesie_FromCart();
    })
})