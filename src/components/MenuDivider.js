import { LitElement, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Divider to be used in the pzsh-menu component to separate menu
 * actions (currently only effects mobile menu).
 */
export class MenuDivider extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        @media (max-width: 799px) {
          :host {
            margin: calc(3 * var(--pzsh-spacer)) 0;
            border-top: 1px solid var(--pzsh-menu-divider);
          }
        }
      `,
    ];
  }
}

window.customElements.define("pzsh-menu-divider", MenuDivider);
