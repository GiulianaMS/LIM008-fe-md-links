import {checkRouteAbsolute} from '../links/process-links.js';

export const showLinks = (route) => {
  return checkRouteAbsolute(route);
};