module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['sort-imports-es6-autofix', '@typescript-eslint'],
	rules: {
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-key': 'off',
		'@typescript-eslint/no-explicit-any': 1,
		'import/no-anonymous-default-export': 'off',
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/ban-ts-comment': [
			2,
			{
				'ts-check': false,
				'ts-ignore': true,
				'ts-nocheck': 'allow-with-description',
				'ts-expect-error': 'allow-with-description',
			},
		],
		'sort-imports-es6-autofix/sort-imports-es6': [
			2,
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
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
};
