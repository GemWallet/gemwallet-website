"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2829],{46658:function(e,n,t){t.d(n,{S:function(){return l}});var r=t(1017),a=t(84035),s=t(67294),o=t(50791),i={amount:"50",destination:"rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2"},l=function(){var e=(0,s.useState)(""),n=e[0],t=e[1],l=(0,s.useState)(""),d=l[0],u=l[1],c=(0,s.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.isConnected)();case 3:if(e.sent){e.next=7;break}return u("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,o.sendPayment)(i);case 9:if(null!==(n=e.sent)){e.next=13;break}return u("The payment has been refused!"),e.abrupt("return");case 13:if(void 0!==n){e.next=16;break}return u("Something went wrong!"),e.abrupt("return");case 16:t(n),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),u("Something went wrong!");case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),[]);return s.createElement("section",null,s.createElement("div",null,"This button is using the following payment information:",s.createElement("pre",null,s.createElement("code",null,JSON.stringify(i,null,4)))),n?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",n):null,!n&&d?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",d):null,s.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Make Transaction"))}},61329:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=t(83117),a=t(80102),s=(t(67294),t(3905)),o=t(46658),i=["components"],l={id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},d=void 0,u={unversionedId:"playground/sendPayment",id:"version-2.1.0/playground/sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function",source:"@site/versioned_docs/version-2.1.0/playground/sendPayment.mdx",sourceDirName:"playground",slug:"/playground/sendPayment",permalink:"/docs/2.1.0/playground/sendPayment",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.1.0/playground/sendPayment.mdx",tags:[],version:"2.1.0",frontMatter:{id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},sidebar:"docs",previous:{title:"isConnected",permalink:"/docs/2.1.0/playground/isConnected"},next:{title:"signMessage",permalink:"/docs/2.1.0/playground/signMessage"}},c={},m=[{value:"<code>sendPayment()</code>",id:"sendpayment",level:4}],p={toc:m};function y(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"sendpayment"},(0,s.kt)("inlineCode",{parentName:"h4"},"sendPayment()")),(0,s.kt)("strong",null,"Test GemWallet's `sendPayment` method:"),(0,s.kt)(o.S,{mdxType:"SendPaymentDemo"}))}y.isMDXComponent=!0}}]);