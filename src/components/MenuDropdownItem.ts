import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { theme } from "../utils/theme";

/**
 * Dropdown menu item with icon and text.
 *
 * @slot - Slot for the icon and the text
 */
@customElement("pzsh-menu-dropdown-item")
export class MenuDropdownItem extends LitElement {
  @property({ type: String })
  href = "#";

  static styles = [
    theme,
    css`
      :host {
        display: block;
      }
      a {
        display: flex;
        align-items: center;
        font-family: var(--pzsh-font-family);
        margin-top: var(--pzsh-menu-item-gap);
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal)
          var(--pzsh-menu-item-padding-vertical)
          calc(
            var(--pzsh-icon-size) + var(--pzsh-spacer) /
              2 +var(--pzsh-menu-item-padding-horizontal)
          );
        color: var(--pzsh-menu-fg);
        background-color: var(--pzsh-menu-bg-alt);
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
          padding: var(--pzsh-menu-item-padding-vertical)
            var(--pzsh-menu-item-padding-horizontal);
          color: var(--pzsh-menu-dropdown-item-fg);
          background-color: transparent;
        }
        :host(:focus) a,
        a:hover,
        a:active,
        a:focus {
          color: var(--pzsh-menu-dropdown-item-fg);
          background-color: var(--pzsh-menu-dropdown-item-bg-alt);
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
    "pzsh-menu-dropdown-item": MenuDropdownItem;
  }
}
