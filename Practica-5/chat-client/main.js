const electron  = require('electron')
const io = require('socket.io-client')
const socket = io('http://localhost:3000')
const ipcMain = electron.ipcMain;

console.log("Arrancando electron...")

//-- Punto de entrada. En cuanto electron estál listo,
//-- ejecuta esta funcion

electron.app.on('ready', () => {
  console.log("Evento Ready!!");

  // Crear ventana principal de nuestra interfaz grafica
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  })
  //Para eliminar menu por defecto barra arriba
  //win.setMenuBarVisibility(true)
  // Cargar interfaz grafica, que se encuentra en index.html
  win.loadFile('index.html')

  //-- Cuando cerramos electron
  win.on('close', function() {
    console.log("Electron has been closed");
    win.removeAllListeners('close');
  })

  win.webContents.once('dom-ready', ()=>{

    socket.on ('new_message', msg => {
      console.log(msg);
      win.webContents.send('new_message', msg)
    });

    ipcMain.on('new_message', (event, msg) =>{
      socket.emit('new_message', msg);
      console.log(msg);
    });
  });
});
