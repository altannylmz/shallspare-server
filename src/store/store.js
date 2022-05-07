import {createStore} from 'vuex';
import task from './task';
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
	modules: {
		task,
		socket,
	},
});

export default store;
