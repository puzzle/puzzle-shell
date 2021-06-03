import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { isNodeOrChild } from "../utils/dom.js";
import { navigateMenuWithKeyboard } from "../utils/menu.js";

/**
 * Responsive menu component that is coupled with the topbar component
 * via events (for mobile menu toggling and actions display on
 * desktop).
 *
 * @slot items - Slot for menu content that is visible on the page on
 * desktop (typically on the left of the content) and moves into the
 * hamburger menu on mobile
 * @slot actions - Slot for application-wide menu actions (like help,
 * logout etc.) that are visible in the topbar on desktop and move
 * into the hamburger menu on mobile
 */
export class Menu extends LitElement {
  static get styles() {
    return [
      css`
        nav {
          position: absolute;
          top: var(--pzsh-topbar-height);
          left: 0;
          right: 0;
          display: none;
          overflow: hidden;
          padding: var(--pzsh-spacer) 0;
          background-color: var(--pzsh-menu-bg);
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        }
        nav.open {
          display: block;
        }

        ::slotted([slot="actions"]) {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 800px) {
          nav {
            display: block; /* Always visible even when "closed" */
            position: static;
            padding: 0;
            background-color: transparent;
            box-shadow: none;
          }

          /* Display the menu actions on desktop in the topbar using absolute positioning */
          ::slotted([slot="actions"]) {
            position: absolute;
            top: 0;
            right: calc(6 * var(--pzsh-spacer));
            z-index: var(--pzsh-menu-z-index);
            height: var(--pzsh-topbar-height);
            flex-direction: row;
            align-items: center;
            gap: calc(3 * var(--pzsh-spacer));
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      open: { attribute: false },
    };
  }

  constructor() {
    super();
    this.available = false;
    this.open = false;

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleEvent = this.handleEvent.bind(this);

    this.actionsObserver = new MutationObserver(mutations =>
      mutations.forEach(this.handleActionsChange.bind(this))
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Subscribe to menu toggle events from pzsh-topbar component
    document.addEventListener("pzsh-menu-toggle", this.toggleMenu, true);

    document.addEventListener("click", this.handleEvent, true);
    document.addEventListener("keydown", this.handleEvent, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener("pzsh-menu-toggle", this.toggleMenu, true);
    document.removeEventListener("click", this.handleEvent, true);
    document.removeEventListener("keydown", this.handleEvent, true);
  }

  toggleMenu(e) {
    e?.stopPropagation();
    this.open = !this.open;
    this.triggerMenuChange(this.available, this.open);
  }

  handleEvent(e) {
    this.handleMenuClose(e);
    this.handleMenuNavigation(e);
  }

  handleMenuClose(e) {
    if (
      this.open &&
      ((e.type === "click" && !isNodeOrChild(e.target, "pzsh-topbar")) ||
        (e.type === "keydown" && e.key === "Escape"))
    ) {
      this.toggleMenu();
    }
  }

  handleMenuNavigation(e) {
    if (this.open) {
      navigateMenuWithKeyboard(this.getMenuItems.bind(this), e);
    }
  }

  /**
   * Flatten all menu actions & dropdown items to an array
   */
  getMenuItems() {
    return [...this.querySelector("[slot='actions']").children].reduce(
      (acc, c) => {
        if (c.nodeName.toLowerCase() === "pzsh-menu-dropdown") {
          return [...acc, ...c.querySelector('[slot="items"]').children].filter(
            e => e.nodeName.toLowerCase() !== "pzsh-menu-divider"
          );
        }
        acc.push(c);
        return acc;
      },
      []
    );
  }

  handleSlotChange(e) {
    this.updateMenuAvailablity();

    const slot = e.target;
    if (slot.getAttribute("name") === "actions") {
      // Observe dynamic adding/removing of slot node children
      // (actual menu actions)
      slot
        .assignedNodes()
        .forEach(node =>
          this.actionsObserver.observe(node, { childList: true })
        );
    }
  }

  handleActionsChange() {
    this.updateMenuAvailablity();
  }

  updateMenuAvailablity() {
    const available = this.hasMenuItems();
    if (available !== this.available) {
      this.triggerMenuChange(available, this.open);
    }
    this.available = available;
  }

  hasMenuItems() {
    const itemsSlot = this.shadowRoot.querySelector('slot[name="items"]');
    const actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
    return (
      itemsSlot.assignedNodes().length > 0 ||
      actionsSlot.assignedNodes()[0]?.children?.length > 0
    );
  }

  /**
   * Emit an event for the pzsh-topbar component to show/hide the
   * hamburger menu button or update its open/closed state.
   */
  triggerMenuChange(available, open) {
    this.dispatchEvent(
      new CustomEvent("pzsh-menu-change", { detail: { available, open } })
    );
  }

  render() {
    const menuClasses = {
      open: this.open,
    };
    return html`
      <nav
        class=${classMap(menuClasses)}
        @slotchange=${this.handleSlotChange}
        role="menu"
      >
        <slot name="items"></slot>
        <slot name="actions"></slot>
      </nav>
    `;
  }
}

customElements.define("pzsh-menu", Menu);
