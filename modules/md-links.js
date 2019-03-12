"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _links = require("./modules/links/links.js");

var _validate = require("./modules/validate/validate.js");

var mdLinks = function mdLinks(route, options) {
  var promiseLinks = new Promise(function (resolve) {
    var arrayLinks = (0, _links.showLinks)(route);

    if (options === undefined) {
      resolve(arrayLinks);
    } else if (options.validate === true) {
      (0, _validate.validatelinks)(arrayLinks).then(function (result) {
        var arrayValidate = result;
        resolve(arrayValidate);
      });
    }
  });
  return promiseLinks;
};

exports.mdLinks = mdLinks;