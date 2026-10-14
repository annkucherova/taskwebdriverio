import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    
    public get inputUsername () {
        return $('#user-name');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get errorIcons () {
        return $$("//*[contains(@class, 'error_icon')]");
    }

    public get errorMessage () {
        return $("//h3[@data-test='error']");
    }

    // public get usernameErrorIcon () {
    //     return $('#user-name + svg.error-icon');
    // }

    // public get passwordErrorIcon () {
    //     return $('#password + svg.error-icon');
    // }

    public get loginButton () {
        return $('#login-button');
    }

    public async setUsername(value: string | number) {
        this.inputUsername.addValue(value);
    }

    public async setPassword(value: string | number) {
        this.inputPassword.addValue(value);
    }

    public async clickLoginButton() {
        this.loginButton.click();
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    public async isLoaded(value: string): Promise<boolean>{
        return ((await browser.getUrl()).includes(value));
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('');
    }
}

export default new LoginPage();
