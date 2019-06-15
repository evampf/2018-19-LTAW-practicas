var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var num_users = 0;

//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal2: /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero js solicituado")
});

app.get('/chatstyle.css', function(req, res){
  res.sendFile(__dirname + '/chatstyle.css');
  console.log("Fichero css solicituado")
});


//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});


//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');
  respuesta = '<br> Nuevo usuario conectado </br>'
  io.emit('new_message',respuesta);

  answer = '<br> ¡Bienvenido al chat! </br>'
  socket.emit('new_message',answer);
  num_users += 1;



  //-- Detectamos el nuevo cliente
  socket.on('new_client', nick =>{

      console.log("El cliente: " + nick + " está conectado.")
      //-- Detectar si se ha recibido un mensaje del cliente
      num_users += 1;
      socket.on('new_message', msg => {

      //-- Notificarlo en la consola del servidor
      console.log("Mensaje recibido: " + msg)
      //-- Tratamos los distintos mensajes
      //-- tipo list tipo help tipo hello tipo date
      //-- Emitir un mensaje a todos los clientes conect.
      if (msg == '/help'){
        msg = 'SERVER Supported commands: ' + "<br>" +
              '/list : Returns the number of connected users' + "<br>" +
              '/hello : Returns greetings from theserver' + "<br>" +
              '/date : Returns current date';

        io.emit('new_message', msg);
      }else if (msg == '/list'){
        msg = 'Usuarios conectados: ' + num_users;
        io.emit('new_message', msg);
      }else if (msg == '/hello'){
        msg = 'Server: Bienvenido al chat';
        io.emit('new_message', msg);
      }else if (msg == '/date'){
        var d = new Date();
        var yy = d.getFullYear();
        var mm = d.getMonth();
        var dd = d.getDate();
        msg = 'SERVER: ' + dd + '/' + mm + '/' + yy;
        io.emit('new_message', msg);
      }else{
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var time = '[' + h + ':' + m + ':' + s +']'
        io.emit('new_message', time + nick +': ' + msg);
      }
    });
    //-- Detectar si el usuario se ha desconectado
    socket.on('disconnect', function(){
      console.log('--> Usuario Desconectado');
      num_users -= 1;
    });
  });


});
