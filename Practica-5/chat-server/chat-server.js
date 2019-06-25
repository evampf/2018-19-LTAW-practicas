var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var num_users = 0;

//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal: /")
});

//-- Servir el cliente javascript
app.get('/app.js', function(req, res){
  res.sendFile(__dirname + '/app.js');
  console.log("Fichero js solicitado")
});


//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){

  //-- Detectamos el nuevo cliente
  socket.on('new_client', nick =>{
      console.log("Client: " + nick + " se ha conectado.")
      //-- Detectar si se ha recibido un mensaje del cliente
      num_users += 1;
      socket.on('new_message', msg => {

      //-- Notificarlo en la consola del servidor
      console.log("Mensaje recibido: " + msg)
      //-- Tratamos los distintos mensajes
      //-- tipo list tipo help tipo hello tipo date
      //-- Emitir un mensaje a todos los clientes conect.
      if (msg == '/help'){
        msg = 'SERVER Comandos: ' + "<br>" +
              '/list : Devuelve el número de usuarios conectados' + "<br>" +
              '/hello : Devuelve saludos de parte del Servidor' + "<br>" +
              '/date : Devuelve la fecha';

        io.emit('new_message', msg);
      }else if (msg == '/list'){
        msg = 'Usuarios conectados: ' + num_users;
        io.emit('new_message', msg);
      }else if (msg == '/hello'){
        msg = 'Server: ¡Bienvenido al chat!';
        io.emit('new_message', msg);
      }else if (msg == '/date'){
        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth();
        var dd = d.getDate();
        msg = 'Server: ' + dd + '/' + mm + '/' + yy;
        io.emit('new_message', msg);
      }else{
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var time = '[' + h + ':' + m + ':' + s +']'
        //--io.emit('new_message', time + ': ' + msg);
        io.emit('new_message', time + ' ' +nick +': ' + msg);
      }
    });
    //-- Detectar si el usuario se ha desconectado
    socket.on('disconnect', function(){
      //--console.log('USER Disconnected');
      console.log(nick + ': se ha desconectado');
      num_users -= 1;
    });
  });
});
