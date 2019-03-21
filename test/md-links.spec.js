import {mdLinks} from '../lib/md-links.js';
const path = require('path');
const route = path.resolve(`${process.cwd()}/aprueba2`);
const result1 = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
    path.resolve(`${process.cwd()}/aprueba2/carpeta1/archivo1.md`),
    line: 3 },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
    path.resolve(`${process.cwd()}/aprueba2/prueba1.md`),
    line: 3 },
  { href: 'https://nodejs.org/defrefer',
    text: 'Node.js',
    route:
    path.resolve(`${process.cwd()}/aprueba2/prueba1.md`),
    line: 6 },
  { href: 'https://seedeffefremver.org/',
    text: 'Semver',
    route:
    path.resolve(`${process.cwd()}/aprueba2/prueba1.md`),
    line: 8 } ] ;
const result2 = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
    path.resolve(`${process.cwd()}/aprueba2/carpeta1/archivo1.md`),
    line: 3,
    status: 200,
    statusText: 'OK' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    route:
    path.resolve(`${process.cwd()}/aprueba2/prueba1.md`),
    line: 3,
    status: 200,
    statusText: 'OK' },
  { href: 'https://nodejs.org/defrefer',
    text: 'Node.js',
    route:
    path.resolve(`${process.cwd()}/aprueba2/prueba1.md`),
    line: 6,
    status: 404,
    statusText: 'Fail' },
  { href: 'https://seedeffefremver.org/',
    text: 'Semver',
    route:
    path.resolve(`${process.cwd()}/aprueba2/prueba1.md`),
    line: 8,
    status: '',
    statusText: 'Fail' } ];

describe('mdLinks', () => {
  it('Deberia retornar links', () => {
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