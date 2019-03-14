"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateStatsValidate = exports.templateStats = exports.templateValidate = exports.templateLinks = void 0;

var templateLinks = function templateLinks(link) {
  return "".concat(link.route, " ").concat(link.href, " Title: ").concat(link.text, " Line: ").concat(link.line);
};

exports.templateLinks = templateLinks;

var templateValidate = function templateValidate(link) {
  return "".concat(link.route, " ").concat(link.href, " Title: ").concat(link.text, " Line: ").concat(link.line, " Status: ").concat(link.status, " ").concat(link.statusText);
};

exports.templateValidate = templateValidate;

var templateStats = function templateStats(array) {
  return "Total: ".concat(array[0], "<br/> Unique: ").concat(array[1]);
};

exports.templateStats = templateStats;

var templateStatsValidate = function templateStatsValidate(array) {
  return "Total: ".concat(array[0], "<br/> Unique: ").concat(array[1], "<br/> Broken: ").concat(array[2]);
};

exports.templateStatsValidate = templateStatsValidate;