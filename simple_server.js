var http = require("http");
var url = require("url");

http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname;
  if(pathname == '/') {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Welcome to Express");
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}).listen(3000);
