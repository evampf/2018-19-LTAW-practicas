//Lee el texto (txt) e imprime las palabras asociadas a eso

//http://localhost:8080/?año=2017&month=July
// => 2017 July


var http = require('http');
var url = require('url');

console.log("Arrancar servidor....");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = "=> " + q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
