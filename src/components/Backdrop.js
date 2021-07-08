import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

/**
 * Backdrop component to be appended to body, used in `pzsh-menu`
 * component.
 */
export class Backdrop extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        :host {
          position: absolute;
          top: var(--pzsh-topbar-height);
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(135, 139, 142, 0.4);
          backdrop-filter: blur(4px);
          z-index: var(--pzsh-menu-backdrop-z-index);
        }
      `,
    ];
  }

  render() {
    return html``;
  }
}

window.customElements.define("pzsh-backdrop", Backdrop);
