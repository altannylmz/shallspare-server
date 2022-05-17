'use strict';

import {app, protocol, BrowserWindow, ipcMain, Tray, Menu, dialog} from 'electron';
import {createProtocol} from 'vue-cli-plugin-electron-builder/lib';
import installExtension, {VUEJS3_DEVTOOLS} from 'electron-devtools-installer';
import path from 'path';
const isDevelopment = process.env.NODE_ENV !== 'production';

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
	{scheme: 'app', privileges: {secure: true, standard: true}},
]);

async function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 1200,
		height: 600,
		minWidth: 1200,
		minHeight: 600,
		frame: false,
		webPreferences: {

			// Use pluginOptions.nodeIntegration, leave this alone
			// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
			nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
			contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
			enableRemoteModule: false,
		},
	});

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
		if (!process.env.IS_TEST) {
			win.webContents.openDevTools();
		}
	} else {
		createProtocol('app');
		// Load the index.html when not in development
		win.loadURL('app://./index.html');
	}

	const trayMenuTemplate = [
		{
			label: 'Exit',
			click() {
				app.quit();
			},
		},
	];

	app.whenReady().then(() => {
		const tray = new Tray(path.join(app.getAppPath(),
			'dist-assets/images',
			'trayicon.png'));
		const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
		tray.setToolTip('ShallSpare');
		tray.setContextMenu(contextMenu);
		tray.on('click', () => {
			win.isVisible() ? win.hide() : win.show();
		});
	});

	ipcMain.on('minimize', () => {
		win.minimize();
	});

	ipcMain.on('hide', () => {
		win.hide();
	});

	ipcMain.on('full', () => {
		if (!win.isMaximized()) {
			win.maximize();
		}
	});

	ipcMain.on('isHide', event => {
		event.returnValue = !(!win.isVisible() || win.isMinimized());
	});
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		// Install Vue Devtools
		try {
			await installExtension(VUEJS3_DEVTOOLS);
		} catch (e) {
			console.error('Vue Devtools failed to install:', e.toString());
		}
	}

	createWindow();
});

ipcMain.on('userData', event => {
	event.returnValue = app.getPath('userData');
});

ipcMain.on('getAppVersion', event => {
	event.returnValue = app.getVersion();
});

ipcMain.on('restartApp', () => {
	app.relaunch({args: process.argv.slice(1).concat(['--relaunch'])});
	app.exit(0);
});

ipcMain.on('showOpenDialog', (event, multiple) => {
	dialog.showOpenDialog({
		properties: ['openFile', 'openDirectory', multiple ? 'multiSelections' : null],
	}).then(result => {
		event.returnValue = result.filePaths;
	}).catch(err => {
		console.log(err);
	});
});
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === 'win32') {
		process.on('message', data => {
			if (data === 'graceful-exit') {
				app.quit();
			}
		});
	} else {
		process.on('SIGTERM', () => {
			app.quit();
		});
	}
}
