import HomePage from "./homePage.js";
import LoginPage from "./loginPage.js";

export default class PomManager{
    constructor (page){
        this.page = page;
        this.loginPage = new LoginPage(page)
        this.homePage = new HomePage(page)
    }
}