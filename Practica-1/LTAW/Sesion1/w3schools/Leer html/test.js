//El servidor lee lo que le pides en la url,
//en caso de no encontrarlo te devuelve un error 404


var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancar servidor....");

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
