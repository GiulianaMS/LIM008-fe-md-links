"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokeLinks = exports.statsLinks = void 0;

var statsLinks = function statsLinks(arrayLinks) {
  var total = arrayLinks.length;
  var arrayUnique = [];
  arrayLinks.forEach(function (link) {
    if (arrayUnique.indexOf(link.href) === -1) {
      arrayUnique.push(link.href);
    }
  });
  var unique = arrayUnique.length;
  var stats = [total, unique];
  return stats;
};

exports.statsLinks = statsLinks;

var brokeLinks = function brokeLinks(arrayStats, arrayValidate) {
  var arrayBroken = [];
  arrayValidate.forEach(function (link) {
    if (link.status <= 100 || link.status >= 400 || link.status === '') arrayBroken.push(link);
  });
  var broken = arrayBroken.length;
  arrayStats.push(broken);
  return arrayStats;
};

exports.brokeLinks = brokeLinks;