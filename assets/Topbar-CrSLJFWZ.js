import{i as u,a as g,x as r}from"./iframe-CTRJx84E.js";import{t as v}from"./custom-element-BhZVzxrc.js";import{n as b}from"./property-vYj9RlVk.js";import{e as y}from"./class-map-CcZmWaqx.js";import{t as l}from"./theme-BlrG3hMM.js";import"./Icon-C5r6yscX.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e){return b({...e,state:!0,attribute:!1})}function z(e,t){return e&&e instanceof HTMLElement&&(e.nodeName.toLowerCase()===t||e.closest(t)!=null)}function w(e){e.getBoundingClientRect().bottom>window.innerHeight&&e.scrollIntoView(!1),e.getBoundingClientRect().top<0&&e.scrollIntoView()}function C(e,t){if(t instanceof KeyboardEvent&&t.type==="keydown"&&(t.key==="ArrowUp"||t.key==="ArrowDown")){const n=e();let s=n.findIndex(a=>a===document.activeElement);t.key==="ArrowUp"?s-=1:t.key==="ArrowDown"&&(s+=1);const o=n[s];o&&(o.focus(),w(o),t.preventDefault())}}var k=Object.getOwnPropertyDescriptor,M=(e,t,n,s)=>{for(var o=s>1?void 0:s?k(t,n):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(o=i(o)||o);return o};let d=class extends g{render(){return r``}};d.styles=[l,u`
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
    `];d=M([v("pzsh-backdrop")],d);var x=Object.defineProperty,E=Object.getOwnPropertyDescriptor,f=(e,t,n,s)=>{for(var o=s>1?void 0:s?E(t,n):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&x(t,n,o),o};let p=class extends g{constructor(){super(),this.open=!1,this.scrollContainerSelector="body",this.available=!1,this.hasNav=!1,this.hasSubnav=!1,this.toggleMenu=this.toggleMenu.bind(this),this.handleEvent=this.handleEvent.bind(this),this.actionsObserver=new MutationObserver(e=>e.forEach(this.handleActionsChange.bind(this)))}connectedCallback(){super.connectedCallback(),document.addEventListener("pzsh-menu-toggle",this.toggleMenu,!0),document.addEventListener("click",this.handleEvent),document.addEventListener("keydown",this.handleEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pzsh-menu-toggle",this.toggleMenu,!0),document.removeEventListener("click",this.handleEvent),document.removeEventListener("keydown",this.handleEvent)}toggleMenu(e){e?.stopPropagation(),this.open=!this.open,this.toggleBackdrop(),this.triggerMenuChange(this.available,this.open)}toggleBackdrop(){const e=document.querySelector("pzsh-backdrop");e&&e.remove(),this.open&&document.querySelector("body")?.appendChild(document.createElement("pzsh-backdrop"));const t=document.querySelector(this.scrollContainerSelector);t&&(t.style.overflowY=this.open?"hidden":"auto")}handleEvent(e){this.handleMenuClose(e),this.handleMenuNavigation(e)}handleMenuClose(e){this.open&&(e.type==="click"&&!z(e.target,"pzsh-topbar")||e.type==="keydown"&&e instanceof KeyboardEvent&&(e.key==="Escape"||e.key==="Tab"))&&this.toggleMenu(e)}handleMenuNavigation(e){this.open&&C(this.getMenuItems.bind(this),e)}getMenuItems(){const e=Array.from(this.querySelectorAll("[slot='nav'] pzsh-nav-item")),t=Array.from(this.querySelector("[slot='actions']")?.children||[]);return[...e,...t].reduce((n,s)=>s.nodeName.toLowerCase()==="pzsh-menu-dropdown"?[...n,...Array.from(s.querySelector('[slot="items"]')?.children||[])].filter(o=>o.nodeName.toLowerCase()!=="pzsh-menu-divider"):(n.push(s),n),[])}handleSlotChange(e){const t=e.target;this.updateMenuAvailablity(),t.getAttribute("name")==="nav"&&this.updateNavAvailability(),t.getAttribute("name")==="actions"&&t.assignedNodes().forEach(n=>this.actionsObserver.observe(n,{childList:!0}))}handleActionsChange(){this.updateMenuAvailablity()}updateMenuAvailablity(){const e=this.hasMenuItems();e!==this.available&&this.triggerMenuChange(e,this.open),this.available=e}hasMenuItems(){const e=this.shadowRoot?.querySelector('slot[name="nav"]'),t=this.shadowRoot?.querySelector('slot[name="actions"]'),n=this.shadowRoot?.querySelector('slot[name="items"]');return e.assignedNodes().length>0||(t.assignedNodes()[0]||void 0)?.children?.length>0||n.assignedNodes().length>0}triggerMenuChange(e,t){this.dispatchEvent(new CustomEvent("pzsh-menu-change",{detail:{available:e,open:t}}))}updateNavAvailability(){const e=this.shadowRoot?.querySelector('slot[name="nav"]'),t=e.assignedNodes().length>0,n=e.assignedNodes()[0]?.querySelector("pzsh-subnav")!=null;(t!==this.hasNav||n!==this.hasSubnav)&&this.triggerNavChange(t,n),this.hasNav=t,this.hasSubnav=n}triggerNavChange(e,t){this.dispatchEvent(new CustomEvent("pzsh-menu-nav-change",{detail:{hasNav:e,hasSubnav:t}}))}render(){const e={open:this.open};return r`
      <nav
        class=${y(e)}
        @slotchange=${this.handleSlotChange}
        role="menu"
      >
        <slot name="nav"></slot>
        <slot name="actions"></slot>
        <slot name="items"></slot>
      </nav>
    `}};p.styles=[l,u`
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

      @media (min-width: ${l.breakpoint}px) {
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
    `];f([m()],p.prototype,"open",2);f([b({type:String})],p.prototype,"scrollContainerSelector",2);p=f([v("pzsh-menu")],p);var S=Object.defineProperty,A=Object.getOwnPropertyDescriptor,c=(e,t,n,s)=>{for(var o=s>1?void 0:s?A(t,n):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(o=(s?i(t,n,o):i(o))||o);return s&&o&&S(t,n,o),o};let h=class extends g{constructor(){super(),this.menuAvailable=!1,this.menuOpen=!1,this.href="",this.handleMenuChange=this.handleMenuChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pzsh-menu-change",this.handleMenuChange,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pzsh-menu-change",this.handleMenuChange,!0)}handleMenuChange(e){if(e.stopPropagation(),e instanceof CustomEvent){const{available:t,open:n}=e.detail;this.menuAvailable=t,this.menuOpen=n}}toggleMenu(){this.dispatchEvent(new CustomEvent("pzsh-menu-toggle"))}renderMenuButton(){if(this.menuAvailable){const e=this.menuOpen?"multiply":"bars";return r`<button
        type="button"
        class="menu-button"
        @click=${this.toggleMenu}
        aria-expanded=${this.menuOpen}
        aria-label="Menu"
      >
        <pzsh-icon name=${e}></pzsh-icon>
      </button>`}return null}renderLogo(){return this.href?r`<a class="logo-link" href=${this.href}>
          <slot></slot>
        </a>`:r`<slot></slot>`}render(){return r`${this.renderLogo()} ${this.renderMenuButton()} `}};h.styles=[l,u`
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

      @media (max-width: ${l.breakpoint-1}px) {
        :host {
          margin-bottom: 0 !important;
        }
      }

      @media (min-width: ${l.breakpoint}px) {
        :host {
          padding-left: var(--pzsh-page-padding-horizontal-desktop);
          padding-right: var(--pzsh-page-padding-horizontal-desktop);
        }

        .menu-button {
          display: none;
        }
      }
    `];c([m()],h.prototype,"menuAvailable",2);c([m()],h.prototype,"menuOpen",2);c([b({type:String})],h.prototype,"href",2);h=c([v("pzsh-topbar")],h);export{z as i,C as n,m as r};
