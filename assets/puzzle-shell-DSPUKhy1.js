import{n as e}from"./chunk-BneVvdWh.js";import{B as t,H as n,q as r,z as i}from"./iframe-gsfQKUPZ.js";import{a,n as o,r as s,t as c}from"./decorate--ZexQYXy.js";import{r as l,t as u}from"./property-CoATh6Xe.js";import{n as d,r as f,t as p}from"./Topbar-GI56Xq9P.js";import{n as m,t as h}from"./theme-DZi-TgJq.js";import{t as g}from"./Banner-CGtRE04H.js";import{n as _}from"./Icon-BU4ZVAta.js";import{n as v,r as y,t as b}from"./Subnav-BKvuUXcA.js";import{n as x,t as S}from"./FooterLink-C0O35iWL.js";import{t as C}from"./Hero-Gq1HokBk.js";import{n as w,t as T}from"./MenuDropdown-BUQie5sZ.js";var E,D=e((()=>{i(),s(),h(),o(),E=class extends t{static{this.styles=[m,r`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      ::slotted(*) {
        /* Let the content eat the rest */
        flex: auto;
      }
      ::slotted(pzsh-topbar),
      ::slotted(pzsh-banner),
      ::slotted(pzsh-hero),
      ::slotted(pzsh-menu),
      ::slotted(pzsh-footer) {
        flex: none;
      }
    `]}render(){return n` <slot></slot> `}},E=c([a(`pzsh-container`)],E)})),O,k=e((()=>{i(),s(),h(),o(),O=class extends t{static{this.styles=[m,r`
      @media (max-width: ${m.breakpoint-1}px) {
        :host {
          margin: calc(3 * var(--pzsh-spacer)) 0;
          border-top: 1px solid var(--pzsh-menu-divider);
        }
      }
    `]}},O=c([a(`pzsh-menu-divider`)],O)})),A,j=e((()=>{i(),s(),u(),h(),o(),A=class extends t{constructor(...e){super(...e),this.href=`#`}static{this.styles=[m,r`
      :host {
        display: block;
      }
      a {
        display: flex;
        align-items: center;
        font-family: var(--pzsh-font-family);
        margin-top: var(--pzsh-menu-item-gap);
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal)
          var(--pzsh-menu-item-padding-vertical)
          calc(
            var(--pzsh-icon-size) + var(--pzsh-spacer) /
              2 +var(--pzsh-menu-item-padding-horizontal)
          );
        color: var(--pzsh-menu-fg);
        background-color: var(--pzsh-menu-bg-alt);
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

      @media (min-width: ${m.breakpoint}px) {
        a {
          margin: 0;
          padding: var(--pzsh-menu-item-padding-vertical)
            var(--pzsh-menu-item-padding-horizontal);
          color: var(--pzsh-menu-dropdown-item-fg);
          background-color: transparent;
        }
        :host(:focus) a,
        a:hover,
        a:active,
        a:focus {
          color: var(--pzsh-menu-dropdown-item-fg);
          background-color: var(--pzsh-menu-dropdown-item-bg-alt);
        }
      }
    `]}focus(e){this.shadowRoot?.querySelector(`a`)?.focus(e)}updated(){this.applyHostAttributes()}render(){return n`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}applyHostAttributes(){let e=this.shadowRoot?.querySelector(`a`);e&&Array.from(this.attributes).filter(({name:e})=>e!==`href`).forEach(({name:t,value:n})=>{e.setAttribute(t,n)})}},c([l({type:String})],A.prototype,`href`,void 0),A=c([a(`pzsh-menu-dropdown-item`)],A)})),M=e((()=>{h(),f(),g(),D(),x(),S(),C(),_(),d(),w(),k(),T(),j(),y(),v(),b(),p()}));export{M as t};