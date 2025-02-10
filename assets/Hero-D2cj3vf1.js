import{i as n,h as p,k as g}from"./lit-element-BxU7hSqt.js";import{t as m}from"./custom-element-BhZVzxrc.js";import{t as i}from"./theme-BhC6knrn.js";var c=Object.getOwnPropertyDescriptor,v=(o,r,h,s)=>{for(var t=s>1?void 0:s?c(r,h):r,a=o.length-1,l;a>=0;a--)(l=o[a])&&(t=l(t)||t);return t};let e=class extends p{render(){return g`
      <div class="text">
        <slot name="title"></slot>
        <slot name="slogan"></slot>
      </div>
      <div class="logo">
        <slot name="logo"></slot>
      </div>
    `}};e.styles=[i,n`
      :host {
        height: var(--pzsh-hero-height);
        padding: 0 var(--pzsh-page-padding-horizontal-mobile);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--pzsh-spacer);
        background: var(--pzsh-hero-bg-start);
        background: linear-gradient(
          180deg,
          var(--pzsh-hero-bg-start) 0%,
          var(--pzsh-hero-bg-end) 100%
        );
      }

      .text {
        max-width: 350px;

        /* Move a bit above mathematical center */
        margin-bottom: calc(2 * var(--pzsh-spacer));
      }
      .logo {
        max-height: var(--pzsh-hero-height);
      }

      ::slotted([slot="title"]),
      ::slotted([slot="slogan"]) {
        font-family: var(--pzsh-font-family);
        font-weight: normal;
        line-height: 1;
      }

      ::slotted([slot="title"]) {
        margin: 0;
        font-size: 32px;
        color: var(--pzsh-color-brand-alt-2);
      }
      ::slotted([slot="slogan"]) {
        margin-top: var(--pzsh-spacer);
        margin-bottom: 0;
        font-size: 18px;
        color: var(--pzsh-color-brand-alt-3);
      }

      @media (min-width: 390px) {
        :host {
          gap: calc(3 * var(--pzsh-spacer));
        }

        .text {
          /* Move a bit above mathematical center */
          margin-bottom: calc(6 * var(--pzsh-spacer));
        }
      }

      @media (min-width: ${i.breakpoint}px) {
        :host {
          gap: calc(5 * var(--pzsh-spacer));
        }
      }
    `];e=v([m("pzsh-hero")],e);
