import{n as e}from"./chunk-BneVvdWh.js";import{a as t,d as n,n as r,t as i}from"./lit-C-dJVBnQ.js";import{a,n as o,r as s,t as c}from"./decorate-Bix7mBqY.js";import{r as l,t as u}from"./property-6hDTlne2.js";import{n as d,t as f}from"./theme-BGwPwEgA.js";var p,m=e((()=>{i(),s(),f(),o(),p=class extends r{static{this.styles=[d,n`
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

      @media (max-width: ${d.breakpoint}px) {
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
    `]}render(){return t`
      <div class="named-slots">
        <slot name="start"></slot>
        <slot name="center"></slot>
        <slot name="end"></slot>
      </div>
      <slot></slot>
    `}},p=c([a(`pzsh-footer`)],p)})),h,g=e((()=>{i(),s(),u(),f(),o(),h=class extends r{constructor(...e){super(...e),this.href=`#`}static{this.styles=[d,n`
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

      @media (max-width: ${d.breakpoint}px) {
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
    `]}render(){return t`<a href="${this.href}">
      <slot></slot>
    </a>`}},c([l({type:String})],h.prototype,`href`,void 0),h=c([a(`pzsh-footer-link`)],h)}));export{m as n,g as t};