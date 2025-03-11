import{i as p,h as d,k as f}from"./lit-element-BxU7hSqt.js";import{t as h}from"./custom-element-BhZVzxrc.js";import{t as n}from"./theme-DlZ-5foP.js";import{n as v}from"./property-2kTgkLZg.js";var g=Object.getOwnPropertyDescriptor,x=(a,e,l,r)=>{for(var t=r>1?void 0:r?g(e,l):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=o(t)||t);return t};let c=class extends d{render(){return f`
      <div class="named-slots">
        <slot name="start"></slot>
        <slot name="center"></slot>
        <slot name="end"></slot>
      </div>
      <slot></slot>
    `}};c.styles=[n,p`
      :host {
        padding: calc(var(--pzsh-spacer)) calc(6 * var(--pzsh-spacer));
        background-color: var(--pzsh-footer-bg);

        display: flex;
        flex-direction: column;
        align-items: start;

        border-top: 2px solid var(--pzsh-footer-border);
      }

      .named-slots {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
      }

      ::slotted(*) {
        color: var(--pzsh-color-gray-4);
        font-family: Roboto, sans-serif;
        gap: calc(2 * var(--pzsh-spacer));

        padding-top: var(--pzsh-spacer);
        padding-bottom: var(--pzsh-spacer);

        display: flex;
        flex-direction: column;
        flex: 1;
      }

      ::slotted([slot="start"]) {
        align-items: start;
        justify-content: flex-start;
      }

      ::slotted([slot="center"]) {
        align-items: center;
        justify-content: center;
      }

      ::slotted([slot="end"]) {
        align-items: end;
        justify-content: flex-end;
      }

      @media (max-width: ${n.breakpoint}px) {
        :host {
          padding: calc(var(--pzsh-spacer)) calc(3 * var(--pzsh-spacer));
        }

        .named-slots {
          flex-direction: column;
          row-gap: calc(3 * var(--pzsh-spacer));
        }

        ::slotted([slot="start"]),
        ::slotted([slot="center"]),
        ::slotted([slot="end"]) {
          align-items: start;
        }
      }
    `];c=x([h("pzsh-footer")],c);var u=Object.defineProperty,z=Object.getOwnPropertyDescriptor,m=(a,e,l,r)=>{for(var t=r>1?void 0:r?z(e,l):e,s=a.length-1,o;s>=0;s--)(o=a[s])&&(t=(r?o(e,l,t):o(t))||t);return r&&t&&u(e,l,t),t};let i=class extends d{constructor(){super(...arguments),this.href="#"}render(){return f`<a href="${this.href}">
      <slot></slot>
    </a>`}};i.styles=[n,p`
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
    `];m([v({type:String})],i.prototype,"href",2);i=m([h("pzsh-footer-link")],i);
