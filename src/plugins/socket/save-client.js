import {db} from '../db';
export default (io, plugins) => {
	io.on('connect', socket => {
		socket.on('client_key', info => {
			if (info.key !== 'undefined') {
				const clientIpAddress = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
				db.serialize(() => {
					db.get('SELECT COUNT(*) as count FROM Client WHERE Client.key=?', [info.key], (err, row) => {
						if (row.count === 0) { // No register of the client
							console.log('aaa');
							db.run(
								'INSERT INTO Client (name,ip,key,socket_id) values (?,?,?,?)',
								[
									info.name,
									clientIpAddress,
									info.key,
									socket.id,
								],
								err => {
									if (!err) {
										const obj = {};
										obj[info.key] = socket.id;
										plugins.$store.commit('addClient', obj);
									}
								},
							);
						} else { // İf the client has already registered
							try {
								db.run('UPDATE Client SET socket_id=?,ip=? where key=?', [socket.id, clientIpAddress, info.key], () => {
									const obj = {};
									obj[info.key] = socket.id;
									let differentClient = false;
									let index;
									for (let i = 0; i < plugins.$store.getters.clients.length; ++i) {
										console.log(plugins.$store.getters.clients);
										if (plugins.$store.getters.clients[i][info.key] !== undefined) {
											differentClient = true;
											index = i;
										}
									}

									if (differentClient) {
										plugins.$store.commit('changeClients', {index, client: obj});
									} else {
										plugins.$store.commit('addClient', obj);
									}
								});
							} catch (e) {
								console.log(e);
							}
						}

						plugins.$notify.success('Client Connected');
					});
				});
			}
		});
	});
};
