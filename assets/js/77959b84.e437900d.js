"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[6293],{96654:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(85893),o=s(11151),c=s(18609);const i={id:"setAccount",title:"setAccount",description:"Provides a playground to test setAccount function"},r=void 0,l={id:"playground/setAccount",title:"setAccount",description:"Provides a playground to test setAccount function",source:"@site/versioned_docs/version-3.7.0/playground/setAccount.mdx",sourceDirName:"playground",slug:"/playground/setAccount",permalink:"/docs/playground/setAccount",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.7.0/playground/setAccount.mdx",tags:[],version:"3.7.0",frontMatter:{id:"setAccount",title:"setAccount",description:"Provides a playground to test setAccount function"},sidebar:"docs",previous:{title:"sendPayment",permalink:"/docs/playground/sendPayment"},next:{title:"setHook",permalink:"/docs/playground/setHook"}},a={},d=[{value:"<code>setAccount()</code>",id:"setaccount",level:4}];function u(t){const e={code:"code",h4:"h4",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h4,{id:"setaccount",children:(0,n.jsx)(e.code,{children:"setAccount()"})}),"\n","\n","\n",(0,n.jsxs)("strong",{children:["Test GemWallet's ",(0,n.jsx)(e.code,{children:"setAccount"})," method:"]}),"\n",(0,n.jsx)(c.j,{})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},18609:(t,e,s)=>{s.d(e,{j:()=>r});var n=s(67294),o=s(45547),c=s(85893);const i={emailHash:"1D1382344586ECFF844DACFF698C2EFB"},r=()=>{const[t,e]=(0,n.useState)(""),[s,r]=(0,n.useState)(""),l=(0,n.useCallback)((async()=>{try{if(!(await(0,o.isInstalled)()).result.isInstalled)return void r("Please install GemWallet");const t=await(0,o.setAccount)(i);if("reject"===t.type)return void r("The transaction has been refused!");e(t.result.hash)}catch(s){r("Something went wrong!")}}),[]);return(0,c.jsxs)("section",{children:[(0,c.jsxs)("div",{children:["This button sets the account, with the following data:",(0,c.jsx)("pre",{children:(0,c.jsx)("code",{children:JSON.stringify(i,null,4)})})]}),t?(0,c.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",t]}):null,!t&&s?(0,c.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",s]}):null,(0,c.jsx)("button",{type:"button",onClick:l,style:{margin:"1em 0"},children:"Set account"})]})}}}]);