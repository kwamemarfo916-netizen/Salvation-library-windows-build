const {app,BrowserWindow,shell,Menu}=require('electron');
const path=require('path');
if(!app.requestSingleInstanceLock())app.quit();
let win;
const ext=u=>{if(/^(https?:|mailto:)/.test(u))shell.openExternal(u)};
function create(){
  win=new BrowserWindow({width:480,height:880,minWidth:360,minHeight:600,backgroundColor:'#111111',title:'Salvation Library',icon:path.join(__dirname,'icon.png'),autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});
  Menu.setApplicationMenu(null);
  win.loadFile('index.html');
  win.webContents.setWindowOpenHandler(({url})=>{ext(url);return{action:'deny'}});
  win.webContents.on('will-navigate',(e,url)=>{if(!url.startsWith('file:')){e.preventDefault();ext(url)}});
}
app.whenReady().then(create);
app.on('second-instance',()=>{if(win){if(win.isMinimized())win.restore();win.focus()}});
app.on('window-all-closed',()=>app.quit());
