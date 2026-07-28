import{i as e}from"./preload-helper-CT_b8DTk.js";import{ht as t,ot as n,st as r,ut as i}from"./iframe-CUQ_OtY6.js";import{a,n as o,r as s,t as c}from"./decorate-I8bfxDnw.js";import{c as l,u}from"./Topbar-WgT7VS7w.js";import{n as d,t as f}from"./class-map-D2diW1ou.js";import{n as p,t as m}from"./theme-C65ifsUC.js";var h,g=e((()=>{n(),l(),s(),f(),m(),o(),h=class extends r{static{this.styles=[p,t`
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
    `]}constructor(){super(),this.hasNav=!1,this.hasSubnav=!1,this.handleMenuNavChange=this.handleMenuNavChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`pzsh-menu-nav-change`,this.handleMenuNavChange,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pzsh-menu-nav-change`,this.handleMenuNavChange,!0)}handleMenuNavChange(e){if(e.stopPropagation(),e instanceof CustomEvent){let{hasNav:t,hasSubnav:n}=e.detail;this.hasNav=t,this.hasSubnav=n}}render(){return i`
      <slot name="tangram"></slot>
      <div
        class=${d({content:!0,"has-nav":this.hasNav,"has-subnav":this.hasSubnav})}
      >
        <slot name="content"></slot>
      </div>
    `}},c([u()],h.prototype,`hasNav`,void 0),c([u()],h.prototype,`hasSubnav`,void 0),h=c([a(`pzsh-banner`)],h)}));export{g as t};