/* eslint-disable @typescript-eslint/explicit-function-return-type */
const {join} = require('path');

module.exports = {
	presets: [
		require('@majorfi/web-lib/tailwind.plugin')
	],
	content: [
		join(__dirname, 'pages', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', 'icons', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'node_modules', '@majorfi', 'web-lib', 'dist', 'layouts', '**', '*.js'),
		join(__dirname, 'node_modules', '@majorfi', 'web-lib', 'dist', 'components', '**', '*.js'),
		join(__dirname, 'node_modules', '@majorfi', 'web-lib', 'dist', 'contexts', '**', '*.js'),
		join(__dirname, 'node_modules', '@majorfi', 'web-lib', 'dist', 'icons', '**', '*.js'),
		join(__dirname, 'node_modules', '@majorfi', 'web-lib', 'dist', 'utils', '**', '*.js')
	],
	themes: {
		extend: {
			height: {
				'inherit': 'inherit'
			}
		}
	},
	plugins: []
};