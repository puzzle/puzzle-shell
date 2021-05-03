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
          display: grid;
          grid-template-columns:
            1fr min-content calc(4 * var(--pzsh-spacer))
            max-content 1fr;
          grid-template-rows: 1fr max-content 1fr;
          background: var(--pzsh-hero-bg-start);
          background: linear-gradient(
            180deg,
            var(--pzsh-hero-bg-start) 0%,
            var(--pzsh-hero-bg-end) 100%
          );
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
          white-space: nowrap;
          color: var(--pzsh-color-brand-alt-2);
        }
        ::slotted([slot="slogan"]) {
          margin-top: var(--pzsh-spacer);
          font-size: 18px;
          color: var(--pzsh-color-brand-alt-3);
        }

        .text {
          grid-column: 2/3;
          grid-row: 2/3;
        }
        ::slotted([slot="logo"]) {
          grid-column: 4/5;
          grid-row: 2/3;
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
      <slot name="logo"></slot>
    `;
  }
}

window.customElements.define("pzsh-hero", Hero);
