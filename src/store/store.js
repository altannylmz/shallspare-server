import {createStore} from 'vuex';
import task from './task';
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
	},
});

export default store;
