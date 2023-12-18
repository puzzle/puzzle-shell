import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { theme } from "../utils/theme";

/**
 * Second level navigation to be use within pzsh-nav.
 *
 * @slot - May contain pzsh-nav-item components
 */
@customElement("pzsh-subnav")
export class Subnav extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: ${theme.breakpoint}px) {
        :host {
          width: 100%;
          order: 1;
          flex-direction: row;
          background-color: var(--pzsh-subnav-bg);
          border-bottom: 1px solid var(--pzsh-subnav-border);
        }
        ::slotted(pzsh-nav-item) {
          --pzsh-nav-fg: var(--pzsh-subnav-fg);
          --pzsh-nav-active: var(--pzsh-subnav-active);
        }
      }
    `,
  ];

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-subnav": Subnav;
  }
}
