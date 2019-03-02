import {checkRouteAbsolute, convertRoute, checkArchive, checkDirectory} from "../lib/process/process-links.js";
describe("checkRouteAbsolute",()=>{
    it('Deberia de ser una funcion',()=>{
        expect(typeof checkRouteAbsolute).toBe('function');
    })
    it('Deberia de verificar si es una ruta absoluta y devolver true',()=>{
        expect(checkRouteAbsolute('/test/demo_path.js')).toBe(true);
    })
    it('Deberia de verificar si es no una ruta absoluta y devolver false',()=>{
        expect(checkRouteAbsolute('test/demo_path.js')).toBe(false);
    })
})
describe("convertRoute",()=>{
    it('Deberia de ser una funcion',()=>{
        expect(typeof convertRoute).toBe('function');
    })
    it('Deberia convertir una ruta relativa a absoluta y retornar ruta convertida',()=>{
        expect(convertRoute('test/demo_path.js')).toBe('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test\\demo_path.js');
    })
})
describe("checkArchive",()=>{
    it('Deberia de ser una funcion',()=>{
        expect(typeof checkArchive).toBe('function');
    })
    it('Deberia de verificar si ruta te lleva a un archivo y retornar true',()=>{
        expect(checkArchive('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test\\links.spec.js')).toBe(true);
    })
    it('Deberia de verificar si ruta no te lleva a un archivo y retornar false',()=>{
        expect(checkArchive('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test')).toBe(false);
    })
})
describe("checkDirectory",()=>{
    it('Deberia de ser una funcion',()=>{
        expect(typeof checkDirectory).toBe('function');
    })
    it('Deberia de verificar si ruta te lleva a un directorio y retornar true',()=>{
        expect(checkDirectory('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test')).toBe(true);
    })
    it('Deberia de verificar si ruta no te lleva a un directorio y retornar false',()=>{
        expect(checkDirectory('C:\\Users\\DESKTOP\\Documents\\Laboratoria\\LIM008-fe-md-links\\test\\links.spec.js')).toBe(false);
    })
})