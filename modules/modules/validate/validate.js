"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatelinks = void 0;

var _processLinks = require("../links/process-links.js");

var fetch = require('node-fetch');

var validatelinks = function validatelinks(objectlinks) {
  var validate = objectlinks.map(function (objLink) {
    return new Promise(function (resolve) {
      fetch(objLink.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          objLink.status = response.status;
          objLink.statusText = 'OK';
          resolve(objLink);
        } else {
          objLink.status = response.status;
          objLink.statusText = 'Fail';
          resolve(objLink);
        }
      }).catch(function (error) {
        objLink.status = '';
        objLink.statusText = 'Not Found';
        resolve(objLink);
      });
    });
  });
  return Promise.all(validate);
};

exports.validatelinks = validatelinks;
validatelinks((0, _processLinks.getLinks)((0, _processLinks.checkMarkdown)((0, _processLinks.getFiles)('.\\aprueba2')))).then(function (response) {
  return console.log(response);
});