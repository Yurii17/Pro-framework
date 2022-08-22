// @ts-check
const {seleniumWD} = require('promod');
// const {browser} = seleniumWD;
const {getSeleniumDriver, browser, $, $$} = seleniumWD;
const conf = {
    capabilities: {
        browserName: 'chrome',
            'chromeOptions': {
                args: ['--start-fullscreen']
            }
    },
    baseUrl: 'https://www.saucedemo.com/',
};

module.exports = {
    client: browser, getSeleniumDriver:getSeleniumDriver, conf:conf
}