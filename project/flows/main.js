// @ts-check
const {expect} = require('assertior');
const {pageProvider} = require ('../pages/provider');

function fieldsToNull(obj) {
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = null;
        return acc;
    },{})
}

const {main} = pageProvider

/**
 * @param {object} userData 
 * @param {string} [userData.username] username
 * @param {string} [userData.password] password
 * @return {Promise<void>}
 */
async function loginInSystem(userData = {}) {
    await main.sendKeys({login: userData});
    await main.click({header: {signIn: null}});
}

/**
 * @param {object} userData 
 * @param {string|number|null} [userData.username] uername
 * @param {string|number|null} [userData.password] password
 * @return {Promise<void>}
 */
async function checkThatAfterFailedLoginFieldsAreFilled(userData = {}) {
    const {login} = await main.get({login: fieldsToNull(userData)});
    Object.keys(userData).forEach((key) => {
        expect(userData[key]).toEqual(login[key], `Login form ${key} element should have value ${userData[key]}`);
    })
}

module.exports = {
    loginInSystem,
    checkThatAfterFailedLoginFieldsAreFilled,
}