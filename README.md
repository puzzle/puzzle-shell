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

## Usage

### Without NPM & Build Step

You can reference the package from a [NPM CDN](https://duckduckgo.com/?q=npm+cdn&ia=web) (or self-serve it) and use it right-away:

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@puzzleitc/puzzle-shell/dist/style.css"
    />
    <script
      type="module"
      src="https://unpkg.com/@puzzleitc/puzzle-shell/dist/puzzle-shell.js"
    ></script>
  </head>

  <body>
    <pzsh-container>
      <pzsh-topbar></pzsh-topbar>
      <main></main>
      <pzsh-footer></pzsh-footer>
    </pzsh-container>
  </body>
</html>
```

### With NPM & Bundler

You can install this package with NPM:

```bash
npm i @puzzleitc/puzzle-shell
```

Or Yarn:

```bash
yarn add @puzzleitc/puzzle-shell
```

Or PNPM:

```bash
pnpm add @puzzleitc/puzzle-shell
```

With a bundler like [Vite](https://vitejs.dev/) you can import the package in your main JavaScript file:

```javascript
import "@puzzleitc/puzzle-shell";
```

And and import the styles in your CSS file:

```css
@import url("@puzzleitc/puzzle-shell/style.css");
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

## Tryout Components with Storybook

To run a local instance of Storybook, run:

```bash
npm run storybook
```

To build a production version of Storybook, run:

```bash
npm run build-storybook
```

## Customizing

### Mobile/Desktop Breakpoint

The mobile/desktop breakpoint of the Puzzle Shell is at `800px` per default. Below that screen width, the hamburger menu is displayed, paddings will change etc. To customize this breakpoint, you can set the global `window.pzshBreakpoint` property to another value before the Puzzle Shell import, e.g.:

```html
<script>
  window.pzshBreakpoint = 1024;
</script>
<script
  type="module"
  src="/path/to/@puzzleitc/puzzle-shell/dist/puzzle-shell.js"
></script>
```

## Publishing

To publish a new package version, do the following:

- Build the library with `npm run build`
- Execute `npm run manifest` to make sure the `custom-elements.json` manifest is up-to-date
- Update the `CHANGELOG.md`
- Bump the version with [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) (updates `package.json` and creates Git tag)
- Execute `npm publish` to upload the new package version
