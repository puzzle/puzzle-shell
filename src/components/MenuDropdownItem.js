import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Dropdown menu item with icon and text.
 *
 * @slot - Slot for the icon and the text
 * @fires click
 */
export class MenuDropdownItem extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          display: block;
        }
        a {
          display: flex;
          align-items: center;
          font-family: var(--pzsh-font-family);
          padding: calc(2 * var(--pzsh-spacer)) calc(3 * var(--pzsh-spacer));
          color: var(--pzsh-menu-fg);
          text-decoration: none;
          white-space: nowrap;
        }
        :host(:focus),
        a:hover,
        a:active,
        a:focus {
          background-color: var(--pzsh-menu-bg-alt);
          text-decoration: none;
        }
        ::slotted(pzsh-icon),
        ::slotted(svg) {
          margin-right: calc(var(--pzsh-spacer) / 2);
        }

        @media (min-width: 800px) {
          a {
            color: var(--pzsh-menu-dropdown-item-fg);
          }
          :host(:focus),
          a:hover,
          a:active,
          a:focus {
            background-color: var(--pzsh-menu-dropdown-item-bg-alt);
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

  dispatchClick(event) {
    this.dispatchEvent(event);
  }

  render() {
    return html`<a
      href="${this.href}"
      @click=${this.dispatchClick}
      role="menuitem"
    >
      <slot></slot>
    </a>`;
  }
}

window.customElements.define("pzsh-menu-dropdown-item", MenuDropdownItem);
