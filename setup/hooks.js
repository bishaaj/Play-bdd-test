const playwright = require("playwright")
const {Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber')

BeforeAll(async () => {
    console.log("Launch Browser")
    global.browser = await playwright['chromium'].launch ({ headless: false})
})

AfterAll(async () => {
    console.log('Close Browser')
    await global.browser.close()
})


// const context = await browser.newContext();
// await context.grantPermissions(['clipboard-read']);
// // do stuff ..
// context.clearPermissions();

Before(async () => {
    console.log('Create new context and page')
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
    await page.goto('https://automationteststore.com/')
})

After(async () => {
    console.log('Close context and page')
    await global.page.close()
    await global.context.close()
})

const config = {
    workers: 1,
    use: {
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      retries: 1,
      timeout: 60000,
      viewport: {width: 1200, height:720},
      actionTimeout: 20000,
      ignoreHTTPSErrors: true,
      fullyParallel: true,
      expect : {
        timeout: 30000
      },          
    },
    
  };
  
  module.exports = config;