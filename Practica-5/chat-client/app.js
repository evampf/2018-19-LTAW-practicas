function main(){
  var nick = "User_" + Math.floor(Math.random()*10);

  const socket = io.connect('http://localhost:3000');

  console.log("Im in app.js...")

  //-- Obtener los elementos del interfaz, del DOM
  var button = document.getElementById('button')
  var display = document.getElementById('display')
  //-- Mensaje a enviar
  var msg = document.getElementById('msg')

  //--Informamos del nuevo cliente
  socket.emit('new_client', nick)

  console.log(nick + ": se ha conectado")

  //-- Cuando se aprieta el botón...
  button.onclick = () => {
    socket.emit('new_message', msg.value);


    //-- Sacar un mensaje en la consola
    console.log("Mensaje enviado.")
  }
    //-- cuadno recibamos mensaje servidor,
    //-- Añadimos la cadena al párrafo
    socket.on('new_message', msg => {
      display.innerHTML += msg + '<br>';
    });

}
