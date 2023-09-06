import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { classMap } from "lit/directives/class-map.js";
import { isNodeOrChild } from "../utils/dom";
import { navigateMenuWithKeyboard } from "../utils/menu";
import { theme } from "../utils/theme";
import "./Backdrop";

/**
 * Responsive menu component that is coupled with the topbar component
 * (for mobile menu toggling and actions display on desktop) and the
 * banner component (nav display on desktop) via events.
 *
 * @slot nav - Slot for application navigation that is visible in the
 * banner on desktop and moves into the hamburger menu on mobile
 * @slot items - Slot for menu content that is visible on the page on
 * desktop (typically on the left of the content) and moves into the
 * hamburger menu on mobile
 * @slot actions - Slot for application-wide menu actions (like help,
 * logout etc.) that are visible in the topbar on desktop and move
 * into the hamburger menu on mobile
 * @fires pzsh-menu-change
 * @fires pzsh-menu-nav-change
 */
@customElement("pzsh-menu")
export class Menu extends LitElement {
  @property({ attribute: false })
  open = false;

  /**
   * The selector for the scroll container which will be blocked from
   * scrolling while menu is open.
   */
  @property({ type: String })
  scrollContainerSelector = "body";

  available = false;
  hasNav = false;
  hasSubnav = false;
  actionsObserver: MutationObserver;

  static styles = [
    theme,
    css`
      nav {
        position: absolute;
        top: var(--pzsh-topbar-height);
        left: 0;
        right: 0;
        display: none;
        max-height: calc(100vh - var(--pzsh-topbar-height));
        overflow: hidden auto;
        padding: calc(2 * var(--pzsh-spacer) - var(--pzsh-menu-item-gap))
          calc(3 * var(--pzsh-spacer)) calc(2 * var(--pzsh-spacer))
          calc(3 * var(--pzsh-spacer));
        background-color: var(--pzsh-menu-bg);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        z-index: var(--pzsh-menu-z-index);
      }
      nav.open {
        display: block;
      }

      ::slotted([slot="actions"]) {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: ${theme.breakpoint}px) {
        nav {
          display: block; /* Always visible even when "closed" */
          position: static;
          padding: 0;
          background-color: transparent;
          box-shadow: none;
        }

        /* Display the nav on the desktop in the banner using absolute positioning */
        ::slotted([slot="nav"]) {
          position: absolute;
          top: var(--pzsh-topbar-height);
          left: 0;
          right: 0;
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

  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleEvent = this.handleEvent.bind(this);

    this.actionsObserver = new MutationObserver((mutations) =>
      mutations.forEach(this.handleActionsChange.bind(this)),
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Subscribe to menu toggle events from pzsh-topbar component
    document.addEventListener("pzsh-menu-toggle", this.toggleMenu, true);

    document.addEventListener("click", this.handleEvent);
    document.addEventListener("keydown", this.handleEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener("pzsh-menu-toggle", this.toggleMenu, true);
    document.removeEventListener("click", this.handleEvent);
    document.removeEventListener("keydown", this.handleEvent);
  }

  toggleMenu(e: Event) {
    e?.stopPropagation();
    this.open = !this.open;
    this.toggleBackdrop();
    this.triggerMenuChange(this.available, this.open);
  }

  toggleBackdrop() {
    const backdrop = document.querySelector("pzsh-backdrop");
    if (backdrop) {
      backdrop.remove();
    }

    if (this.open) {
      document
        .querySelector("body")
        ?.appendChild(document.createElement("pzsh-backdrop"));
    }

    // Prevent scroll container (<body> per default) from scrolling
    // while backdrop is visible; can be configure with the
    // `scrollContainerSelector` property
    const scrollContainer = document.querySelector<HTMLElement>(
      this.scrollContainerSelector,
    );
    if (scrollContainer) {
      scrollContainer.style.overflowY = this.open ? "hidden" : "auto";
    }
  }

  handleEvent(e: Event) {
    this.handleMenuClose(e);
    this.handleMenuNavigation(e);
  }

  handleMenuClose(e: Event) {
    if (
      this.open &&
      ((e.type === "click" && !isNodeOrChild(e.target, "pzsh-topbar")) ||
        (e.type === "keydown" &&
          e instanceof KeyboardEvent &&
          e.key === "Escape"))
    ) {
      this.toggleMenu(e);
    }
  }

  handleMenuNavigation(e: Event) {
    if (this.open) {
      navigateMenuWithKeyboard(this.getMenuItems.bind(this), e);
    }
  }

  /**
   * Flatten all menu actions & dropdown items to an array
   */
  getMenuItems(): ReadonlyArray<HTMLElement> {
    const navItems = Array.from(
      this.querySelectorAll<HTMLElement>("[slot='nav'] pzsh-nav-item"),
    );
    const actions = Array.from(
      this.querySelector("[slot='actions']")?.children || [],
    ) as HTMLElement[];
    return [...navItems, ...actions].reduce((acc, c) => {
      if (c.nodeName.toLowerCase() === "pzsh-menu-dropdown") {
        return [
          ...acc,
          ...(Array.from(
            c.querySelector('[slot="items"]')?.children || [],
          ) as HTMLElement[]),
        ].filter((e) => e.nodeName.toLowerCase() !== "pzsh-menu-divider");
      }
      acc.push(c);
      return acc;
    }, [] as HTMLElement[]);
  }

  handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this.updateMenuAvailablity();

    if (slot.getAttribute("name") === "nav") {
      this.updateNavAvailability();
      // TODO: Observe dynamically changed nav nodes just like for actions
    }

    if (slot.getAttribute("name") === "actions") {
      // Observe dynamic adding/removing of slot node children
      // (actual menu actions)
      slot
        .assignedNodes()
        .forEach((node) =>
          this.actionsObserver.observe(node, { childList: true }),
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
    const navSlot = this.shadowRoot?.querySelector(
      'slot[name="nav"]',
    ) as HTMLSlotElement;
    const actionsSlot = this.shadowRoot?.querySelector(
      'slot[name="actions"]',
    ) as HTMLSlotElement;
    const itemsSlot = this.shadowRoot?.querySelector(
      'slot[name="items"]',
    ) as HTMLSlotElement;
    return (
      navSlot.assignedNodes().length > 0 ||
      ((actionsSlot.assignedNodes()[0] as HTMLElement) || undefined)?.children
        ?.length > 0 ||
      itemsSlot.assignedNodes().length > 0
    );
  }

  /**
   * Emit an event for the pzsh-topbar component to show/hide the
   * hamburger menu button or update its open/closed state.
   */
  triggerMenuChange(available: boolean, open: boolean) {
    this.dispatchEvent(
      new CustomEvent("pzsh-menu-change", { detail: { available, open } }),
    );
  }

  updateNavAvailability() {
    const slot = this.shadowRoot?.querySelector(
      'slot[name="nav"]',
    ) as HTMLSlotElement;
    const hasNav = slot.assignedNodes().length > 0;
    const hasSubnav =
      (slot.assignedNodes()[0] as HTMLElement | undefined)?.querySelector(
        "pzsh-subnav",
      ) != null;
    if (hasNav !== this.hasNav || hasSubnav !== this.hasSubnav) {
      this.triggerNavChange(hasNav, hasSubnav);
    }
    this.hasNav = hasNav;
    this.hasSubnav = hasSubnav;
  }

  /**
   * Emit an event for the pzsh-banner component to preserve spacing
   * for the absolute positioned nav.
   */
  triggerNavChange(hasNav: boolean, hasSubnav: boolean) {
    this.dispatchEvent(
      new CustomEvent("pzsh-menu-nav-change", {
        detail: { hasNav, hasSubnav },
      }),
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
        <slot name="nav"></slot>
        <slot name="actions"></slot>
        <slot name="items"></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pzsh-menu": Menu;
  }
}
