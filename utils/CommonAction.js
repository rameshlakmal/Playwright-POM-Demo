export default class CommonAction{
    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.pause()
        await this.page.goto(url)
    }

    async click(selector){
        await this.page.click(selector)
    }

    async fill(selector, text){
        await this.page.fill(selector, text)
    }

    async getText(selector){
        return await this.page.textContent(selector)
    }

    async isChecked(selector){
        return await this.page.isChecked(selector)
    }

    async selectDropdown(selector, value){
        await this.page.selectOption(selector, value);
    }

    async getCurrentUrl() {
        return await this.page.url();
    }

    

}