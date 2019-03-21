import {checkRouteAbsolute, convertRoute, checkArchive, checkDirectory, getFiles, checkMarkdown, readMarkdown, getLinks} from '../lib/modules/links/process-links.js';
import {showLinks} from '../lib/modules/links/links.js';
const path = require('path');
const route = 'aprueba2';
const route2 = path.resolve(process.cwd(), 'aprueba2');
const resultLinks = [ { 
  href: 'https://es.wikipedia.org/wiki/Markdown',
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
  line: 8 } ];

describe('checkRouteAbsolute', () => {
  it('Deberia de verificar si es una ruta absoluta y devolver true', () => {
    expect(checkRouteAbsolute('/test/demo_path.js')).toBe(true);
  });
  it('Deberia de verificar si es no una ruta absoluta y devolver false', () => {
    expect(checkRouteAbsolute('test/demo_path.js')).toBe(false);
  });
});
describe('convertRoute', () => {
  it('Deberia convertir una ruta relativa a absoluta y retornar ruta convertida', () => {
    expect(convertRoute('test/demo_path.js')).toBe(path.resolve(`${process.cwd()}/test/demo_path.js`));
  });
});
describe('checkArchive', () => {
  it('Deberia de verificar si ruta te lleva a un archivo y retornar true', () => {
    expect(checkArchive(path.resolve(`${process.cwd()}/test/links.spec.js`))).toBe(true);
  });
  it('Deberia de verificar si ruta no te lleva a un archivo y retornar false', () => {
    expect(checkArchive(path.resolve(`${process.cwd()}/test`))).toBe(false);
  });
});
describe('checkDirectory', () => {
  it('Deberia de verificar si ruta te lleva a un directorio y retornar true', () => {
    expect(checkDirectory(path.resolve(`${process.cwd()}/test`))).toBe(true);
  });
  it('Deberia de verificar si ruta no te lleva a un directorio y retornar false', () => {
    expect(checkDirectory(path.resolve(`${process.cwd()}/test/links.spec.js`))).toBe(false);
  });
});
describe('getFiles', () => {
  it('Deberia de retornar un array con archivos', () => {
    expect(getFiles(path.resolve(process.cwd(), 'aprueba'))).toEqual([ path.resolve(process.cwd(), 'aprueba/elica/Erickelrojo.md'),
      (path.resolve(process.cwd(), 'aprueba/giuliana.txt')),
      (path.resolve(process.cwd(), 'aprueba/pamela.md'))]);
  });
});
describe('checkMarkdown', () => {
  it('Deberia de retornar un array con archivos .md', () => {
    expect(checkMarkdown([ './aprueba/elica/Erickelrojo.md',
      './aprueba/giuliana.txt',
      './aprueba/pamela.md' ])).toEqual([ './aprueba/elica/Erickelrojo.md',
      './aprueba/pamela.md' ]);
  });
  it('Deberia de retornar un mensaje de error', () => {
    expect(checkMarkdown(['./aprueba/giuliana.txt'])).toEqual([]);
  });
});
describe('readMarkdown', () => {
  it('Deberia de retornar un string con el contenido del Markdown', () => {
    expect(readMarkdown((path.resolve(process.cwd(), 'aprueba/elica/Erickelrojo.md')))).toEqual('# Markdown Links');
  });
});
describe('getLinks', () => {
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(getLinks([path.resolve(`${process.cwd()}/aprueba/pamela.md`)])).toEqual([{href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',      
      route: (path.resolve(`${process.cwd()}/aprueba/pamela.md`)),
      line: 2
    }]);
  });
});
describe('showLinks', () => {
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(showLinks(route)).toEqual(resultLinks);
  });
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(showLinks(route2)).toEqual(resultLinks);
  });
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(showLinks(path.resolve(`${process.cwd()}/aprueba2/carpeta1/archivo1.md`))).toEqual([ { 
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      route:
      (path.resolve(`${process.cwd()}/aprueba2/carpeta1/archivo1.md`)),
      line: 3 }]);
  });
});
