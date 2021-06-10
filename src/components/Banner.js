import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { theme } from "../utils/theme.js";

/**
 * Component that may contain the search or the navigation (overlayed
 * via absolute positioning in the pzsh-menu component), part of the
 * header below the topbar.
 */
export class Banner extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          display: flex;
          flex-direction: column;
          background-color: var(--pzsh-banner-bg);
        }
        ::slotted([slot="tangram"]) {
          display: none;
        }
        .content {
          flex: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative; /* Move in front of tangram */
        }
        ::slotted([slot="content"]) {
          flex: auto;
          overflow: hidden;
          margin: var(--pzsh-spacer) calc(2 * var(--pzsh-spacer));
        }

        @media (min-width: 800px) {
          :host {
            position: relative;
            overflow: hidden;
          }
          ::slotted([slot="tangram"]) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
          }
          ::slotted([slot="content"]) {
            margin: calc(6 * var(--pzsh-spacer)) var(--pzsh-spacer);
          }
          .content.has-nav {
            margin-top: var(--pzsh-nav-height);
          }
          .content.has-subnav {
            margin-top: calc(2 * var(--pzsh-nav-height));
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      hasNav: { attribute: false },
      hasSubnav: { attribute: false },
    };
  }

  constructor() {
    super();
    this.hasNav = false;
    this.hasSubnav = false;

    this.handleMenuNavChange = this.handleMenuNavChange.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "pzsh-menu-nav-change",
      this.handleMenuNavChange,
      true
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "pzsh-menu-nav-change",
      this.handleMenuNavChange,
      true
    );
  }

  handleMenuNavChange(e) {
    e.stopPropagation();
    const { hasNav, hasSubnav } = e.detail;
    this.hasNav = hasNav;
    this.hasSubnav = hasSubnav;
  }

  render() {
    return html`
      <slot name="tangram"></slot>
      <div
        class=${classMap({
          content: true,
          "has-nav": this.hasNav,
          "has-subnav": this.hasSubnav,
        })}
      >
        <slot name="content"></slot>
      </div>
    `;
  }
}

window.customElements.define("pzsh-banner", Banner);
