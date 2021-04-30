import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { theme } from "../utils/theme.js";

/**
 * Top application bar that contains logo and optional
 * application-wide actions like help, logout etc.
 *
 * @slot logo - Slot for the logo SVG graphic
 * @slot actions - Slot for topbar buttons/dropdowns
 */
export class Topbar extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .topbar {
          height: var(--pzsh-topbar-height);
          padding: calc(2 * var(--pzsh-spacer)) calc(4 * var(--pzsh-spacer));
          border-bottom: 1px solid var(--pzsh-topbar-border);
          display: flex;
          align-items: center;
          background: var(--pzsh-topbar-bg-bottom);
          background: linear-gradient(
            0deg,
            var(--pzsh-topbar-bg-bottom) 0%,
            var(--pzsh-topbar-bg-top) 33%
          );
        }

        .menu {
          flex: auto;
        }

        .menu-button {
          display: none;
          padding: var(--pzsh-spacer);
          border: 0;
          border-radius: 3px;
          color: var(--pzsh-color-gray-4);
          background-color: var(--pzsh-topbar-menu-bg);
          cursor: pointer;
        }
        .menu-button:hover {
          background-color: var(--pzsh-color-gray-3);
        }
        .menu-button pzsh-icon {
          display: block;
        }

        ::slotted([slot="actions"]) {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 800px) {
          .topbar {
            padding-left: calc(2 * var(--pzsh-spacer));
            padding-right: calc(2 * var(--pzsh-spacer));
          }

          .menu-button {
            display: block;
            margin-left: auto;
          }
          .menu:not(.open) {
            display: none;
          }
          .menu {
            padding: var(--pzsh-spacer) 0;
            position: absolute;
            top: var(--pzsh-topbar-height);
            left: 0;
            right: 0;
            background-color: var(--pzsh-color-brand-1);
          }

          ::slotted([slot="actions"]) {
            flex-direction: column;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      menuOpen: { attribute: false },
    };
  }

  constructor() {
    super();
    this.menuOpen = false;
  }

  __toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    const menuButtonIcon = this.menuOpen ? "multiply" : "bars";
    const menuClasses = {
      menu: true,
      open: this.menuOpen,
    };
    return html`<div class="topbar">
      <slot name="logo"></slot>
      <div class=${classMap(menuClasses)}>
        <slot name="actions"></slot>
      </div>
      <button class="menu-button" @click=${this.__toggleMenu}>
        <pzsh-icon name=${menuButtonIcon}></pzsh-icon>
      </button>
    </div>`;
  }
}

window.customElements.define("pzsh-topbar", Topbar);
