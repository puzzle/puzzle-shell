import{f as p,u as l}from"./iframe-IQMN2D7Z.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:p},d=(t=u,s,e)=>{const{kind:a,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(e.name,t),a==="accessor"){const{name:o}=e;return{set(n){const c=s.get.call(this);s.set.call(this,n),this.requestUpdate(o,c,t)},init(n){return n!==void 0&&this.C(o,void 0,t,n),n}}}if(a==="setter"){const{name:o}=e;return function(n){const c=this[o];s.call(this,n),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+a)};function f(t){return(s,e)=>typeof e=="object"?d(t,s,e):((a,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,a),o?Object.getOwnPropertyDescriptor(i,r):void 0})(t,s,e)}export{f as n};
