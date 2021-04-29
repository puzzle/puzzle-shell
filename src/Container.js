import { LitElement, html, css } from 'lit-element';
import { theme } from './theme.js';

/**
 * Full height container component that expects to be "slotted" with
 * header, content and footer.
 */
export class Container extends LitElement {
  static get styles() {
    return [
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
  }

  render() {
    return html`<div class="container">
      <slot></slot>
    </div>`;
  }
}

window.customElements.define('pzsh-container', Container);
