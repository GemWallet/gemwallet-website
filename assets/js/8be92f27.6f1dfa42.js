"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[1880],{3357:function(e,n,t){t.d(n,{S:function(){return s}});var o=t(7294),a=t(5547),s=function(){var e=(0,o.useState)(""),n=e[0],t=e[1],s=(0,o.useCallback)((function(){(0,a.isConnected)().then((function(e){if(e){(0,a.sendPayment)({amount:"50",destination:"rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2"}).then((function(e){t(null===e?"The payment has been refused!":void 0===e?"Something went wrong!":e)}))}else t("Please install GemWallet")}))}),[]);return o.createElement("section",null,o.createElement("div",null,"This button is using the following payment information:",o.createElement("code",null,JSON.stringify({amount:"50",destination:"rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2"}))),o.createElement("input",{readOnly:!0,value:n,style:{display:"block",margin:"1em 0",width:"50%"}}),o.createElement("button",{type:"button",onClick:s},"Make Transaction"))}},5882:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return c}});var o=t(3117),a=t(102),s=(t(7294),t(4137)),i=t(3357),r=["components"],d={id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},l=void 0,u={unversionedId:"playground/sendPayment",id:"playground/sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function",source:"@site/docs/playground/sendPayment.mdx",sourceDirName:"playground",slug:"/playground/sendPayment",permalink:"/docs/next/playground/sendPayment",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/sendPayment.mdx",tags:[],version:"current",frontMatter:{id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},sidebar:"docs",previous:{title:"getPublicKey",permalink:"/docs/next/playground/getPublicKey"},next:{title:"signMessage",permalink:"/docs/next/playground/signMessage"}},m={},c=[{value:"<code>sendPayment()</code>",id:"sendpayment",level:4}],p={toc:c};function y(e){var n=e.components,t=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"sendpayment"},(0,s.kt)("inlineCode",{parentName:"h4"},"sendPayment()")),(0,s.kt)("strong",null,"Test GemWallet's `sendPayment` method:"),(0,s.kt)(i.S,{mdxType:"SendPaymentDemo"}))}y.isMDXComponent=!0}}]);