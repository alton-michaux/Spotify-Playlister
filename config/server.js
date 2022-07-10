require('dotenv').config();
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
global.document = new JSDOM(`../js/index.js`).window.document;
console.log(process.env, global.document);

