const electron = require('electron')

// Module for application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object
// If you don't, the window will be closed automatically

let mainWindow

function createWindow()
{
    // Create the browser window
    mainWindow = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    // Open dev tools
    mainWindow.webContents.openDevTools()

    // Emmited when windows is closed
    mainWindow.on('closed', function()
    {
        // Dereference the window object
        mainWindow = null
    })
}

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  

app.on('activate', function () {
// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (mainWindow === null) {
    createWindow()
}
})

