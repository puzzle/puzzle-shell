import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,n,o as r,r as i}from"./iframe-BuHCliCg.js";import{i as a,r as o,t as s}from"./decorate-CzIddzQs.js";import{r as c,t as l}from"./property-DXvs67VD.js";import{n as u,r as d,t as f}from"./Topbar-DRGi-1za.js";import{n as p,t as m}from"./theme-D4daTNGL.js";import{t as h}from"./Banner-B0RlZoLO.js";import{n as g}from"./Icon-Bn28fKKo.js";import{n as _,r as v,t as y}from"./Subnav-nquRHqs9.js";import{n as b,t as x}from"./FooterLink-C7_GwpYG.js";import{t as S}from"./Hero-CYcSmwHp.js";import{n as C,t as w}from"./MenuDropdown-BTZyTx7C.js";var T;function E(){return(E=e((()=>{n(),o(),m(),T=class extends i{static{this.styles=[p,t`
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
    `]}render(){return r` <slot></slot> `}},T=s([a(`pzsh-container`)],T)})))()}var D;function O(){return(O=e((()=>{n(),o(),m(),D=class extends i{static{this.styles=[p,t`
      @media (max-width: ${p.breakpoint-1}px) {
        :host {
          margin: calc(3 * var(--pzsh-spacer)) 0;
          border-top: 1px solid var(--pzsh-menu-divider);
        }
      }
    `]}},D=s([a(`pzsh-menu-divider`)],D)})))()}var k;function A(){return(A=e((()=>{n(),o(),l(),m(),k=class extends i{constructor(...e){super(...e),this.href=`#`}static{this.styles=[p,t`
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

      @media (min-width: ${p.breakpoint}px) {
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
    `]}focus(e){this.shadowRoot?.querySelector(`a`)?.focus(e)}updated(){this.applyHostAttributes()}render(){return r`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}applyHostAttributes(){let e=this.shadowRoot?.querySelector(`a`);e&&Array.from(this.attributes).filter(({name:e})=>e!==`href`).forEach(({name:t,value:n})=>{e.setAttribute(t,n)})}},s([c({type:String})],k.prototype,`href`,void 0),k=s([a(`pzsh-menu-dropdown-item`)],k)})))()}function j(){return(j=e((()=>{m(),d(),h(),E(),b(),x(),S(),g(),u(),C(),O(),w(),A(),v(),_(),y(),f()})))()}export{j as t};