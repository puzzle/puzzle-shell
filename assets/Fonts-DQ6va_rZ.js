import{j as o,M as a}from"./blocks-DH0szHvP.js";import{useMDXComponents as s}from"./index-BT4wxyzW.js";import"./theme-BlrG3hMM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CTRJx84E.js";function t(e,n,r){return o.jsxs("div",{style:{background:"#edf1f3",padding:"1rem 1rem 0",borderRadius:"5px",marginBottom:"3rem",overflow:"hidden"},children:[o.jsx("div",{style:{fontFamily:`var(${e})`,fontWeight:n,fontStyle:r,fontSize:"40px"},children:"The quick brown fox jumps over the lazy dog"}),o.jsxs("div",{style:{margin:"0.75rem 0 0.25rem auto ",width:"max-content",fontSize:"0.8rem",opacity:.6},children:["font-family: var(",e,"); font-weight: ",n,"; font-style:"," ",r]})]})}function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Puzzle Shell/Components/Fonts"}),`
`,o.jsx(n.h1,{id:"fonts",children:"Fonts"}),`
`,o.jsx(n.p,{children:"The Puzzle Shell includes the following fonts:"}),`
`,o.jsx(n.h2,{id:"roboto",children:"Roboto"}),`
`,t("--pzsh-font-family",400,"normal"),`
`,t("--pzsh-font-family",400,"italic"),`
`,t("--pzsh-font-family",500,"normal"),`
`,t("--pzsh-font-family",500,"italic"),`
`,o.jsx(n.h2,{id:"roboto-mono",children:"Roboto Mono"}),`
`,t("--pzsh-monospace-font-family",400,"normal"),`
`,t("--pzsh-monospace-font-family",500,"normal"),`
`,o.jsx(n.h2,{id:"more-variants",children:"More Variants"}),`
`,o.jsxs(n.p,{children:["If you need more variants, you can add them indiviually using the ",o.jsx(n.a,{href:"https://fontsource.org/",rel:"nofollow",children:"fontsource.org"})," font packages."]}),`
`,o.jsxs(n.p,{children:["For example, if you need a light variant, install the ",o.jsx(n.code,{children:"@fontsource/roboto"})," package in your project and import the variant in your CSS:"]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-css",children:`import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300-italic.css';
`})})]})}function p(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{p as default,t as renderFontExample};
