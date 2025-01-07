import{u,f as d}from"./lit-element-CxgFg0AR.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:d},l=(r=p,o,t)=>{const{kind:s,metadata:a}=t;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(t.name,r),s==="accessor"){const{name:e}=t;return{set(i){const c=o.get.call(this);o.set.call(this,i),this.requestUpdate(e,c,r)},init(i){return i!==void 0&&this.P(e,void 0,r),i}}}if(s==="setter"){const{name:e}=t;return function(i){const c=this[e];o.call(this,i),this.requestUpdate(e,c,r)}}throw Error("Unsupported decorator location: "+s)};function h(r){return(o,t)=>typeof t=="object"?l(r,o,t):((s,a,n)=>{const e=a.hasOwnProperty(n);return a.constructor.createProperty(n,e?{...s,wrapped:!0}:s),e?Object.getOwnPropertyDescriptor(a,n):void 0})(r,o,t)}export{h as n};
