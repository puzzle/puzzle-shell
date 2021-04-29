import { css } from 'lit-element';

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

    /* Component colors */
    --pzsh-topbar-bg-bottom: var(--pzsh-color-gray-2);
    --pzsh-topbar-bg-top: var(--pzsh-color-gray-1);
    --pzsh-topbar-border: var(--pzsh-color-gray-3);
    --pzsh-banner-bg-left: #3572b2; /* TODO: define as brand variant color*/
    --pzsh-banner-bg-right: #64a9d9; /* TODO: define as brand variant color */
    --pzsh-footer-bg: var(--pzsh-color-gray-3);

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
