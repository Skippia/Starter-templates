# Universal starter templates

<p align="center">
  <a href="#description">Description</a> •
  <a href="#core-dependencies">Core depenencies</a> •
  <a href="#dx-dependencies">DX dependencies</a> •
  <a href="#package-commands">Package commands</a> •
  <a href="#pre-requisites">Pre-requisites</a> •
  <a href="#quick-start">Quick start</a>
</p>

## Description

Basic set of typescript-based starter templates. To switch between template check git branches:

1. Basic starter template based on pure typescript:
```sh
git checkout ts-template
```
2. Functional programming starter template based on [FP-TS](https://github.com/gcanti/fp-ts) (**CURRENT SELECTED VERSION**):
```sh
git checkout fp-ts-template
```
3. Basic starter template based on [Nest.js](https://github.com/nestjs/nest):
```sh
git checkout nest-template
```

## Core depenencies

- [fp-ts](https://github.com/gcanti/fp-ts) – functional programming in TypeScript.
- [zod](https://github.com/colinhacks/zod) – typeScript-first schema validation with static type inference (for validating environment variables).

## DX dependencies

### Dependencies updating

- [pnpm](https://pnpm.io/) – a fast, efficient package manager that speeds up installation and leverages caching.

- [renovate](https://docs.renovatebot.com/) – bot for automated dependency updates.
  - check [official guide](https://docs.renovatebot.com/getting-started/installing-onboarding/) to install bot
  - check [interactive dashboard](https://developer.mend.io/) to configurate repository
  - check `renovate.json` file for manual configuration
    - replace "fp-ts-template" branch for `baseBranches` field in `renovate.json` with your basic branch (for pull requests)

- [npm-check-updates](https://github.com/raineorshine/npm-check-updates) – explicitly check and update project's dependencies.

- **.npmrc**  – configuration file customizing pnpm behavior:
  - `shamefully-hoist=true`: makes the package manager hoist dependencies to the root of node_modules, creating a flatter structure similar to npm's default. This can improve compatibility with packages that expect a flat dependency tree.

- **.nvmrc** – specifies the Node.js version that should be used for the project, ensuring a consistent runtime environment for all developers and CI systems.

### Dependencies graph visualizing

- [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) – analyzes and visualizes your project’s dependency graph, helping maintain a clean architecture.

### Static type checking & Typescript dev server

- [tsx](https://github.com/privatenumber/tsx) – runs TypeScript files on‑the‑fly with watch and debug support, eliminating the need for a separate build step during development.

- [TypeScript](https://github.com/microsoft/TypeScript) – brings static type checking and modern JavaScript features for enhanced code reliability.
  - check `tsconfig.json` file for manual configuration

### Bundler & Plugins

- [vite bunder](https://github.com/vitejs/vite) – a modern, lightning‑fast build tool for optimized production builds.
  - check `vite.config.ts` file for manual configuration

- [vite-bundle-analyzer](https://github.com/nonzzz/vite-bundle-analyzer) – provides visual insights into your bundle size and composition for performance tuning.

- [vite-bundle-visualizer](https://github.com/KusStar/vite-bundle-visualizer) – do the same as `vite-bundle-analyzer` but with slightly different UI and save output result as html file into ./docs folder.

- [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts) – automatically generates TypeScript declaration files during the build for better downstream type support.

- [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) – resolves TypeScript path aliases in Vite, making module imports cleaner and easier to manage.

### Code formatting & styling

- [Prettier](https://github.com/prettier/prettier) – code formatter **only** for resolving maximum line length (`printWidth`)

- [.editorconfig](https://editorconfig.org/) – defines consistent coding styles (such as indentation, line endings, and charset) across different editors and IDEs. It helps ensure that all contributors follow the same formatting rules, regardless of their personal editor settings.

- [ESLint](https://github.com/eslint/eslint) – enforces code quality and style rules, catching errors early in the development process.

- [@antfu/eslint-config](https://github.com/antfu/eslint-config) – ESLint configuration tailored for modern TypeScript projects based on flat eslint config.

- [eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional) – ESLint plugin enforcing the accordance to functional programming paradigm.

### CI/CD

- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) – simplifies Git hook management (e.g. running typechecks before push) to enforce code quality.

- [Commitizen](https://github.com/commitizen/cz-cli) (cz-conventional-changelog) – standardizes commit messages using conventional changelog formats for better release notes.

- [semantic-release](https://github.com/semantic-release/semantic-release) (along with its plugins like @semantic-release/changelog, @semantic-release/commit-analyzer, @semantic-release/git, @semantic-release/github, @semantic-release/npm, and @semantic-release/release-notes-generator) – automates versioning, changelog generation, and release publishing, streamlining the entire release process.
  - check `releaserc.json` file for manual configuration

- [ci/cd workflows](https://github.com/skippia/universal-starter-templates/blob/fp-ts-template/.github/workflows) – automated building, security audit, linting, generating BSOM and semantic release with best practices of confuring github pipelines.

### Misc

- [0x](https://github.com/davidmarkclements/0x) – generates flamegraphs for performance profiling and optimization insights.

## Package commands

| Name                     | Command                                                                                                                                                                                                                                                                                                                                                                     | Description                                                        | Use Cases                                                 |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------|
| dev                      | `npx tsx --env-file=.env --watch ./src/main.ts`                                                                                                                                                                                                                                                                                                                             | Runs the application in development mode with file watching.       | Active development with auto‑reloading.                   |
| start                    | `npx tsx --env-file=.env ./src/main.ts`                                                                                                                                                                                                                                                                                                                                      | Starts the application without watch mode.                         | Quick startup for local testing.                         |
| start:prod               | `NODE_ENV=production node --env-file=.env ./dist/main.js`                                                                                                                                                                                                                                                                                                                   | Runs the production build of the application.                      | Production deployment and testing.                       |
| debug                    | `npx tsx --inspect --env-file=.env ./src/main.ts`                                                                                                                                                                                                                                                                                                                            | Runs the application with Node.js inspector enabled.               | Debugging during development.                            |
| commit                   | `cz`                                                                                                                                                                                                                                                                                                                                                                         | Launches Commitizen to standardize commit messages.                | Ensuring consistent commit messages.                     |
| flamegraph               | `NODE_ENV=production 0x -- node --env-file=.env ./dist/main.js`                                                                                                                                                                                                                                                                                                               | Generates a flamegraph for performance profiling.                  | Analyzing performance bottlenecks.                       |
| graph:generate:nested    | `npx depcruise src --include-only '^src' --progress  --config .dependency-cruiser.cjs --output-type dot \| dot -T svg -Grankdir=TD \| tee docs/dependency-graph-nested.svg \| node node_modules/dependency-cruiser/bin/wrap-stream-in-html.mjs > docs/dependency-graph-nested.html`                                                   | Generates a nested dependency graph of the source code.            | Detailed visualization of module interdependencies.      |
| graph:generate:top-level | `npx depcruise src --include-only '^src' --config .dependency-cruiser.cjs --output-type ddot \| dot -T svg -Grankdir=TD \| tee docs/dependency-graph-top-level.svg \| node node_modules/dependency-cruiser/bin/wrap-stream-in-html.mjs > docs/dependency-graph-top-level.html`                                          | Generates a top‑level dependency graph of the source code.          | Overview of primary dependency structure.              |
| graph:generate           | `npm run graph:generate:top-level && npm run graph:generate:nested`                                                                                                                                                                                                                                                                                                          | Runs both top‑level and nested dependency graph generation.         | Comprehensive dependency visualization.                |
| graph:check              | `npx depcruise src`                                                                                                                                                                                                                                                                                                                                                          | Checks the dependency structure of the project.                    | Validating dependency rules and detecting issues.        |
| prebuild                 | `npx rimraf --glob ./dist`                                                                                                                                                                                                                                                                                                                                                   | Cleans the distribution folder by removing previous build artifacts. | Pre‑build cleanup before starting a new build.           |
| build                    | `npx vite build`                                                                                                                                                                                                                                                                                                                                                             | Builds the application using Vite.                                 | Creating a production‑ready build.                       |
| typecheck                | `tsc --noEmit`                                                                                                                                                                                                                                                                                                                                                               | Runs TypeScript type checking without emitting output files.       | Verifying type correctness before deployment.            |
| format                   | `npx prettier --write src/`                                                                                                                                                                                                                                                                                                                                                    | Formats source files using Prettier.                                 | Enforcing code style consistency.                        |
| eslint                   | `npx eslint`                                                                                                                                                                                                                                                                                                                                                                 | Lints the codebase using ESLint.                                   | Code quality and style checks.                           |
| eslint:fix               | `npx eslint --fix`                                                                                                                                                                                                                                                                                                                                                           | Lints and auto‑fixes issues in the codebase.                         | Quick auto‑correction of linting errors.                 |
| analyze                  | `analyze -c ./vite.config.ts`                                                                                                                                                                                                                                                                                                                                                | Performs bundle size analysis using Vite’s config. | Gaining insights into bundle size. |
| analyze:v2                  | `npx vite-bundle-visualizer -c ./vite.config.ts --output ./docs/bundle-size.html --open.ts`                                                                                                                                                                                                                                                                                                                                                | Performs bundle size analysis using Vite’s config (and save as html). | Gaining insights into bundle size. |
| upgrade:check            | `npx npm-check-updates --format group`                                                                                                                                                                                                                                                                                                                                       | Checks for available dependency updates and groups them.           | Reviewing potential updates before applying them.      |
| upgrade:interactive      | `npx npm-check-updates --interactive`                                                                                                                                                                                                                                                                                                                                      | Runs an interactive mode to selectively upgrade dependencies.      | Manually selecting which dependencies to update.       |
| upgrade:all              | `npx npm-check-updates --format group -u`                                                                                                                                                                                                                                                                                                                                   | Upgrades all dependencies as per grouped updates.                  | Bulk upgrading dependencies to the latest versions.    |
| semantic-release         | `semantic-release --extends ./releaserc.json`                                                                                                                                                                                                                                                                                                                                 | Automates versioning and publishing based on commit history.         | CI/CD automated release process.                         |
| update-git-hooks         | `npx simple-git-hooks`                                                                                                                                                                                                                                                                                                                                                         | Updates Git hooks in your repository.                              | Maintaining standardized Git hook behavior.            |

## Pre-requisites

- Node.js (checked on v20.15.1)
- pnpm

## Quick start

1. Clone actual version of app (or only last version of app):
```sh
git clone https://github.com/Skippia/universal-starter-templates.git
```
or
```sh
git clone --depth 1 https://github.com/Skippia/universal-starter-templates.git
```
2. Checkout directory and install dependencies:
```sh
cd universal-starter-templates && pnpm i
```
3. Build project:
```sh
npm run build
```
4. Run project:
```sh
npm run start
```
5. (Optionally) install git hooks (by default – `typecheck` project files on `git push`):
```sh
npm run update-git-hooks
```
