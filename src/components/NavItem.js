import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { theme } from "../utils/theme.js";

/**
 * Application navigation item to be used in pzsh-nav and pzsh-subnav
 * components.
 *
 * @slot - Navigation item label
 * @attr {Boolean} active - Whether the item is currently active
 */
export class NavItem extends LitElement {
  static get properties() {
    return {
      href: { type: String },
      active: { type: Boolean },
    };
  }

  static get styles() {
    return [
      theme,
      css`
        a {
          display: block;
          margin-top: var(--pzsh-menu-item-gap);
          padding: var(--pzsh-menu-item-padding-vertical)
            var(--pzsh-menu-item-padding-horizontal);
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

        @media (min-width: 800px) {
          :host {
            line-height: var(--pzsh-nav-line-height);
          }
          a {
            margin: 0;
            padding: 0 var(--pzsh-nav-item-padding-horizontal-desktop);
            color: var(--pzsh-nav-fg);
            background-color: transparent;
          }
          a,
          :host(:focus) a,
          a:hover,
          a:active,
          a:focus {
            color: var(--pzsh-nav-fg);
          }
          a > div {
            padding: var(--pzsh-nav-item-padding-horizontal-desktop) 0
              calc(var(--pzsh-nav-item-padding-horizontal-desktop) - 5px) 0;
            border-bottom: 5px solid transparent;
          }
          :host(:focus) a > div,
          a:hover > div,
          a:active > div,
          a:focus > div,
          a.active > div {
            border-color: var(--pzsh-nav-active);
          }
        }
      `,
    ];
  }

  constructor() {
    super();
    this.href = "#";
    this.active = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // Make component focusable
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", 0);
    }
  }

  render() {
    return html`<a
      class=${classMap({ active: this.active })}
      href="${this.href}"
      role="menuitem"
      part="pzsh-nav-item"
    >
      <div><slot></slot></div>
    </a>`;
  }
}

customElements.define("pzsh-nav-item", NavItem);
