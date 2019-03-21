import {validatelinks} from '../lib/modules/validate/validate.js';
const path = require('path');
const arraylinks = [ 
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
    line: 8 } ];
const result = [ { 
  href: 'https://es.wikipedia.org/wiki/Markdown',
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

describe('validatelinks', () => {
  it('Deberia retornar links validados', () => {
    return validatelinks(arraylinks)
      .then((finalResult) => {
        expect(finalResult).toEqual(result);
      });
  });
});
