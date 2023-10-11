"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[1271],{70714:function(e,t,n){n.d(t,{m:function(){return o}});var r=n(1017),a=n(84035),c=n(67294),l=n(45547),o=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],o=(0,c.useState)(""),s=o[0],f=o[1],u=(0,c.useState)(""),i=u[0],d=u[1],p=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return d("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,l.cancelOffer)({offerSequence:[s]});case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return d("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),d("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[s]);return c.createElement("section",null,c.createElement("div",null,"Input the Offer Sequence to be cancelled:",c.createElement("input",{type:"text",value:s,onChange:function(e){return f(e.target.value)}})),t?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&i?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",i):null,c.createElement("button",{type:"button",onClick:p,style:{margin:"1em 0"}},"Cancel Offer"))}},220:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),c=(n(67294),n(3905)),l=n(70714),o=["components"],s={id:"cancelOffer",title:"cancelOffer",description:"Provides a playground to test cancelOffer function"},f=void 0,u={unversionedId:"playground/cancelOffer",id:"version-3.5.1/playground/cancelOffer",title:"cancelOffer",description:"Provides a playground to test cancelOffer function",source:"@site/versioned_docs/version-3.5.1/playground/cancelOffer.mdx",sourceDirName:"playground",slug:"/playground/cancelOffer",permalink:"/docs/playground/cancelOffer",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.1/playground/cancelOffer.mdx",tags:[],version:"3.5.1",frontMatter:{id:"cancelOffer",title:"cancelOffer",description:"Provides a playground to test cancelOffer function"},sidebar:"docs",previous:{title:"cancelNFTOffer",permalink:"/docs/playground/cancelNFTOffer"},next:{title:"createNFTOffer",permalink:"/docs/playground/createNFTOffer"}},i={},d=[{value:"<code>cancelOffer()</code>",id:"canceloffer",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"canceloffer"},(0,c.kt)("inlineCode",{parentName:"h4"},"cancelOffer()")),(0,c.kt)("strong",null,"Test GemWallet's `cancelOffer` method:"),(0,c.kt)(l.m,{mdxType:"CancelOfferDemo"}))}m.isMDXComponent=!0}}]);