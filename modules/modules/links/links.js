"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showLinks = void 0;

var _processLinks = require("../links/process-links.js");

var showLinks = function showLinks(route) {
  return (0, _processLinks.checkRouteAbsolute)(route);
};

exports.showLinks = showLinks;