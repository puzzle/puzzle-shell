import{i as c,a as d,x as u}from"./iframe-CTRJx84E.js";import{t as m}from"./custom-element-BhZVzxrc.js";import{t as i}from"./theme-BlrG3hMM.js";import{n as f}from"./property-vYj9RlVk.js";var z=Object.getOwnPropertyDescriptor,g=(t,o,s,r)=>{for(var e=r>1?void 0:r?z(o,s):o,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=n(e)||e);return e};let l=class extends d{render(){return u` <slot></slot> `}};l.styles=[i,c`
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
    `];l=g([m("pzsh-container")],l);var b=Object.getOwnPropertyDescriptor,w=(t,o,s,r)=>{for(var e=r>1?void 0:r?b(o,s):o,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=n(e)||e);return e};let h=class extends d{};h.styles=[i,c`
      @media (max-width: ${i.breakpoint-1}px) {
        :host {
          margin: calc(3 * var(--pzsh-spacer)) 0;
          border-top: 1px solid var(--pzsh-menu-divider);
        }
      }
    `];h=w([m("pzsh-menu-divider")],h);var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(t,o,s,r)=>{for(var e=r>1?void 0:r?x(o,s):o,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(o,s,e):n(e))||e);return r&&e&&y(o,s,e),e};let p=class extends d{constructor(){super(...arguments),this.href="#"}focus(t){this.shadowRoot?.querySelector("a")?.focus(t)}updated(){this.applyHostAttributes()}render(){return u`<a href="${this.href}" role="menuitem">
      <slot></slot>
    </a>`}applyHostAttributes(){const t=this.shadowRoot?.querySelector("a");if(!t)return;Array.from(this.attributes).filter(({name:s})=>s!=="href").forEach(({name:s,value:r})=>{t.setAttribute(s,r)})}};p.styles=[i,c`
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

      @media (min-width: ${i.breakpoint}px) {
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
    `];v([f({type:String})],p.prototype,"href",2);p=v([m("pzsh-menu-dropdown-item")],p);
