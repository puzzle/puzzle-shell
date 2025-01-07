import{i as n,h as p,k as m}from"./lit-element-CxgFg0AR.js";import{t as c}from"./custom-element-BTbnI5vI.js";import{t as h}from"./theme-EnFTGyLY.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,d=(i,e,o,a)=>{for(var t=a>1?void 0:a?v(e,o):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(t=(a?s(e,o,t):s(t))||t);return a&&t&&g(e,o,t),t};let l=class extends p{render(){return m`
      <div class="text">
        <slot name="title"></slot>
        <slot name="slogan"></slot>
      </div>
      <div class="logo">
        <slot name="logo"></slot>
      </div>
    `}};l.styles=[h,n`
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

      @media (min-width: ${h.breakpoint}px) {
        :host {
          gap: calc(5 * var(--pzsh-spacer));
        }
      }
    `];l=d([c("pzsh-hero")],l);
