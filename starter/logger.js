var url    = require('url');
var http   = require('http');
var server = http.createServer(function(request, response) {
    var urlParts = url.parse(request.url, true);
    console.log(urlParts.query.message);

    response.writeHead(200);
    response.end();
});

server.listen(8080);
