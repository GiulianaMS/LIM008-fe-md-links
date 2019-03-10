import { getFiles, checkMarkdown, getLinks} from '../links/process-links.js';
const fetch = require('node-fetch');

export const validatelinks = (objectlinks) => {
  const validate = objectlinks.map((objLink) => {
    return new Promise((resolve) => {
      fetch(objLink.href)
        .then((response) => {
          if (response.status >= 200 && response.status < 400) {
            objLink.status = response.status;
            objLink.statusText = 'OK';
            resolve(objLink);
          } else {
            objLink.status = response.status;
            objLink.statusText = 'Fail';
            resolve(objLink);
          }
        })
        .catch((error) => {
          objLink.status = '';
          objLink.statusText = 'Not Found';
          resolve(objLink);
        });
    });
  });
  return Promise.all(validate);
};
validatelinks(getLinks(checkMarkdown(getFiles('.\\aprueba2')))).then(response => console.log(response));