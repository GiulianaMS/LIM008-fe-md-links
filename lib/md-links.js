import {showLinks} from './modules/links/links.js';
import {validatelinks} from './modules/validate/validate.js';
import {statsLinks} from './modules/stats/stats.js';

export const mdLinks = (route, options) => {
  let nombrePromesa = new Promise((resolve) => {
    let arrayLinks = showLinks(route);
    validatelinks(arrayLinks).then((resultado) => {
      let arrayValidate = resultado;
      let arrayStats = statsLinks(arrayLinks);
      if (options.validate === false && options.stats === false) {
        resolve(arrayLinks);
      } else if (options.validate === true && options.stats === false) {
        resolve(arrayValidate);
      } else if (options.validate === false && options.stats === true) {
        resolve(arrayStats);
      } else if (options.validate === true && options.stats === true) {
        let arrayBroken = [];
        arrayValidate.forEach((link) => {
          if (arrayValidate.indexOf(link.statusText) === 'Fail')
            arrayBroken.push(link);
        });
        const broken = arrayBroken.length;
        arrayStats.broken = broken;
        resolve(arrayStats); 
      } 
    });
  });
  nombrePromesa.then((result) => {
    return result;
  });
  return nombrePromesa;
};
mdLinks('.\\aprueba2', { validate: true, stats: true })
  .then((resultado) => {
    console.log(resultado);
  });