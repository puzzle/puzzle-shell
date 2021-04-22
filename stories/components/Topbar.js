import { LitElement, html, css, property, customElement } from "lit-element";
import { theme } from "./theme";

@customElement("pzsh-topbar")
export class Topbar extends LitElement {
  static styles = [
    theme,
    css`
      .topbar {
        height: var(--pzsh-topbar-height);
        padding: calc(2 * var(--pzsh-spacer)) calc(4 * var(--pzsh-spacer));
        border-bottom: 1px solid var(--pzsh-color-gray-3);
        display: flex;
        align-items: center;
        background: var(--pzsh-color-gray-2);
        background: linear-gradient(
          0deg,
          var(--pzsh-color-gray-2) 0%,
          var(--pzsh-color-gray-1) 33%
        );
      }

      ::slotted([slot="actions"]) {
        flex: auto;
        display: flex;
        justify-content: flex-end;
        gap: var(--pzsh-spacer); /* TODO: does not work in Safari */
      }
    `,
  ];

  render() {
    return html`<div class="topbar">
      <slot name="logo"></slot>
      <slot name="actions"></slot>
    </div>`;
  }
}
