import { LitElement, html, css } from "lit";
import { theme } from "../utils/theme.js";

/**
 * Second level navigation to be use within pzsh-nav.
 *
 * @slot - May contain pzsh-nav-item components
 */
export class Subnav extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 800px) {
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
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("pzsh-subnav", Subnav);
