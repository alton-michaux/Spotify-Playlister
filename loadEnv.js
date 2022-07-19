//-----------------------------------//
//--------Node Setup Module----------//
//-----------------------------------//

import * as dotenv from 'dotenv';
dotenv.config()

import 'cors';

// create a new instance of JSDOM for node server to render DOM objects
import * as jsdom from 'jsdom';
const JSDOM = jsdom.JSDOM;

// create a skeleton DOM object
const document = await JSDOM.fromFile('./index.html').then(dom => {
  global.document = dom.window.document;
  return global.document;
}).catch(err => {
  console.log(err);
});

// create a new instance of the node-fetch client for connecting to the API
import fetch from 'node-fetch';
