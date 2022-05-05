const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
			appId: 'com.powrow.shallspare',
			productName: 'ShallSpare Server',
			copyright: 'Copyright © 2020 ShallSpare',
			linux: {
				category: 'Utils',
				icon: 'test.png',
				packageCategory: 'utils',
				maintainer: 'altannylmz@gmail.com',
				target: [
					'deb',
					'snap',
					'rpm',
				],
				synopsis: ' A test',
			},
			mac: {
				target: [
					'dmg',
				],
				identity: null,
				icon: 'public/mac.ico',
				category: 'public.app-category.utilities',
			},
			dmg: {
				icon: 'src/images/mac.ico',
				iconSize: 100,
				window: {
					width: 544,
					height: 408,
				},
				contents: [
					{
						x: 145,
						y: 257,
					},
					{
						x: 400,
						y: 255,
						type: 'link',
						path: 'Applications',
					},
				],
			},
			win: {
				target: 'nsis',
				icon: 'public/win.ico',
			},
			publish: [
				{
					provider: 'generic',
					url: 'https://shallspare.com/',
				},
			],
		},
	},
});
