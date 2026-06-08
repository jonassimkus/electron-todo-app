const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("todoAPI", {
  saveTodos: (todos) => ipcRenderer.invoke("save-todos", todos),
  loadTodos: () =>  ipcRenderer.invoke("load-todos")
});