"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2548],{6351:function(e,t,n){n.d(t,{f:function(){return o}});var s=n(1017),r=n(84035),i=n(67294),l=n(45547),u={limitAmount:{currency:"USD",issuer:"rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",value:"1000000"},flags:{tfSetNoRipple:!0}},o=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],o=(0,i.useState)(""),a=o[0],c=o[1],d=(0,i.useCallback)((0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return c("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,l.setTrustline)(u);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return c("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),c("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return i.createElement("section",null,i.createElement("div",null,"This button adds a USD trustline to your testnet:"),t?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&a?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",a):null,i.createElement("button",{type:"button",onClick:d,style:{margin:"1em 0"}},"Add Trustline"),i.createElement("div",null,"You can use"," ",i.createElement("a",{href:"https://issue.cash",target:"_blank",rel:"nofollow"},"issue.cash")," ","to get some USD funds from this trustline on the testnet."))}},63217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var s=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(6351),u=["components"],o={id:"setTrustline",title:"setTrustline",description:"Provides a playground to test setTrustline function"},a=void 0,c={unversionedId:"playground/setTrustline",id:"version-3.3.0/playground/setTrustline",title:"setTrustline",description:"Provides a playground to test setTrustline function",source:"@site/versioned_docs/version-3.3.0/playground/setTrustline.mdx",sourceDirName:"playground",slug:"/playground/setTrustline",permalink:"/docs/3.3.0/playground/setTrustline",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.3.0/playground/setTrustline.mdx",tags:[],version:"3.3.0",frontMatter:{id:"setTrustline",title:"setTrustline",description:"Provides a playground to test setTrustline function"},sidebar:"docs",previous:{title:"setAccount",permalink:"/docs/3.3.0/playground/setAccount"},next:{title:"signMessage",permalink:"/docs/3.3.0/playground/signMessage"}},d={},p=[{value:"<code>setTrustline()</code>",id:"settrustline",level:4}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"settrustline"},(0,i.kt)("inlineCode",{parentName:"h4"},"setTrustline()")),(0,i.kt)("strong",null,"Test GemWallet's `setTrustline` method:"),(0,i.kt)(l.f,{mdxType:"SetTrustlineDemo"}))}f.isMDXComponent=!0}}]);