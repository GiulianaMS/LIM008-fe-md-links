const fetch = require('node-fetch');

export const validatelinks = (objectlinks) => {
  let arrayPromises = [];
  objectlinks.forEach((objLink) => {
    let iPromise = new Promise((resolve) => {
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
          objLink.statusText = 'Fail';
          resolve(objLink);
        });
    });
    arrayPromises.push(iPromise);
  });
  return Promise.all(arrayPromises);
};