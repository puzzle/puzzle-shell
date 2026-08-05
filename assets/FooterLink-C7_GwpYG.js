import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,n,o as r,r as i}from"./iframe-BuHCliCg.js";import{i as a,r as o,t as s}from"./decorate-CzIddzQs.js";import{r as c,t as l}from"./property-DXvs67VD.js";import{n as u,t as d}from"./theme-D4daTNGL.js";var f;function p(){return(p=e((()=>{n(),o(),d(),f=class extends i{static{this.styles=[u,t`
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

      @media (max-width: ${u.breakpoint}px) {
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
    `]}render(){return r`
      <div class="named-slots">
        <slot name="start"></slot>
        <slot name="center"></slot>
        <slot name="end"></slot>
      </div>
      <slot></slot>
    `}},f=s([a(`pzsh-footer`)],f)})))()}var m;function h(){return(h=e((()=>{n(),o(),l(),d(),m=class extends i{constructor(...e){super(...e),this.href=`#`}static{this.styles=[u,t`
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

      @media (max-width: ${u.breakpoint}px) {
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
    `]}render(){return r`<a href="${this.href}">
      <slot></slot>
    </a>`}},s([c({type:String})],m.prototype,`href`,void 0),m=s([a(`pzsh-footer-link`)],m)})))()}export{p as n,h as t};