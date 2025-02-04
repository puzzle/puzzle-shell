[back](../README.md)

# 🔨 Use the Puzzle Shell

## Examples

For usage examples, please refer to the [Puzzle Shell Storybook](https://puzzle.github.io/puzzle-shell/), specifically you may look at the [complete examples](https://puzzle.github.io/puzzle-shell/?path=/story/puzzle-shell-examples-content-app-with-search--default) that demonstrate how the components can be used to create an entire layout.

## Mobile/Desktop Breakpoint

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
