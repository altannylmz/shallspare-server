const {ipcRenderer} = require('electron');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbFile = path.join(ipcRenderer.sendSync('userData'), 'shallspare.db');
// eslint-disable-next-line no-bitwise
const db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, err => {
	if (err) {
		console.log(err.message);
	}
});

db.serialize(() => {
	db.run(
		'CREATE TABLE IF NOT EXISTS Client(id INTEGER PRIMARY KEY AUTOINCREMENT,tag Text ,name Text,ip Text,key Text,socket_id Text)');
	db.run(
		'CREATE TABLE IF NOT EXISTS Task(id INTEGER PRIMARY KEY AUTOINCREMENT,client_id INTEGER, remote_id INTEGER, name Text,type INTEGER,source_path Text,remote_path Text,islimit INTEGER,time Text,running INTEGER,stop INTEGER)');
	db.run(
		'CREATE TABLE IF NOT EXISTS Remote(id INTEGER PRIMARY KEY AUTOINCREMENT,type INTEGER,host Text,user_name Text,password Text,port INTEGER)');
	db.run(
		'CREATE TABLE IF NOT EXISTS Mysql(id INTEGER PRIMARY KEY AUTOINCREMENT,type INTEGER,tag Text,host Text,user_name Text,password Text,database_name Text,port INTEGER)');
	db.run(
		'CREATE TABLE IF NOT EXISTS Transactions(id INTEGER PRIMARY KEY AUTOINCREMENT,task_id INTEGER,task_start_time INTEGER,task_stop_time INTEGER,task_folder_name Text,file_is_there INTEGER)');
	db.run(
		'CREATE TABLE IF NOT EXISTS Task_Status(id INTEGER PRIMARY KEY AUTOINCREMENT,task_id INTEGER,status INTEGER)');
});

export default {
	install(app) {
		app.config.globalProperties.$db = db;
	},
};
