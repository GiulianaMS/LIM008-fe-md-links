"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsLinks = void 0;

var statsLinks = function statsLinks(arrayLinks) {
  var total = arrayLinks.length;
  var arrayUnique = [];
  arrayLinks.forEach(function (link) {
    if (arrayUnique.indexOf(link.href) === -1) {
      arrayUnique.push(link.href);
    }
  });
  var unique = arrayUnique.length;
  var stats = [{
    total: total
  }, {
    unique: unique
  }];
  return stats;
};

exports.statsLinks = statsLinks;