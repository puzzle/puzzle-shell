import{T as i}from"./iframe-CTRJx84E.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={ATTRIBUTE:1},h=e=>(...s)=>({_$litDirective$:e,values:s});class a{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,r,t){this._$Ct=s,this._$AM=r,this._$Ci=t}_$AS(s,r){return this.update(s,r)}update(s,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=h(class extends a{constructor(e){if(super(e),e.type!==o.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(s=>e[s]).join(" ")+" "}update(e,[s]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in s)s[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(s)}const r=e.element.classList;for(const t of this.st)t in s||(r.remove(t),this.st.delete(t));for(const t in s){const n=!!s[t];n===this.st.has(t)||this.nt?.has(t)||(n?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return i}});export{d as e};
