#!/usr/bin/env node
const [,, ... args] = process.argv;
const colors = require('colors');
import {mdLinks} from './md-links.js';
import {statsLinks, brokeLinks} from '../modules/modules/stats/stats.js';
import {templateValidate, templateStats, templateStatsValidate, templateLinks} from '../modules/modules/templates';
if (args[0] === undefined) {
  console.log('Debes de ingresar una ruta'.magenta);
} else if (args[1] === undefined) {
  mdLinks(args[0]).then((result) => {
    result.forEach(link => {
      console.log(templateLinks(link).green);
    }); 
  });
} else if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
  mdLinks(args[0], {validate: true}).then((result) => {
    console.log(templateStatsValidate(brokeLinks(statsLinks(result), result)));
  });
} else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
  mdLinks(args[0], {validate: true}).then((result) => {
    console.log(templateStatsValidate(brokeLinks(statsLinks(result), result)));
  });
} else if (args[1] === '--stats' || args[1] === '--s') {
  mdLinks(args[0]).then((result) => {
    console.log(templateStats(statsLinks(result)).yellow);
  });
} else if (args[1] === '--validate' || args[1] === '--v') {
  mdLinks(args[0], {validate: true}).then((result) => {
    result.forEach(link => {
      console.log(templateValidate(link).blue);
    });
  });
} else {
  console.log('Error'.red);
}
