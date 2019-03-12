import {checkRouteAbsolute, convertRoute, checkArchive, checkDirectory, getFiles, checkMarkdown, readMarkdown, getLinks} from '../lib/modules/links/process-links.js';
import {showLinks} from '../lib/modules/links/links.js';
const route = 'aprueba2';
const route2 = 'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2';
const resultLinks = [ { 
  href: 'https://es.wikipedia.org/wiki/Markdown',
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
  line: 8 } ];

describe('checkRouteAbsolute', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof checkRouteAbsolute).toBe('function');
  });
  it('Deberia de verificar si es una ruta absoluta y devolver true', () => {
    expect(checkRouteAbsolute('/test/demo_path.js')).toBe(true);
  });
  it('Deberia de verificar si es no una ruta absoluta y devolver false', () => {
    expect(checkRouteAbsolute('test/demo_path.js')).toBe(false);
  });
});
describe('convertRoute', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof convertRoute).toBe('function');
  });
  it('Deberia convertir una ruta relativa a absoluta y retornar ruta convertida', () => {
    expect(convertRoute('test/demo_path.js')).toBe('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test\\demo_path.js');
  });
});
describe('checkArchive', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof checkArchive).toBe('function');
  });
  it('Deberia de verificar si ruta te lleva a un archivo y retornar true', () => {
    expect(checkArchive('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test\\links.spec.js')).toBe(true);
  });
  it('Deberia de verificar si ruta no te lleva a un archivo y retornar false', () => {
    expect(checkArchive('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test')).toBe(false);
  });
});
describe('checkDirectory', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof checkDirectory).toBe('function');
  });
  it('Deberia de verificar si ruta te lleva a un directorio y retornar true', () => {
    expect(checkDirectory('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test')).toBe(true);
  });
  it('Deberia de verificar si ruta no te lleva a un directorio y retornar false', () => {
    expect(checkDirectory('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test\\links.spec.js')).toBe(false);
  });
});
describe('getFiles', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof getFiles).toBe('function');
  });
  it('Deberia de retornar un array con archivos', () => {
    expect(getFiles('.\\aprueba')).toEqual([ '.\\aprueba\\elica\\Erickelrojo.md',
      '.\\aprueba\\giuliana.txt',
      '.\\aprueba\\pamela.md' ]);
  });
});
describe('checkMarkdown', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof checkMarkdown).toBe('function');
  });
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
  it('Deberia de ser una funcion', () => {
    expect(typeof readMarkdown).toBe('function');
  });
  it('Deberia de retornar un string con el contenido del Markdown', () => {
    expect(readMarkdown('./aprueba/elica/Erickelrojo.md')).toEqual('# Markdown Links');
  });
});
describe('getLinks', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(getLinks(['.\\aprueba/pamela.md'])).toEqual([{href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      route: '.\\aprueba/pamela.md',
      line: 2
    }]);
  });
});
describe('showLinks', () => {
  it('Deberia de ser una funcion', () => {
    expect(typeof showLinks).toBe('function');
  });
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(showLinks(route)).toEqual(resultLinks);
  });
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(showLinks(route2)).toEqual(resultLinks);
  });
  it('Deberia de retornar un array de objetos con las propiedades de los links', () => {
    expect(showLinks('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\carpeta1\\archivo1.md')).toEqual([ { 
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      route:
     'C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\aprueba2\\carpeta1\\archivo1.md',
      line: 3 }]);
  });
});
