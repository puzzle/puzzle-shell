[back](../README.md)

# 👩‍💻 Develop & contribute

## Setup

1. Checkout the project:

```bash
git clone git@github.com:puzzle/puzzle-shell.git
cd puzzle-shell
```

2. Use [mise](https://mise.jdx.dev/) or [nvm](https://github.com/nvm-sh/nvm) (with `nvm use`) to install/activate the project's Node.js version.

3. Install Corepack and activate PNPM:

```bash
npm install --global corepack@latest
corepack enable pnpm
```

4. Install the dependencies:

```bash
pnpm install
```

## Tryout Components with Storybook

To run a local instance of Storybook, run:

```bash
pnpm storybook
```

To build a production version of Storybook, run:

```bash
pnpm build-storybook
```

## Linting etc.

To scan the project for linting or type errors, run:

```bash
pnpm lint
```

To automatically fix many linting errors & reformat code using Prettier, run:

```bash
pnpm lint:fix
```

To automatically generate the `custom-elements.json` manifest using the [web-component-analyzer](https://github.com/runem/web-component-analyzer), run:

```bash
pnpm manifest
```

## Publishing

To publish a new package version, do the following:

- Build the library with `pnpm build`
- Execute `pnpm manifest` to make sure the `custom-elements.json` manifest is up-to-date
- Update the `CHANGELOG.md`
- Bump the version with [pnpm version](https://pnpm.io/cli/version) (updates `package.json` and creates Git tag)
- Execute `pnpm publish` to upload the new package version
