"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[9162],{95362:function(e,n,t){t.d(n,{G:function(){return o}});var r=t(1017),a=t(84035),c=t(67294),l=t(45547),o=function(){var e=(0,c.useState)(""),n=e[0],t=e[1],o=(0,c.useState)(""),s=o[0],u=o[1],f=(0,c.useState)(""),i=f[0],d=f[1],p=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return d("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,l.cancelNFTOffer)({NFTokenOffers:[s]});case 9:if("reject"!==(n=e.sent).type){e.next=13;break}return d("The transaction has been refused!"),e.abrupt("return");case 13:t(n.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),d("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[s]);return c.createElement("section",null,c.createElement("div",null,"Input the NFT Offer ID to be cancelled:",c.createElement("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)}})),n?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",n):null,!n&&i?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",i):null,c.createElement("button",{type:"button",onClick:p,style:{margin:"1em 0"}},"Cancel NFT Offer"))}},86738:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return d}});var r=t(83117),a=t(80102),c=(t(67294),t(3905)),l=t(95362),o=["components"],s={id:"cancelNFTOffer",title:"cancelNFTOffer",description:"Provides a playground to test cancelNFTOffer function"},u=void 0,f={unversionedId:"playground/cancelNFTOffer",id:"version-3.1.0/playground/cancelNFTOffer",title:"cancelNFTOffer",description:"Provides a playground to test cancelNFTOffer function",source:"@site/versioned_docs/version-3.1.0/playground/cancelNFTOffer.mdx",sourceDirName:"playground",slug:"/playground/cancelNFTOffer",permalink:"/docs/3.1.0/playground/cancelNFTOffer",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.1.0/playground/cancelNFTOffer.mdx",tags:[],version:"3.1.0",frontMatter:{id:"cancelNFTOffer",title:"cancelNFTOffer",description:"Provides a playground to test cancelNFTOffer function"},sidebar:"docs",previous:{title:"burnNFT",permalink:"/docs/3.1.0/playground/burnNFT"},next:{title:"cancelOffer",permalink:"/docs/3.1.0/playground/cancelOffer"}},i={},d=[{value:"<code>cancelNFTOffer()</code>",id:"cancelnftoffer",level:4}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"cancelnftoffer"},(0,c.kt)("inlineCode",{parentName:"h4"},"cancelNFTOffer()")),(0,c.kt)("strong",null,"Test GemWallet's `cancelNFTOffer` method:"),(0,c.kt)(l.G,{mdxType:"CancelNFTOfferDemo"}))}m.isMDXComponent=!0}}]);