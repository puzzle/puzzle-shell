import { css } from "lit-element";

export const theme = css`
  :host {
    /* Base colors */
    --pzsh-color-gray-1: #fafafa;
    --pzsh-color-gray-2: #f2f2f2;
    --pzsh-color-gray-3: #d8d8d8;

    /* Puzzle brand colors */
    --pzsh-color-brand-1: #1e5a96;
    --pzsh-color-brand-2: #3b7bbe;
    --pzsh-color-brand-3: #238bca;
    --pzsh-color-brand-4: #3fa8e0;
    --pzsh-color-brand-5: #46bcc0;
    --pzsh-color-brand-6: #2c97a6;
    --pzsh-color-brand-7: #69b978;
    --pzsh-color-brand-8: #61b44b;

    /* Spacings */
    --pzsh-spacer: 8px;

    /* Sizes */
    --pzsh-topbar-height: calc(8 * var(--pzsh-spacer));
    --pzsh-banner-height: calc(8 * var(--pzsh-spacer));
  }

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
