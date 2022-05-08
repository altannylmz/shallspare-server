import {db} from '../db';
export default (io, plugins) => {
	io.on('connect', socket => {
		console.log('cooon');
		socket.on('client_key', info => {
			if (info.key !== 'undefined') {
				const clientIpAddress = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
				db.serialize(() => {
					db.get('SELECT COUNT(*) as count FROM Client WHERE Client.key=?', [info.key], (err, row) => {
						if (row.count === 0) { // No register of the client
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
							db.run('UPDATE Client SET socket_id=?,ip=? where key=?', [socket.id, clientIpAddress, info.key]);
							const obj = {};
							obj[info.key] = socket.id;
							let differentClient = false;
							let index;
							for (let i = 0; i < plugins.$store.getters.clients.length; ++i) {
								if (plugins.$store.getters.clients[i][info.key] !== null) {
									differentClient = true;
									index = i;
								}
							}

							if (differentClient) {
								plugins.$store.commit('changeClients', {index, obj});
							} else {
								plugins.$store.commit('addClient', obj);
							}
						}

						plugins.$notify.success('Client Connected');
					});
				});
			}
		});
	});
};
