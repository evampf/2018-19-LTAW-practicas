
var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

http.createServer(function (req, res) {
  console.log("--> Petición RECIBIDA!");

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  if (q.pathname == "/"){
    filename += "/index.html";
  }
  tipo = filename.split(".")[1]

  fs.readFile(filename, function(err, data){
    console.log("Recurso solicitado(URL): " + filename);
    console.log();

    //-- Tipo mime por defecto: html
    var mime = "text/html"

    //-- Es una imagen
    if (['png', 'jpg'].includes(tipo)) {
      console.log("IMAGEN!!!!!")
      mime = "image/" + tipo
    }

    //-- Es un css
    if (tipo == "css")
      mime = "text/css";

    //-- Es una canción
    if (tipo == "mp3")
      mime = "audio/mpeg";

      //-- Es una canción
    if (tipo == "mp4")
      mime = "video/mp4";

    if (err){
      res.writeHead(404, {'Content-Type': mime});
      res.end(" 404   NOT FOUND");
    } else {
      res.write(data);
      res.end();
    }
  });

}).listen(8080);
