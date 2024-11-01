const {app, BrowserWindow} = require('electron')
app.on("ready",()=>{
    const window = new BrowserWindow({width: 800, height: 800});
    window.setMenuBarVisibility(null)
    window.loadURL('https://ultimate-self.vercel.app/')
})
