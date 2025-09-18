import{i as c,a as d,x as h}from"./iframe-CTRJx84E.js";import{t as m}from"./custom-element-BhZVzxrc.js";import{t as i}from"./theme-BlrG3hMM.js";import{n as f}from"./property-vYj9RlVk.js";import{e as g}from"./class-map-CcZmWaqx.js";var z=Object.getOwnPropertyDescriptor,b=(r,t,n,o)=>{for(var a=o>1?void 0:o?z(t,n):t,e=r.length-1,s;e>=0;e--)(s=r[e])&&(a=s(a)||a);return a};let v=class extends d{render(){return h`
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
    `];v=b([m("pzsh-nav")],v);var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=(r,t,n,o)=>{for(var a=o>1?void 0:o?w(t,n):t,e=r.length-1,s;e>=0;e--)(s=r[e])&&(a=(o?s(t,n,a):s(a))||a);return o&&a&&x(t,n,a),a};let p=class extends d{constructor(){super(...arguments),this.href="#",this.active=!1}focus(r){this.shadowRoot?.querySelector("a")?.focus(r)}render(){return h`<a
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
          background-color: transparent;
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
    `];u([f({type:String})],p.prototype,"href",2);u([f({type:Boolean})],p.prototype,"active",2);p=u([m("pzsh-nav-item")],p);var _=Object.getOwnPropertyDescriptor,y=(r,t,n,o)=>{for(var a=o>1?void 0:o?_(t,n):t,e=r.length-1,s;e>=0;e--)(s=r[e])&&(a=s(a)||a);return a};let l=class extends d{render(){return h` <slot></slot> `}};l.styles=[i,c`
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
    `];l=y([m("pzsh-subnav")],l);
