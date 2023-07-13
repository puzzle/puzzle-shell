import { LitElement, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { theme } from "../utils/theme";

/**
 * Divider to be used in the pzsh-menu component to separate menu
 * actions (currently only effects mobile menu).
 */
@customElement("pzsh-menu-divider")
export class MenuDivider extends LitElement {
  static styles = [
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

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-menu-divider": MenuDivider;
  }
}
