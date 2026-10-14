import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Add to cart', () => {
    xit('should left item  in cart', async () => {
        await browser.maximizeWindow();
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce');

        // await browser.pause(2000);
        await InventoryPage.clickAddToCartButton();
        await browser.pause(2000);

        await expect(await InventoryPage.cartBadge.getText()).toBe('1');

        await InventoryPage.clickBurgerButton();
        await browser.pause(2000);
        await expect(await InventoryPage.menuItems.length).toBe(4);
        
        await InventoryPage.clickLogoutButton();
        await browser.pause(2000);

        await expect(await browser.getUrl() === 'https://www.saucedemo.com/')

        await expect(await LoginPage.inputUsername.getValue()).toBe('');
        await expect(await LoginPage.inputPassword.getValue()).toBe('');

        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.pause(2000);

        expect(await InventoryPage.isLoaded('/inventory')).toBe(true);
        expect(await InventoryPage.products).toBeDisplayed();
        await expect(InventoryPage.cart).toBeDisplayed();

        await InventoryPage.clickCartButton();
        await browser.pause(2000);
        await expect(await browser.getUrl()).toContain('/cart');
    })

    
})

describe('Sorting', () => {
    it('should sort in correct order', async () => {
        await browser.maximizeWindow();
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce');

        expect(await InventoryPage.isLoaded('/inventory')).toBe(true);
    })

    
})
