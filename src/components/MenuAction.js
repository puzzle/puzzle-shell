import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Menu action with icon and text, will be render in the menu on
 * mobile or in the topbar otherwise.
 *
 * @slot - Slot for the icon and the text
 * @fires click
 */
export class MenuAction extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        a {
          display: flex;
          font-family: var(--pzsh-font-family);
          padding: var(--pzsh-menu-item-padding-vertical)
            var(--pzsh-menu-item-padding-horizontal);
          color: var(--pzsh-menu-fg);
          text-decoration: none;
        }
        a:hover,
        a:active {
          background-color: var(--pzsh-menu-bg-alt);
          text-decoration: none;
        }
        ::slotted(pzsh-icon),
        ::slotted(svg) {
          margin-right: calc(var(--pzsh-spacer) / 2);
        }

        @media (min-width: 800px) {
          a {
            align-items: center;
            padding: 0;
            color: var(--pzsh-topbar-fg);
          }
          a:hover,
          a:active {
            background-color: transparent;
            text-decoration: underline;
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

window.customElements.define("pzsh-menu-action", MenuAction);
