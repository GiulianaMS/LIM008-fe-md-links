import {mdLinks} from '../lib/md-links.js';
const route = '.\\aprueba2';
const result1 = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
     'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\carpeta1\\archivo1.md',
    line: 3 },
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
    line: 8 } ] ;

const result2 = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
 'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\carpeta1\\archivo1.md',
    line: 3,
    status: 200,
    statusText: 'OK' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
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

describe('mdLinks', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Deberia retornar links validados', () => {
    return mdLinks(route)
      .then((finalResult) => {
        expect(finalResult).toEqual(result1);
      });
  });
  it('Deberia retornar links validados', () => {
    return mdLinks(route, {validate: true})
      .then((finalResult) => {
        expect(finalResult).toEqual(result2);
      });
  });
});