"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3966],{1781:function(e,t,n){n.d(t,{Q:function(){return l}});var r=n(1017),a=n(4035),c=n(7294),o=n(5547),l=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],l=(0,c.useState)(""),s=l[0],i=l[1],u=(0,c.useState)(""),f=u[0],p=u[1],d=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return p("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,o.acceptNFTOffer)({NFTokenSellOffer:s});case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return p("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),p("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[s]);return c.createElement("section",null,c.createElement("div",null,"Input the NFT Offer ID to be accepted:",c.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})),t?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&f?c.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",f):null,c.createElement("button",{type:"button",onClick:d,style:{margin:"1em 0"}},"Accept NFT Offer"))}},7805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),c=(n(7294),n(4137)),o=n(1781),l=["components"],s={id:"acceptNFTOffer",title:"acceptNFTOffer",description:"Provides a playground to test acceptNFTOffer function"},i=void 0,u={unversionedId:"playground/acceptNFTOffer",id:"version-3.3.0/playground/acceptNFTOffer",title:"acceptNFTOffer",description:"Provides a playground to test acceptNFTOffer function",source:"@site/versioned_docs/version-3.3.0/playground/acceptNFTOffer.mdx",sourceDirName:"playground",slug:"/playground/acceptNFTOffer",permalink:"/docs/playground/acceptNFTOffer",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.3.0/playground/acceptNFTOffer.mdx",tags:[],version:"3.3.0",frontMatter:{id:"acceptNFTOffer",title:"acceptNFTOffer",description:"Provides a playground to test acceptNFTOffer function"},sidebar:"docs",previous:{title:"Reference",permalink:"/docs/api/gemwallet-api-reference"},next:{title:"burnNFT",permalink:"/docs/playground/burnNFT"}},f={},p=[{value:"<code>acceptNFTOffer()</code>",id:"acceptnftoffer",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"acceptnftoffer"},(0,c.kt)("inlineCode",{parentName:"h4"},"acceptNFTOffer()")),(0,c.kt)("strong",null,"Test GemWallet's `acceptNFTOffer` method:"),(0,c.kt)(o.Q,{mdxType:"AcceptNFTOfferDemo"}))}m.isMDXComponent=!0}}]);