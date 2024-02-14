"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[7555],{7095:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var l=i(85893),s=i(11151),n=i(1830);const c={id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},r=void 0,o={id:"playground/getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function",source:"@site/versioned_docs/version-3.6.0/playground/getPublicKey.mdx",sourceDirName:"playground",slug:"/playground/getPublicKey",permalink:"/docs/3.6.0/playground/getPublicKey",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.6.0/playground/getPublicKey.mdx",tags:[],version:"3.6.0",frontMatter:{id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},sidebar:"docs",previous:{title:"getNFT",permalink:"/docs/3.6.0/playground/getNFT"},next:{title:"isInstalled",permalink:"/docs/3.6.0/playground/isInstalled"}},d={},a=[{value:"<code>getPublicKey()</code>",id:"getpublickey",level:4}];function u(e){const t={code:"code",h4:"h4",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h4,{id:"getpublickey",children:(0,l.jsx)(t.code,{children:"getPublicKey()"})}),"\n","\n","\n",(0,l.jsxs)("strong",{children:["Test GemWallet's ",(0,l.jsx)(t.code,{children:"getPublicKey"})," method:"]}),"\n",(0,l.jsx)(n.D,{})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},1830:(e,t,i)=>{i.d(t,{D:()=>c});var l=i(67294),s=i(45547),n=i(85893);const c=()=>{const[e,t]=(0,l.useState)(""),[i,c]=(0,l.useState)(""),r=(0,l.useCallback)((async()=>{try{if(!(await(0,s.isInstalled)()).result.isInstalled)return void c("Please install GemWallet");const e=await(0,s.getPublicKey)();if("reject"===e.type)return void c("Sharing the public key has been refused!");t(e.result.publicKey)}catch(i){c("Something went wrong!")}}),[]);return(0,n.jsxs)("section",{children:[(0,n.jsx)("div",{children:"What is your public key?"}),e?(0,n.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Public key: ",e]}):null,!e&&i?(0,n.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",i]}):null,(0,n.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:r,children:"Get Public Key"})]})}}}]);