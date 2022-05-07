const https = require('https');
const http = require('http');
const selfSigned = require('selfsigned');
const {Config} = require('../config');
import connection from './save-client';
const certificate = selfSigned.generate(null, {days: 365});
const expressApp = require('express')();

let server;
if (Config.get('httpsSecurity')) {
	server = https.createServer({
		key: certificate.private,
		cert: certificate.cert,
	}, expressApp).listen(Config.get('port'));
} else {
	server = http.createServer().listen(Config.get('port'));
}

const io = require('socket.io')(server, {
	pingTimeout: 1000 * 60 * 5,
	pingInterval: 1000 * 60 * 5,
	maxHttpBufferSize: 100000000,
});

export default {
	install(app) {
		app.config.globalProperties.$io = io;
		connection(io, app.config.globalProperties);
	},
};
