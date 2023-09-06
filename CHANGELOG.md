# Puzzle Shell Changelog

# ?.?.?

- Allow mobile/desktop breakpoint to be customized via the global `window.pzshBreakpoint` property.
- Prevent body from scrolling while `pzsh-menu` is open on mobile. Use the `scrollContainerSelector` attribute to configure a custom scroll container.
- Enable overflowing (scrolling) for `pzsh-menu` content larger than screen height.
- Add GitHub Actions Workflow to generate BOM (bill of materials) file and push it to Dependency Track.
- Add missing logos to logo story

# 2.0.0

- Migrate to Vite setup, upgrade to Storybook 7.3 and update all other dependencies. This eliminates all vulnerabilities reported by `npm audit`.
- Migrate to TypeScript, include `.d.ts` files in package.
- BREAKING CHANGE: The main entry file is now `dist/puzzle-shell.js`, previously it was `index.js`.

# 1.0.1

- Fix click/keydown event registering without useCapture
- Upgrade the dependencies. Unfortunately this does not fix the Storybook/trim Vulnerability reported by NPM Audit, which will not be fixed until Storybook 7.0 (see [#14603](https://github.com/storybookjs/storybook/issues/14603)).

# 1.0.0

- Implement `pzsh-menu`'s backdrop as separate `pzsh-backdrop` component to avoid CSP issues with inline styles.
- Fix vertical alignment of `pzsh-menu-action` text on mobile

# 1.0.0-beta.3

- Add responsive styling of `pzsh-hero` component
- Add documentation for logos and `pzsh-container` component

# 1.0.0-beta.2

- Fix bug with attribute access in constructor of `pzsh-menu-action`, `pzsh-dropdown-item` and `pzsh-nav-item`
- Build custom-elements.json manifest according 1.0.0 schema specification

# 1.0.0-beta.1

- Lighter, white-based styling of mobile menu and add backdrop
- New order in hamburger menu: nav, actions, items

## 1.0.0-alpha.7

- Add rudimentary `pzsh-nav`, `pzsh-subnav` and `pzsh-nav-item` components for application navigation
- Implement responsive `pzsh-banner` component

## 1.0.0-alpha.6

- Fix menu action/item DOMException

## 1.0.0-alpha.5

- Add responsive `pzsh-menu-dropdown` component
- Make menu & dropdown menu keyboard navigatable
- Allow to close menus with ESC or click outside
- Add icon: `setting`

## 1.0.0-alpha.4

- Add icons: `gitlab`, `plus-circle`, `sliders-v-alt` and `user`
- Remove icons: `user-circle`, `users-alt` -> currently not used in favor of `user`

## 1.0.0-alpha.3

- Implement `pzsh-footer` component with styling & slots
- Add responsive `pzsh-menu` component

## 1.0.0-alpha.2

- Use eslint to provide a bundled version of the Puzzle Shell components in addition to the native ES Modules
- Add an `href` property to the `pzsh-topbar` for the logo link

## 1.0.0-alpha.1

Initial release

- `pzsh-topbar` component with logo/actions slots, responsive menu on smaller screens
- `pzsh-topbar` component (yet unpolished on smaller screens)
- `pzsh-container` component for general page layout
- Dummy `pzsh-banner` and `pzsh-footer` components
