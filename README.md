# Javascript Testing Example Demo

This is a demo for unit testing and integration testing a javascript backend api

## Tools, Libraries, and Framework used

1. [Mocha](https://mochajs.org/)
2. [Sinon](https://sinonjs.org/)
3. [Chai](https://www.chaijs.com/)
4. [Express Server](https://expressjs.com/)
5. [Nodemon](https://nodemon.io/)
6. [Postman](https://www.getpostman.com/downloads/)

## Setup your Env

**Recommended IDE for this demo is VSCODE**

*Setup useful plugins if your IDE has ability to do so, going forward I will explain the setup for VSCode*

*These plugins are from VSCODE extension interface.  Install them*

1. JavaScript (ES6) code snippets
2. Mocha Test Explorer
3. ES6 Mocha Snippet

*After installing these plugins, let's configure our Mocha Test Explorer*

1. Go to VsCode settings preferences
2. Search for mocha in User Settings
3. Find the glob that describes the location of the test files
4. Change it to `test/**/*.js`


**Install your Node environment and npm if you haven't done so already, you may need to add these binaries into your Environment Variables on your laptop**

You can check your Node version in terminal with this command `node -v` and the npm version via `npm -v`. Currently my versions are `v11.8.0` and `6.5.0` respectively.

**Once you have install node and npm. Open up VSCode and setup the project workspace under the `/app` directory**

1. Once above is done open up the Terminal Console on the bottom left of the editor
2. On the terminal do a `npm i` command
3. Once finish use VsCode Test Window and spot if you see a Guinea Pig Test spec.  If you do then click the play button to run the test.

*Notice that test is failing. Observe the outputs. Can you try to fix it?*

*If you like to play on the command line, you can run the test by giving the command `npm test` in the terminal
