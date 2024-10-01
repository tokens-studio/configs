---
'@tokens-studio/configs': patch
---

Fix dependencies / peerDependencies. Only ESLint / TypeScript / Prettier should be peer deps, the rest are direct dependencies of the configs.
