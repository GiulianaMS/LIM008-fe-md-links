const fs = require('fs');
const path = require('path');
const marked = require('marked');

export const checkRouteAbsolute = (route) => {
  return path.isAbsolute(route);
};
export const convertRoute = (route) => {
  return path.resolve(route);
};
export const checkArchive = (route) => {
  return fs.lstatSync(route).isFile();
};
export const checkDirectory = (route) => {
  return fs.lstatSync(route).isDirectory();
};
export const getFiles = (route) => {
  let files = [];
  const getFilesThroughFolders = (path, files) => {
    fs.readdirSync(path).forEach(function(file) {
      let subpath = path + '\\' + file;
      if (fs.lstatSync(subpath).isDirectory()) {
        getFilesThroughFolders(subpath, files);
      } else {
        files.push(path + '\\' + file);
      }
    });     
  };
  getFilesThroughFolders(route, files);
  return files;
};
export const checkMarkdown = (files) => {
  let arrayFilesMd = [];
  files.forEach(function(file) {
    if (file.slice((file.length) - 3, file.length) === '.md') {
      arrayFilesMd.push(file);
    }
  });
  if (arrayFilesMd.length === 0) {
    console.log('No se encontro ningún archivo .md');
  }
  return arrayFilesMd;
};
export const readMarkdown = (route) => {
  return fs.readFileSync(route).toString('utf8');
};
export const getLinks = (arrayRoute) => {
  let arrayLinks = [];
  arrayRoute.forEach((route) => {
    const renderer = new marked.Renderer();
    const content = readMarkdown(route);
    let contentSeparate = content.split('\n');
    renderer.link = function(href, title, text) {
      for (let i = 0 ; i < contentSeparate.length ; i++) {
        if (contentSeparate[i].indexOf(href) > -1) {
          arrayLinks.push({href, text, route, line: i + 1});
        } 
      }
    };
    marked(content, {renderer});
  });
  return arrayLinks;
};
