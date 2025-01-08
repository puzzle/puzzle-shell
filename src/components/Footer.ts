import { LitElement, css, html } from "lit";
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
      :host {
        padding: calc(var(--pzsh-spacer)) calc(6 * var(--pzsh-spacer));
        background-color: var(--pzsh-footer-bg);

        display: flex;
        flex-direction: column;
        align-items: start;

        border-top: 2px solid var(--pzsh-footer-border);
      }

      .named-slots {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
      }

      ::slotted(*) {
        color: var(--pzsh-color-gray-4);
        font-family: Roboto, sans-serif;
        gap: calc(2 * var(--pzsh-spacer));

        padding-top: var(--pzsh-spacer);
        padding-bottom: var(--pzsh-spacer);

        display: flex;
        flex-direction: column;
        flex: 1;
      }

      ::slotted([slot="start"]) {
        align-items: start;
        justify-content: flex-start;
      }

      ::slotted([slot="center"]) {
        align-items: center;
        justify-content: center;
      }

      ::slotted([slot="end"]) {
        align-items: end;
        justify-content: flex-end;
      }

      @media (max-width: ${theme.breakpoint}px) {
        :host {
          padding: calc(var(--pzsh-spacer)) calc(3 * var(--pzsh-spacer));
        }

        .named-slots {
          flex-direction: column;
          row-gap: calc(3 * var(--pzsh-spacer));
        }

        ::slotted([slot="start"]),
        ::slotted([slot="center"]),
        ::slotted([slot="end"]) {
          align-items: start;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="named-slots">
        <slot name="start"></slot>
        <slot name="center"></slot>
        <slot name="end"></slot>
      </div>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-footer": Footer;
  }
}
