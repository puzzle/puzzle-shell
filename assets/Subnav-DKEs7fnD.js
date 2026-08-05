import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,n,o as r,r as i}from"./iframe-CEXs4UB1.js";import{i as a,r as o,t as s}from"./decorate-CzIddzQs.js";import{r as c,t as l}from"./property-BpqSyMY9.js";import{n as u,t as d}from"./class-map-6q3w5oS9.js";import{n as f,t as p}from"./theme-CL5sUMjJ.js";var m;function h(){return(h=e((()=>{n(),o(),p(),m=class extends i{static{this.styles=[f,t`
      nav {
        display: flex;
        flex-direction: column;
        background-color: var(--pzsh-menu-bg);
      }

      @media (min-width: ${f.breakpoint}px) {
        nav {
          flex-direction: row;
          flex-wrap: wrap;
          background-color: transparent;
        }
      }
    `]}render(){return r`
      <nav>
        <slot></slot>
      </nav>
    `}},m=s([a(`pzsh-nav`)],m)})))()}var g;function _(){return(_=e((()=>{n(),o(),l(),d(),p(),g=class extends i{constructor(...e){super(...e),this.href=`#`,this.active=!1}static{this.styles=[f,t`
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

      @media (min-width: ${f.breakpoint}px) {
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
    `]}focus(e){this.shadowRoot?.querySelector(`a`)?.focus(e)}render(){return r`<a
      class=${u({active:this.active})}
      href="${this.href}"
      role="menuitem"
      part="pzsh-nav-item"
    >
      <div><slot></slot></div>
    </a>`}},s([c({type:String})],g.prototype,`href`,void 0),s([c({type:Boolean})],g.prototype,`active`,void 0),g=s([a(`pzsh-nav-item`)],g)})))()}var v;function y(){return(y=e((()=>{n(),o(),p(),v=class extends i{static{this.styles=[f,t`
      :host {
        display: flex;
        flex-direction: column;
      }

      ::slotted(pzsh-nav-item) {
        padding-left: calc(4 * var(--pzsh-spacer));
      }

      @media (min-width: ${f.breakpoint}px) {
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
    `]}render(){return r` <slot></slot> `}},v=s([a(`pzsh-subnav`)],v)})))()}export{_ as n,h as r,y as t};