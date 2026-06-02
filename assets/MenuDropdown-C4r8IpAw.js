import{i as e}from"./preload-helper-xPQekRTU.js";import{B as t,V as n,W as r,Y as i}from"./iframe-PJzKi-oL.js";import{a,n as o,r as s,t as c}from"./decorate-46yoN6xj.js";import{r as l,t as u}from"./property-Ci3tQPOE.js";import{a as d,c as f,i as p,o as m,s as h,u as g}from"./Topbar-CxsDim0k.js";import{n as _,t as v}from"./class-map-BiIJB5Et.js";import{n as y,t as b}from"./theme-D8JOIRnY.js";import{n as x}from"./Icon-BFTHmF2Q.js";var S,C=e((()=>{t(),s(),u(),b(),o(),S=class extends n{constructor(...e){super(...e),this.href=`#`}static{this.styles=[y,i`
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

      @media (min-width: ${y.breakpoint}px) {
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
    `]}focus(e){this.shadowRoot?.querySelector(`a`)?.focus(e)}updated(){this.applyHostAttributes()}render(){return r`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}applyHostAttributes(){let e=this.shadowRoot?.querySelector(`a`);e&&Array.from(this.attributes).filter(({name:e})=>e!==`href`).forEach(({name:t,value:n})=>{e.setAttribute(t,n)})}},c([l({type:String})],S.prototype,`href`,void 0),S=c([a(`pzsh-menu-action`)],S)})),w,T=e((()=>{t(),f(),s(),v(),m(),p(),b(),x(),o(),w=class extends n{static{this.styles=[y,i`
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

      @media (min-width: ${y.breakpoint}px) {
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
    `]}constructor(){super(),this.open=!1,this.handleEvent=this.handleEvent.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this.handleEvent),document.addEventListener(`keydown`,this.handleEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this.handleEvent),document.removeEventListener(`keydown`,this.handleEvent)}handleEvent(e){this.handleMenuClose(e),this.handleMenuNavigation(e)}handleMenuClose(e){this.open&&(e.type===`click`&&!h(e.target,`pzsh-menu-dropdown [slot="toggle"]`)||e instanceof KeyboardEvent&&e.type===`keydown`&&(e.key===`Escape`||e.key===`Tab`))&&this.toggleMenu()}handleMenuNavigation(e){this.open&&d(()=>Array.from(this.querySelector(`[slot='items']`)?.children||[]),e)}toggleMenu(e){e&&e.stopPropagation(),this.open=!this.open}render(){let e=this.open?`angle-up`:`angle-down`;return r`
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
        class=${_({"dropdown-menu":!0,open:this.open})}
        role="menu"
      >
        <slot name="items"></slot>
      </div>
    `}},c([g()],w.prototype,`open`,void 0),w=c([a(`pzsh-menu-dropdown`)],w)}));export{C as n,T as t};