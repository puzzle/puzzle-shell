import { css } from "lit-element";

const customProperties = css`
  /* Base colors */
  --pzsh-color-white: #ffffff;
  --pzsh-color-gray-1: #fafafa;
  --pzsh-color-gray-2: #f2f2f2;
  --pzsh-color-gray-3: #d8d8d8;
  --pzsh-color-gray-4: #62676b;

  /* Puzzle brand colors */
  --pzsh-color-brand-1: #1e5a96;
  --pzsh-color-brand-2: #3b7bbe;
  --pzsh-color-brand-3: #238bca;
  --pzsh-color-brand-4: #3fa8e0;
  --pzsh-color-brand-5: #46bcc0;
  --pzsh-color-brand-6: #2c97a6;
  --pzsh-color-brand-7: #69b978;
  --pzsh-color-brand-8: #61b44b;

  --pzsh-color-brand-alt-1: #dcedf9;
  --pzsh-color-brand-alt-2: #1c2948;
  --pzsh-color-brand-alt-3: #3fa8e0; /* Logo color */
  --pzsh-color-brand-alt-4: #69b978; /* Logo color */

  /* Component colors */
  --pzsh-topbar-bg: var(--pzsh-color-brand-1);
  --pzsh-topbar-bg-alt: var(--pzsh-color-brand-2);
  --pzsh-topbar-fg: var(--pzsh-color-white);
  --pzsh-topbar-menu-bg: var(--pzsh-color-brand-3);
  --pzsh-topbar-menu-bg-alt: var(--pzsh-color-brand-4);
  --pzsh-topbar-menu-fg: var(--pzsh-color-white);
  --pzsh-banner-bg: var(--pzsh-color-brand-alt-1);
  --pzsh-hero-bg-start: var(--pzsh-banner-bg);
  --pzsh-hero-bg-end: var(--pzsh-color-white);
  --pzsh-footer-bg: var(--pzsh-color-gray-3);

  /* Fonts */
  --pzsh-font-family: "Roboto", sans-serif;
  --pzsh-monospace-font-family: "Roboto Mono", monospace;

  /* Spacings */
  --pzsh-spacer: 8px;

  /* Sizes */
  --logo-height: 32px;
  --pzsh-topbar-height: calc(2 * var(--pzsh-spacer) + var(--logo-height));
  --pzsh-banner-small-height: calc(8 * var(--pzsh-spacer));
  --pzsh-banner-large-height: calc(12 * var(--pzsh-spacer));
  --pzsh-hero-height: calc(20 * var(--pzsh-spacer));
`;

/**
 * Roboto: Regular 400, Regular 400 italic, Medium 500, Medium 500 italic
 * Roboto Mono: Regular 400, Medium 500
 */
const fontFaces = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&family=Roboto+Mono:wght@400;500&display=swap");
`;

/**
 * Styles to be used in encapulated shadow DOM context – provides
 * custom properties and does basic CSS reset.
 */
export const theme = css`
  :host {
    ${customProperties}
  }
  ${fontFaces}

  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img,
  svg {
    display: block;
  }
`;

// TODO: is it necessary to expose the custom properties to light DOM?

/**
 * Register CSS in light DOM, e.g. to style slot children
 */
export function registerLightDomStyles(styles) {
  const lightStyle = document.createElement("style");
  lightStyle.innerText = styles;
  document.querySelector("body").appendChild(lightStyle);
}

// Make custom properties & font faces available globally in light DOM so any
// styles registered with `registerLightDomStyles` may use them
registerLightDomStyles(css`
  :root {
    ${customProperties}
  }
  ${fontFaces}
`);
