import { getFiles, checkMarkdown, getLinks} from '../process/process-links';
const fetch = require('node-fetch');

export const validatelink = (objectlinks) => {
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
validatelink(getLinks(checkMarkdown(getFiles('.\\aprueba')))).then(response => console.log(response));