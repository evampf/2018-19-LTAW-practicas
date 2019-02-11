var http = require('http');

console.log("Arrancar servidor....");


http.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello world');
  console.log('Peticion atendida')
}).listen(8080);
