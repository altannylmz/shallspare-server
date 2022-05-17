
const state = {
	clients: [],
};

const mutations = {
	addClient(state, client) {
		state.clients.push(client);
	},
	changeClients(state, payload) {
		state.clients[payload.index] = payload.client;
	},
};

const actions = {

};

const getters = {
	clients(state) {
		return state.clients;
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
