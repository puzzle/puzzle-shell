import { LitElement, html, css, customElement } from "lit-element";
import { theme } from "./theme";

@customElement("pzsh-footer")
export class Footer extends LitElement {
  static styles = [
    theme,
    css`
      .footer {
        background-color: var(--pzsh-footer-bg);
        min-height: 50px; /* TODO */
      }
    `,
  ];

  render() {
    return html`<div class="footer"></div>`;
  }
}
