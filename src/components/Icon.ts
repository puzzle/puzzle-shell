import { LitElement, TemplateResult, css, html } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { theme } from "../utils/theme";

// Icons from https://iconscout.com/unicons/explore/line (colors set
// to currentColor and SVG optimized)
export const icons: Record<string, TemplateResult> = {
  // prettier-ignore
  'angle-down': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 00-1.41 0L12 12.71 8.46 9.17a1 1 0 00-1.41 0 1 1 0 000 1.42l4.24 4.24a1 1 0 001.42 0L17 10.59a1 1 0 000-1.42z"/></svg>
`,
  // prettier-ignore
  'angle-up': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 13.41l-4.29-4.24a1 1 0 00-1.42 0l-4.24 4.24a1 1 0 000 1.42 1 1 0 001.41 0L12 11.29l3.54 3.54a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 00.05-1.42z"/></svg>`,
  // prettier-ignore
  bars: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 8h18a1 1 0 000-2H3a1 1 0 000 2zm18 8H3a1 1 0 000 2h18a1 1 0 000-2zm0-5H3a1 1 0 000 2h18a1 1 0 000-2z"/></svg>`,
  // prettier-ignore
  github: html`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.247a10 10 0 00-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 00-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 011.538 1.025 2.137 2.137 0 002.912.825 2.104 2.104 0 01.638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 011.025-2.688 3.594 3.594 0 01.1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 015 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 01.1 2.65 3.869 3.869 0 011.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 01.675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0012 2.247z"/></svg>`,
  // prettier-ignore
  gitlab: html`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M21.94 12.865l-1.066-3.28.001.005v-.005l-2.115-6.51a.833.833 0 00-.799-.57.822.822 0 00-.788.576l-2.007 6.178H8.834L6.824 3.08a.822.822 0 00-.788-.575H6.03a.839.839 0 00-.796.575L3.127 9.584l-.002.006.001-.005-1.069 3.28a1.195 1.195 0 00.435 1.34l9.229 6.705.004.003.012.008-.011-.008.002.001.001.001a.466.466 0 00.045.028l.006.004.004.002.003.001h.002l.005.003.025.01.023.01h.001l.004.002.005.002h.002l.006.002h.003c.011.004.022.006.034.009l.013.003h.002l.005.002.007.001h.007a.467.467 0 00.066.006h.001a.469.469 0 00.067-.005h.007l.007-.002.004-.001h.002l.014-.004.034-.008h.002l.006-.003h.002l.005-.002.004-.001h.001l.025-.011.023-.01.005-.002h.002l.003-.002.004-.002.007-.004a.468.468 0 00.044-.027l.004-.003.005-.003 9.23-6.706a1.195 1.195 0 00.434-1.339zm-3.973-9.18l1.81 5.574h-3.62zm-11.937 0L7.843 9.26h-3.62zm-2.984 9.757a.255.255 0 01-.092-.285l.794-2.438 5.822 7.464zm1.494-3.24h3.61l2.573 7.927zm7.165 10.696l-.006-.005-.011-.01-.02-.018.002.001.002.002a.473.473 0 00.043.037l.002.002zm.293-1.894l-1.514-4.665-1.344-4.138h5.72zm.31 1.88l-.01.008-.002.001-.005.005-.012.009.002-.002a.455.455 0 00.043-.036l.001-.002.002-.002zM15.851 10.2h3.61l-.74.947-5.447 6.98zm5.1 3.241l-6.523 4.74 5.824-7.463.791 2.437a.255.255 0 01-.092.286z"/></svg>`,
  // prettier-ignore
  multiply: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.41 12l6.3-6.29a1 1 0 10-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 00-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 000 1.42 1 1 0 001.42 0l6.29-6.3 6.29 6.3a1 1 0 001.42 0 1 1 0 000-1.42z"/></svg>`,
  // prettier-ignore
  'plus-circle': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4-9h-3V8a1 1 0 00-2 0v3H8a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2z"/></svg>`,
  // prettier-ignore
  'question-circle': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.29 15.29a1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2.84.84 0 00.08.38.9.9 0 00.54.54.94.94 0 00.76 0 .9.9 0 00.54-.54A1 1 0 0013 16a1 1 0 00-.29-.71 1 1 0 00-1.42 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a3 3 0 00-2.6 1.5 1 1 0 101.73 1A1 1 0 0112 9a1 1 0 010 2 1 1 0 00-1 1v1a1 1 0 002 0v-.18A3 3 0 0012 7z"/></svg>`,
  // prettier-ignore
  search: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 117-7 7 7 0 01-7 7z"/></svg>`,
  // prettier-ignore
  setting: html`<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="currentColor" d="M19.9 12.66a1 1 0 010-1.32l1.28-1.44a1 1 0 00.12-1.17l-2-3.46a1 1 0 00-1.07-.48l-1.88.38a1 1 0 01-1.15-.66l-.61-1.83a1 1 0 00-.95-.68h-4a1 1 0 00-1 .68l-.56 1.83a1 1 0 01-1.15.66L5 4.79a1 1 0 00-1 .48L2 8.73a1 1 0 00.1 1.17l1.27 1.44a1 1 0 010 1.32L2.1 14.1a1 1 0 00-.1 1.17l2 3.46a1 1 0 001.07.48l1.88-.38a1 1 0 011.15.66l.61 1.83a1 1 0 001 .68h4a1 1 0 00.95-.68l.61-1.83a1 1 0 011.15-.66l1.88.38a1 1 0 001.07-.48l2-3.46a1 1 0 00-.12-1.17zM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 00-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 00-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 000-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 003.45-2L10.36 4h2.56l.38 1.14a3 3 0 003.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 000 3.98zm-6.77-6a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z"/></svg>`,
  // prettier-ignore
  'sign-out-alt': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.59 13l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-4-4a1 1 0 10-1.42 1.42l2.3 2.29H3a1 1 0 000 2zM12 2a10 10 0 00-9 5.55 1 1 0 001.8.9A8 8 0 1112 20a7.93 7.93 0 01-7.16-4.45 1 1 0 00-1.8.9A10 10 0 1012 2z"/></svg>`,
  // prettier-ignore
  'sliders-v-alt': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8.18V3a1 1 0 00-2 0v5.18a3 3 0 000 5.64V21a1 1 0 002 0v-7.18a3 3 0 000-5.64zM19 12a1 1 0 111-1 1 1 0 01-1 1zm-6 2.18V3a1 1 0 00-2 0v11.18a3 3 0 000 5.64V21a1 1 0 002 0v-1.18a3 3 0 000-5.64zM12 18a1 1 0 111-1 1 1 0 01-1 1zM6 6.18V3a1 1 0 00-2 0v3.18a3 3 0 000 5.64V21a1 1 0 002 0v-9.18a3 3 0 000-5.64zM5 10a1 1 0 111-1 1 1 0 01-1 1z"/></svg>`,
  // prettier-ignore
  'user': html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1 1 0 002 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 10 10 0 00-6.25-8.19zM12 12a4 4 0 114-4 4 4 0 01-4 4z"/></svg>`,
};

/**
 * Component to display built-in icons
 */
@customElement("pzsh-icon")
export class Icon extends LitElement {
  @property({ type: String })
  name = "";

  static styles = [
    theme,
    css`
      :host {
        display: inline-block;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    `,
  ];

  render() {
    return html`${icons[this.name]}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-icon": Icon;
  }
}
