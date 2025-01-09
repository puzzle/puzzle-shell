import{i as c,h,k as d}from"./lit-element-CxgFg0AR.js";import{t as f}from"./custom-element-BTbnI5vI.js";import{t as i}from"./theme-EnFTGyLY.js";import{n as m}from"./property-t_taj8Q_.js";import{R as g}from"./class-map-BlpslTfp.js";var b=Object.defineProperty,z=Object.getOwnPropertyDescriptor,_=(n,a,r,t)=>{for(var e=t>1?void 0:t?z(a,r):a,o=n.length-1,s;o>=0;o--)(s=n[o])&&(e=(t?s(a,r,e):s(e))||e);return t&&e&&b(a,r,e),e};let v=class extends h{render(){return d`
      <nav>
        <slot></slot>
      </nav>
    `}};v.styles=[i,c`
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
    `];v=_([f("pzsh-nav")],v);var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,u=(n,a,r,t)=>{for(var e=t>1?void 0:t?x(a,r):a,o=n.length-1,s;o>=0;o--)(s=n[o])&&(e=(t?s(a,r,e):s(e))||e);return t&&e&&w(a,r,e),e};let p=class extends h{constructor(){super(...arguments),this.href="#",this.active=!1}focus(n){var a,r;(r=(a=this.shadowRoot)==null?void 0:a.querySelector("a"))==null||r.focus(n)}render(){return d`<a
      class=${g({active:this.active})}
      href="${this.href}"
      role="menuitem"
      part="pzsh-nav-item"
    >
      <div><slot></slot></div>
    </a>`}};p.styles=[i,c`
      a {
        display: block;
        padding: var(--pzsh-menu-item-padding-vertical)
          var(--pzsh-menu-item-padding-horizontal);
        color: var(--pzsh-menu-fg);
        text-decoration: none;
        white-space: nowrap;
      }

      :host {
        margin: calc(0.5 * var(--pzsh-menu-item-gap)) 0;
        background-color: var(--pzsh-menu-bg-alt);
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
          margin: 0;
          background-color: var(--pzsh-menu-bg);
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
    `];u([m({type:String})],p.prototype,"href",2);u([m({type:Boolean})],p.prototype,"active",2);p=u([f("pzsh-nav-item")],p);var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=(n,a,r,t)=>{for(var e=t>1?void 0:t?P(a,r):a,o=n.length-1,s;o>=0;o--)(s=n[o])&&(e=(t?s(a,r,e):s(e))||e);return t&&e&&O(a,r,e),e};let l=class extends h{render(){return d` <slot></slot> `}};l.styles=[i,c`
      :host {
        display: flex;
        flex-direction: column;
      }

      ::slotted(pzsh-nav-item) {
        padding-left: calc(4 * var(--pzsh-spacer));
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
          padding-left: 0;
        }
      }
    `];l=y([f("pzsh-subnav")],l);
