import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { theme } from "../utils/theme";

/**
 * Main navigation of the application.
 *
 * @slot - May contain pzsh-nav-item and pzsh-subnav components
 */
@customElement("pzsh-nav")
export class Nav extends LitElement {
  static styles = [
    theme,
    css`
      nav {
        display: flex;
        flex-direction: column;
        background-color: var(--pzsh-menu-bg);
      }

      @media (min-width: ${theme.breakpoint}px) {
        nav {
          flex-direction: row;
          flex-wrap: wrap;
          background-color: transparent;
        }
      }
    `,
  ];

  render() {
    return html`
      <nav>
        <slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-nav": Nav;
  }
}
