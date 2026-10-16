// @ts-check
import {defineConfig} from 'eslint/config';
import {eslintConfigOblique, eslintObliquePlugins} from '@oblique/toolchain/eslint-config';

export default defineConfig([
	...eslintConfigOblique,
	{
		files: ['**/*.ts'],
		plugins: eslintObliquePlugins,
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],

			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case',
				},
			],
			'@angular-eslint/prefer-standalone': 'off', // currently not supported by Oblique
		},
	},
]);
