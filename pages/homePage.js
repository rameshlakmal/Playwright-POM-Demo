import { expect } from "@playwright/test";
import CommonAction from "../utils/CommonAction.js";
import { LocatorFile } from '../Locators/HomePageLocators.js'


export default class HomePage{
    constructor(Page){
        this.action = new CommonAction(Page)
        this.locators = LocatorFile.LocatorFileTest;

    }

    // Get Current URL and compare it with expected URL
    async getURL(){
        return await this.action.getCurrentUrl()
    }

    async assertCurrentURL(verifyURL){
        const currentURL = await this.getURL()
        expect(currentURL).toContain(verifyURL)
    }


    //Add products to cart one by one

    async Add_SauceLabsBackPack_ToCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_BACKPACK)
    }

    async Add_SauceLabsBikeLight_ToCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_BIKE_LIGHT)
    }

    async Add_SauceLabsBoltTshirt_ToCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_BOLT_TSHIRT)
    }

    async Add_SauceLabsFleeceJacket_ToCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_FLEECE_JACKET)
    }

    async Add_SauceLabsOnesie_ToCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_ONESIE)
    }



    async AddProductsToCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_BOLT_TSHIRT)
        await this.action.click(this.locators.ADD_SAUCE_LABS_FLEECE_JACKET)
        await this.action.click(this.locators.ADD_SAUCE_LABS_BIKE_LIGHT)
        await this.action.click(this.locators.ADD_SAUCE_LABS_BACKPACK)
        await this.action.click(this.locators.ADD_SAUCE_LABS_ONESIE)
    }


    // Remove products from cart one by one
    async Remove_SauceLabsBackPack_FromCart(){
        await this.action.click(this.locators.REMOVE_SAUCE_LABS_BACKPACK)
    }

    async Remove_SauceLabsBikeLight_FromCart(){
        await this.action.click(this.locators.REMOVE_SAUCE_LABS_BIKE_LIGHT)
    }

    async Remove_SauceLabsBoltTshirt_FromCart(){
        await this.action.click(this.locators.REMOVE_SAUCE_LABS_BOLT_TSHIRT)
    }

    async Remove_SauceLabsFleeceJacket_FromCart(){
        await this.action.click(this.locators.REMOVE_SAUCE_LABS_FLEECE_JACKET)
    }

    async Remove_SauceLabsOnesie_FromCart(){
        await this.action.click(this.locators.ADD_SAUCE_LABS_ONESIE)
    }






    // Get count of the cart and verify it with the expected value
    async getCartCount(){
        return await this.action.getText('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]/span[1]')
    }

    async assertCartCount(expectedCartCount){
        const actualCount = await this.getCartCount()
        expect(actualCount).toContain(expectedCartCount)
    }

    //Click Cart Icon
    async clickCart(){
        return await this.action.click('#shopping_cart_container')
    }
}