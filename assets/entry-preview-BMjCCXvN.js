import{Q as _}from"./lit-element-CxgFg0AR.js";import{d as u}from"./index-ogSvIofg.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,{simulatePageLoad:s,simulateDOMContentLoaded:l}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var O=Object.defineProperty,T=(e,t)=>{for(var o in t)O(e,o,{get:t[o],enumerable:!0})},h={};T(h,{parameters:()=>c,render:()=>m,renderToCanvas:()=>M});var{Node:L}=y,m=(e,t)=>{let{id:o,component:i}=t;if(!i)throw new Error(`Unable to render story ${o} as the component annotation is missing from the default export`);let d=document.createElement(i);return Object.entries(e).forEach(([p,r])=>{d[p]=r}),d};function M({storyFn:e,kind:t,name:o,showMain:i,showError:d,forceRemount:p},r){let n=e();if(i(),a(n)){(p||!r.querySelector('[id="root-inner"]'))&&(r.innerHTML='<div id="root-inner"></div>');let f=r.querySelector('[id="root-inner"]');_(n,f),s(r)}else if(typeof n=="string")r.innerHTML=n,s(r);else if(n instanceof L){if(r.firstChild===n&&!p)return;r.innerHTML="",r.appendChild(n),l()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${o}" of "${t}".`,description:u`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c={renderer:"web-components"};export{c as parameters,m as render,M as renderToCanvas};
