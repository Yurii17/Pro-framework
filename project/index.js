// @ts-check
const {I} = require('./flows');
const {client, getSeleniumDriver, conf} = require('../lib')

const provider = {
    get I() { 
        return I;
    },

    get client() {
        return client;
    },

    get getSeleniumDriver() {
        return getSeleniumDriver;
    },

    get conf() {
        return conf;
    }
}

module.exports = {
    provider
}