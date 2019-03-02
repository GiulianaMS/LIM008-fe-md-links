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

