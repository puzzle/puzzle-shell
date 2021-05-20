import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { theme } from "../utils/theme.js";

// TODO: href property for logo home link

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
          padding: calc(var(--pzsh-spacer)) calc(6 * var(--pzsh-spacer));
          display: flex;
          align-items: center;
          background: var(--pzsh-topbar-bg);
        }

        .menu {
          flex: auto;
        }

        .menu-button {
          display: none;
          padding: var(--pzsh-spacer);
          border: 0;
          border-radius: 3px;
          background-color: transparent;
          color: var(--pzsh-topbar-fg);
          cursor: pointer;
        }
        .menu-button:hover {
          background-color: var(--pzsh-topbar-bg-alt);
        }
        .menu-button pzsh-icon {
          display: block;
        }

        ::slotted([slot="actions"]) {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 800px) {
          .topbar {
            padding-left: calc(2 * var(--pzsh-spacer));
            padding-right: calc(2 * var(--pzsh-spacer));
          }

          .menu-button {
            display: block;
            margin-left: auto;
          }
          .menu:not(.open) {
            display: none;
          }
          .menu {
            padding: var(--pzsh-spacer) 0;
            position: absolute;
            top: var(--pzsh-topbar-height);
            left: 0;
            right: 0;
            background-color: var(--pzsh-topbar-menu-bg);
          }

          ::slotted([slot="actions"]) {
            flex-direction: column;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      hasMenuItems: { attribute: false },
      menuOpen: { attribute: false },
      homeUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.hasMenuItems = false;
    this.menuOpen = false;
    this.homeUrl = "/";

    this.menuItemsObserver = new MutationObserver(mutations =>
      mutations.forEach(this.__updateHasMenuItems.bind(this))
    );

    // Handle slot node assignments (slotted <div> that contains menu
    // items)
    this.shadowRoot.addEventListener(
      "slotchange",
      this.__handleActionsSlotAssignment.bind(this)
    );
  }

  firstUpdated() {
    this.__updateHasMenuItems();
  }

  __handleActionsSlotAssignment(e) {
    const slot = e.target;
    if (slot.getAttribute("name") === "actions") {
      slot.assignedNodes().forEach(node =>
        // Observe adding/removing of slot node children (actual menu items)
        this.menuItemsObserver.observe(node, { childList: true })
      );
    }
  }

  __updateHasMenuItems() {
    const slot = this.shadowRoot.querySelector('slot[name="actions"]');
    this.hasMenuItems = slot
      .assignedNodes()
      .some(node => node.children.length > 0);
  }

  __toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  __renderMenuButton() {
    if (this.hasMenuItems) {
      const icon = this.menuOpen ? "multiply" : "bars";
      return html`<button class="menu-button" @click=${this.__toggleMenu}>
        <pzsh-icon name=${icon}></pzsh-icon>
      </button>`;
    }
    return null;
  }

  render() {
    const menuClasses = {
      menu: true,
      open: this.menuOpen,
    };
    return html`<div class="topbar">
      <a href=${this.homeUrl}><slot name="logo"></slot></a>
      <div class=${classMap(menuClasses)}>
        <slot name="actions"></slot>
      </div>
      ${this.__renderMenuButton()}
    </div>`;
  }
}

window.customElements.define("pzsh-topbar", Topbar);
