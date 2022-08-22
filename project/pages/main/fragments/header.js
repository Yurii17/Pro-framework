// @ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {Object} HeaderCommonAction
 * @property {null} [signIn] signIn
 */

class HeaderFragment extends BaseFragment {
    constructor(root, name) {
        super(root, name);
        this.signIn = this.init('[type="submit"]', 'Sign In', Button);
    }
}

module.exports = {
    HeaderFragment
}