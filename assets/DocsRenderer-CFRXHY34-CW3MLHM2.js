const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CsXts4de.js","./index-BFDIWwKo.js","./iframe-CI1Be8lC.js","./_commonjsHelpers-CqkleIqs.js","./index-Cu4lwwaE.js","./index-7SSfYZ8z.js","./index-ogSvIofg.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-CI1Be8lC.js";import{e as d,r as a,C as E,A as R,H as v,R as n,D as f}from"./index-BFDIWwKo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-7SSfYZ8z.js";import"./index-ogSvIofg.js";var s={},m;function w(){if(m)return s;m=1;var e=d();return s.createRoot=e.createRoot,s.hydrateRoot=e.hydrateRoot,s}var _=w(),i=new Map;function y(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var C=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var x=async(e,t,r)=>{let o=await g(t,r);if(y()){o.render(e);return}let{promise:u,resolve:c}=Promise.withResolvers();return o.render(a.createElement(C,{callback:c},e)),u},D=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},g=async(e,t)=>{let r=i.get(e);return r||(r=_.createRoot(e,t),i.set(e,r)),r},A={code:E,a:R,...v},M=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let o={...A,...t==null?void 0:t.components},u=f;return new Promise((c,p)=>{h(async()=>{const{MDXProvider:l}=await import("./index-CsXts4de.js");return{MDXProvider:l}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:l})=>x(n.createElement(M,{showException:p,key:Math.random()},n.createElement(l,{components:o},n.createElement(u,{context:e,docsParameter:t}))),r)).then(()=>c())})},this.unmount=e=>{D(e)}}};export{S as DocsRenderer,A as defaultComponents};
