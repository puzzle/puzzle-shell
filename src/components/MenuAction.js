import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Menu action with icon and text, will be render in the menu on
 * mobile or in the topbar otherwise.
 *
 * @slot - Slot for the icon and the text
 */
export class MenuAction extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        a {
          display: flex;
          font-family: var(--pzsh-font-family);
          margin-top: var(--pzsh-menu-item-gap);
          padding: var(--pzsh-menu-item-padding-vertical)
            var(--pzsh-menu-item-padding-horizontal);
          background-color: var(--pzsh-menu-bg-alt);
          color: var(--pzsh-menu-fg);
          text-decoration: none;
          white-space: nowrap;
        }
        :host(:focus) a,
        a:hover,
        a:active,
        a:focus {
          color: var(--pzsh-menu-active);
        }
        ::slotted(pzsh-icon),
        ::slotted(svg) {
          margin-right: calc(var(--pzsh-spacer) / 2);
        }

        @media (min-width: 800px) {
          a {
            align-items: center;
            margin: 0;
            padding: 0;
            color: var(--pzsh-topbar-fg);
            background: transparent;
          }
          :host(:focus) a,
          a:hover,
          a:active,
          a:focus {
            color: var(--pzsh-topbar-fg);
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

    // Make component focusable
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", 0);
    }
  }

  render() {
    return html`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`;
  }
}

window.customElements.define("pzsh-menu-action", MenuAction);
