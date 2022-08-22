// @ts-check
const {seleniumWD} = require('promod');
const {$} = seleniumWD;

class BasePage {
    /**
     * @param {string} selector root selector
     * @param {string} name page name
     */
    constructor(selector, name) {
        this.selector = selector;
        this.name = name;
        this.root = $(this.selector);
    }

    /**
     * @param {string} selector css/xpath/js selector
     * @param {string} name child name
     * @param {new (...arg: any[]) => any} child child element constructor
     * @param  {any[]} rest require argument 
     * @returns 
     */
    init(selector, name, child, ...rest) {
        return new child(this.root.$(selector), name, ...rest);
    }

    async sendKeys(data) {
        const dataKeys = Object.keys(data)
        for(const key of dataKeys) {
            await this[key].sendKeys(data[key]);
        }
    }

    async click(data) {
        const dataKeys = Object.keys(data)
        for(const key of dataKeys) {
            await this[key].click();
        }
    }

    async get(data) {
        const dataKeys = Object.keys(data)
        const getData = {...data};
        for(const key of dataKeys) {
            getData[key] = await this[key].get(data[key]);
        }
        return getData;
    }
}

module.exports = {
    BasePage
}
