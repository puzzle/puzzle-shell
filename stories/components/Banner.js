import { LitElement, html, css, customElement } from "lit-element";
import { theme } from "./theme";

@customElement("pzsh-banner")
export class Banner extends LitElement {
  static styles = [
    theme,
    css`
      .banner {
        height: var(--pzsh-banner-height);
        background: var(--pzsh-banner-bg-left);
        background: linear-gradient(
          90deg,
          var(--pzsh-banner-bg-left) 0%,
          var(--pzsh-banner-bg-right) 100%
        );
      }
    `,
  ];

  render() {
    return html`<div class="banner"></div>`;
  }
}
