# Configs

This repository contains the default Tokens Studio configs for developing in TypeScript, whether that's Node or Browser:

- ESLint config for v8 -> `@tokens-studio/configs/eslint`
- Prettier config for v3 -> `@tokens-studio/configs/prettier`
- TypeScript config for v5 -> `@tokens-studio/configs/typescript`

> You may get a warning for ESLint's React auto detect version setting, because React may not be installed.
> Since the React specific rules are only relevant when you are using this in a React project, don't worry about the warning if you're not.

## ESLint extend

We use ESLint v9 Flat config, which is the modern way to use, extend and share ESLint.

> We are currently stuck with CJS config because of react and react-hooks plugins being CJS-only.

```js
const studioConfig = require('@tokens-studio/configs/eslint');

module.exports = [
	...studioConfig,
	{
		rules: {
			// overrides here
		},
	},
];
```

## Prettier extend

There is almost no valid reason for extending our Prettier settings.
Please discuss changing our settings with the rest of the team first.

If you absolutely must for some reason, make sure to provide a comment as to why:

```js
import sharedConfig from '@tokens-studio/configs/prettier';

export default {
	...sharedConfig,
	// absolutely needed in this project because the JS parser does not support semicolons
	semi: false,
};
```

[Read more about Prettier's philosophy](https://prettier.io/docs/en/why-prettier),
in a nutshell its goal is to avoid pointless discussions about subjective taste about code formatting,
which is why it's best to "just pick something" and go auto-pilot from there.

The reason we override the useTabs and singleQuotes is because it has objective benefits with regards to
working with HTML attributes (uses double quotes) inside JS files (templating) and tabs has major a11y benefits
and allows developers to standardize the tabs yet have their editors change the tab display width to their preference.

## TSConfig extend

```json
{
	"$schema": "https://json.schemastore.org/tsconfig",
	"extends": "@tokens-studio/configs/typescript"
}
```

## Peer Dependencies

These configs rely on various dependencies e.g. the ESLint config contains plugins / rules configurations that rely on dependencies.
They have been configured as peerDependencies, latest NPM should install those by default if missing,
but allow to easily use compatible local installations if you have those.
