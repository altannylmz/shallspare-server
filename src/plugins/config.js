const {ipcRenderer} = require('electron');
const path = require('path');
const fse = require('fs-extra');
const configPath = path.join(ipcRenderer.sendSync('userData'), '/config.json');
class Config {
	/**
     * @param {Object} json
     */
	static create(json) {
		if (!fse.pathExistsSync(configPath)) {
			fse.writeJsonSync(configPath, json);
		}
	}

	static set(key, value) {
		if (fse.pathExistsSync(configPath)) {
			const optionsStruct = fse.readJSONSync(configPath);
			optionsStruct[key] = value;
			fse.writeJsonSync(configPath, optionsStruct);
		}
	}

	static get(key) {
		if (fse.pathExistsSync(configPath)) {
			return fse.readJSONSync(configPath)[key];
		}

		return undefined;
	}

	static removeConfigFile() {
		if (fse.pathExistsSync(configPath)) {
			fse.removeSync(configPath);
		}
	}
}

const randomstring = require('randomstring');
Config.create({
	language: 'en',
	port: 81,
	notification: true,
	httpsSecurity: true,
	appKey: randomstring.generate({
		length: 20,
	}),
});

module.exports.Config = Config;
module.exports.use = {
	install(app) {
		app.config.globalProperties.$appConfig = Config;
	},
};
