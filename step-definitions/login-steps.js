const { Given, When, Then, defineStep} = require('@cucumber/cucumber');
const { expect } = require('chai');
const {LoginPage} = require('../page-objects/loginPage')

const loginPage = new LoginPage()

Given('I want to login into an online account', async () => {
     loginPage.click_login_link()
})

When('I fill the login form with invalid info', async function () {
    loginPage.fill_login_fields()
});

Then('I should error login message', async function () {
    await page.getByRole('button', {name: 'Login'}).click()

    //Assert error login message
    // await expect('.alert-error').toContainText('Unknown error encountered. Please try again!')
    await page.waitForSelector('.alert-error')
}); 
  
When('I fill the login form with invalid info {string} and {string}', async function (username, password) {
    loginPage.fill_invalid_parameters(username, password)
});
