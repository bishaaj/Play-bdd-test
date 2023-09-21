const {setWorldConstructor} = require('@cucumber/cucumber')
const { Selectors } =require('../utils/selectors')

const password = ('#loginFrm_password')
//const loginNav = ('link', {name: 'Login or register'})

class LoginPage {
    async click_login_link() {
    //    await page.getByRole(loginNav).click()    
    await page.getByRole('link', {name: 'Login or register'}).click()
    //await page.locator(Selectors.loginNav).click()
    }
    
    async fill_login_fields() {
        await page.fill('#loginFrm_loginname','test@ja.com')
        await page.locator(password).fill('someone')
    }

    async fill_invalid_parameters(username, password) {
        await page.fill('#loginFrm_loginname',username)
        await page.locator('#loginFrm_password').fill(password)
    }
}
module.exports = {LoginPage}