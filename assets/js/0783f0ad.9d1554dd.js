"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[5009],{8672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return N}});var r=n(3117),l=n(102),o=n(7294),a=n(4137),u=n(1017),s=n(4035),i=n(5547),c=function(){var e=(0,o.useState)(),t=e[0],n=e[1],r=(0,o.useState)(""),l=r[0],a=r[1],c=(0,o.useCallback)((0,s.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return a("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,i.getNFT)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return a("Sharing the NFTs has been refused!"),e.abrupt("return");case 13:n(t.result.account_nfts),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),a("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return o.createElement("section",null,o.createElement("div",null,"Show the NFTs held your wallet?"),t?o.createElement("pre",null,o.createElement("code",null,JSON.stringify(t,null,4))):null,!t&&l?o.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",l):null,o.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Get my NFTs"))},d=["components"],g={id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},p=void 0,m={unversionedId:"playground/getNFT",id:"playground/getNFT",title:"getNFT",description:"Provides a playground to test getNFT function",source:"@site/docs/playground/getNFT.mdx",sourceDirName:"playground",slug:"/playground/getNFT",permalink:"/docs/next/playground/getNFT",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/getNFT.mdx",tags:[],version:"current",frontMatter:{id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/next/playground/getNetwork"},next:{title:"getPublicKey",permalink:"/docs/next/playground/getPublicKey"}},f={},N=[{value:"<code>getNFT()</code>",id:"getnft",level:4}],T={toc:N};function y(e){var t=e.components,n=(0,l.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"getnft"},(0,a.kt)("inlineCode",{parentName:"h4"},"getNFT()")),(0,a.kt)("strong",null,"Test GemWallet's `GetNFTDemo` method:"),(0,a.kt)(c,{mdxType:"GetNFTDemo"}))}y.isMDXComponent=!0}}]);