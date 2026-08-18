# Vulpine for Windows
The source code of the windows application for Vulpine.pw
Since many people may be scared to install it directly, you can compile it with the source code that's in here

# <center><a href="https://vulpine.at">Discover Vulpine</a></center>

# How it's made
At the moment, the Windows app is just an Electron shell of the existing website; Embedded using Chromium.

## Files

- `main.js` - Electron main process
- `package.json` - app manifest and electron-builder config
- `icon.png` / `icon.ico` - app icon

## Build

```
npm install

# you can either
npm run start      # run the app directly

# or
npm run dist       # build the Windows NSIS installer // The Windows Vulpine app setup .exe
```

*All CREDITS TO TOR AND VULPINE TEAM*
