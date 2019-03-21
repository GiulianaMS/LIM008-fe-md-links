"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatelinks = void 0;

var fetch = require('node-fetch');

var validatelinks = function validatelinks(objectlinks) {
  var arrayPromises = [];
  objectlinks.forEach(function (objLink) {
    var iPromise = new Promise(function (resolve) {
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
        objLink.statusText = 'Fail';
        resolve(objLink);
      });
    });
    arrayPromises.push(iPromise);
  });
  return Promise.all(arrayPromises);
};

exports.validatelinks = validatelinks;