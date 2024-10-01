# @tokens-studio/configs

## 0.2.2

### Patch Changes

- 498990a: Fix dependencies / peerDependencies. Only ESLint / TypeScript / Prettier should be peer deps, the rest are direct dependencies of the configs.
- 729e28b: Update to the README.md, ESLint v8 changed to -> v9, with explanation about migration to flat config. Added note about recommending to explicitly add the eslint/tsc/prettier peer dependencies.

## 0.2.1

### Patch Changes

- 810aad9: Disable annoying TS rule and depend on react hooks plugin beta rc.

## 0.2.0

### Minor Changes

- 4179cd8: Migrate to ESLint v9 which uses flat config and makes it easier to extend/share configs.

## 0.1.1

### Patch Changes

- 941e071: Fix filename extension in pkg json files, to ensure the ESLint config is published properly.

## 0.1.0

### Minor Changes

- 5eb03f1: First beta release of `@tokens-studio/configs` package with ESLint, Prettier and TypeScript covered.
