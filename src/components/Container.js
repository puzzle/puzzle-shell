import { LitElement, html, css } from "lit";
import { theme } from "../utils/theme.js";

/**
 * Full height container component that expects to be "slotted" with
 * header, content and footer.
 *
 * @slot - Add header, content and footer in this slot.
 */
export class Container extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        ::slotted(*) {
          /* Let the content eat the rest */
          flex: auto;
        }
        ::slotted(pzsh-topbar),
        ::slotted(pzsh-banner),
        ::slotted(pzsh-hero),
        ::slotted(pzsh-menu),
        ::slotted(pzsh-footer) {
          flex: none;
        }
      `,
    ];
  }

  render() {
    return html` <slot></slot> `;
  }
}

window.customElements.define("pzsh-container", Container);
