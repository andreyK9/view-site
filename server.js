// language=ECMAScript 6
'use strict';

// const http = require("http");
// const fs = require('fs');

// const server = http.createServer( function (request, response) {
//     console.log(request.method, request.url);

//     if(request.url == '/') {
//         const html = fs.readFileSync('index.html', 'utf8');
//         response.end(html);
//     } else {
//         const str = String(request.url);
//         const style = fs.readFileSync(str.substring(1), 'utf8');
//         response.end(style);
//     }
    // if (request.url == '/css/normalize/normalize.css') {
    //     const normz = fs.readFileSync('css/normalize/normalize.css', 'utf8');
    //     response.end(normz);
    // } else if(request.url == '/libs/font-awesome/css/font-awesome.min.css') {
    //     const fontAwe = fs.readFileSync('libs/font-awesome/css/font-awesome.min.css', 'utf8');
    //     response.end(fontAwe);
    // } else if(request.url == '/fonts/duhoot_icons/css/duhoot.css') {
    //     const duhoot = fs.readFileSync('fonts/duhoot_icons/css/duhoot.css', 'utf8');
    //     response.end(duhoot);
    // } else if(request.url == '/css/fonts.css') {
    //     const fonts = fs.readFileSync('css/fonts.css', 'utf8');
    //     response.end(fonts);
    // } else if(request.url == '/css/style.css') {
    //     const style = fs.readFileSync('css/style.css', 'utf8');
    //     response.end(style);
    // } else {
    //     const html = fs.readFileSync('index.html', 'utf8');
    //     response.end(html);
    // }
// });

// server.listen(process.env.PORT || 3000);
// console.log('Server started!');

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);
console.log('Server started!');