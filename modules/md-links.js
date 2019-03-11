"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _links = require("./modules/links/links.js");

var _validate = require("./modules/validate/validate.js");

var _stats = require("./modules/stats/stats.js");

var mdLinks = function mdLinks(route, options) {
  var nombrePromesa = new Promise(function (resolve) {
    var arrayLinks = (0, _links.showLinks)(route);
    (0, _validate.validatelinks)(arrayLinks).then(function (resultado) {
      var arrayValidate = resultado;
      var arrayStats = (0, _stats.statsLinks)(arrayLinks);

      if (options.validate === false && options.stats === false) {
        resolve(arrayLinks);
      } else if (options.validate === true && options.stats === false) {
        resolve(arrayValidate);
      } else if (options.validate === false && options.stats === true) {
        resolve(arrayStats);
      } else if (options.validate === true && options.stats === true) {
        var arrayBroken = [];
        arrayValidate.forEach(function (link) {
          if (arrayValidate.indexOf(link.statusText) === 'Fail') arrayBroken.push(link);
        });
        var broken = arrayBroken.length;
        arrayStats.broken = broken;
        resolve(arrayStats);
      }
    });
  });
  nombrePromesa.then(function (result) {
    return result;
  });
  return nombrePromesa;
};

exports.mdLinks = mdLinks;
mdLinks('.\\aprueba2', {
  validate: true,
  stats: true
}).then(function (resultado) {
  console.log(resultado);
});