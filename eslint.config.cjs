const js = require('@eslint/js');
const hooks = require('eslint-plugin-react-hooks');
const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');
const globals = require('globals');

module.exports = tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		plugins: {
			'react-hooks': hooks,
		},
		rules: {
			...hooks.configs.recommended.rules,
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'react/react-in-jsx-scope': 'off',
			'react/jsx-key': 'off',
			'@typescript-eslint/no-explicit-any': 1,
			'import/no-anonymous-default-export': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/ban-ts-comment': [
				2,
				{
					'ts-check': false,
					'ts-ignore': true,
					'ts-nocheck': 'allow-with-description',
					'ts-expect-error': 'allow-with-description',
				},
			],
			'@typescript-eslint/no-require-imports': [
				2,
				{
					allow: ['\\.cjs$'],
				},
			],
			'sort-imports': 0,
			// Should be used with known heuristics like knowing that a property is non optional in GraphQL for example
			'@typescript-eslint/no-non-null-assertion': 'off',
			'react/jsx-curly-spacing': ['error', 'never'],

			'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
			// Causes issues with prettier
			indent: 'off',
			'react/jsx-indent-props': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		files: ['**/*.cjs'],
		rules: {
			'@typescript-eslint/no-require-imports': 0,
		},
	},
);
