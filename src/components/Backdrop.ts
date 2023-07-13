import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { theme } from "../utils/theme";

/**
 * Backdrop component to be appended to body, used in `pzsh-menu`
 * component.
 */
@customElement("pzsh-backdrop")
export class Backdrop extends LitElement {
  static styles = [
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

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-backdrop": Backdrop;
  }
}
