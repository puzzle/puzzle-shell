import{i as p,a as h,x as m}from"./lit-element-JDTHnSco.js";import{t as g}from"./custom-element-BhZVzxrc.js";import{t as n}from"./theme-CU95s7Dv.js";var c=Object.getOwnPropertyDescriptor,v=(o,r,l,s)=>{for(var t=s>1?void 0:s?c(r,l):r,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=i(t)||t);return t};let e=class extends h{render(){return m`
      <div class="text">
        <slot name="title"></slot>
        <slot name="slogan"></slot>
      </div>
      <div class="logo">
        <slot name="logo"></slot>
      </div>
    `}};e.styles=[n,p`
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

      /**
       * When styling the slotted elements in the light DOM, make sure to
       * enforce these styles with !important to override any potential
       * light DOM styles.
       */
      ::slotted([slot="title"]),
      ::slotted([slot="slogan"]) {
        font-family: var(--pzsh-font-family) !important;
        font-weight: normal !important;
        line-height: 1 !important;
      }
      ::slotted([slot="title"]) {
        margin: 0 !important;
        font-size: 32px !important;
        color: var(--pzsh-color-brand-alt-2) !important;
      }
      ::slotted([slot="slogan"]) {
        margin-top: var(--pzsh-spacer) !important;
        margin-bottom: 0 !important;
        font-size: 18px !important;
        color: var(--pzsh-color-brand-alt-3) !important;
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

      @media (min-width: ${n.breakpoint}px) {
        :host {
          gap: calc(5 * var(--pzsh-spacer));
        }
      }
    `];e=v([g("pzsh-hero")],e);
