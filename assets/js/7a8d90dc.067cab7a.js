"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2661],{57569:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(85893),i=n(11151),a=n(12530);const r={id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},o=void 0,l={id:"playground/signMessage",title:"signMessage",description:"Provides a playground to test signMessage function",source:"@site/versioned_docs/version-3.6.0/playground/signMessage.mdx",sourceDirName:"playground",slug:"/playground/signMessage",permalink:"/docs/3.6.0/playground/signMessage",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.6.0/playground/signMessage.mdx",tags:[],version:"3.6.0",frontMatter:{id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},sidebar:"docs",previous:{title:"setTrustline",permalink:"/docs/3.6.0/playground/setTrustline"},next:{title:"signTransaction",permalink:"/docs/3.6.0/playground/signTransaction"}},g={},d=[{value:"<code>signMessage()</code>",id:"signmessage",level:4}];function c(e){const s={code:"code",h4:"h4",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h4,{id:"signmessage",children:(0,t.jsx)(s.code,{children:"signMessage()"})}),"\n","\n","\n",(0,t.jsxs)("strong",{children:["Test GemWallet's ",(0,t.jsx)(s.code,{children:"signMessage"})," method:"]}),"\n",(0,t.jsx)(a.N,{})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},12530:(e,s,n)=>{n.d(s,{N:()=>o});var t=n(67294),i=n(45547),a=n(85893);const r="The message I want to get signed",o=()=>{const[e,s]=(0,t.useState)(""),[n,o]=(0,t.useState)(""),l=(0,t.useCallback)((async()=>{try{if(!(await(0,i.isInstalled)()).result.isInstalled)return void o("Please install GemWallet");const e=await(0,i.signMessage)(r);if("reject"===e.type)return void o("The signature of the message has been refused!");s(e.result.signedMessage)}catch(n){o("Something went wrong!")}}),[]);return(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{children:["This button is using the following message to be signed:",(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:r})})]}),e?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Message: ",e]}):null,!e&&n?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",n]}):null,(0,a.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:l,children:"Sign Message"})]})}}}]);