# Puzzle Shell

[![Linting](https://github.com/puzzle/puzzle-shell/actions/workflows/lint.yml/badge.svg)](https://github.com/puzzle/puzzle-shell/actions/workflows/lint.yml)
[![Storybook Build](https://github.com/puzzle/puzzle-shell/actions/workflows/storybook.yml/badge.svg?branch=main)](https://github.com/puzzle/puzzle-shell/actions/workflows/storybook.yml)
[![Software bill of materials (BOM)](https://github.com/puzzle/puzzle-shell/actions/workflows/bom.yml/badge.svg?branch=main)](https://github.com/puzzle/puzzle-shell/actions/workflows/bom.yml)

The standard design for Puzzle tools as a set of [Web Components](https://en.wikipedia.org/wiki/Web_Components).

The Puzzle Shell project strives for the following goals:

- Integration of internal tools & solutions into the Puzzle identity
- Uniform and consistent presentation with recognizability across tools & solutions
- Providing a flexible construction kit without rigid specifications

Part of this project is the [Puzzle Shell Storybook](https://puzzle.github.io/puzzle-shell) that lists and documents all Puzzle Shell components and contains usage examples.

## Installation & Usage

You can install this package:

```bash
npm i @puzzleitc/puzzle-shell
```

And import it in one of your JavaScript files or reference it in your HTML file:

```html
<script
  type="module"
  src="/path/to/@puzzleitc/puzzle-shell/dist/puzzle-shell.js"
></script>

<body>
  <pzsh-container>
    <pzsh-topbar></pzsh-topbar>
    <main></main>
    <pzsh-footer></pzsh-footer>
  </pzsh-container>
</body>
```

Alternatively you can use a [NPM CDN](https://duckduckgo.com/?q=npm+cdn&ia=web) to reference the package directly from the Internet.

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

## Tryout Components with Storybook

To run a local instance of Storybook, run:

```bash
npm run storybook
```

To build a production version of Storybook, run:

```bash
npm run build-storybook
```

## Publishing

To publish a new package version, do the following:

- Build the library with `npm run build`
- Execute `npm run manifest` to make sure the `custom-elements.json` manifest is up-to-date
- Update the `CHANGELOG.md`
- Bump the version with [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) (updates `package.json` and creates Git tag)
- Execute `npm publish` to upload the new package version
