import { LitElement, html, css, customElement } from "lit-element";
import { theme } from "./theme";
import "./Topbar";
import "./Banner";

@customElement("pzsh-header")
export class Header extends LitElement {
  static styles = [
    theme,
    css`
      .header {
        display: flex;
        flex-direction: column;
      }
    `,
  ];

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
