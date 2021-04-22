import { LitElement, html, css, customElement } from "lit-element";
import { theme } from "./theme";

@customElement("pzsh-banner")
export class Banner extends LitElement {
  static styles = [
    theme,
    css`
      .banner {
        height: var(--pzsh-banner-height);
        background: var(#64a9d9);
        background: linear-gradient(
          90deg,
          #3572b2 0%,
          #64a9d9 100%
        ); /* TODO: use correct colors from theme once defined */
      }
    `,
  ];

  render() {
    return html`<div class="banner"></div>`;
  }
}
