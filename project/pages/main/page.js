// @ts-check
const {BasePage} = require('../../../lib');
const {HeaderFragment} = require('./fragments/header');
const {LoginFragment} = require('./fragments/login');

/** 
 * @typedef {import('./fragments/login').LoginCommonAction} LoginCommonAction
 * @typedef {import('./fragments/login').LoginSendKeysAction} LoginSendKeysAction
 * @typedef {import('./fragments/login').LoginGetResAction} LoginGetResAction
 * 
 * @typedef {import('./fragments/header').HeaderCommonAction} HeaderCommonAction
 */ 

/**
 * @typedef {Object} MainPageInteractionInterface
 * @property {(data: {
 *  login?: LoginSendKeysAction;
 * }) => Promise<void>} sendKeys sendKeys method
 *  @property {(data: {
 *  header?: HeaderCommonAction;
 *  login?: LoginSendKeysAction;
 * }) => Promise<void>} click click method
 */

class MainPage extends BasePage {
    constructor() {
        super('#login_button_container', 'MainPage')
        this.header = this.init('[class="login-box"]', 'Logo', HeaderFragment);
        this.login = this.init('[class="login-box"]', 'Logo', LoginFragment);
    }
}

/**
 * @returns {MainPageInteractionInterface} interaction interface
 */
function getMain() {
    return new MainPage()
}

module.exports = {
    MainPage, getMain
}
