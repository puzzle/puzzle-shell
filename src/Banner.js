import { LitElement, html, css } from 'lit-element';
import { theme } from './theme.js';

export class Banner extends LitElement {
  static get styles() {
    return [
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
  }

  render() {
    return html`<div class="banner"></div>`;
  }
}

window.customElements.define('pzsh-banner', Banner);
