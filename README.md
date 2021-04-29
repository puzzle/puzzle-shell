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

```html
<script type="module">
  import '@puzzleitc/puzzle-shell/puzzle-shell.js';
</script>

<puzzle-shell></puzzle-shell>
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
