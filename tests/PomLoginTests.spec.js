import { expect,test } from "@playwright/test";
import PomManager from "../pages/PomManager.js";

let pm;


test.describe('Login Test' , () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('standard_user','secret_sauce')
        await pm.homePage.assertCurrentURL('https://www.saucedemo.com/inventory.html')
        
        //Assert value in direct in test

        // const message = await pm.securePage.getMessage()
        // expect(message).toContain('You logged into a secure area!')
    })

    test('Login with invalid credentials',async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith','123456!') 
        await pm.loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')

    })

    test('Login without user name',async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('','secret_sauce') 
        await pm.loginPage.assertErrorMessage('Epic sadface: Username is required')
    })

    test('Login without password',async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('standard_user','') 
        await pm.loginPage.assertErrorMessage('Epic sadface: Password is required')
    })

})

