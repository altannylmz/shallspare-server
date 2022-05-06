const {ipcRenderer} = require('electron');
export default {
	install(app) {
		app.config.globalProperties.$ipcRenderer = ipcRenderer;
	},
};
