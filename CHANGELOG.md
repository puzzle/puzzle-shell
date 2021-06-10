# Puzzle Shell Changelog

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
