// @ts-check
const {BaseFragment, Text, Input, Button} = require('../../../../lib')

/**
 * @typedef {Object} LoginCommonAction
 * @property {null} [username] username
 * @property {null} [password] password
 * @property {null} [signIn] signIn
 */

/**
 * @typedef {Object} LoginGetResAction
 * @property {string} [username] username
 * @property {string} [password] password
 * @property {string} [signIn] signIn
 */

/**
 * @typedef {Object} LoginSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */

class LoginFragment extends BaseFragment {
    constructor(root, name) {
        super(root, name);
        this.username = this.init(`#user-name`, 'Email field', Input);
        this.password = this.init(`#password`, 'Password field', Input);
        this.signIn = this.init(`[data-test="login-button"]`, 'Sign in button', Button);
    }
}

module.exports = {
    LoginFragment
}