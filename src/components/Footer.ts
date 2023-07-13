import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { theme } from "../utils/theme";

/**
 * Component for the application's footer.
 */
@customElement("pzsh-footer")
export class Footer extends LitElement {
  static styles = [
    theme,
    css`
      :host(pzsh-footer) {
        padding: calc(var(--pzsh-spacer)) calc(6 * var(--pzsh-spacer));
        background-color: var(--pzsh-footer-bg);

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-top: 2px solid var(--pzsh-footer-border);
      }

      ::slotted(*) {
        color: var(--pzsh-color-gray-4);
        font-family: Roboto, sans-serif;
        gap: calc(2 * var(--pzsh-spacer));

        padding-top: var(--pzsh-spacer);
        padding-bottom: var(--pzsh-spacer);

        display: flex;
        flex: 1;
      }

      ::slotted([slot="start"]) {
        align-items: center;
        justify-content: flex-start;
      }

      ::slotted([slot="center"]) {
        align-items: center;
        justify-content: center;
      }

      ::slotted([slot="end"]) {
        align-items: center;
        justify-content: flex-end;
      }

      @media (max-width: 800px) {
        :host(pzsh-footer) {
          padding: calc(var(--pzsh-spacer)) calc(3 * var(--pzsh-spacer));

          display: flex;
          flex-direction: column;

          row-gap: var(--pzsh-spacer);
        }

        ::slotted([slot="start"]) {
          order: 2;
        }

        ::slotted([slot="center"]) {
          order: 1;
        }

        ::slotted([slot="end"]) {
          order: 3;
        }
      }
    `,
  ];

  render() {
    return html`
      <slot name="start"></slot>
      <slot name="center"></slot>
      <slot name="end"></slot>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-footer": Footer;
  }
}
