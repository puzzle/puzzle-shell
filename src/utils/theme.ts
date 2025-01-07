import { CSSResult, css } from "lit";
/**
 * Roboto: Regular 400, Regular 400 italic, Medium 500, Medium 500 italic
 * Roboto Mono: Regular 400, Medium 500
 */
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/500.css";

/**
 * Check if running in browser to avoid exceptions in SSR context.g
 */
function inBrowser(): boolean {
  return typeof window !== "undefined";
}

const DEFAULT_BREAKPOINT = 800;
export function getBreakpoint(): number {
  return (
    (inBrowser() &&
      "pzshBreakpoint" in window &&
      typeof window.pzshBreakpoint === "number" &&
      window.pzshBreakpoint) ||
    DEFAULT_BREAKPOINT
  );
}

const customProperties = css`
  /* Base colors */
  --pzsh-color-white: #ffffff;
  --pzsh-color-gray-1: #fafafa;
  --pzsh-color-gray-2: #f2f2f2;
  --pzsh-color-gray-3: #d8d8d8;
  --pzsh-color-gray-4: #62676b;
  --pzsh-color-black: #000000;

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

  --pzsh-green: var(--pzsh-color-brand-7);
  --pzsh-blue: var(--pzsh-color-brand-alt-3);

  /* Component colors */
  --pzsh-topbar-bg: var(--pzsh-color-brand-1);
  --pzsh-topbar-bg-alt: var(--pzsh-color-brand-2);
  --pzsh-topbar-fg: var(--pzsh-color-white);
  --pzsh-menu-bg: var(--pzsh-color-white);
  --pzsh-menu-bg-alt: var(--pzsh-color-gray-2);
  --pzsh-menu-fg: var(--pzsh-color-gray-4);
  --pzsh-menu-active: var(--pzsh-color-brand-8);
  --pzsh-menu-divider: var(--pzsh-color-gray-4);
  --pzsh-menu-dropdown-item-bg: var(--pzsh-color-white);
  --pzsh-menu-dropdown-item-bg-alt: var(--pzsh-color-gray-2);
  --pzsh-menu-dropdown-item-fg: var(--pzsh-color-gray-4);
  --pzsh-banner-bg: var(--pzsh-color-brand-alt-1);
  --pzsh-nav-fg: var(--pzsh-color-brand-1);
  --pzsh-nav-active: var(--pzsh-color-brand-8);
  --pzsh-subnav-bg: var(--pzsh-color-white);
  --pzsh-subnav-border: var(--pzsh-color-gray-3);
  --pzsh-subnav-fg: var(--pzsh-color-gray-4);
  --pzsh-subnav-active: var(--pzsh-color-gray-3);
  --pzsh-hero-bg-start: var(--pzsh-banner-bg);
  --pzsh-hero-bg-end: var(--pzsh-color-white);
  --pzsh-footer-bg: var(--pzsh-color-gray-2);
  --pzsh-footer-border: var(--pzsh-color-gray-3);

  /* Fonts */
  --pzsh-font-size-base: 16px;
  --pzsh-font-family: "Roboto", sans-serif;
  --pzsh-monospace-font-family: "Roboto Mono", monospace;

  /* Spacings */
  --pzsh-spacer: 8px;
  --pzsh-page-padding-horizontal-mobile: calc(2 * var(--pzsh-spacer));
  --pzsh-page-padding-horizontal-desktop: calc(6 * var(--pzsh-spacer));
  --pzsh-menu-item-gap: var(--pzsh-spacer);
  --pzsh-menu-item-padding-horizontal: calc(3 * var(--pzsh-spacer));
  --pzsh-menu-item-padding-vertical: calc(2 * var(--pzsh-spacer));
  --pzsh-nav-item-padding-horizontal-desktop: calc(2 * var(--pzsh-spacer));

  /* Sizes */
  --pzsh-breakpoint: ${getBreakpoint()}px;
  --pzsh-logo-height: 32px;
  --pzsh-icon-size: 24px;
  --pzsh-topbar-height: calc(2 * var(--pzsh-spacer) + var(--pzsh-logo-height));
  --pzsh-nav-line-height: 18px;
  --pzsh-nav-height: calc(
    2 * var(--pzsh-nav-item-padding-horizontal-desktop) +
      var(--pzsh-nav-line-height)
  );
  --pzsh-banner-content-height: calc(15 * var(--pzsh-spacer));
  --pzsh-hero-height: calc(20 * var(--pzsh-spacer));

  /* Layering */
  --pzsh-menu-z-index: 1000;
  --pzsh-menu-backdrop-z-index: 999;
  --pzsh-menu-dropdown-z-index: 1000;
`;

/**
 * Styles to be used in encapulated shadow DOM context – provides
 * custom properties and does basic CSS reset.
 *
 * For media queries, you can use the additional `breakpoint` property
 * on the returned object to get mobile-first desktop breakpoint
 * (default 800px). The breakpoint can be customized by setting
 * `window.pzshBreakpoint = 1024;`.
 *
 * Usage example:
 *
 *   static styles = [
 *     theme,
 *     css`
 *       // Mobile first styles go here...
 *
 *       @media (min-width: ${theme.breakpoint}) {
 *         // Desktop styles go here...
 *       }
 *     `
 *   ];
 */
export const theme: CSSResult & {
  breakpoint: number;
} = Object.assign(
  css`
    :host {
      ${customProperties}
    }

    /* Reset */
    :host,
    :host * {
      box-sizing: border-box;
      font-family: var(--pzsh-font-family);
      font-size: var(--pzsh-font-size-base);
    }
    img,
    svg {
      display: block;
    }
  `,
  {
    get breakpoint() {
      return getBreakpoint();
    },
  },
);

/**
 * Register CSS in light DOM, e.g. to style slot children
 */
export function registerLightDomStyles(styles: CSSResult) {
  if (!inBrowser()) return;

  const lightStyle = document.createElement("style");
  lightStyle.innerText = styles.toString();
  document.querySelector("body")?.appendChild(lightStyle);
}

// Make custom properties & font faces available globally in light DOM
// so any styles registered with `registerLightDomStyles` may use them
registerLightDomStyles(css`
  :root {
    ${customProperties}
  }
`);
