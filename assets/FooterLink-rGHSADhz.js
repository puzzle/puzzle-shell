import{i,s as d,x as f}from"./lit-element-CMpGwy9_.js";import{t as h}from"./custom-element-BhZVzxrc.js";import{t as n}from"./theme-DxvyZ52D.js";import{n as m}from"./property-D-w_Ad9s.js";var g=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=(l,t,o,r)=>{for(var e=r>1?void 0:r?z(t,o):t,s=l.length-1,a;s>=0;s--)(a=l[s])&&(e=(r?a(t,o,e):a(e))||e);return r&&e&&g(t,o,e),e};let c=class extends d{render(){return f`
      <slot name="start"></slot>
      <slot name="center"></slot>
      <slot name="end"></slot>
      <slot></slot>
    `}};c.styles=[n,i`
      :host(pzsh-footer) {
        padding: calc(var(--pzsh-spacer)) calc(6 * var(--pzsh-spacer));
        background-color: var(--pzsh-footer-bg);

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-top: 2px solid var(--pzsh-footer-border);
      }

      ::slotted(*) {
        color: var(--pzsh-color-gray-4);
        font-family: Roboto, sans-serif;
        gap: calc(2 * var(--pzsh-spacer));

        padding-top: var(--pzsh-spacer);
        padding-bottom: var(--pzsh-spacer);

        display: flex;
        flex: 1;
      }

      ::slotted([slot="start"]) {
        align-items: center;
        justify-content: flex-start;
      }

      ::slotted([slot="center"]) {
        align-items: center;
        justify-content: center;
      }

      ::slotted([slot="end"]) {
        align-items: center;
        justify-content: flex-end;
      }

      @media (max-width: ${n.breakpoint}px) {
        :host(pzsh-footer) {
          padding: calc(var(--pzsh-spacer)) calc(3 * var(--pzsh-spacer));

          display: flex;
          flex-direction: column;

          row-gap: var(--pzsh-spacer);
        }

        ::slotted([slot="start"]) {
          order: 2;
        }

        ::slotted([slot="center"]) {
          order: 1;
        }

        ::slotted([slot="end"]) {
          order: 3;
        }
      }
    `];c=x([h("pzsh-footer")],c);var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(l,t,o,r)=>{for(var e=r>1?void 0:r?u(t,o):t,s=l.length-1,a;s>=0;s--)(a=l[s])&&(e=(r?a(t,o,e):a(e))||e);return r&&e&&b(t,o,e),e};let p=class extends d{constructor(){super(...arguments),this.href="#"}render(){return f`<a href="${this.href}">
      <slot></slot>
    </a>`}};p.styles=[n,i`
      a {
        display: flex;
        align-items: center;
        font-family: var(--pzsh-font-family);
        color: var(--pzsh-color-brand-1);
        text-decoration: none;
      }
      a:hover,
      a:active {
        text-decoration: underline;
      }
      ::slotted(pzsh-icon),
      ::slotted(svg) {
        margin-right: calc(var(--pzsh-spacer) / 2);
      }

      @media (max-width: ${n.breakpoint}px) {
        a {
          margin-left: 0;
          color: var(--pzsh-color-brand-1);
        }
        a:hover,
        a:active {
          background-color: var(--pzsh-topbar-menu-bg-alt);
          text-decoration: none;
        }
      }
    `];v([m({type:String})],p.prototype,"href",2);p=v([h("pzsh-footer-link")],p);
