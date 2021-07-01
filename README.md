# Puzzle Shell

The standard design for Puzzle tools. It is a set of webcomponents that follow the [open-wc](https://github.com/open-wc/open-wc) recommendation.

The Puzzle Shell project strives for the following goals:

- Integration of internal tools & solutions into the Puzzle identity
- Uniform and consistent presentation with recognizability across tools & solutions
- Providing a flexible construction kit without rigid specifications

Part of this project is the [Puzzle Shell Storybook](https://puzzle.github.io/puzzle-shell) that lists and documents all Puzzle Shell components and contains usage examples.

## Installation

```bash
npm i @puzzleitc/puzzle-shell
```

## Usage

You can either use native JavaScript modules:

```html
<script type="module">
  import "@puzzleitc/puzzle-shell/index.js";
</script>

<body>
  <pzsh-container>
    <pzsh-topbar></pzsh-topbar>
    <main></main>
    <pzsh-footer></pzsh-footer>
  </pzsh-container>
</body>
```

Or you can use a bundled/minified version:

```html
<script src="/path/to/@puzzleitc/puzzle-shell/dist/bundle.js">

<body>
  <pzsh-container>
    <pzsh-topbar></pzsh-topbar>
    <main></main>
    <pzsh-footer></pzsh-footer>
  </pzsh-container>
</body>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well

```bash
npm run lint:eslint
```

```bash
npm run lint:prettier
```

To automatically fix many linting errors, run

```bash
npm run format
```

You can format using ESLint and Prettier individually as well

```bash
npm run format:eslint
```

```bash
npm run format:prettier
```

To automatically generate the `custom-elements.json` manifest using the [web-component-analyzer](https://github.com/runem/web-component-analyzer), run

```bash
npm run manifest
```

## Testing with Web Test Runner

To run the suite of Web Test Runner tests, run

```bash
npm run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Publish New Package Version

- Execute `npm run manifest` to make sure the `custom-elements.json` manifest is up-to-date
- Update the `CHANGELOG.md`
- Bump the version with [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) (updates `package.json` and creates Git tag)
- Execute `npm publish` to upload the new package version
