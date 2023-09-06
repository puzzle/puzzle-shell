import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { theme } from "../utils/theme";

/**
 * Top application bar that contains the logo and optional
 * application-wide actions that are rendered via the menu
 * component. The topbar is coupled with the menu component via
 * events.
 *
 * @slot Slot for the logo SVG graphic
 * @fires pzsh-menu-toggle
 */
@customElement("pzsh-topbar")
export class Topbar extends LitElement {
  @property({ attribute: false })
  menuAvailable = false;

  @property({ attribute: false })
  menuOpen = false;

  @property({ type: String })
  href = "";

  static styles = [
    theme,
    css`
      :host {
        display: flex;
        align-items: center;
        height: var(--pzsh-topbar-height);
        padding: calc(var(--pzsh-spacer))
          var(--pzsh-page-padding-horizontal-mobile);
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

      @media (max-width: ${theme.breakpoint - 1}px) {
        :host {
          margin-bottom: 0 !important;
        }
      }

      @media (min-width: ${theme.breakpoint}px) {
        :host {
          padding-left: var(--pzsh-page-padding-horizontal-desktop);
          padding-right: var(--pzsh-page-padding-horizontal-desktop);
        }

        .menu-button {
          display: none;
        }
      }
    `,
  ];

  constructor() {
    super();

    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("pzsh-menu-change", this.handleMenuChange, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "pzsh-menu-change",
      this.handleMenuChange,
      true,
    );
  }

  handleMenuChange(e: Event) {
    e.stopPropagation();

    if (e instanceof CustomEvent) {
      const { available, open } = e.detail;
      this.menuAvailable = available;
      this.menuOpen = open;
    }
  }

  toggleMenu() {
    this.dispatchEvent(new CustomEvent("pzsh-menu-toggle"));
  }

  renderMenuButton() {
    if (this.menuAvailable) {
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

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-topbar": Topbar;
  }
}
