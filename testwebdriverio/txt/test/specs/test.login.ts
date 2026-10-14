import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('My Login application', () => {
    xit('should login with valid credentials', async () => {
        await LoginPage.open()

        // await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.setUsername('standard_user');      
        await expect(LoginPage.inputUsername.getValue()).not.toBe('');

        await LoginPage.setPassword('secret_sauce');
        await browser.pause(2000);
        await expect(LoginPage.inputPassword.getValue()).not.toBe('');
        await expect(await LoginPage.inputPassword.getAttribute('type')).toBe('password');
        
        await LoginPage.clickLoginButton();
        await browser.pause(2000);

        expect(await InventoryPage.isLoaded('/inventory')).toBe(true);

        expect(await InventoryPage.products).toBeDisplayed();

        await expect(InventoryPage.cart).toBeDisplayed();
        

        
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
            // expect.stringContaining('You logged into a secure area!'))
    })

    xit('should warn about invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.setUsername('standard_user');      
        await expect(LoginPage.inputUsername.getValue()).not.toBe('');

        await LoginPage.setPassword('test123');
        await browser.pause(2000);
        await expect(LoginPage.inputPassword.getValue()).not.toBe('');
        await expect(await LoginPage.inputPassword.getAttribute('type')).toBe('password');
        
        await LoginPage.clickLoginButton();
        await browser.pause(2000);

        await expect(await LoginPage.errorIcons.length).toBe(2);

        await expect(await LoginPage.errorMessage.getText()).toBe('Epic sadface: Username and password do not match any user in this service')
        
    })

    xit('should warn about invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.setUsername('standarD_user');      
        await expect(LoginPage.inputUsername.getValue()).not.toBe('');

        await LoginPage.setPassword('secret_sauce');
        await browser.pause(2000);
        await expect(LoginPage.inputPassword.getValue()).not.toBe('');
        await expect(await LoginPage.inputPassword.getAttribute('type')).toBe('password');
        
        await LoginPage.clickLoginButton();
        await browser.pause(2000);

        await expect(await LoginPage.errorIcons.length).toBe(2);

        await expect(await LoginPage.errorMessage.getText()).toBe('Epic sadface: Username and password do not match any user in this service')
        
    })

    xit('should redirect to login page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await InventoryPage.clickBurgerButton();
        await browser.pause(2000);
        await expect(await InventoryPage.menuItems.length).toBe(4);
        
        await InventoryPage.clickLogoutButton();
        await browser.pause(2000);

        await expect(await browser.getUrl() === 'https://www.saucedemo.com/')

        await expect(await LoginPage.inputUsername.getValue()).toBe('');
        await expect(await LoginPage.inputPassword.getValue()).toBe('');
        
    })
})

