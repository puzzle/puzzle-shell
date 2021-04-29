import { LitElement, html, css } from 'lit-element';
import { theme } from '../utils/theme.js';

/**
 * Top application bar that contains logo and optional
 * application-wide actions like help, logout etc.
 *
 * @slot logo - Slot for the logo SVG graphic
 * @slot actions - Slot for topbar buttons/dropdowns
 */
export class Topbar extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .topbar {
          height: var(--pzsh-topbar-height);
          padding: calc(2 * var(--pzsh-spacer)) calc(4 * var(--pzsh-spacer));
          border-bottom: 1px solid var(--pzsh-topbar-border);
          display: flex;
          align-items: center;
          background: var(--pzsh-topbar-bg-bottom);
          background: linear-gradient(
            0deg,
            var(--pzsh-topbar-bg-bottom) 0%,
            var(--pzsh-topbar-bg-top) 33%
          );
        }

        ::slotted([slot='actions']) {
          flex: auto;
          display: flex;
          justify-content: flex-end;
          gap: var(--pzsh-spacer); /* TODO: does not work in Safari */
        }
      `,
    ];
  }

  render() {
    return html`<div class="topbar">
      <slot name="logo"></slot>
      <slot name="actions"></slot>
    </div>`;
  }
}

window.customElements.define('pzsh-topbar', Topbar);
