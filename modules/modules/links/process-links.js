"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = exports.readMarkdown = exports.checkMarkdown = exports.getFiles = exports.checkDirectory = exports.checkArchive = exports.convertRoute = exports.checkRouteAbsolute = void 0;

var fs = require('fs');

var path = require('path');

var marked = require('marked');

var checkRouteAbsolute = function checkRouteAbsolute(route) {
  return path.isAbsolute(route);
};

exports.checkRouteAbsolute = checkRouteAbsolute;

var convertRoute = function convertRoute(route) {
  return path.resolve(route);
};

exports.convertRoute = convertRoute;

var checkArchive = function checkArchive(route) {
  return fs.lstatSync(route).isFile();
};

exports.checkArchive = checkArchive;

var checkDirectory = function checkDirectory(route) {
  return fs.lstatSync(route).isDirectory();
};

exports.checkDirectory = checkDirectory;

var getFiles = function getFiles(route) {
  var files = [];

  var getFilesThroughFolders = function getFilesThroughFolders(path, files) {
    fs.readdirSync(path).forEach(function (file) {
      var subpath = path + '/' + file;

      if (fs.lstatSync(subpath).isDirectory()) {
        getFilesThroughFolders(subpath, files);
      } else {
        files.push(path + '/' + file);
      }
    });
  };

  getFilesThroughFolders(route, files);
  return files;
};

exports.getFiles = getFiles;

var checkMarkdown = function checkMarkdown(files) {
  var arrayFilesMd = [];
  files.forEach(function (file) {
    if (file.slice(file.length - 3, file.length) === '.md') {
      arrayFilesMd.push(file);
    }
  });
  return arrayFilesMd;
};

exports.checkMarkdown = checkMarkdown;

var readMarkdown = function readMarkdown(route) {
  return fs.readFileSync(route).toString('utf8');
};

exports.readMarkdown = readMarkdown;

var getLinks = function getLinks(arrayRoute) {
  var arrayLinks = [];
  arrayRoute.forEach(function (route) {
    var renderer = new marked.Renderer();
    var content = readMarkdown(route);
    var contentSeparate = content.split('\n');

    renderer.link = function (href, title, text) {
      for (var i = 0; i < contentSeparate.length; i++) {
        if (contentSeparate[i].indexOf(href) > -1) {
          arrayLinks.push({
            href: href,
            text: text,
            file: route,
            lines: i + 1
          });
        }
      }
    };

    marked(content, {
      renderer: renderer
    });
  });
  return arrayLinks;
};

exports.getLinks = getLinks;
console.log(getLinks(['.\\aprueba\\pamela.md']));