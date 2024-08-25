export class LocatorFile {
    static get LocatorFileTest() {
      return {
        CHECKOUT_BUTTON : '#checkout',
        FIRST_NAME : '#first-name',
        LAST_NAME : '#last-name',
        POSTAL_CODE : '#postal-code',
        CONTINUE_BUTTON : '#continue',
        FINISH_BUTTON : '#finish',

        GET_TOTAL_BEFORE_TAX : 'xpath=//*[@id="checkout_summary_container"]/div/div[2]/div[6]',
        GET_TAX_VALUE : 'xpath=//*[@id="checkout_summary_container"]/div/div[2]/div[7]',
        GET_TOTAL_WITH_TAX : 'xpath=//*[@id="checkout_summary_container"]/div/div[2]/div[8]',
        GET_OERDER_COMPLETE_MESSAGE : 'xpath=//*[@id="checkout_complete_container"]/h2'
        }
    }
}