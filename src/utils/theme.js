import { css } from "lit-element";

const customProperties = css`
  /* Base colors */
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

  /* Component colors */
  --pzsh-topbar-bg-bottom: var(--pzsh-color-gray-2);
  --pzsh-topbar-bg-top: var(--pzsh-color-gray-1);
  --pzsh-topbar-border: var(--pzsh-color-gray-3);
  --pzsh-topbar-menu-bg: #f4f4f4; /* TODO: add color to theme once decided */
  --pzsh-topbar-menu-fg: #ffffff;
  --pzsh-banner-bg-left: #64a9d9; /* TODO: define as brand variant color? */
  --pzsh-banner-bg-right: #ffffff; /* TODO: define as brand variant color? */
  --pzsh-footer-bg: var(--pzsh-color-gray-3);

  /* Fonts */
  --pzsh-font-family: "Roboto", sans-serif;
  --pzsh-monospace-font-family: "Roboto Mono", monospace;

  /* Spacings */
  --pzsh-spacer: 8px;

  /* Sizes */
  --pzsh-topbar-height: calc(8 * var(--pzsh-spacer));
  --pzsh-banner-height: calc(8 * var(--pzsh-spacer));
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
