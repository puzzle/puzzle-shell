import { LitElement, html, css, customElement } from "lit-element";
import { theme } from "./theme";

/**
 * Full height container component that expects to be "slotted" with
 * header, content and footer.
 */
@customElement("pzsh-container")
export class Container extends LitElement {
  static styles = [
    theme,
    css`
      .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      ::slotted(pzsh-header),
      ::slotted(pzsh-footer) {
        flex: none;
      }
      ::slotted(:nth-child(2)) {
        /* Let the content eat the rest */
        flex: auto;
      }
    `,
  ];

  render() {
    return html`<div class="container">
      <slot></slot>
    </div>`;
  }
}
