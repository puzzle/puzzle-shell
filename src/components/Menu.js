import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";

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
          }

          /* Display the menu actions on desktop in the topbar using absolute positioning */
          ::slotted([slot="actions"]) {
            position: absolute;
            top: 0;
            right: calc(6 * var(--pzsh-spacer));
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
      menuOpen: { attribute: false },
    };
  }

  constructor() {
    super();
    this.menuOpen = false;
    this.hasMenu = false;

    this.handleMenuToggle = this.handleMenuToggle.bind(this);

    this.actionsObserver = new MutationObserver(mutations =>
      mutations.forEach(this.handleActionsChange.bind(this))
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Subscribe to menu toggle events from pzsh-topbar component
    document.addEventListener("pzsh-menu-toggle", this.handleMenuToggle, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener(
      "pzsh-menu-toggle",
      this.handleMenuToggle,
      true
    );
  }

  handleMenuToggle(e) {
    e.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  handleSlotChange(e) {
    this.triggerMenuAvailability();

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
    this.triggerMenuAvailability();
  }

  /**
   * Emit an event for the pzsh-topbar component to show/hide the
   * hamburger menu button.
   */
  triggerMenuAvailability() {
    const itemsSlot = this.shadowRoot.querySelector('slot[name="items"]');
    const actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
    const hasMenu =
      itemsSlot.assignedNodes().length > 0 ||
      actionsSlot.assignedNodes()[0]?.children?.length > 0;
    if (hasMenu !== this.hasMenu) {
      this.dispatchEvent(
        new CustomEvent("pzsh-menu-availability", { detail: hasMenu })
      );
    }
    this.hasMenu = hasMenu;
  }

  render() {
    const menuClasses = {
      open: this.menuOpen,
    };
    return html`
      <nav class=${classMap(menuClasses)} @slotchange=${this.handleSlotChange}>
        <slot name="items"></slot>
        <slot name="actions"></slot>
      </nav>
    `;
  }
}

customElements.define("pzsh-menu", Menu);
