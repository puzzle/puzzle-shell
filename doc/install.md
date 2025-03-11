[back](../README.md)

# 🚀 Install the Puzzle Shell

You can integrate the Puzzle Shell as ESM or as a bundled version. We suggest to use the ESM version if possible.

## JavaScript Modules (ESM)

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

Then, with a bundler like [Vite](https://vitejs.dev/), you can import the package in your main JavaScript file to include all components:

```javascript
import "@puzzleitc/puzzle-shell";
```

Or you can import specific components (only once):

```javascript
import "@puzzleitc/puzzle-shell/components/Topbar.js";
```

Either way the components are then ready to use in your markup:

```html
<pzsh-topbar></pzsh-topbar>
```

## Bundled Version

Alternatively you can use a pre-bundled version of the Puzzle Shell that includes Lit as a carefree package. You can even reference the package from a [NPM CDN](https://duckduckgo.com/?q=npm+cdn&ia=web) (or self-serve it) and include it as follows:

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@puzzleitc/puzzle-shell/dist/bundle.css"
    />
    <script
      type="module"
      src="https://unpkg.com/@puzzleitc/puzzle-shell/dist/bundle.js"
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

##
