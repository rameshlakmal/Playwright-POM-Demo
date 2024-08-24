import { expect } from "@playwright/test";
import CommonAction from "../utils/CommonAction.js";

export default class HomePage{
    constructor(Page){
        this.action = new CommonAction(Page)
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
        await this.action.click('#add-to-cart-sauce-labs-backpack')
    }

    async Add_SauceLabsBikeLight_ToCart(){
        await this.action.click('#add-to-cart-sauce-labs-bike-light')
    }

    async Add_SauceLabsBoltTshirt_ToCart(){
        await this.action.click('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    async Add_SauceLabsFleeceJacket_ToCart(){
        await this.action.click('#add-to-cart-sauce-labs-fleece-jacket')
    }

    async Add_SauceLabsOnesie_ToCart(){
        await this.action.click('#add-to-cart-sauce-labs-onesie')
    }



    async AddProductsToCart(){
        await this.action.click('#add-to-cart-sauce-labs-bolt-t-shirt')
        await this.action.click('#add-to-cart-sauce-labs-fleece-jacket')
        await this.action.click('#add-to-cart-sauce-labs-bike-light')
        await this.action.click('#add-to-cart-sauce-labs-backpack')
        await this.action.click('#add-to-cart-sauce-labs-onesie')
    }


    // Remove products from cart one by one
    async Remove_SauceLabsBackPack_FromCart(){
        await this.action.click('#remove-sauce-labs-backpack')
    }

    async Remove_SauceLabsBikeLight_FromCart(){
        await this.action.click('#remove-sauce-labs-bike-light')
    }

    async Remove_SauceLabsBoltTshirt_FromCart(){
        await this.action.click('#remove-sauce-labs-bolt-t-shirt')
    }

    async Remove_SauceLabsFleeceJacket_FromCart(){
        await this.action.click('#remove-sauce-labs-fleece-jacket')
    }

    async Remove_SauceLabsOnesie_FromCart(){
        await this.action.click('#remove-sauce-labs-onesie')
    }






    // Get count of the cart and verify it with the expected value
    async getCartCount(){
        return await this.action.getText('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]/span[1]')
    }

    async assertCartCount(expectedCartCount){
        const actualCount = await this.getCartCount()
        expect(actualCount).toContain(expectedCartCount)
    }
}