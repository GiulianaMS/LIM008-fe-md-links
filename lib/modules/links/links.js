import {checkRouteAbsolute} from '../links/process-links.js';

export const extractLinks = (route) => {
  return checkRouteAbsolute(route);
};