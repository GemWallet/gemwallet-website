"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3702],{18609:function(e,t,n){n.d(t,{j:function(){return a}});var r=n(1017),o=n(84035),s=n(67294),c=n(45547),u={emailHash:"1D1382344586ECFF844DACFF698C2EFB"},a=function(){var e=(0,s.useState)(""),t=e[0],n=e[1],a=(0,s.useState)(""),l=a[0],i=a[1],d=(0,s.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return i("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,c.setAccount)(u);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return i("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return s.createElement("section",null,s.createElement("div",null,"This button sets the account, with the following data:",s.createElement("pre",null,s.createElement("code",null,JSON.stringify(u,null,4)))),t?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&l?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",l):null,s.createElement("button",{type:"button",onClick:d,style:{margin:"1em 0"}},"Set account"))}},30709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(83117),o=n(80102),s=(n(67294),n(3905)),c=n(18609),u=["components"],a={id:"setAccount",title:"setAccount",description:"Provides a playground to test setAccount function"},l=void 0,i={unversionedId:"playground/setAccount",id:"version-3.2.0/playground/setAccount",title:"setAccount",description:"Provides a playground to test setAccount function",source:"@site/versioned_docs/version-3.2.0/playground/setAccount.mdx",sourceDirName:"playground",slug:"/playground/setAccount",permalink:"/docs/3.2.0/playground/setAccount",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.2.0/playground/setAccount.mdx",tags:[],version:"3.2.0",frontMatter:{id:"setAccount",title:"setAccount",description:"Provides a playground to test setAccount function"},sidebar:"docs",previous:{title:"sendPayment",permalink:"/docs/3.2.0/playground/sendPayment"},next:{title:"setTrustline",permalink:"/docs/3.2.0/playground/setTrustline"}},d={},p=[{value:"<code>setAccount()</code>",id:"setaccount",level:4}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"setaccount"},(0,s.kt)("inlineCode",{parentName:"h4"},"setAccount()")),(0,s.kt)("strong",null,"Test GemWallet's `setAccount` method:"),(0,s.kt)(c.j,{mdxType:"SetAccountDemo"}))}f.isMDXComponent=!0}}]);