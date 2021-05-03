import { LitElement, html, css } from "lit-element";
import { theme } from "../utils/theme.js";

// TODO: slot for content (e.g. search or navigation)
// TODO: slot for tangram graphic

/**
 * Component that might contain the search or the navigation, part of
 * the header below the topbar.
 */
export class Banner extends LitElement {
  static get styles() {
    return [
      theme,
      css`
        .banner {
          height: var(--pzsh-banner-small-height);
          display: flex;
          background: var(--pzsh-banner-bg);
        }
        /* TODO: large version for welcome pages */
        /* height: var(--pzsh-banner-large-height); */

        /* dummy content */
        .search {
          margin: auto;
        }
        .search input {
          font-size: 16px;
          padding: 0.5em;
          border: 1px solid var(--pzsh-color-gray-3);
        }
        .search input::placeholder {
          color: var(--pzsh-color-gray-4);
        }
      `,
    ];
  }

  render() {
    return html`<div class="banner">
      <!-- dummy content -->
      <div class="search"><input placeholder="Search..." type="text" /></div>
    </div>`;
  }
}

window.customElements.define("pzsh-banner", Banner);
