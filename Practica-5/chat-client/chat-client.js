function main() {
  //var name = prompt("Introduce tu nombre de usuario:","")
  var io = require('socket.io-client');
  var socket = io ('http://localhost:3000',{transport: ['websocket']});
  var username = "Eva" //document.getElementById('username');
  username.innerHTML += name;
  console.log("Hola!!")

  //-- Crear el websocket
  //var socket = io();

  //-- Obtener los elementos de interfaz:
  //-- Boton de envio de mensaje
  var send = document.getElementById('send')
  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')

  //-- cuadro para mostrar mensajes recibidos
  //-- var mensajes = document.getElementById('mensajes')

  //-- Caja con el mensaje a enviar
  var msg = document.getElementById("msg")

  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {
    //-- Enviar el mensaje, con el evento "new_message"
    console.log(msg.value);
    socket.emit("new_message", name + ': ' + msg.value);
    document.getElementById("msg").value = '';
    //-- Lo notificamos en la consola del navegador
    console.log("Mensaje enviado")
  }

  //-- Cuando se reciba un mensaje del servidor se muestra
  //-- en el párrafo
  socket.on("new_message", msg => {
    var mensaje = document.createElement("p");
    mensaje.innerHTML = msg;
    mensajes.appendChild(mensaje);
  });

}
