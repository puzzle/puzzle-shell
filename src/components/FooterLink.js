import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Footer action link.
 *
 * @slot - Slot for the icon and the text
 * @fires click
 */
export class FooterLink extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        a {
          display: flex;
          align-items: center;
          font-family: var(--pzsh-font-family);
          color: var(--pzsh-color-brand-1);
          text-decoration: none;
        }
        a:hover,
        a:active {
          text-decoration: underline;
        }
        ::slotted(pzsh-icon),
        ::slotted(svg) {
          margin-right: calc(var(--pzsh-spacer) / 2);
        }

        @media (max-width: 800px) {
          a {
            margin-left: 0;
            color: var(--pzsh-color-brand-1);
          }
          a:hover,
          a:active {
            background-color: var(--pzsh-topbar-menu-bg-alt);
            text-decoration: none;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.href = "#";
  }

  dispatchClick(event) {
    this.dispatchEvent(event);
  }

  render() {
    return html`<a href="${this.href}" @click=${this.dispatchClick}>
      <slot></slot>
    </a>`;
  }
}

window.customElements.define("pzsh-footer-link", FooterLink);
