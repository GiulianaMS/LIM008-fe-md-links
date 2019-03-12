import {validatelinks} from '../lib/modules/validate/validate.js';

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

const result = [ { 
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

describe('validatelinks', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof validatelinks).toBe('function');
  });
  it('Deberia retornar links validados', () => {
    return validatelinks(arraylinks)
      .then((finalResult) => {
        expect(finalResult).toEqual(result);
      });
  });
});