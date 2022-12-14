// @ts-check

class BaseFragment {
    /**
     * 
     * @param {import('promod').PromodSeleniumElementType} root fragment root
     * @param {string} name fragment name
     */
    constructor(root, name) {
        this.root = root;
        this.name = name;
    }

    /**
     * @param {string} selector css/xpath/js selector
     * @param {string} name child name
     * @param {new (...arg: any[]) => any} child child element constructor
     * @param  {any[]} rest require argument 
     * @returns 
     */
    init(selector, name, child, ...rest) {
        // TODO add technical logging
        return new child(this.root.$(selector), name, ...rest);
    }

    async sendKeys(data) {
        const dataKeys = Object.keys(data)
        for(const key of dataKeys) {
            // await (() => new Promise((res) => setTimeout(res, 500)))();
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
            // TODO add technical logging
            getData[key] = await this[key].get(data[key]);
        }
        return getData;
    }
}

module.exports = {
    BaseFragment
}