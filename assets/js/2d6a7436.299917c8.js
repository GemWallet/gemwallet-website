"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[4060],{5362:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(1017),a=n(4035),c=n(7294),l=n(5547),o=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],o=(0,c.useState)(""),u=o[0],f=o[1],s=(0,c.useState)(""),i=s[0],d=s[1],p=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return d("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,l.cancelNFTOffer)({NFTokenOffers:[u]});case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return d("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),d("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[u]);return c.createElement("section",null,c.createElement("div",null,"Input the NFT Offer ID to be cancelled:",c.createElement("input",{type:"text",value:u,onChange:function(e){return f(e.target.value)}})),t?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&i?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",i):null,c.createElement("button",{type:"button",onClick:p,style:{margin:"1em 0"}},"Cancel NFT Offer"))}},225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),c=(n(7294),n(4137)),l=n(5362),o=["components"],u={id:"cancelNFTOffer",title:"cancelNFTOffer",description:"Provides a playground to test cancelNFTOffer function"},f=void 0,s={unversionedId:"playground/cancelNFTOffer",id:"playground/cancelNFTOffer",title:"cancelNFTOffer",description:"Provides a playground to test cancelNFTOffer function",source:"@site/docs/playground/cancelNFTOffer.mdx",sourceDirName:"playground",slug:"/playground/cancelNFTOffer",permalink:"/docs/next/playground/cancelNFTOffer",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/cancelNFTOffer.mdx",tags:[],version:"current",frontMatter:{id:"cancelNFTOffer",title:"cancelNFTOffer",description:"Provides a playground to test cancelNFTOffer function"},sidebar:"docs",previous:{title:"burnNFT",permalink:"/docs/next/playground/burnNFT"},next:{title:"cancelOffer",permalink:"/docs/next/playground/cancelOffer"}},i={},d=[{value:"<code>cancelNFTOffer()</code>",id:"cancelnftoffer",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"cancelnftoffer"},(0,c.kt)("inlineCode",{parentName:"h4"},"cancelNFTOffer()")),(0,c.kt)("strong",null,"Test GemWallet's `cancelNFTOffer` method:"),(0,c.kt)(l.G,{mdxType:"CancelNFTOfferDemo"}))}m.isMDXComponent=!0}}]);