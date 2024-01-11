import { LitElement, css, html } from "lit";
import { state } from "lit/decorators.js";
import { customElement } from "lit/decorators/custom-element.js";
import { classMap } from "lit/directives/class-map.js";
import { isNodeOrChild } from "../utils/dom";
import { navigateMenuWithKeyboard } from "../utils/menu";
import { theme } from "../utils/theme";
import "./Icon";

/**
 * Menu dropdown with icon and text, will be rendered as a dropdown
 * menu in the topbar on desktop, or with all items visible in the
 * hamburger menu on mobile.
 *
 * @slot toggle - Slot for the icon and the text of the toggle button
 * @slot items - Slot for dropdown menu items
 */
@customElement("pzsh-menu-dropdown")
export class MenuDropdown extends LitElement {
  @state()
  open = false;

  static styles = [
    theme,
    css`
      :host {
        position: relative;
        margin-top: var(--pzsh-spacer);
      }

      .toggle {
        display: flex; /* TODO: How does this work in today's browsers? */
        align-items: center;
        width: 100%;
        border: 0;
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal);
        color: var(--pzsh-color-gray-4);
        background-color: transparent;
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
        margin-top: calc(-1 * var(--pzsh-menu-item-gap));
      }

      @media (min-width: ${theme.breakpoint}px) {
        :host {
          margin: 0;
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

  constructor() {
    super();
    this.handleEvent = this.handleEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.handleEvent);
    document.addEventListener("keydown", this.handleEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleEvent);
    document.removeEventListener("keydown", this.handleEvent);
  }

  handleEvent(e: MouseEvent | KeyboardEvent) {
    this.handleMenuClose(e);
    this.handleMenuNavigation(e);
  }

  handleMenuClose(e: MouseEvent | KeyboardEvent) {
    if (
      this.open &&
      ((e.type === "click" &&
        !isNodeOrChild(e.target, 'pzsh-menu-dropdown [slot="toggle"]')) ||
        (e instanceof KeyboardEvent &&
          e.type === "keydown" &&
          (e.key === "Escape" || e.key === "Tab")))
    ) {
      this.toggleMenu();
    }
  }

  handleMenuNavigation(e: MouseEvent | KeyboardEvent) {
    if (this.open) {
      navigateMenuWithKeyboard(
        () =>
          Array.from(
            this.querySelector("[slot='items']")?.children || [],
          ) as HTMLElement[],
        e,
      );
    }
  }

  toggleMenu(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
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

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-menu-dropdown": MenuDropdown;
  }
}
