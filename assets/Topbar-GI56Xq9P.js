import{n as e}from"./chunk-BneVvdWh.js";import{B as t,H as n,q as r,z as i}from"./iframe-gsfQKUPZ.js";import{a,i as o,n as s,r as c,t as l}from"./decorate--ZexQYXy.js";import{n as u,r as d,t as f}from"./property-CoATh6Xe.js";import{n as p,t as m}from"./class-map-BlT__8Y0.js";import{n as h,t as g}from"./theme-DZi-TgJq.js";import{n as _}from"./Icon-BU4ZVAta.js";function v(e){return d({...e,state:!0,attribute:!1})}var y=e((()=>{u()})),b=e((()=>{})),x=e((()=>{})),S=e((()=>{})),C=e((()=>{})),w=e((()=>{})),T=e((()=>{})),E=e((()=>{o(),u(),y(),b(),x(),S(),C(),w(),T()}));function D(e,t){return e&&e instanceof HTMLElement&&(e.nodeName.toLowerCase()===t||e.closest(t)!=null)}function O(e){e.getBoundingClientRect().bottom>window.innerHeight&&e.scrollIntoView(!1),e.getBoundingClientRect().top<0&&e.scrollIntoView()}var k=e((()=>{}));function A(e,t){if(t instanceof KeyboardEvent&&t.type===`keydown`&&(t.key===`ArrowUp`||t.key===`ArrowDown`)){let n=e(),r=n.findIndex(e=>e===document.activeElement);t.key===`ArrowUp`?--r:t.key===`ArrowDown`&&(r+=1);let i=n[r];i&&(i.focus(),O(i),t.preventDefault())}}var j=e((()=>{k()})),M,N=e((()=>{i(),c(),g(),s(),M=class extends t{static{this.styles=[h,r`
      :host {
        position: absolute;
        top: var(--pzsh-topbar-height);
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(135, 139, 142, 0.4);
        backdrop-filter: blur(4px);
        z-index: var(--pzsh-menu-backdrop-z-index);
      }
    `]}render(){return n``}},M=l([a(`pzsh-backdrop`)],M)})),P,F=e((()=>{i(),E(),c(),f(),m(),k(),j(),g(),N(),s(),P=class extends t{static{this.styles=[h,r`
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

      @media (min-width: ${h.breakpoint}px) {
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
    `]}constructor(){super(),this.open=!1,this.scrollContainerSelector=`body`,this.available=!1,this.hasNav=!1,this.hasSubnav=!1,this.toggleMenu=this.toggleMenu.bind(this),this.handleEvent=this.handleEvent.bind(this),this.actionsObserver=new MutationObserver(e=>e.forEach(this.handleActionsChange.bind(this)))}connectedCallback(){super.connectedCallback(),document.addEventListener(`pzsh-menu-toggle`,this.toggleMenu,!0),document.addEventListener(`click`,this.handleEvent),document.addEventListener(`keydown`,this.handleEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pzsh-menu-toggle`,this.toggleMenu,!0),document.removeEventListener(`click`,this.handleEvent),document.removeEventListener(`keydown`,this.handleEvent)}toggleMenu(e){e?.stopPropagation(),this.open=!this.open,this.toggleBackdrop(),this.triggerMenuChange(this.available,this.open)}toggleBackdrop(){let e=document.querySelector(`pzsh-backdrop`);e&&e.remove(),this.open&&document.querySelector(`body`)?.appendChild(document.createElement(`pzsh-backdrop`));let t=document.querySelector(this.scrollContainerSelector);t&&(t.style.overflowY=this.open?`hidden`:`auto`)}handleEvent(e){this.handleMenuClose(e),this.handleMenuNavigation(e)}handleMenuClose(e){this.open&&(e.type===`click`&&!D(e.target,`pzsh-topbar`)||e.type===`keydown`&&e instanceof KeyboardEvent&&(e.key===`Escape`||e.key===`Tab`))&&this.toggleMenu(e)}handleMenuNavigation(e){this.open&&A(this.getMenuItems.bind(this),e)}getMenuItems(){let e=Array.from(this.querySelectorAll(`[slot='nav'] pzsh-nav-item`)),t=Array.from(this.querySelector(`[slot='actions']`)?.children||[]);return[...e,...t].reduce((e,t)=>t.nodeName.toLowerCase()===`pzsh-menu-dropdown`?[...e,...Array.from(t.querySelector(`[slot="items"]`)?.children||[])].filter(e=>e.nodeName.toLowerCase()!==`pzsh-menu-divider`):(e.push(t),e),[])}handleSlotChange(e){let t=e.target;this.updateMenuAvailablity(),t.getAttribute(`name`)===`nav`&&this.updateNavAvailability(),t.getAttribute(`name`)===`actions`&&t.assignedNodes().forEach(e=>this.actionsObserver.observe(e,{childList:!0}))}handleActionsChange(){this.updateMenuAvailablity()}updateMenuAvailablity(){let e=this.hasMenuItems();e!==this.available&&this.triggerMenuChange(e,this.open),this.available=e}hasMenuItems(){let e=this.shadowRoot?.querySelector(`slot[name="nav"]`),t=this.shadowRoot?.querySelector(`slot[name="actions"]`),n=this.shadowRoot?.querySelector(`slot[name="items"]`);return e.assignedNodes().length>0||(t.assignedNodes()[0]||void 0)?.children?.length>0||n.assignedNodes().length>0}triggerMenuChange(e,t){this.dispatchEvent(new CustomEvent(`pzsh-menu-change`,{detail:{available:e,open:t}}))}updateNavAvailability(){let e=this.shadowRoot?.querySelector(`slot[name="nav"]`),t=e.assignedNodes().length>0,n=e.assignedNodes()[0]?.querySelector(`pzsh-subnav`)!=null;(t!==this.hasNav||n!==this.hasSubnav)&&this.triggerNavChange(t,n),this.hasNav=t,this.hasSubnav=n}triggerNavChange(e,t){this.dispatchEvent(new CustomEvent(`pzsh-menu-nav-change`,{detail:{hasNav:e,hasSubnav:t}}))}render(){return n`
      <nav
        class=${p({open:this.open})}
        @slotchange=${this.handleSlotChange}
        role="menu"
      >
        <slot name="nav"></slot>
        <slot name="actions"></slot>
        <slot name="items"></slot>
      </nav>
    `}},l([v()],P.prototype,`open`,void 0),l([d({type:String})],P.prototype,`scrollContainerSelector`,void 0),P=l([a(`pzsh-menu`)],P)})),I,L=e((()=>{i(),E(),c(),f(),g(),_(),s(),I=class extends t{static{this.styles=[h,r`
      :host {
        display: flex;
        align-items: center;
        height: var(--pzsh-topbar-height);
        padding: calc(var(--pzsh-spacer))
          var(--pzsh-page-padding-horizontal-mobile);
        background: var(--pzsh-topbar-bg);
      }

      a.logo-link {
        display: flex; /* Fix vertical centering */
      }

      .menu-button {
        margin-left: auto;
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

      @media (max-width: ${h.breakpoint-1}px) {
        :host {
          margin-bottom: 0 !important;
        }
      }

      @media (min-width: ${h.breakpoint}px) {
        :host {
          padding-left: var(--pzsh-page-padding-horizontal-desktop);
          padding-right: var(--pzsh-page-padding-horizontal-desktop);
        }

        .menu-button {
          display: none;
        }
      }
    `]}constructor(){super(),this.menuAvailable=!1,this.menuOpen=!1,this.href=``,this.handleMenuChange=this.handleMenuChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`pzsh-menu-change`,this.handleMenuChange,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pzsh-menu-change`,this.handleMenuChange,!0)}handleMenuChange(e){if(e.stopPropagation(),e instanceof CustomEvent){let{available:t,open:n}=e.detail;this.menuAvailable=t,this.menuOpen=n}}toggleMenu(){this.dispatchEvent(new CustomEvent(`pzsh-menu-toggle`))}renderMenuButton(){if(this.menuAvailable){let e=this.menuOpen?`multiply`:`bars`;return n`<button
        type="button"
        class="menu-button"
        @click=${this.toggleMenu}
        aria-expanded=${this.menuOpen}
        aria-label="Menu"
      >
        <pzsh-icon name=${e}></pzsh-icon>
      </button>`}return null}renderLogo(){return this.href?n`<a class="logo-link" href=${this.href}>
          <slot></slot>
        </a>`:n`<slot></slot>`}render(){return n`${this.renderLogo()} ${this.renderMenuButton()} `}},l([v()],I.prototype,`menuAvailable`,void 0),l([v()],I.prototype,`menuOpen`,void 0),l([d({type:String})],I.prototype,`href`,void 0),I=l([a(`pzsh-topbar`)],I)}));export{A as a,E as c,j as i,v as l,F as n,k as o,N as r,D as s,L as t};