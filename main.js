const { app, BrowserWindow, ipcMain} = require("electron");
const fs = require("fs");
const path = require("path");

const savePath = path.join(app.getPath("userData"), "todos.json");

if (!app.isPackaged) {
  require("electron-reload")(__dirname);
}

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 300,
    width: 400,
    minHeight: 400,
    height: 600,
    transparent: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  
  win.loadFile("index.html");
}

ipcMain.handle("save-todos", async (event, todos) => {
  fs.writeFileSync(savePath, JSON.stringify(todos, null, 2));
});

ipcMain.handle("load-todos", async () => {
  try{
    if (!fs.existsSync(savePath)) return [];
    return JSON.parse(fs.readFileSync(savePath, "utf-8"));
  } catch(err){
    return [];
  }
});

app.whenReady().then(createWindow);
