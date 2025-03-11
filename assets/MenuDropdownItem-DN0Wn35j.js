import{i as d,h as m,k as v}from"./lit-element-BxU7hSqt.js";import{t as c}from"./custom-element-BhZVzxrc.js";import{t as p}from"./theme-DlZ-5foP.js";import{n as f}from"./property-2kTgkLZg.js";var z=Object.getOwnPropertyDescriptor,g=(o,r,a,s)=>{for(var e=s>1?void 0:s?z(r,a):r,t=o.length-1,n;t>=0;t--)(n=o[t])&&(e=n(e)||e);return e};let l=class extends m{render(){return v` <slot></slot> `}};l.styles=[p,d`
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
    `];l=g([c("pzsh-container")],l);var w=Object.getOwnPropertyDescriptor,b=(o,r,a,s)=>{for(var e=s>1?void 0:s?w(r,a):r,t=o.length-1,n;t>=0;t--)(n=o[t])&&(e=n(e)||e);return e};let h=class extends m{};h.styles=[p,d`
      @media (max-width: ${p.breakpoint-1}px) {
        :host {
          margin: calc(3 * var(--pzsh-spacer)) 0;
          border-top: 1px solid var(--pzsh-menu-divider);
        }
      }
    `];h=b([c("pzsh-menu-divider")],h);var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,u=(o,r,a,s)=>{for(var e=s>1?void 0:s?x(r,a):r,t=o.length-1,n;t>=0;t--)(n=o[t])&&(e=(s?n(r,a,e):n(e))||e);return s&&e&&_(r,a,e),e};let i=class extends m{constructor(){super(...arguments),this.href="#"}focus(o){var r,a;(a=(r=this.shadowRoot)==null?void 0:r.querySelector("a"))==null||a.focus(o)}render(){return v`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}};i.styles=[p,d`
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
    `];u([f({type:String})],i.prototype,"href",2);i=u([c("pzsh-menu-dropdown-item")],i);
