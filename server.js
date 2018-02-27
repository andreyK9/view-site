'use strict';

const http = require("http");
const fs = require('fs');

const server = http.createServer( function (request, response) {
    console.log(request.method, request.url);
    if(request.url == '/css/libs.min.css') {
        const css = fs.readFileSync('css/libs.min.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/css/fonts.css') {
        const css = fs.readFileSync('css/fonts.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/css/main.css') {
        const css = fs.readFileSync('css/main.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/css/media.css') {
        const css = fs.readFileSync('css/media.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/js/libs.min.js') {
        const css = fs.readFileSync('js/libs.min.js', 'utf8');
        response.end(css);
    }
    else if(request.url == '/js/common.js') {
        const css = fs.readFileSync('js/common.js', 'utf8');
        response.end(css);
    }
    else if(request.url == '/libs/normalize/normalize.css') {
        const css = fs.readFileSync('libs/normalize/normalize.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/libs/owlcarousel/dist/assets/owl.carousel.min.css') {
        const css = fs.readFileSync('libs/owlcarousel/dist/assets/owl.carousel.min.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/libs/owlcarousel/dist/assets/owl.theme.default.css') {
        const css = fs.readFileSync('libs/owlcarousel/dist/assets/owl.theme.default.css', 'utf8');
        response.end(css);
    }
    else if(request.url == '/fonts/comment-icon/css/comment.css') {
        const css = fs.readFileSync('fonts/comment-icon/css/comment.css', 'utf8');
        response.end(css);
    } else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html);
    }
});

server.listen(process.env.PORT || 3000);
console.log('Server started!');