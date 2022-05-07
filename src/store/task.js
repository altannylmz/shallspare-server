export default {
	state: () => ({
		test: 1,
	}),
	mutations: {
		incTest(state) {
			state.test += 1;
		},
	},
	actions: {},
	getters: {
		test(state) {
			return state.test;
		},
	},
};
