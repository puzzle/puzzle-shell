import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { theme } from "../utils/theme.js";
import { isNodeOrChild } from "../utils/dom.js";
import { navigateMenuWithKeyboard } from "../utils/menu.js";

/**
 * Menu dropdown with icon and text, will be rendered as a dropdown
 * menu in the topbar on desktop, or with all items visible in the
 * hamburger menu on mobile.
 *
 * @slot toggle - Slot for the icon and the text of the toggle button
 * @slot items - Slot for dropdown menu items
 */
export class MenuDropdown extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          position: relative;
          padding-bottom: var(--pzsh-spacer);
        }

        .toggle {
          display: flex; /* TODO: How does this work in today's browsers? */
          align-items: center;
          justify-content: center;
          width: 100%;
          border: 0;
          padding: calc(2 * var(--pzsh-spacer)) calc(3 * var(--pzsh-spacer))
            var(--pzsh-spacer) calc(3 * var(--pzsh-spacer));
          background-color: transparent;
          color: rgba(255, 255, 255, 0.6);
        }

        .toggle-angle {
          display: none;
        }

        ::slotted([slot="toggle"]) {
          display: flex;
          align-items: center;
          gap: calc(var(--pzsh-spacer) / 2);
          font-family: var(--pzsh-font-family);
          font-size: 1rem;
        }

        .dropdown-menu {
          border-color: var(--pzsh-menu-divider);
          border-style: solid;
          border-width: 0 0 0 var(--pzsh-spacer);
        }

        @media (min-width: 800px) {
          :host {
            padding-bottom: 0;
          }

          .toggle {
            width: auto;
            padding: 0;
            color: var(--pzsh-topbar-fg);
          }

          .toggle-angle {
            display: block;
          }

          .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            z-index: var(--pzsh-menu-dropdown-z-index);
            margin-top: calc(var(--pzsh-spacer) / 2);
            border: 1px solid var(--pzsh-color-gray-3);
            border-radius: 4px;
            padding: var(--pzsh-spacer) 0;
            background-color: var(--pzsh-menu-dropdown-item-bg);
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
          }
          .dropdown-menu.open {
            display: block;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { attribute: false },
    };
  }

  constructor() {
    super();
    this.open = false;

    this.handleEvent = this.handleEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.handleEvent, true);
    document.addEventListener("keydown", this.handleEvent, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleEvent, true);
    document.removeEventListener("keydown", this.handleEvent, true);
  }

  handleEvent(e) {
    this.handleMenuClose(e);
    this.handleMenuNavigation(e);
  }

  handleMenuClose(e) {
    if (
      this.open &&
      ((e.type === "click" &&
        !isNodeOrChild(e.target, 'pzsh-menu-dropdown [slot="toggle"]')) ||
        (e.type === "keydown" && e.key === "Escape"))
    ) {
      this.toggleMenu();
    }
  }

  handleMenuNavigation(e) {
    if (this.open) {
      navigateMenuWithKeyboard(
        () => [...this.querySelector("[slot='items']").children],
        e
      );
    }
  }

  toggleMenu() {
    this.open = !this.open;
  }

  render() {
    const dropdownIcon = this.open ? "angle-up" : "angle-down";
    return html`
      <button
        type="button"
        class="toggle"
        @click=${this.toggleMenu}
        aria-expanded=${this.open}
      >
        <slot name="toggle"></slot>
        <pzsh-icon class="toggle-angle" name=${dropdownIcon}></pzsh-icon>
      </button>
      <div
        class=${classMap({ "dropdown-menu": true, open: this.open })}
        role="menu"
      >
        <slot name="items"></slot>
      </div>
    `;
  }
}

window.customElements.define("pzsh-menu-dropdown", MenuDropdown);
