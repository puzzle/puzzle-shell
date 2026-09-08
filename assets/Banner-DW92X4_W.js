import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,n,o as r,r as i}from"./iframe-Bo65fjee.js";import{i as a,r as o,t as s}from"./decorate-CzIddzQs.js";import{c,u as l}from"./Topbar-CtGpAYIw.js";import{n as u,t as d}from"./class-map-BH1Jyn2G.js";import{n as f,t as p}from"./theme-B9DBRWyB.js";var m;function h(){return(h=e((()=>{n(),c(),o(),d(),p(),m=class extends i{static{this.styles=[f,t`
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

      @media (min-width: ${f.breakpoint}px) {
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
    `]}constructor(){super(),this.hasNav=!1,this.hasSubnav=!1,this.handleMenuNavChange=this.handleMenuNavChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`pzsh-menu-nav-change`,this.handleMenuNavChange,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pzsh-menu-nav-change`,this.handleMenuNavChange,!0)}handleMenuNavChange(e){if(e.stopPropagation(),e instanceof CustomEvent){let{hasNav:t,hasSubnav:n}=e.detail;this.hasNav=t,this.hasSubnav=n}}render(){return r`
      <slot name="tangram"></slot>
      <div
        class=${u({content:!0,"has-nav":this.hasNav,"has-subnav":this.hasSubnav})}
      >
        <slot name="content"></slot>
      </div>
    `}},s([l()],m.prototype,`hasNav`,void 0),s([l()],m.prototype,`hasSubnav`,void 0),m=s([a(`pzsh-banner`)],m)})))()}export{h as t};