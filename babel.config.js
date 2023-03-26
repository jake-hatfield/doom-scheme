module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						tests: ['./tests/'],
						'@assets': './src/assets',
						'@components': './src/lib/components',
						'@context': './src/context',
						'@lib': './src/lib',
						'@screens': './src/screens',
						'@stacks': './src/stacks',
						'@utils': './src/lib/utilities',
					},
				},
			],
			[
				'module:react-native-dotenv',
				{
					moduleName: '@env',
					path: '.env',
					blacklist: null,
					whitelist: null,
					safe: false,
					allowUndefined: true,
				},
			],
		],
	};
};
