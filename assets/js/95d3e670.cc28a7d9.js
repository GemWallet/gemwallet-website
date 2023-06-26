"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3032],{4478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return F},frontMatter:function(){return p},metadata:function(){return T},toc:function(){return y}});var r=n(3117),a=n(102),i=n(7294),l=n(4137),o=n(1017),s=n(4035),u=n(5547),m={URI:"4d696e746564207468726f7567682047656d57616c6c657421",flags:{tfOnlyXRP:!0,tfTransferable:!0},transferFee:3e3,NFTokenTaxon:0,memos:[{memo:{memoType:"4465736372697074696f6e",memoData:"54657374206d656d6f"}}]},c=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],r=(0,i.useState)(""),a=r[0],l=r[1],c=(0,i.useCallback)((0,s.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return l("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,u.mintNFT)(m);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return l("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),l("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return i.createElement("section",null,i.createElement("div",null,"This button mints a new NFT, with the following data:",i.createElement("pre",null,i.createElement("code",null,JSON.stringify(m,null,4)))),t?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&a?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",a):null,i.createElement("button",{type:"button",onClick:c,style:{margin:"1em 0"}},"Mint NFT"))},d=["components"],p={id:"mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function"},f=void 0,T={unversionedId:"playground/mintNFT",id:"playground/mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function",source:"@site/docs/playground/mintNFT.mdx",sourceDirName:"playground",slug:"/playground/mintNFT",permalink:"/docs/next/playground/mintNFT",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/mintNFT.mdx",tags:[],version:"current",frontMatter:{id:"mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function"},sidebar:"docs",previous:{title:"isInstalled",permalink:"/docs/next/playground/isInstalled"},next:{title:"sendPayment",permalink:"/docs/next/playground/sendPayment"}},g={},y=[{value:"<code>mintNFT()</code>",id:"mintnft",level:4}],N={toc:y};function F(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"mintnft"},(0,l.kt)("inlineCode",{parentName:"h4"},"mintNFT()")),(0,l.kt)("strong",null,"Test GemWallet's `mintNFT` method:"),(0,l.kt)(c,{mdxType:"MintNFTDemo"}))}F.isMDXComponent=!0}}]);