import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,n,o as r,r as i}from"./iframe-B4opvsuG.js";import{i as a,r as o,t as s}from"./decorate-CzIddzQs.js";import{r as c,t as l}from"./property-CGmB1XeK.js";import{a as u,c as d,i as f,s as p,u as m}from"./Topbar-CHxgEcy3.js";import{n as h,t as g}from"./class-map-C60zvj5N.js";import{n as _,t as v}from"./theme-1gEr9Ej7.js";import{n as y}from"./Icon-DyuHpDSt.js";var b;function x(){return(x=e((()=>{n(),o(),l(),v(),b=class extends i{constructor(...e){super(...e),this.href=`#`}static{this.styles=[_,t`
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

      @media (min-width: ${_.breakpoint}px) {
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
    </a>`}applyHostAttributes(){let e=this.shadowRoot?.querySelector(`a`);e&&Array.from(this.attributes).filter(({name:e})=>e!==`href`).forEach(({name:t,value:n})=>{e.setAttribute(t,n)})}},s([c({type:String})],b.prototype,`href`,void 0),b=s([a(`pzsh-menu-action`)],b)})))()}var S;function C(){return(C=e((()=>{n(),d(),o(),g(),f(),v(),y(),S=class extends i{static{this.styles=[_,t`
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

      @media (min-width: ${_.breakpoint}px) {
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
    `]}constructor(){super(),this.open=!1,this.handleEvent=this.handleEvent.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this.handleEvent),document.addEventListener(`keydown`,this.handleEvent)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this.handleEvent),document.removeEventListener(`keydown`,this.handleEvent)}handleEvent(e){this.handleMenuClose(e),this.handleMenuNavigation(e)}handleMenuClose(e){this.open&&(e.type===`click`&&!p(e.target,`pzsh-menu-dropdown [slot="toggle"]`)||e instanceof KeyboardEvent&&e.type===`keydown`&&(e.key===`Escape`||e.key===`Tab`))&&this.toggleMenu()}handleMenuNavigation(e){this.open&&u(()=>Array.from(this.querySelector(`[slot='items']`)?.children||[]),e)}toggleMenu(e){e&&e.stopPropagation(),this.open=!this.open}render(){let e=this.open?`angle-up`:`angle-down`;return r`
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
        class=${h({"dropdown-menu":!0,open:this.open})}
        role="menu"
      >
        <slot name="items"></slot>
      </div>
    `}},s([m()],S.prototype,`open`,void 0),S=s([a(`pzsh-menu-dropdown`)],S)})))()}export{x as n,C as t};