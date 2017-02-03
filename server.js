/*var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sou um servidor criado pelo Node.js!\n');
}).listen(3000, '127.0.0.1');*/

var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'),function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
});