import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Main navigation of the application.
 *
 * @slot - May contain pzsh-nav-item and pzsh-subnav components
 */
export class Nav extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        nav {
          display: flex;
          flex-direction: column;
          background-color: var(--pzsh-menu-bg);
        }

        @media (min-width: 800px) {
          nav {
            flex-direction: row;
            flex-wrap: wrap;
            background-color: transparent;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <nav>
        <slot></slot>
      </nav>
    `;
  }
}

customElements.define("pzsh-nav", Nav);
