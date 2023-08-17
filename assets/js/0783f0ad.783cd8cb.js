"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[5009],{8126:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(1017),l=n(4035),o=n(7294),a=n(5547),u=function(){var e=(0,o.useState)(),t=e[0],n=e[1],u=(0,o.useState)(""),s=u[0],i=u[1],c=(0,o.useCallback)((0,l.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return i("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,a.getNFT)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return i("Sharing the NFTs has been refused!"),e.abrupt("return");case 13:n(t.result.account_nfts),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return o.createElement("section",null,o.createElement("div",null,"Show the NFTs held your wallet?"),t?o.createElement("pre",null,o.createElement("code",null,JSON.stringify(t,null,4))):null,!t&&s?o.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",s):null,o.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Get my NFTs"))}},8375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var r=n(3117),l=n(102),o=(n(7294),n(4137)),a=n(8126),u=["components"],s={id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},i=void 0,c={unversionedId:"playground/getNFT",id:"playground/getNFT",title:"getNFT",description:"Provides a playground to test getNFT function",source:"@site/docs/playground/getNFT.mdx",sourceDirName:"playground",slug:"/playground/getNFT",permalink:"/docs/next/playground/getNFT",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/getNFT.mdx",tags:[],version:"current",frontMatter:{id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/next/playground/getNetwork"},next:{title:"getPublicKey",permalink:"/docs/next/playground/getPublicKey"}},d={},g=[{value:"<code>getNFT()</code>",id:"getnft",level:4}],p={toc:g};function m(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"getnft"},(0,o.kt)("inlineCode",{parentName:"h4"},"getNFT()")),(0,o.kt)("strong",null,"Test GemWallet's `GetNFTDemo` method:"),(0,o.kt)(a.h,{mdxType:"GetNFTDemo"}))}m.isMDXComponent=!0}}]);