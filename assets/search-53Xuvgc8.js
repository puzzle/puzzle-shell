import{i as e}from"./preload-helper-xPQekRTU.js";import{B as t,W as n}from"./iframe-PJzKi-oL.js";import{n as r,t as i}from"./theme-D8JOIRnY.js";var a,o=e((()=>{t(),i(),a=n`
  <style>
    .search {
      display: flex;
      max-width: var(--pzsh-breakpoint);
    }
    .search-field {
      flex: auto;
      position: relative;
      display: flex;
      overflow: hidden;
    }
    .search-field input,
    .search button {
      padding: var(--pzsh-spacer);
      font-size: 1rem;
      line-height: var(--pzsh-icon-size);
    }
    .search-field input {
      flex: auto;
      padding-right: calc(2 * var(--pzsh-spacer) + var(--pzsh-icon-size));
      border-right: 0;
      min-width: 0;
      border: 1px solid var(--pzsh-color-gray-3);
    }
    .search-field button {
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
    }
    .search-field input::placeholder,
    .search button {
      color: var(--pzsh-color-gray-4);
    }
    .search button {
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      cursor: pointer;
    }
    .search button.add {
      flex: none;
      white-space: nowrap;
      margin-right: calc(-1 * var(--pzsh-spacer));
      color: var(--pzsh-color-brand-1);
      background-color: transparent;
    }
    .search button.add > span {
      display: none;
    }
    @media (min-width: ${r.breakpoint}px) {
      .search {
        padding: 0 var(--pzsh-page-padding-horizontal-desktop);
      }
      .search button.add {
        margin-left: calc(2 * var(--pzsh-spacer));
      }
      .search button.add > span {
        display: inline;
        padding-left: calc(0.5 * var(--pzsh-spacer));
      }
    }
  </style>
`}));export{a as n,o as t};