import{a as g}from"./chunk-FJPRWHXQ-ZrUwtaFT.js";import{S as u,e as v,a as h}from"./index-8LwkIDqE.js";import{i as D}from"./tiny-invariant-VyoA2Os1.js";import{j as l}from"./lit-element-cycI6O1e.js";import"./index-PPLHz8o0.js";import"./_commonjsHelpers-5-cIlDoe.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,{start:b}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:C}=d;C.STORYBOOK_ENV="web-components";var c=b(g);c.forceReRender;c.clientApi.raw;function f(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function m(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function O(){return d.__STORYBOOK_CUSTOM_ELEMENTS__||d.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:T,EventSource:A}=d,_;typeof module<"u"&&((_=module==null?void 0:module.hot)!=null&&_.decline)&&(module.hot.decline(),new A("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&T.location.reload()}catch{}}));const{logger:E}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{useEffect:M,addons:R}=__STORYBOOK_MODULE_PREVIEW_API__;function y(e,r){var a,n;let t;switch(r){case"attributes":case"properties":t={name:((a=e.type)==null?void 0:a.text)||e.type};break;case"slots":t={name:"string"};break;default:t={name:"void"};break}return{name:e.name,required:!1,description:e.description,type:t,table:{category:r,type:{summary:((n=e.type)==null?void 0:n.text)||e.type},defaultValue:{summary:e.default!==void 0?e.default:e.defaultValue}}}}function L(e){let r=e.name.replace(/(-|_|:|\.|\s)+(.)?/g,(t,a,n)=>n?n.toUpperCase():"").replace(/^([A-Z])/,t=>t.toLowerCase());return r=`on${r.charAt(0).toUpperCase()+r.substr(1)}`,[{name:r,action:{name:e.name},table:{disable:!0}},y(e,"events")]}function o(e,r){return e&&e.filter(t=>t&&t.name).reduce((t,a)=>{if(a.kind==="method")return t;switch(r){case"events":L(a).forEach(n=>{D(n.name,`${n} should have a name property.`),t[n.name]=n});break;default:t[a.name]=y(a,r);break}return t},{})}var I=(e,r)=>{if(!f(e)||!m(r))return null;let t=r.tags.find(a=>a.name.toUpperCase()===e.toUpperCase());return t||E.warn(`Component not found in custom-elements.json: ${e}`),t},U=(e,r)=>{var a;if(!f(e)||!m(r))return null;let t;return(a=r==null?void 0:r.modules)==null||a.forEach(n=>{var s;(s=n==null?void 0:n.declarations)==null||s.forEach(i=>{i.tagName===e&&(t=i)})}),t||E.warn(`Component not found in custom-elements.json: ${e}`),t},S=(e,r)=>(r==null?void 0:r.version)==="experimental"?I(e,r):U(e,r),Y=(e,r)=>{let t=S(e,r);return t&&{...o(t.members??[],"properties"),...o(t.properties??[],"properties"),...o(t.attributes??[],"attributes"),...o(t.events??[],"events"),...o(t.slots??[],"slots"),...o(t.cssProperties??[],"css custom properties"),...o(t.cssParts??[],"css shadow parts")}},k=e=>{let r=O();return Y(e,r)},B=e=>{let r=S(e,O());return r&&r.description},N=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function V(e){var a;let r=(a=e==null?void 0:e.parameters.docs)==null?void 0:a.source,t=e==null?void 0:e.parameters.__isArgsStory;return(r==null?void 0:r.type)===u.DYNAMIC?!1:!t||(r==null?void 0:r.code)||(r==null?void 0:r.type)===u.CODE}function K(e,r){var s,i;let t=e(),a=(i=(s=r==null?void 0:r.parameters.docs)==null?void 0:s.source)!=null&&i.excludeDecorators?r.originalStoryFn(r.args,r):t,n;if(M(()=>{let{id:p,unmappedArgs:w}=r;n&&R.getChannel().emit(h,{id:p,source:n,args:w})}),!V(r)){let p=window.document.createElement("div");a instanceof DocumentFragment?l(a.cloneNode(!0),p):l(a,p),n=p.innerHTML.replace(N,"")}return t}var q=[K],H={docs:{extractArgTypes:k,extractComponentDescription:B,story:{inline:!0},source:{type:u.DYNAMIC,language:"html"}}},J=[v];export{J as argTypesEnhancers,q as decorators,H as parameters};
