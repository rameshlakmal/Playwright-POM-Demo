import { expect } from "@playwright/test";
import CommonAction from "../utils/CommonAction.js";
import { LocatorFile } from '../Locators/PurchasePageLocators.js'


export default class PurchasePage{
    constructor(Page){
        this.action = new CommonAction(Page)
        this.locators = LocatorFile.LocatorFileTest;

    }

    
    async clickCheckoutButton(){
        return await this.action.click(this.locators.CHECKOUT_BUTTON)
    }

    async enterFirstName(){
        return await this.action.fill(this.locators.FIRST_NAME,'Ramesh')
    }

    async enterLastName(){
        return await this.action.fill(this.locators.LAST_NAME,'Lakmal')
    }

    async enterPostalCode(){
        return await this.action.fill(this.locators.POSTAL_CODE,'20400')
    }

    async clickContinueButton(){
        return await this.action.click(this.locators.CONTINUE_BUTTON)
    }
    
    async clickFinishButton(){
        return await this.action.click(this.locators.FINISH_BUTTON)
    }





    //Get Total Before Tax
    async getTotal(){
        return await this.action.getText(this.locators.GET_TOTAL_BEFORE_TAX)
    }

    async assertTotal(expectedTotal){
        const actualTotal = await this.getTotal()
        expect(actualTotal).toContain(expectedTotal)
    }

    //Get Tax Value
    async getTax(){
        return await this.action.getText(this.locators.GET_TAX_VALUE)
    }

    async assertTax(expectedTax){
        const actualTax = await this.getTax()
        expect(actualTax).toContain(expectedTax)
    }


    //Get Total with Tax
    async getTotalWithTax(){
        return await this.action.getText(this.locators.GET_TOTAL_WITH_TAX)
    }

    async assertTotalWithTax(expectedTotalwithTax){
        const actualTotalWithTax = await this.getTotalWithTax()
        expect(actualTotalWithTax).toContain(expectedTotalwithTax)
    }


    //Get Order Complete
    async getSuccessMessage(){
        return await this.action.getText(this.locators.GET_OERDER_COMPLETE_MESSAGE)
    }

    async assertSuccess(expectedCompleteMessage){
        const actualCompleteMessage = await this.getSuccessMessage()
        expect(actualCompleteMessage).toContain(expectedCompleteMessage)
    }
}