//-----------------------------------//
//--------Node Setup Module----------//
//-----------------------------------//
require('dotenv').config();
require('cors');

// create a new instance of JSDOM for node server to render DOM objects
const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;

// convert relative path to absolute path
function absolute(base, relative) {
  var stack = base.split("/"),
      parts = relative.split("/");
  stack.pop(); // remove current file name (or empty string)
               // (omit if "base" is the current folder without trailing slash)
  for (var i=0; i<parts.length; i++) {
      if (parts[i] == ".")
          continue;
      if (parts[i] == "..")
          stack.pop();
      else
          stack.push(parts[i]);
  }
  return stack.join("/");
}

// create a skeleton DOM object
const document = async () => {
    try {
        await JSDOM.fromFile(absolute('/','./index.html')).then(dom => {
            global.document = dom.window.document;
            return global.document;
            }) } catch (error) {
            console.log(error);
        }
}

// create a new instance of the node-fetch client for connecting to the API
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = { document, fetch }    // export the functions
