import {showLinks} from './modules/links/links.js';
import {validatelinks} from './modules/validate/validate.js';

export const mdLinks = (route, options) => {
  let promiseLinks = new Promise((resolve) => {
    let arrayLinks = showLinks(route);
    if (options === undefined) {
      resolve(arrayLinks);
    } else if (options.validate === true) {
      validatelinks(arrayLinks).then((result) => {
        let arrayValidate = result;
        resolve(arrayValidate); 
      }); 
    }
  });
  return promiseLinks;
};