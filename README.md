<!--- 
Copyright © 2022 Yurii Lobas. Contacts: yurii.lobas@gmail.com
-->

# Pro-framework

Current framework using promod library with protractor-like API.

### Custom Pro-framework features:
* **login with different accounts** application/successful logging. 
* **analyze** errors cause with detailed traces for failed requests
* **compare** different request in scripted dashboard

## Getting Started

Pro-framework consists of next services:
- **assertior**: The main porpuse is build new assertion library with soft assertions based on "assert" module.
- **faker**: Generate by faker data/value.
- **mocha**: Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
- **allure**: A simple reporter.
- **promod**: Motivation. I really like protractor framework, and its api. Unfortunately protractor is deprecated. That's why i decided to build this library and this library should allow you replace protractor framework in your TAF without massive refactoring.
- **sat-utils**: The purpose of this library is combine utils functions/methods/validators in one place.

## Installing

1. Clone this repository

```git clone https://github.com/Yurii17/Pro-framework.git``` 

2. open Pro-framework dir

3. ```npm init -y```

4. ```npm install mocha promod assertior```

5. ```npm run driver:install```

6. ```npm i sat-utils```

## Run scenario

**If you are using docker**

1. Run in one command - ```make run```

2. ```npm run test```
