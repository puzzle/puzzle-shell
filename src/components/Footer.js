import { LitElement, html, css } from 'lit-element';
import { theme } from '../utils/theme.js';

/**
 * Component for the application's footer.
 */
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
