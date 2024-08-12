import{i as p,h as v,k as u}from"./lit-element-Cg_OjzXH.js";import{t as d}from"./custom-element-BhZVzxrc.js";import{r as c}from"./Topbar-BBuJJx3a.js";import{R as m}from"./class-map-CoILYkPe.js";import{t as l}from"./theme-Cw2V9NOY.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(t,e,n,o)=>{for(var a=o>1?void 0:o?g(e,n):e,r=t.length-1,h;r>=0;r--)(h=t[r])&&(a=(o?h(e,n,a):h(a))||a);return o&&a&&f(e,n,a),a};let s=class extends v{constructor(){super(),this.hasNav=!1,this.hasSubnav=!1,this.handleMenuNavChange=this.handleMenuNavChange.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pzsh-menu-nav-change",this.handleMenuNavChange,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pzsh-menu-nav-change",this.handleMenuNavChange,!0)}handleMenuNavChange(t){if(t.stopPropagation(),t instanceof CustomEvent){const{hasNav:e,hasSubnav:n}=t.detail;this.hasNav=e,this.hasSubnav=n}}render(){return u`
      <slot name="tangram"></slot>
      <div
        class=${m({content:!0,"has-nav":this.hasNav,"has-subnav":this.hasSubnav})}
      >
        <slot name="content"></slot>
      </div>
    `}};s.styles=[l,p`
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

      @media (min-width: ${l.breakpoint}px) {
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
    `];i([c()],s.prototype,"hasNav",2);i([c()],s.prototype,"hasSubnav",2);s=i([d("pzsh-banner")],s);
