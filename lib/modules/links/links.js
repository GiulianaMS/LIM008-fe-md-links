import {checkRouteAbsolute, convertRoute, checkArchive, checkMarkdown, checkDirectory, getFiles, getLinks} from '../links/process-links.js';

export const showLinks = (route) => {
  let absoluteRoute, arrayFilesMD, arrayFiles, arraylinks;
  if (checkRouteAbsolute(route) === true) {
    absoluteRoute = route;
  } else {
    absoluteRoute = convertRoute(route);
  }
  if (checkArchive(absoluteRoute) === true) {
    const arrayProvisional = new Array(absoluteRoute);
    arrayFilesMD = checkMarkdown(arrayProvisional);
  } else if (checkDirectory(absoluteRoute) === true) {
    arrayFiles = getFiles(absoluteRoute);
    arrayFilesMD = checkMarkdown(arrayFiles);
  }
  arraylinks = getLinks(arrayFilesMD);
  return arraylinks;
};