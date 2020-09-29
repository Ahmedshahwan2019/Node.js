/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');
const port = 3000;
const index = 'index.html';
const style = 'style.css';
const indexJS = 'index.js';
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(index, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error :File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/index.js') {
        fs.readFile(indexJS, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error :File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/style.css') {
        fs.readFile(style, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error :File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(port, (err) => {
    if (err) {
        console.log('something went wrong', err);
    } else {
        console.log('Server is listening on port' + port);
    }
});