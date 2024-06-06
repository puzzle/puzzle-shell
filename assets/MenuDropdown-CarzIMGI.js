import{i as d,s as c,x as h}from"./lit-element-CMpGwy9_.js";import{t as g}from"./custom-element-BhZVzxrc.js";import{n as v}from"./property-D-w_Ad9s.js";import{t as i}from"./theme-DxvyZ52D.js";import{r as f,i as b,n as z}from"./Topbar-CPdVl1aW.js";import{e as y}from"./class-map-BpKUc_RR.js";import"./Icon-Cs1jiTkO.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,m=(e,o,n,r)=>{for(var t=r>1?void 0:r?x(o,n):o,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=(r?s(o,n,t):s(t))||t);return r&&t&&w(o,n,t),t};let p=class extends c{constructor(){super(...arguments),this.href="#"}focus(e){var o,n;(n=(o=this.shadowRoot)==null?void 0:o.querySelector("a"))==null||n.focus(e)}render(){return h`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}};p.styles=[i,d`
      a {
        display: flex;
        align-items: center;
        font-family: var(--pzsh-font-family);
        margin-top: var(--pzsh-menu-item-gap);
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal);
        background-color: var(--pzsh-menu-bg-alt);
        color: var(--pzsh-menu-fg);
        text-decoration: none;
        white-space: nowrap;
      }
      :host(:focus) a,
      a:hover,
      a:active,
      a:focus {
        color: var(--pzsh-menu-active);
      }
      ::slotted(pzsh-icon),
      ::slotted(svg) {
        margin-right: calc(var(--pzsh-spacer) / 2);
      }

      @media (min-width: ${i.breakpoint}px) {
        a {
          margin: 0;
          padding: 0;
          color: var(--pzsh-topbar-fg);
          background: transparent;
        }
        :host(:focus) a,
        a:hover,
        a:active,
        a:focus {
          color: var(--pzsh-topbar-fg);
          text-decoration: underline;
        }
      }
    `];m([v({type:String})],p.prototype,"href",2);p=m([g("pzsh-menu-action")],p);var E=Object.defineProperty,k=Object.getOwnPropertyDescriptor,u=(e,o,n,r)=>{for(var t=r>1?void 0:r?k(o,n):o,a=e.length-1,s;a>=0;a--)(s=e[a])&&(t=(r?s(o,n,t):s(t))||t);return r&&t&&E(o,n,t),t};let l=class extends c{constructor(){super(),this.open=!1,this.handleEvent=this.handleEvent.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleEvent),document.addEventListener("keydown",this.handleEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleEvent),document.removeEventListener("keydown",this.handleEvent)}handleEvent(e){this.handleMenuClose(e),this.handleMenuNavigation(e)}handleMenuClose(e){this.open&&(e.type==="click"&&!b(e.target,'pzsh-menu-dropdown [slot="toggle"]')||e instanceof KeyboardEvent&&e.type==="keydown"&&(e.key==="Escape"||e.key==="Tab"))&&this.toggleMenu()}handleMenuNavigation(e){this.open&&z(()=>{var o;return Array.from(((o=this.querySelector("[slot='items']"))==null?void 0:o.children)||[])},e)}toggleMenu(e){e&&e.stopPropagation(),this.open=!this.open}render(){const e=this.open?"angle-up":"angle-down";return h`
      <button
        type="button"
        class="toggle"
        @click=${this.toggleMenu}
        aria-expanded=${this.open}
      >
        <slot name="toggle"></slot>
        <pzsh-icon class="toggle-angle" name=${e}></pzsh-icon>
      </button>
      <div
        class=${y({"dropdown-menu":!0,open:this.open})}
        role="menu"
      >
        <slot name="items"></slot>
      </div>
    `}};l.styles=[i,d`
      :host {
        position: relative;
        margin-top: var(--pzsh-spacer);
      }

      .toggle {
        display: flex; /* TODO: How does this work in today's browsers? */
        align-items: center;
        width: 100%;
        border: 0;
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal);
        color: var(--pzsh-color-gray-4);
        background-color: transparent;
      }

      .toggle-angle {
        display: none;
      }

      ::slotted([slot="toggle"]) {
        display: flex;
        align-items: center;
        gap: calc(var(--pzsh-spacer) / 2);
        font-family: var(--pzsh-font-family);
        font-size: 1rem;
      }

      .dropdown-menu {
        margin-top: calc(-1 * var(--pzsh-menu-item-gap));
      }

      @media (min-width: ${i.breakpoint}px) {
        :host {
          margin: 0;
        }

        .toggle {
          width: auto;
          padding: 0;
          color: var(--pzsh-topbar-fg);
        }

        .toggle-angle {
          display: block;
        }

        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          z-index: var(--pzsh-menu-dropdown-z-index);
          margin-top: calc(var(--pzsh-spacer) / 2);
          border: 1px solid var(--pzsh-color-gray-3);
          border-radius: 4px;
          padding: var(--pzsh-spacer) 0;
          background-color: var(--pzsh-menu-dropdown-item-bg);
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        }
        .dropdown-menu.open {
          display: block;
        }
      }
    `];u([f()],l.prototype,"open",2);l=u([g("pzsh-menu-dropdown")],l);
