[back](../README.md)

# 👩‍💻 Develop & contribute

## Setup

Checkout the project and install its dependencies:

```
git clone git@github.com:puzzle/puzzle-shell.git
cd puzzle-shell
nvm use
npm install
```

## Tryout Components with Storybook

To run a local instance of Storybook, run:

```bash
npm run storybook
```

To build a production version of Storybook, run:

```bash
npm run build-storybook
```

## Linting etc.

To scan the project for linting or type errors, run:

```bash
npm run lint
```

To automatically fix many linting errors & reformat code using Prettier, run:

```bash
npm run lint:fix
```

To automatically generate the `custom-elements.json` manifest using the [web-component-analyzer](https://github.com/runem/web-component-analyzer), run:

```bash
npm run manifest
```

## Publishing

To publish a new package version, do the following:

- Build the library with `npm run build`
- Execute `npm run manifest` to make sure the `custom-elements.json` manifest is up-to-date
- Update the `CHANGELOG.md`
- Bump the version with [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) (updates `package.json` and creates Git tag)
- Execute `npm publish` to upload the new package version
