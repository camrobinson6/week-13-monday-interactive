const { Builder, Capabiliites } = require("selenium-webdriver")
const { Google} = require("../pageObject/extendingGooglePage")
const driver = new Builder().withCapabilities(Capabiliites.chrome()).build()
const myPage = new Google(driver, 'https://google.com/')

test('Searching Google', async () => {
    await myPage.navigate()
    await myPage.doSearch('Puppies')
    
    expect(results).toContain('Puppies')

    await myPage.driver.quit()
})