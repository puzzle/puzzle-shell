import { LitElement, html, css } from 'lit-element';
import { theme } from '../utils/theme.js';

/**
 * Top bar action link with icon and text.
 *
 * @slot - Slot for the icon and the text
 * @fires click
 */
export class TopbarLink extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        a {
          display: flex;
          align-items: center;
          margin-left: calc(3 * var(--pzsh-spacer));
          font-family: var(--pzsh-font-family);
          color: var(--pzsh-color-gray-4);
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
    this.href = '#';
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

window.customElements.define('pzsh-topbar-link', TopbarLink);
