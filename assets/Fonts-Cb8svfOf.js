import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{M as t,a as n,j as r,o as i,y as a}from"./blocks-BLhfqIDe.js";import{t as o}from"./theme-CL5sUMjJ.js";function s(e,t,n){return(0,u.jsxs)(`div`,{style:{background:`#edf1f3`,padding:`1rem 1rem 0`,borderRadius:`5px`,marginBottom:`3rem`,overflow:`hidden`},children:[(0,u.jsx)(`div`,{style:{fontFamily:`var(${e})`,fontWeight:t,fontStyle:n,fontSize:`40px`},children:`The quick brown fox jumps over the lazy dog`}),(0,u.jsxs)(`div`,{style:{margin:`0.75rem 0 0.25rem auto `,width:`max-content`,fontSize:`0.8rem`,opacity:.6},children:[`font-family: var(`,e,`); font-weight: `,t,`; font-style:`,` `,n]})]})}function c(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Puzzle Shell/Components/Fonts`}),`
`,(0,u.jsx)(r.h1,{id:`fonts`,children:`Fonts`}),`
`,(0,u.jsx)(r.p,{children:`The Puzzle Shell includes the following fonts:`}),`
`,(0,u.jsx)(r.h2,{id:`roboto`,children:`Roboto`}),`
`,s(`--pzsh-font-family`,400,`normal`),`
`,s(`--pzsh-font-family`,400,`italic`),`
`,s(`--pzsh-font-family`,500,`normal`),`
`,s(`--pzsh-font-family`,500,`italic`),`
`,(0,u.jsx)(r.h2,{id:`roboto-mono`,children:`Roboto Mono`}),`
`,s(`--pzsh-monospace-font-family`,400,`normal`),`
`,s(`--pzsh-monospace-font-family`,500,`normal`),`
`,(0,u.jsx)(r.h2,{id:`more-variants`,children:`More Variants`}),`
`,(0,u.jsxs)(r.p,{children:[`If you need more variants, you can add them indiviually using the `,(0,u.jsx)(r.a,{href:`https://fontsource.org/`,rel:`nofollow`,children:`fontsource.org`}),` font packages.`]}),`
`,(0,u.jsxs)(r.p,{children:[`For example, if you need a light variant, install the `,(0,u.jsx)(r.code,{children:`@fontsource/roboto`}),` package in your project and import the variant in your CSS:`]}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-css`,children:`import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300-italic.css';
`})})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=a(),r(),i(),o()})))()}d();export{l as default,s as renderFontExample};