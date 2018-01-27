var url = require('url');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static(__dirname + 'public'));


function renderHTML(path, response) {
	fs.readFile(path, null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found!!');
		} else {
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response) {
		var path = url.parse(request.url).pathname;
		switch (path) {
			case '/':
				renderHTML('./mectal.html', response);
			break;
			case '/contato.html':
				renderHTML('./contato.html', response);
			break;
			case '/servicos.html':
				renderHTML('./servicos.html', response);
			break;
			case '/mectal.html':
				renderHTML('./mectal.html', response);
			break;
			default:
				response.writeHead(404);
				response.write('Rota nao definida');
				response.end();
		}
	}
}