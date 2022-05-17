import {createStore} from 'vuex';
import socket from './socket';
const store = createStore({
	state() {
		return {
			count: 0,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	actions: {},
	getters: {},
	modules: {
		socket,
	},
});

export default store;
