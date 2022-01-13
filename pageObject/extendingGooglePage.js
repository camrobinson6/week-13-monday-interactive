const {By} = require("selenium-webdriver")
const {Basepage} = require("./basePage")

module.export = class Google extends Basepage {
    /* selectors */
    searchBar = By.css('input[name="q"]')
    results = By.id('res')

    constructor(driver, url) {
        super(driver, url)
        /* when we use super we are calling the orginial element and methods from the base page*/
    }

    /* methods */

    async doSearch(term) {
        await this.setInput(this.searchBar, `${term}\n`)
    }

    async getResults() {
        return await this.getText(this.results)
    }

}