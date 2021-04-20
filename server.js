const fs = require('fs');
const http = require('http');
const port = 3000;
const hostname = 'localhost';
const moment = require('moment');

const birthdate = '1993-02-27';
console.log(moment(birthdate).format('LL'))

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let _route = './views/';

    switch (req.url) {
        case '/':
            _route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            _route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
        default:
            _route += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(_route, (err,data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})

server.listen(port, () => {
    console.log('Listening on port ' + port);
})