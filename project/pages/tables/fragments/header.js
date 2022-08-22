// @ts-check
const {BaseFragment} = require('../../../../lib')

/**
 * @typedef {Object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 */

/**
 * @typedef {Object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 */

class HeaderFragment extends BaseFragment {
    constructor(root, name) {
        super(root, name);
        this.greetingMessage = this.init('[class="title"]', 'Products', Text);
    }
}

module.exports = {
    HeaderFragment
}