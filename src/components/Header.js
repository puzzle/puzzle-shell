import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";
import "./Topbar.js";
import "./Banner.js";

/**
 * Component for the application's header, contains the topbar and the
 * banner.
 *
 * @slot logo - Slot for the topbar logo SVG graphic
 * @slot actions - Slot for topbar buttons/dropdowns
 */
export class Header extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .header {
          display: flex;
          flex-direction: column;
        }
      `,
    ];
  }

  render() {
    return html`<div class="header">
      <pzsh-topbar>
        <slot name="logo" slot="logo"></slot>
        <slot name="actions" slot="actions"></slot>
      </pzsh-topbar>
      <pzsh-banner></pzsh-banner>
    </div>`;
  }
}

window.customElements.define("pzsh-header", Header);
