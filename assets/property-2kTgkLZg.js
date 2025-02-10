import{f as p,u as l}from"./lit-element-BxU7hSqt.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:p},d=(r=u,n,t)=>{const{kind:s,metadata:a}=t;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(t.name,r),s==="accessor"){const{name:e}=t;return{set(i){const c=n.get.call(this);n.set.call(this,i),this.requestUpdate(e,c,r)},init(i){return i!==void 0&&this.P(e,void 0,r),i}}}if(s==="setter"){const{name:e}=t;return function(i){const c=this[e];n.call(this,i),this.requestUpdate(e,c,r)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(n,t)=>typeof t=="object"?d(r,n,t):((s,a,o)=>{const e=a.hasOwnProperty(o);return a.constructor.createProperty(o,e?{...s,wrapped:!0}:s),e?Object.getOwnPropertyDescriptor(a,o):void 0})(r,n,t)}export{f as n};
