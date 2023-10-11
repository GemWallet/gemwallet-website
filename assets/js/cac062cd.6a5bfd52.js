"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[4201],{23878:function(n,e,t){t.d(e,{h:function(){return c}});var s=t(1017),a=t(84035),r=t(67294),i=t(45547),o={transaction:{TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000",Memos:[{Memo:{MemoData:"54657374206D656D6F",MemoType:"4465736372697074696F6E"}}]}},c=function(){var n=(0,r.useState)(""),e=n[0],t=n[1],c=(0,r.useState)(""),l=c[0],u=c[1],d=(0,r.useCallback)((0,a.Z)((0,s.Z)().mark((function n(){var e;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.isInstalled)();case 3:if(n.sent.result.isInstalled){n.next=7;break}return u("Please install GemWallet"),n.abrupt("return");case 7:return n.next=9,(0,i.signTransaction)(o);case 9:if("reject"!==(e=n.sent).type){n.next=13;break}return u("The signature of the message has been refused!"),n.abrupt("return");case 13:t(e.result.signature),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),u("Something went wrong!");case 19:case"end":return n.stop()}}),n,null,[[0,16]])}))),[]);return r.createElement("section",null,r.createElement("div",null,"This button is using the following transaction to be signed:",r.createElement("pre",null,r.createElement("code",null,JSON.stringify(o,null,4)))),e?r.createElement("div",{style:{display:"block",margin:"1em 0"}},"Message: ",e):null,!e&&l?r.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",l):null,r.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:d},"Sign Transaction"))}},77031:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return g}});var s=t(83117),a=t(80102),r=(t(67294),t(3905)),i=t(23878),o=["components"],c={id:"signTransaction",title:"signTransaction",description:"Provides a playground to test signTransaction function"},l=void 0,u={unversionedId:"playground/signTransaction",id:"version-3.5.0/playground/signTransaction",title:"signTransaction",description:"Provides a playground to test signTransaction function",source:"@site/versioned_docs/version-3.5.0/playground/signTransaction.mdx",sourceDirName:"playground",slug:"/playground/signTransaction",permalink:"/docs/3.5.0/playground/signTransaction",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.0/playground/signTransaction.mdx",tags:[],version:"3.5.0",frontMatter:{id:"signTransaction",title:"signTransaction",description:"Provides a playground to test signTransaction function"},sidebar:"docs",previous:{title:"signMessage",permalink:"/docs/3.5.0/playground/signMessage"},next:{title:"submitBulkTransactions",permalink:"/docs/3.5.0/playground/submitBulkTransactions"}},d={},g=[{value:"<code>signTransaction()</code>",id:"signtransaction",level:4}],m={toc:g};function p(n){var e=n.components,t=(0,a.Z)(n,o);return(0,r.kt)("wrapper",(0,s.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"signtransaction"},(0,r.kt)("inlineCode",{parentName:"h4"},"signTransaction()")),(0,r.kt)("strong",null,"Test GemWallet's `signTransaction` method:"),(0,r.kt)(i.h,{mdxType:"SignTransactionDemo"}))}p.isMDXComponent=!0}}]);