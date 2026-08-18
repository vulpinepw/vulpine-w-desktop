const { app, BrowserWindow } = require('electron');
const path = require('path');

const APP_URL = 'https://vulpine.at/app';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Vulpine',
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    backgroundColor: '#0a0a0a',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL(
    'data:text/html;charset=utf-8,' +
      encodeURIComponent(`
      <!DOCTYPE html>
      <html><head><meta charset="UTF-8"><title>Vulpine</title>
      <style>
        body{margin:0;display:flex;align-items:center;justify-content:center;height:100vh;
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        background:#0a0a0a;color:#fafafa;}
        .spinner{width:32px;height:32px;border:3px solid rgba(255,255,255,.1);
        border-top-color:#fff;border-radius:50%;animation:spin .6s linear infinite;margin:0 auto 16px;}
        @keyframes spin{to{transform:rotate(360deg);}}
      </style></head>
      <body><div style="text-align:center"><div class="spinner"></div><p>Loading Vulpine…</p></div></body>
      </html>`)
  );

  win.once('ready-to-show', () => {
    win.loadURL(APP_URL);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
