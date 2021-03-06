import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

// TODO: Expose custom property to set slogan color
// TODO: Optimize for small mobile screens

/**
 * Component that contains the application title, slogan and logo, below the header/banner.
 */
export class Hero extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          height: var(--pzsh-hero-height);
          padding: 0 var(--pzsh-page-padding-horizontal-mobile);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--pzsh-spacer);
          background: var(--pzsh-hero-bg-start);
          background: linear-gradient(
            180deg,
            var(--pzsh-hero-bg-start) 0%,
            var(--pzsh-hero-bg-end) 100%
          );
        }

        .text {
          max-width: 350px;

          /* Move a bit above mathematical center */
          margin-bottom: calc(2 * var(--pzsh-spacer));
        }
        .logo {
          max-height: var(--pzsh-hero-height);
        }

        ::slotted([slot="title"]),
        ::slotted([slot="slogan"]) {
          font-family: var(--pzsh-font-family);
          font-weight: normal;
          line-height: 1;
        }

        ::slotted([slot="title"]) {
          margin: 0;
          font-size: 32px;
          color: var(--pzsh-color-brand-alt-2);
        }
        ::slotted([slot="slogan"]) {
          margin-top: var(--pzsh-spacer);
          margin-bottom: 0;
          font-size: 18px;
          color: var(--pzsh-color-brand-alt-3);
        }

        @media (min-width: 390px) {
          :host {
            gap: calc(3 * var(--pzsh-spacer));
          }

          .text {
            /* Move a bit above mathematical center */
            margin-bottom: calc(6 * var(--pzsh-spacer));
          }
        }

        @media (min-width: 800px) {
          :host {
            gap: calc(5 * var(--pzsh-spacer));
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="text">
        <slot name="title"></slot>
        <slot name="slogan"></slot>
      </div>
      <div class="logo">
        <slot name="logo"></slot>
      </div>
    `;
  }
}

window.customElements.define("pzsh-hero", Hero);
