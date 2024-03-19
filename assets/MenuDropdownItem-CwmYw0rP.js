import{i as m,s as c,x as v}from"./lit-element-CMpGwy9_.js";import{t as d}from"./custom-element-BhZVzxrc.js";import{t as p}from"./theme-BJxUQc3L.js";import{n as f}from"./property-D-w_Ad9s.js";var z=Object.defineProperty,g=Object.getOwnPropertyDescriptor,_=(n,r,t,o)=>{for(var e=o>1?void 0:o?g(r,t):r,s=n.length-1,a;s>=0;s--)(a=n[s])&&(e=(o?a(r,t,e):a(e))||e);return o&&e&&z(r,t,e),e};let l=class extends c{render(){return v` <slot></slot> `}};l.styles=[p,m`
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
    `];l=_([d("pzsh-container")],l);var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,x=(n,r,t,o)=>{for(var e=o>1?void 0:o?w(r,t):r,s=n.length-1,a;s>=0;s--)(a=n[s])&&(e=(o?a(r,t,e):a(e))||e);return o&&e&&b(r,t,e),e};let h=class extends c{};h.styles=[p,m`
      @media (max-width: ${p.breakpoint-1}px) {
        :host {
          margin: calc(3 * var(--pzsh-spacer)) 0;
          border-top: 1px solid var(--pzsh-menu-divider);
        }
      }
    `];h=x([d("pzsh-menu-divider")],h);var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,u=(n,r,t,o)=>{for(var e=o>1?void 0:o?P(r,t):r,s=n.length-1,a;s>=0;s--)(a=n[s])&&(e=(o?a(r,t,e):a(e))||e);return o&&e&&O(r,t,e),e};let i=class extends c{constructor(){super(...arguments),this.href="#"}focus(n){var r,t;(t=(r=this.shadowRoot)==null?void 0:r.querySelector("a"))==null||t.focus(n)}render(){return v`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}};i.styles=[p,m`
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
            var(--pzsh-icon-size) + var(--pzsh-spacer) / 2 +var(--pzsh-menu-item-padding-horizontal)
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
    `];u([f({type:String})],i.prototype,"href",2);i=u([d("pzsh-menu-dropdown-item")],i);
