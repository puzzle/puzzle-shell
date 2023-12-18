import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { theme } from "../utils/theme";

/**
 * Menu action with icon and text, will be render in the menu on
 * mobile or in the topbar otherwise.
 *
 * @slot - Slot for the icon and the text
 */
@customElement("pzsh-menu-action")
export class MenuAction extends LitElement {
  @property({ type: String })
  href = "#";

  static styles = [
    theme,
    css`
      a {
        display: flex;
        align-items: center;
        font-family: var(--pzsh-font-family);
        margin-top: var(--pzsh-menu-item-gap);
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal);
        background-color: var(--pzsh-menu-bg-alt);
        color: var(--pzsh-menu-fg);
        text-decoration: none;
        white-space: nowrap;
      }
      :host(:focus) a,
      a:hover,
      a:active,
      a:focus {
        color: var(--pzsh-menu-active);
      }
      ::slotted(pzsh-icon),
      ::slotted(svg) {
        margin-right: calc(var(--pzsh-spacer) / 2);
      }

      @media (min-width: ${theme.breakpoint}px) {
        a {
          margin: 0;
          padding: 0;
          color: var(--pzsh-topbar-fg);
          background: transparent;
        }
        :host(:focus) a,
        a:hover,
        a:active,
        a:focus {
          color: var(--pzsh-topbar-fg);
          text-decoration: underline;
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    // Make component focusable
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "0");
    }
  }

  render() {
    return html`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-menu-action": MenuAction;
  }
}
