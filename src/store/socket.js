export default {
	state: () => ({
		clients: [],
	}),
	mutations: {
		addClient(state, client) {
			state.clients.push(client);
		},
		changeClients(state, payload) {
			state.clients[payload.index] = payload.client;
		},
	},
	getters: {
		clients(state) {
			return state.clients;
		},
	},
};
