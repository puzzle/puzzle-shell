import { LitElement, html, css } from 'lit-element';
import { theme } from './theme.js';
import '../pzsh-topbar.js';
import '../pzsh-banner.js';

export class Header extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .header {
          display: flex;
          flex-direction: column;
        }
      `,
    ];
  }

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

window.customElements.define('pzsh-header', Header);
