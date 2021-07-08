import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Dropdown menu item with icon and text.
 *
 * @slot - Slot for the icon and the text
 */
export class MenuDropdownItem extends LitElement {
  static get properties() {
    return {
      href: { type: String },
    };
  }

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
          margin-top: var(--pzsh-menu-item-gap);
          padding: var(--pzsh-menu-item-padding-vertical)
            var(--pzsh-menu-item-padding-horizontal)
            var(--pzsh-menu-item-padding-vertical)
            calc(
              var(--pzsh-icon-size) + var(--pzsh-spacer) / 2 +var(--pzsh-menu-item-padding-horizontal)
            );
          color: var(--pzsh-menu-fg);
          background-color: var(--pzsh-menu-bg-alt);
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
            margin: 0;
            padding: var(--pzsh-menu-item-padding-vertical)
              var(--pzsh-menu-item-padding-horizontal);
            color: var(--pzsh-menu-dropdown-item-fg);
            background-color: transparent;
          }
          :host(:focus) a,
          a:hover,
          a:active,
          a:focus {
            color: var(--pzsh-menu-dropdown-item-fg);
            background-color: var(--pzsh-menu-dropdown-item-bg-alt);
          }
        }
      `,
    ];
  }

  constructor() {
    super();
    this.href = "#";
  }

  connectedCallback() {
    super.connectedCallback();
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

window.customElements.define("pzsh-menu-dropdown-item", MenuDropdownItem);
