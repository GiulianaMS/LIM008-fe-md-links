import {statsLinks, brokeLinks} from '../lib/modules/stats/stats.js';
const arraylinks = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
   'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\prueba1.md',
    line: 3 },
  { href: 'https://nodejs.org/defrefer',
    text: 'Node.js',
    route:
   'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\prueba1.md',
    line: 6 },
  { href: 'https://seedeffefremver.org/',
    text: 'Semver',
    route:
   'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\prueba1.md',
    line: 8 } ];

const resultStats = [3, 3];

const resultStatsAll = [3, 3, 2];

const arrayValidate = [ { 
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  route:
   'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\prueba1.md',
  line: 3,
  status: 200,
  statusText: 'OK' },
{ href: 'https://nodejs.org/defrefer',
  text: 'Node.js',
  route:
   'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\prueba1.md',
  line: 6,
  status: 404,
  statusText: 'Fail' },
{ href: 'https://seedeffefremver.org/',
  text: 'Semver',
  route:
   'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\prueba1.md',
  line: 8,
  status: '',
  statusText: 'Not Found' } ];

describe('statsLinks', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof statsLinks).toBe('function');
  });
  it('Deberia de retornar las estadisticas de los links', () => {
    expect(statsLinks(arraylinks)).toEqual(resultStats);
  });;
  it('Deberia de retornar las todas las estadisticas', () => {
    expect(brokeLinks(resultStats, arrayValidate)).toEqual(resultStatsAll);
  });;
});