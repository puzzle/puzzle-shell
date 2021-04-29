import { LitElement, html, css } from 'lit-element';
import { theme } from './theme.js';

export class Footer extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .footer {
          background-color: var(--pzsh-footer-bg);
          min-height: 50px; /* TODO */
        }
      `,
    ];
  }

  render() {
    return html`<div class="footer"></div>`;
  }
}

window.customElements.define('pzsh-footer', Footer);
