import{i as h,s as c,x as d}from"./lit-element-CMpGwy9_.js";import{t as f}from"./custom-element-BhZVzxrc.js";import{t as i}from"./theme-DxvyZ52D.js";import{n as u}from"./property-D-w_Ad9s.js";import{e as b}from"./class-map-BpKUc_RR.js";var z=Object.defineProperty,g=Object.getOwnPropertyDescriptor,x=(n,r,a,t)=>{for(var e=t>1?void 0:t?g(r,a):r,o=n.length-1,s;o>=0;o--)(s=n[o])&&(e=(t?s(r,a,e):s(e))||e);return t&&e&&z(r,a,e),e};let v=class extends c{render(){return d`
      <nav>
        <slot></slot>
      </nav>
    `}};v.styles=[i,h`
      nav {
        display: flex;
        flex-direction: column;
        background-color: var(--pzsh-menu-bg);
      }

      @media (min-width: ${i.breakpoint}px) {
        nav {
          flex-direction: row;
          flex-wrap: wrap;
          background-color: transparent;
        }
      }
    `];v=x([f("pzsh-nav")],v);var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,m=(n,r,a,t)=>{for(var e=t>1?void 0:t?w(r,a):r,o=n.length-1,s;o>=0;o--)(s=n[o])&&(e=(t?s(r,a,e):s(e))||e);return t&&e&&_(r,a,e),e};let p=class extends c{constructor(){super(...arguments),this.href="#",this.active=!1}focus(n){var r,a;(a=(r=this.shadowRoot)==null?void 0:r.querySelector("a"))==null||a.focus(n)}render(){return d`<a
      class=${b({active:this.active})}
      href="${this.href}"
      role="menuitem"
      part="pzsh-nav-item"
    >
      <div><slot></slot></div>
    </a>`}};p.styles=[i,h`
      a {
        display: block;
        margin-top: var(--pzsh-menu-item-gap);
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal);
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

      @media (min-width: ${i.breakpoint}px) {
        :host {
          line-height: var(--pzsh-nav-line-height);
        }
        a {
          margin: 0;
          padding: 0 var(--pzsh-nav-item-padding-horizontal-desktop);
          color: var(--pzsh-nav-fg);
          background-color: transparent;
        }
        a,
        :host(:focus) a,
        a:hover,
        a:active,
        a:focus {
          color: var(--pzsh-nav-fg);
        }
        a > div {
          padding: var(--pzsh-nav-item-padding-horizontal-desktop) 0
            calc(var(--pzsh-nav-item-padding-horizontal-desktop) - 5px) 0;
          border-bottom: 5px solid transparent;
        }
        :host(:focus) a > div,
        a:hover > div,
        a:active > div,
        a:focus > div,
        a.active > div {
          border-color: var(--pzsh-nav-active);
        }
      }
    `];m([u({type:String})],p.prototype,"href",2);m([u({type:Boolean})],p.prototype,"active",2);p=m([f("pzsh-nav-item")],p);var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=(n,r,a,t)=>{for(var e=t>1?void 0:t?P(r,a):r,o=n.length-1,s;o>=0;o--)(s=n[o])&&(e=(t?s(r,a,e):s(e))||e);return t&&e&&O(r,a,e),e};let l=class extends c{render(){return d` <slot></slot> `}};l.styles=[i,h`
      :host {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: ${i.breakpoint}px) {
        :host {
          width: 100%;
          order: 1;
          flex-direction: row;
          background-color: var(--pzsh-subnav-bg);
          border-bottom: 1px solid var(--pzsh-subnav-border);
        }
        ::slotted(pzsh-nav-item) {
          --pzsh-nav-fg: var(--pzsh-subnav-fg);
          --pzsh-nav-active: var(--pzsh-subnav-active);
        }
      }
    `];l=y([f("pzsh-subnav")],l);
