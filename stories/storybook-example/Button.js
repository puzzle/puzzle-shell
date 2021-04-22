import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("psh-button")
export class Button extends LitElement {
  @property({ type: Boolean }) primary = false;
  @property({ type: String }) backgroundColor = "transparent";
  @property({ type: String }) size = "medium";
  @property({ type: String }) label = "";

  onClick(event) {
    this.dispatchEvent(event);
  }

  static styles = css`
    .storybook-button {
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }
    .storybook-button--primary {
      color: white;
      background-color: #1ea7fd;
    }
    .storybook-button--secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
    .storybook-button--small {
      font-size: 12px;
      padding: 10px 16px;
    }
    .storybook-button--medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    .storybook-button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `;

  render() {
    const mode = this.primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";
    console.log(this.primary, typeof this.primary);
    return html`
      <button
        type="button"
        class=${[
          "storybook-button",
          `storybook-button--${this.size || "medium"}`,
          mode,
        ].join(" ")}
        style=${this.backgroundColor && {
          backgroundColor: this.backgroundColor,
        }}
        @click=${this.onClick}
      >
        ${this.label}
      </button>
    `;
  }
}
