/* importando modulos em variaveis */
var http = require('http');
<<<<<<< HEAD
var app = require('./app');

http.createServer(app.handleRequest).listen(8080);
=======
var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/',function(req, res) {
	fs.readFile('mectal.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});


/* Criando server http */
http.createServer(function (req, res) {

	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);
>>>>>>> ac6ee2000cbffaf86cc9b7d1fb23b02208ce13e6
