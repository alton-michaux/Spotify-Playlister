"use strict";
(self["webpackChunkmy_playlist_app"] = self["webpackChunkmy_playlist_app"] || []).push([["src_index_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n\nbody {\n  overflow: hidden;\n}\n\nnav {\n  position: sticky;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  top: 0;\n  height: 2em;\n  box-shadow: rgb(102, 58, 58) -1px 2px 13px;\n  z-index: 1000;\n}\n\nspan {\n  margin-top: 4px;\n}\n\nselect {\n  position: sticky;\n  top: 0;\n}\n\nsection {\n  overflow-y: auto;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nfooter {\n  position: sticky;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  height: 2em;\n  bottom: 0;\n  box-shadow: rgb(102, 58, 58) 0px 2px 15px;\n  z-index: 1000;\n}\n\n.login-div {\n  display: none;\n}\n\n.container {\n  display: grid;\n  min-height: calc(100vh - 32px);\n  min-width: 100%;\n  background-color: black;\n  grid-template-columns: auto;\n  grid-template-rows: repeat(3, auto);\n}\n\n.nav-list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgb(56, 15, 15);\n  max-height: 400px;\n  width: 453px;\n  padding: 20px;\n  line-height: 1.5;\n  transform: translateY(-200px);\n  transition: transform 1s ease-in-out;\n  z-index: 1000;\n}\n\n.div.show,\nul.show {\n  transform: translateY(200);\n  transition: 0.8s;\n}\n\n.nav-item {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(200px, 1fr));\n}\n\n.nav-box {\n  height: inherit;\n}\n\n.center-box {\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n}\n\n.main-div {\n  display: grid;\n  height: 90vh;\n  grid-gap: 0.1%;\n  grid-template-columns: minmax(225px, 1.5fr) minmax(150px, 1fr) minmax(\n      200px,\n      2fr\n    );\n  background-color: black;\n  grid-template-rows: repeat(auto-fit, 1fr);\n}\n\n.center-items {\n  margin: 0;\n  width: 100%;\n}\n\n.container {\n  max-width: 1500px;\n  display: grid;\n}\n\n.play-img:hover {\n  cursor: pointer;\n  opacity: 50%;\n}\n\n.playlist-items {\n  height: 150px;\n  width: 125px;\n}\n\n.playlist-items:hover,\n.playlist-btns:hover {\n  cursor: pointer;\n  border: 0.5px #87282d double;\n  transform: scale(1.05);\n}\n\n.track-window {\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  max-height: 650px;\n}\n\n.side-box {\n  background-color: black;\n}\n\n.tracks {\n  border: 0.5px solid black;\n}\n\n.track-art {\n  display: grid;\n  grid-template-columns: 0.5fr 3fr 0.5fr;\n  margin-top: 10px;\n  height: 60vh;\n  border: 1px double #87282d;\n  border-radius: 2.5%;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  box-shadow: rgb(102, 58, 58) -1px 2px 13px;\n}\n\n.current-track {\n  overflow: hidden;\n}\n\n.track-imgs {\n  height: 100%;\n  width: 100%;\n}\n\n.track-description {\n  height: 100%;\n  border-radius: 2.5%;\n  color: white;\n  text-align: center;\n}\n\n.song-info {\n  height: inherit;\n  padding-top: 6%;\n  font-size: 1.5em;\n  line-height: 1.3em;\n}\n\n.main-playlist {\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  width: inherit;\n}\n\n.center-items {\n  width: inherit;\n  height: inherit;\n}\n\n.main-playlist-items {\n  grid-gap: 3%;\n  height: 100%;\n  width: 100%;\n  border-radius: 2.5%;\n  box-shadow: rgb(102, 58, 58) 0px 5px 5px;\n  text-align: center;\n  padding: 0.5%;\n}\n\n.title-div {\n  padding: 4%;\n  margin-top: 2.5%;\n}\n\n.playlist-title {\n  color: white;\n  height: 100%;\n  width: 100%;\n  margin-top: 8%;\n}\n\n.playlist-art {\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  max-height: 350px;\n  width: 100%;\n  border-radius: 2.5%;\n  box-shadow: rgb(102, 58, 58) 0px 5px 5px;\n}\n\n.playlist-art-img {\n  max-height: inherit;\n}\n\n.playback-console {\n  display: flex;\n  justify-content: space-between;\n}\n\n.play-img {\n  margin: auto auto;\n  width: 10%;\n  background-color: black;\n  border: none;\n}\n\n.play-btn {\n  margin-top: 0.5em;\n}\n\n.play {\n  flex: 3 1 50px;\n}\n\n.metadata-playlist-container {\n  display: inline-grid;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.metadata-items {\n  display: inline-grid;\n  box-shadow: rgb(102, 58, 58) 0px 5px 5px;\n  margin: 0;\n}\n\n.track-items {\n  display: flex;\n  flex: 1 1 300px;\n  justify-content: space-between;\n  margin: 10px;\n  padding: 15px;\n  border: 1px double rgb(102, 58, 58);\n  box-shadow: rgb(102, 58, 58) -1px 2px 5px;\n  color: white;\n}\n\n.library {\n  height: 100%;\n}\n\n.drop-down {\n  position: sticky;\n  height: 10%;\n  padding: 10px;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  z-index: 999;\n}\n\n.playlist-library {\n  display: inline-grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1%;\n  width: 100%;\n  height: 100%;\n  padding: 1.5%;\n}\n\n.playlist-items {\n  position: relative;\n  color: white;\n  background-color: #87282d;\n  max-width: 75px;\n  max-height: 20px;\n  box-shadow: rgb(102, 58, 58) 0px 1px 1px;\n  justify-content: space-between;\n}\n\n.playlist-btns {\n  border: 1px solid #3e0003;\n  position: relative;\n  color: white;\n  background-color: black;\n  max-width: 100%;\n  justify-content: space-between;\n  box-shadow: rgb(102, 58, 58) -1px 2px 5px;\n}\n\n.text {\n  position: relative;\n  text-align: center;\n  justify-content: space-around;\n  bottom: 1em;\n  font-size: 12px;\n}\n\n@media screen and (max-width: 800px) {\n  body {\n    overflow-y: scroll;\n    height: 1fr;\n    border: 4px solid #87282d;\n  }\n\n  .container {\n    position: relative;\n    width: 1fr;\n    justify-content: center;\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  .nav-item {\n    position: sticky;\n    top: 0;\n  }\n\n  .grid-items {\n    width: 100vw;\n    height: 1em;\n  }\n\n  .main-div {\n    grid-template-columns: minmax(100px, 1fr);\n    grid-template-rows: repeat(auto, minmax(10px, 1fr));\n    height: 100%;\n    margin: 0 auto;\n    width: 90vw;\n    justify-content: center;\n    z-index: 0;\n  }\n\n  .center-box {\n    margin: 1% 0;\n  }\n\n  .mobile-hide {\n    display: none;\n  }\n\n  .main-playlist {\n    grid-template-rows: repeat(2, 1fr);\n  }\n\n  .center-items {\n    width: 100%;\n    height: 100%;\n    margin: 10px auto;\n    padding: 10px;\n  }\n\n  .track-window {\n    padding: 3%;\n  }\n\n  .track-description {\n    padding: 0;\n  }\n\n  .title-div {\n    margin: 0 auto;\n    margin-bottom: 2.5%;\n    font-size: 1.5em;\n    box-shadow: none;\n    border-top: solid 1px #620f13;\n  }\n\n  .playback-console {\n    box-shadow: none;\n    border-bottom: solid 1px #620f13;\n  }\n\n  .track-art {\n    margin: 0 0;\n    position: relative;\n  }\n\n  .current-track {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n  }\n\n  .track-length {\n    display: none;\n  }\n\n  .library {\n    height: 40em;\n  }\n\n  .playlist-library {\n    justify-content: center;\n  }\n\n  .metadata-playlist-container {\n    height: 43em;\n    margin: 0 auto;\n    justify-content: space-around;\n    margin-top: 5%;\n    margin-bottom: 10%;\n    grid-gap: 5%;\n  }\n\n  .metadata-items {\n    height: 100%;\n    border: solid 2px #620f13;\n    justify-content: center;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    padding: 5%;\n  }\n\n  .metadata-items::-webkit-scrollbar {\n    display: none;\n  }\n\n  .footer {\n    position: relative;\n    bottom: 0;\n    height: 4fr;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n\nbody {\n  overflow: hidden;\n}\n\nnav {\n  position: sticky;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  top: 0;\n  height: 2em;\n  box-shadow: rgb(102, 58, 58) -1px 2px 13px;\n  z-index: 1000;\n}\n\nspan {\n  margin-top: 4px;\n}\n\nselect {\n  position: sticky;\n  top: 0;\n}\n\nsection {\n  overflow-y: auto;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nfooter {\n  position: sticky;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  height: 2em;\n  bottom: 0;\n  box-shadow: rgb(102, 58, 58) 0px 2px 15px;\n  z-index: 1000;\n}\n\n.login-div {\n  display: none;\n}\n\n.container {\n  display: grid;\n  min-height: calc(100vh - 32px);\n  min-width: 100%;\n  background-color: black;\n  grid-template-columns: auto;\n  grid-template-rows: repeat(3, auto);\n}\n\n.nav-list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgb(56, 15, 15);\n  max-height: 400px;\n  width: 453px;\n  padding: 20px;\n  line-height: 1.5;\n  transform: translateY(-200px);\n  transition: transform 1s ease-in-out;\n  z-index: 1000;\n}\n\n.div.show,\nul.show {\n  transform: translateY(200);\n  transition: 0.8s;\n}\n\n.nav-item {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(200px, 1fr));\n}\n\n.nav-box {\n  height: inherit;\n}\n\n.center-box {\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n}\n\n.main-div {\n  display: grid;\n  height: 90vh;\n  grid-gap: 0.1%;\n  grid-template-columns: minmax(225px, 1.5fr) minmax(150px, 1fr) minmax(\n      200px,\n      2fr\n    );\n  background-color: black;\n  grid-template-rows: repeat(auto-fit, 1fr);\n}\n\n.center-items {\n  margin: 0;\n  width: 100%;\n}\n\n.container {\n  max-width: 1500px;\n  display: grid;\n}\n\n.play-img:hover {\n  cursor: pointer;\n  opacity: 50%;\n}\n\n.playlist-items {\n  height: 150px;\n  width: 125px;\n}\n\n.playlist-items:hover,\n.playlist-btns:hover {\n  cursor: pointer;\n  border: 0.5px #87282d double;\n  transform: scale(1.05);\n}\n\n.track-window {\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  max-height: 650px;\n}\n\n.side-box {\n  background-color: black;\n}\n\n.tracks {\n  border: 0.5px solid black;\n}\n\n.track-art {\n  display: grid;\n  grid-template-columns: 0.5fr 3fr 0.5fr;\n  margin-top: 10px;\n  height: 60vh;\n  border: 1px double #87282d;\n  border-radius: 2.5%;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  box-shadow: rgb(102, 58, 58) -1px 2px 13px;\n}\n\n.current-track {\n  overflow: hidden;\n}\n\n.track-imgs {\n  height: 100%;\n  width: 100%;\n}\n\n.track-description {\n  height: 100%;\n  border-radius: 2.5%;\n  color: white;\n  text-align: center;\n}\n\n.song-info {\n  height: inherit;\n  padding-top: 6%;\n  font-size: 1.5em;\n  line-height: 1.3em;\n}\n\n.main-playlist {\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  width: inherit;\n}\n\n.center-items {\n  width: inherit;\n  height: inherit;\n}\n\n.main-playlist-items {\n  grid-gap: 3%;\n  height: 100%;\n  width: 100%;\n  border-radius: 2.5%;\n  box-shadow: rgb(102, 58, 58) 0px 5px 5px;\n  text-align: center;\n  padding: 0.5%;\n}\n\n.title-div {\n  padding: 4%;\n  margin-top: 2.5%;\n}\n\n.playlist-title {\n  color: white;\n  height: 100%;\n  width: 100%;\n  margin-top: 8%;\n}\n\n.playlist-art {\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  max-height: 350px;\n  width: 100%;\n  border-radius: 2.5%;\n  box-shadow: rgb(102, 58, 58) 0px 5px 5px;\n}\n\n.playlist-art-img {\n  max-height: inherit;\n}\n\n.playback-console {\n  display: flex;\n  justify-content: space-between;\n}\n\n.play-img {\n  margin: auto auto;\n  width: 10%;\n  background-color: black;\n  border: none;\n}\n\n.play-btn {\n  margin-top: 0.5em;\n}\n\n.play {\n  flex: 3 1 50px;\n}\n\n.metadata-playlist-container {\n  display: inline-grid;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.metadata-items {\n  display: inline-grid;\n  box-shadow: rgb(102, 58, 58) 0px 5px 5px;\n  margin: 0;\n}\n\n.track-items {\n  display: flex;\n  flex: 1 1 300px;\n  justify-content: space-between;\n  margin: 10px;\n  padding: 15px;\n  border: 1px double rgb(102, 58, 58);\n  box-shadow: rgb(102, 58, 58) -1px 2px 5px;\n  color: white;\n}\n\n.library {\n  height: 100%;\n}\n\n.drop-down {\n  position: sticky;\n  height: 10%;\n  padding: 10px;\n  background-image: repeating-linear-gradient(#620f13, #87282d, #3e0003);\n  z-index: 999;\n}\n\n.playlist-library {\n  display: inline-grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1%;\n  width: 100%;\n  height: 100%;\n  padding: 1.5%;\n}\n\n.playlist-items {\n  position: relative;\n  color: white;\n  background-color: #87282d;\n  max-width: 75px;\n  max-height: 20px;\n  box-shadow: rgb(102, 58, 58) 0px 1px 1px;\n  justify-content: space-between;\n}\n\n.playlist-btns {\n  border: 1px solid #3e0003;\n  position: relative;\n  color: white;\n  background-color: black;\n  max-width: 100%;\n  justify-content: space-between;\n  box-shadow: rgb(102, 58, 58) -1px 2px 5px;\n}\n\n.text {\n  position: relative;\n  text-align: center;\n  justify-content: space-around;\n  bottom: 1em;\n  font-size: 12px;\n}\n\n@media screen and (max-width: 800px) {\n  body {\n    overflow-y: scroll;\n    height: 1fr;\n    border: 4px solid #87282d;\n  }\n\n  .container {\n    position: relative;\n    width: 1fr;\n    justify-content: center;\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  .nav-item {\n    position: sticky;\n    top: 0;\n  }\n\n  .grid-items {\n    width: 100vw;\n    height: 1em;\n  }\n\n  .main-div {\n    grid-template-columns: minmax(100px, 1fr);\n    grid-template-rows: repeat(auto, minmax(10px, 1fr));\n    height: 100%;\n    margin: 0 auto;\n    width: 90vw;\n    justify-content: center;\n    z-index: 0;\n  }\n\n  .center-box {\n    margin: 1% 0;\n  }\n\n  .mobile-hide {\n    display: none;\n  }\n\n  .main-playlist {\n    grid-template-rows: repeat(2, 1fr);\n  }\n\n  .center-items {\n    width: 100%;\n    height: 100%;\n    margin: 10px auto;\n    padding: 10px;\n  }\n\n  .track-window {\n    padding: 3%;\n  }\n\n  .track-description {\n    padding: 0;\n  }\n\n  .title-div {\n    margin: 0 auto;\n    margin-bottom: 2.5%;\n    font-size: 1.5em;\n    box-shadow: none;\n    border-top: solid 1px #620f13;\n  }\n\n  .playback-console {\n    box-shadow: none;\n    border-bottom: solid 1px #620f13;\n  }\n\n  .track-art {\n    margin: 0 0;\n    position: relative;\n  }\n\n  .current-track {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n  }\n\n  .track-length {\n    display: none;\n  }\n\n  .library {\n    height: 40em;\n  }\n\n  .playlist-library {\n    justify-content: center;\n  }\n\n  .metadata-playlist-container {\n    height: 43em;\n    margin: 0 auto;\n    justify-content: space-around;\n    margin-top: 5%;\n    margin-bottom: 10%;\n    grid-gap: 5%;\n  }\n\n  .metadata-items {\n    height: 100%;\n    border: solid 2px #620f13;\n    justify-content: center;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    padding: 5%;\n  }\n\n  .metadata-items::-webkit-scrollbar {\n    display: none;\n  }\n\n  .footer {\n    position: relative;\n    bottom: 0;\n    height: 4fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

}]);
//# sourceMappingURL=src_index_css.bundle.js.map