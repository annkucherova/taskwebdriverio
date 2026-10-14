import Page from './page.js';

class InventoryPage extends Page {
    
    public get products () {
        return $$('.inventory_item');
    }

    public get cart () {
        return $('#shopping_cart_container');
    }

    public get addToCartButton () {
        return $("#add-to-cart-sauce-labs-bolt-t-shirt");
    }

    public get burgerButton () {
        return $('#react-burger-menu-btn');
    }

    public get menuItems () {
        return $$("//nav[@class='bm-item-list']//a");
    }

    public get logoutButton () {
        return $('#logout_sidebar_link');
    }

    public get cartBadge () {
        return $('//span[@class="shopping_cart_badge"]');
    }

    public get cartButton () {
        return $('[class="shopping_cart_link"]');
    }

    public async isLoaded(value: string): Promise<boolean>{
        return ((await browser.getUrl()).includes(value));
    }

    public async clickBurgerButton() {
        this.burgerButton.click();
    }

    public async clickLogoutButton() {
        this.logoutButton.click();
    }

    public async clickAddToCartButton() {
        this.addToCartButton.click();
    }

    public async clickCartButton() {
        this.cartButton.click();
    }
    
    public open () {
        return super.open('/inventory.html');
    }
}

export default new InventoryPage();