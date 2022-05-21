module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/essential',
		'xo',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'vue',
	],
	rules: {
		'no-negated-condition': 0,
		'vue/no-mutating-props': 0,
		camelcase: 'off',
	},
};
