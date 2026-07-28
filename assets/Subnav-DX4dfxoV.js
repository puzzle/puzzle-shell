import{i as e}from"./preload-helper-CT_b8DTk.js";import{ht as t,ot as n,st as r,ut as i}from"./iframe-CUQ_OtY6.js";import{a,n as o,r as s,t as c}from"./decorate-I8bfxDnw.js";import{r as l,t as u}from"./property-CbRoCnCz.js";import{n as d,t as f}from"./class-map-D2diW1ou.js";import{n as p,t as m}from"./theme-C65ifsUC.js";var h,g=e((()=>{n(),s(),m(),o(),h=class extends r{static{this.styles=[p,t`
      nav {
        display: flex;
        flex-direction: column;
        background-color: var(--pzsh-menu-bg);
      }

      @media (min-width: ${p.breakpoint}px) {
        nav {
          flex-direction: row;
          flex-wrap: wrap;
          background-color: transparent;
        }
      }
    `]}render(){return i`
      <nav>
        <slot></slot>
      </nav>
    `}},h=c([a(`pzsh-nav`)],h)})),_,v=e((()=>{n(),s(),u(),f(),m(),o(),_=class extends r{constructor(...e){super(...e),this.href=`#`,this.active=!1}static{this.styles=[p,t`
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

      @media (min-width: ${p.breakpoint}px) {
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
    `]}focus(e){this.shadowRoot?.querySelector(`a`)?.focus(e)}render(){return i`<a
      class=${d({active:this.active})}
      href="${this.href}"
      role="menuitem"
      part="pzsh-nav-item"
    >
      <div><slot></slot></div>
    </a>`}},c([l({type:String})],_.prototype,`href`,void 0),c([l({type:Boolean})],_.prototype,`active`,void 0),_=c([a(`pzsh-nav-item`)],_)})),y,b=e((()=>{n(),s(),m(),o(),y=class extends r{static{this.styles=[p,t`
      :host {
        display: flex;
        flex-direction: column;
      }

      ::slotted(pzsh-nav-item) {
        padding-left: calc(4 * var(--pzsh-spacer));
      }

      @media (min-width: ${p.breakpoint}px) {
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
    `]}render(){return i` <slot></slot> `}},y=c([a(`pzsh-subnav`)],y)}));export{v as n,g as r,b as t};