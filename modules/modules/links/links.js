"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showLinks = void 0;

var _processLinks = require("../links/process-links.js");

var showLinks = function showLinks(route) {
  var absoluteRoute, arrayFilesMD, arrayFiles, arraylinks;

  if ((0, _processLinks.checkRouteAbsolute)(route) === true) {
    absoluteRoute = route;
  } else {
    absoluteRoute = (0, _processLinks.convertRoute)(route);
  }

  if ((0, _processLinks.checkArchive)(absoluteRoute) === true) {
    arrayFilesMD = (0, _processLinks.checkMarkdown)(absoluteRoute);
  } else if ((0, _processLinks.checkDirectory)(absoluteRoute) === true) {
    arrayFiles = (0, _processLinks.getFiles)(absoluteRoute);
    arrayFilesMD = (0, _processLinks.checkMarkdown)(arrayFiles);
  } else {
    console.log('Error');
  }

  arraylinks = (0, _processLinks.getLinks)(arrayFilesMD);
  return arraylinks;
};

exports.showLinks = showLinks;
console.log(showLinks('.\\aprueba2'));