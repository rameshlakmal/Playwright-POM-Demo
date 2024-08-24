import { expect } from '@playwright/test'
import CommonAction from '../utils/CommonAction.js'
import { LocatorFile } from '../Locators/LoginPageLocators.js'

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonAction(page)
        this.locators = LocatorFile.LocatorFileTest;
    }

    async navigate(){
        await this.actions.navigate('https://www.saucedemo.com/')
    }

    async login(username, password){
        await this.actions.fill(this.locators.ENTER_USERNAME, username)
        await this.actions.fill(this.locators.ENTER_PASSWORD, password)
        await this.actions.click(this.locators.CLICK_LOGINBUTTON)
    }

    async getErrorMessage(){
        return await this.actions.getText(this.locators.LOGIN_VALIDATION_MESSAGE_XPATH)
    }

    async assertErrorMessage(expectedMessage){
        const actualMessage = await this.getErrorMessage()
        expect(actualMessage).toContain(expectedMessage)
    }
}