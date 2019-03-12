#!/usr/bin/env node
const [,, ... args] = process.argv;
import {mdLinks} from './md-links.js';
import {statsLinks, brokeLinks} from '../modules/modules/stats/stats.js';
import {templateValidate, templateStats, templateStatsValidate, templateLinks} from '../modules/modules/templates';
if (args[0] === undefined) {
  console.log('Debes de ingresar una ruta');
} else if (args[1] === undefined) {
  mdLinks(args[0]).then((result) => {
    result.forEach(link => {
      console.log(templateLinks(link));
    }); 
  });
} else if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
  mdLinks(args[0], {validate: true}).then((result) => {
    console.log('1', templateStatsValidate(brokeLinks(statsLinks(result), result)));
  });
} else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
  mdLinks(args[0], {validate: true}).then((result) => {
    console.log('2', templateStatsValidate(brokeLinks(statsLinks(result), result)));
  });
} else if (args[1] === '--stats' || args[1] === '--s') {
  mdLinks(args[0]).then((result) => {
    console.log('3', templateStats(statsLinks(result)));
  });
} else if (args[1] === '--validate' || args[1] === '--v') {
  mdLinks(args[0], {validate: true}).then((result) => {
    result.forEach(link => {
      console.log('4', templateValidate(link));
    });
  });
} else {
  console.log('Error');
}