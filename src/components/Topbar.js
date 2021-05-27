import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Top application bar that contains the logo and optional
 * application-wide actions that are rendered via the menu
 * component. The topbar is coupled with the menu component via
 * events.
 *
 * @slot Slot for the logo SVG graphic
 */
export class Topbar extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          display: flex;
          align-items: center;
          height: var(--pzsh-topbar-height);
          padding: calc(var(--pzsh-spacer)) calc(2 * var(--pzsh-spacer));
          background: var(--pzsh-topbar-bg);
        }

        a.logo-link {
          display: flex; /* Fix vertical centering */
        }

        .menu-button {
          margin-left: auto;
          padding: var(--pzsh-spacer);
          border: 0;
          border-radius: 3px;
          background-color: transparent;
          color: var(--pzsh-topbar-fg);
          cursor: pointer;
        }
        .menu-button:hover {
          background-color: var(--pzsh-topbar-bg-alt);
        }
        .menu-button pzsh-icon {
          display: block;
        }

        @media (min-width: 800px) {
          :host {
            padding-left: calc(6 * var(--pzsh-spacer));
            padding-right: calc(6 * var(--pzsh-spacer));
          }

          .menu-button {
            display: none;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      hasMenu: { attribute: false },
      menuOpen: { attribute: false },
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.hasMenu = false;
    this.menuOpen = false;

    this.updateHasMenu = this.updateHasMenu.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "pzsh-menu-availability",
      this.updateHasMenu,
      true
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "pzsh-menu-availability",
      this.updateHasMenu,
      true
    );
  }

  updateHasMenu(e) {
    e.stopPropagation();
    this.hasMenu = e.detail;
  }

  toggleMenu() {
    this.dispatchEvent(new CustomEvent("pzsh-menu-toggle"));
    this.menuOpen = !this.menuOpen;
  }

  renderMenuButton() {
    if (this.hasMenu) {
      const icon = this.menuOpen ? "multiply" : "bars";
      return html`<button
        type="button"
        class="menu-button"
        @click=${this.toggleMenu}
        aria-expanded=${this.menuOpen}
      >
        <pzsh-icon name=${icon}></pzsh-icon>
      </button>`;
    }
    return null;
  }

  renderLogo() {
    return this.href
      ? html`<a class="logo-link" href=${this.href}>
          <slot></slot>
        </a>`
      : html`<slot></slot>`;
  }

  render() {
    return html`${this.renderLogo()} ${this.renderMenuButton()} `;
  }
}

window.customElements.define("pzsh-topbar", Topbar);
