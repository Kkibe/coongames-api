const {app, BrowserWindow} = require('electron');
const path = require("path");


const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        show: false,
        icon: __dirname + "build/icon.png",
        webPreferences: {
            devTools: false,
            nodeIntegration: true
            //preload: path.join(__dirname, 'preload.js'),
        },
        titleBarStyle: 'customButtonsOnHover',
        autoHideMenuBar: true,
    })

    mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.once('ready-to-show', mainWindow.show)
}


app.on("ready", createMainWindow);


app.on("window-all-closed", () => {
    if(process.platform != "darwin"){
        app.quit();
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0 ){
        createMainWindow();
    }
})

