import{n as e}from"./chunk-BneVvdWh.js";import{a as t,d as n,n as r,t as i}from"./lit-C-dJVBnQ.js";import{a,n as o,r as s,t as c}from"./decorate-Bix7mBqY.js";import{c as l,l as u}from"./Topbar-B6HFcuYx.js";import{n as d,t as f}from"./class-map-BV_bH1C8.js";import{n as p,t as m}from"./theme-BGwPwEgA.js";var h,g=e((()=>{i(),l(),s(),f(),m(),o(),h=class extends r{static{this.styles=[p,n`
      :host {
        display: flex;
        flex-direction: column;
        background-color: var(--pzsh-banner-bg);
      }
      ::slotted([slot="tangram"]) {
        display: none;
      }
      .content {
        flex: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative; /* Move in front of tangram */
      }
      ::slotted([slot="content"]) {
        flex: auto;
        margin: var(--pzsh-spacer) calc(2 * var(--pzsh-spacer));
      }

      @media (min-width: ${p.breakpoint}px) {
        :host {
          position: relative;
        }
        ::slotted([slot="tangram"]) {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
        }
        ::slotted([slot="content"]) {
          margin: calc(6 * var(--pzsh-spacer)) var(--pzsh-spacer);
        }
        .content.has-nav {
          margin-top: var(--pzsh-nav-height);
        }
        .content.has-subnav {
          margin-top: calc(2 * var(--pzsh-nav-height));
        }
      }
    `]}constructor(){super(),this.hasNav=!1,this.hasSubnav=!1,this.handleMenuNavChange=this.handleMenuNavChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`pzsh-menu-nav-change`,this.handleMenuNavChange,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pzsh-menu-nav-change`,this.handleMenuNavChange,!0)}handleMenuNavChange(e){if(e.stopPropagation(),e instanceof CustomEvent){let{hasNav:t,hasSubnav:n}=e.detail;this.hasNav=t,this.hasSubnav=n}}render(){return t`
      <slot name="tangram"></slot>
      <div
        class=${d({content:!0,"has-nav":this.hasNav,"has-subnav":this.hasSubnav})}
      >
        <slot name="content"></slot>
      </div>
    `}},c([u()],h.prototype,`hasNav`,void 0),c([u()],h.prototype,`hasSubnav`,void 0),h=c([a(`pzsh-banner`)],h)}));export{g as t};