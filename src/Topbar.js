import { LitElement, html, css } from 'lit-element';
import { theme } from './theme.js';

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
