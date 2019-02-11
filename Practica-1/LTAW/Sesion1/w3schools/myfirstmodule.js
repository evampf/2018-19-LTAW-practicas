var http = require('http');

myDateTime = function () {
  return Date();
};


console.log("Arrancar servidor....");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + myDateTime());
  res.end();
  console.log("Peticion atendida");
}).listen(8080);
