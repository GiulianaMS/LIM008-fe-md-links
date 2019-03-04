const fs = require("fs");
const path = require('path');

export const checkRouteAbsolute = (route) =>{
    return path.isAbsolute(route);
}
export const convertRoute = (route) =>{
    return path.resolve(route)
}
export const checkArchive = (route)=>{
    return fs.lstatSync(route).isFile();
}
export const checkDirectory = (route)=>{
    return fs.lstatSync(route).isDirectory();
}
export const getFiles = (route)=>{
    let files = [];
    const getFilesThroughFolders =(path, files)=>{
        fs.readdirSync(path).forEach(function(file){
            let subpath = path + '/' + file;
            if(fs.lstatSync(subpath).isDirectory()){
                getFilesThroughFolders(subpath, files);
            } else {
                files.push(path + '/' + file);
            }
        });     
    }
    getFilesThroughFolders(route, files)
    return files
}

export  const checkMarkdown=(files)=>{
    let filesMd = [];
    files.forEach(function(file){
        if (file.slice((file.length)-3, file.length)==='.md'){
            filesMd.push(file);
        }
    });
    return filesMd
}
//const route = ["./aprueba/elica/Erickelrojo.md", "./aprueba/giuliana.txt", "./aprueba/pamela.md"];