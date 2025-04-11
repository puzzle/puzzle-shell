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

  focus(options?: FocusOptions) {
    this.shadowRoot?.querySelector("a")?.focus(options);
  }

  updated() {
    this.applyHostAttributes();
  }

  render() {
    return html`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`;
  }

  /**
   * Copy attributes on the host element to the link element, such
   * that applications can use additional link attributes.
   *
   * Notice that, apart from the `href` attribute, these attributes
   * are only applied initially (resp. if the compoenent rerenders,
   * which is not the case if a property changes). So it is perfect
   * for "static" attributes that never change, but it won't work for
   * "dynamic" attributes that can change.
   */
  private applyHostAttributes() {
    const link = this.shadowRoot?.querySelector("a");
    if (!link) return;

    const attributes = Array.from(this.attributes).filter(
      ({ name }) => name !== "href",
    );
    attributes.forEach(({ name, value }) => {
      link.setAttribute(name, value);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-menu-action": MenuAction;
  }
}
