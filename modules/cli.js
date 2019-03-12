#!/usr/bin/env node
"use strict";

var _mdLinks = require("./md-links.js");

var _stats = require("../modules/modules/stats/stats.js");

var _templates = require("../modules/modules/templates");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

var colors = require('colors');

if (args[0] === undefined) {
  console.log('Debes de ingresar una ruta'.magenta);
} else if (args[1] === undefined) {
  (0, _mdLinks.mdLinks)(args[0]).then(function (result) {
    result.forEach(function (link) {
      console.log((0, _templates.templateLinks)(link).green);
    });
  });
} else if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true
  }).then(function (result) {
    console.log((0, _templates.templateStatsValidate)((0, _stats.brokeLinks)((0, _stats.statsLinks)(result), result)));
  });
} else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true
  }).then(function (result) {
    console.log((0, _templates.templateStatsValidate)((0, _stats.brokeLinks)((0, _stats.statsLinks)(result), result)));
  });
} else if (args[1] === '--stats' || args[1] === '--s') {
  (0, _mdLinks.mdLinks)(args[0]).then(function (result) {
    console.log((0, _templates.templateStats)((0, _stats.statsLinks)(result)).yellow);
  });
} else if (args[1] === '--validate' || args[1] === '--v') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true
  }).then(function (result) {
    result.forEach(function (link) {
      console.log((0, _templates.templateValidate)(link).blue);
    });
  });
} else {
  console.log('Error'.red);
}