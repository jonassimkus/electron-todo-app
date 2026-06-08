const { app, BrowserWindow } = require("electron");

if (!app.isPackaged) {
  require("electron-reload")(__dirname);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    resizable: false
  });

  win.loadFile("index.html");
}



app.whenReady().then(createWindow);
