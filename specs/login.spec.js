// @ts-check
const { beforeEach } = require('mocha');
const {provider} = require('../project')
const {I, client, conf, getSeleniumDriver} = provider;

describe('Loging Form', () => {
    const USERNAME = {
        standard_user: 'standard_user',
        locked_out_user: 'locked_out_user',
        problem_user: 'problem_user',
        performance_glitch_user: 'performance_glitch_user'
    };

    const PASS = 'secret_sauce'

    beforeEach( async() => {
        await getSeleniumDriver(conf, client);
        await client.get('/');  
    })

    it('[P] Success Login', async() => {
        // await getSeleniumDriver(conf, client);
        // await client.get('/');
        await I.loginInSystem({username: USERNAME.standard_user, password: PASS});
        await I.checkThatUserLoggedInSystem('Products')
        await client.sleep(500);
    })

    // it.only('[N] Failed login', async() => {
    //     const userData = {username: 'test123', password: 'test123'}
    //     await I.loginInSystem(userData);
    //     await I.checkThatAfterFailedLoginFieldsAreFilled(userData);
    //     await client.sleep(500);
    // })


    afterEach( async() => {
        await client.close();
    })

   
})