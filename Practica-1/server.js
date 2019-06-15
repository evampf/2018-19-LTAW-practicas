
// Este es un servidor web "Hola mundo",
//que lo único que hace es generar una respuesta en HTML cada vez que recibe una petición en el puerto 8080


var http = require('http');

console.log("Arrancando servidor...")


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  console.log("Peticion atendida")
}).listen(8080);
