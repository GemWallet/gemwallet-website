"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[1880],{6295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return P}});var a=n(3117),r=n(102),s=n(7294),l=n(4137),o=n(1017),i=n(4035),d=n(5547),u={amount:"50000000",destination:"rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2"},m=function(){var e=(0,s.useState)(""),t=e[0],n=e[1],a=(0,s.useState)(""),r=a[0],l=a[1],m=(0,s.useCallback)((0,i.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return l("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,d.sendPayment)(u);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return l("The payment has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),l("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return s.createElement("section",null,s.createElement("div",null,"This button is using the following payment information:",s.createElement("pre",null,s.createElement("code",null,JSON.stringify(u,null,4)))),t?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&r?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",r):null,s.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:m},"Send Payment"))},c=["components"],p={id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},y=void 0,f={unversionedId:"playground/sendPayment",id:"playground/sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function",source:"@site/docs/playground/sendPayment.mdx",sourceDirName:"playground",slug:"/playground/sendPayment",permalink:"/docs/next/playground/sendPayment",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/sendPayment.mdx",tags:[],version:"current",frontMatter:{id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},sidebar:"docs",previous:{title:"isInstalled",permalink:"/docs/next/playground/isInstalled"},next:{title:"setTrustline",permalink:"/docs/next/playground/setTrustline"}},g={},P=[{value:"<code>sendPayment()</code>",id:"sendpayment",level:4}],b={toc:P};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"sendpayment"},(0,l.kt)("inlineCode",{parentName:"h4"},"sendPayment()")),(0,l.kt)("strong",null,"Test GemWallet's `sendPayment` method:"),(0,l.kt)(m,{mdxType:"SendPaymentDemo"}))}k.isMDXComponent=!0}}]);