
var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
  console.log("---> Peticion recibida")
  console.log("Recurso solicitado (URL): " + req.url)
  var q = url.parse(req.url, true);
  console.log("URL parseada: ")
  console.log("Host: " + q.host)
  console.log("pathname:" + q.pathname)

  var filename = ""
  if (q.pathname == "/")
    filename += "/index.html"
  else {
    filename = q.pathname
  }
  filename = "." + filename

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }

    tipo = filename.split(".")[1]
    var mime = "text/html"
    res.writeHead(200, {'Content-Type': mime});

    if (tipo == "html")
      mime = "text/html"
    //-- Es un css
    if (tipo == "css")
      mime = "text/css"

    //-- Generar el mensaje de respuesta
    res.writeHead(200, {'Content-Type': mime});
    res.write(data);
    res.end();
  });
}).listen(8080);
