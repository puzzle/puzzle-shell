import{R as o}from"./lit-element-CxgFg0AR.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},d=s=>(...t)=>({_$litDirective$:s,values:t});class c{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this.t=t,this._$AM=i,this.i=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=d(class extends c{constructor(s){var t;if(super(s),s.type!==a.ATTRIBUTE||s.name!=="class"||((t=s.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var n,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!((n=this.nt)!=null&&n.has(e))&&this.st.add(e);return this.render(t)}const i=s.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const h=!!t[e];h===this.st.has(e)||(r=this.nt)!=null&&r.has(e)||(h?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return o}});export{l as R};
