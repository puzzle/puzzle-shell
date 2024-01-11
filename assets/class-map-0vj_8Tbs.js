import{w as h}from"./lit-element-cycI6O1e.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=e=>(...t)=>({_$litDirective$:e,values:t});class d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=c(class extends d{constructor(e){var t;if(super(e),e.type!==a.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.st)!=null&&r.has(s))&&this.it.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.it)s in t||(i.remove(s),this.it.delete(s));for(const s in t){const o=!!t[s];o===this.it.has(s)||(n=this.st)!=null&&n.has(s)||(o?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return h}});export{u as e};
