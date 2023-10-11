"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[6268],{40897:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(1017),i=n(84035),a=n(67294),o=n(45547),s={URI:"4d696e746564207468726f7567682047656d57616c6c657421",flags:{tfOnlyXRP:!0,tfTransferable:!0},transferFee:3e3,NFTokenTaxon:0,memos:[{memo:{memoType:"4465736372697074696f6e",memoData:"54657374206d656d6f"}}]},l=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],l=(0,a.useState)(""),u=l[0],m=l[1],c=(0,a.useCallback)((0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return m("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,o.mintNFT)(s);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return m("The transaction has been refused!"),e.abrupt("return");case 13:n(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),m("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return a.createElement("section",null,a.createElement("div",null,"This button mints a new NFT, with the following data:",a.createElement("pre",null,a.createElement("code",null,JSON.stringify(s,null,4)))),t?a.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&u?a.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",u):null,a.createElement("button",{type:"button",onClick:c,style:{margin:"1em 0"}},"Mint NFT"))}},85078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(40897),s=["components"],l={id:"mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function"},u=void 0,m={unversionedId:"playground/mintNFT",id:"version-3.5.0/playground/mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function",source:"@site/versioned_docs/version-3.5.0/playground/mintNFT.mdx",sourceDirName:"playground",slug:"/playground/mintNFT",permalink:"/docs/3.5.0/playground/mintNFT",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.0/playground/mintNFT.mdx",tags:[],version:"3.5.0",frontMatter:{id:"mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function"},sidebar:"docs",previous:{title:"isInstalled",permalink:"/docs/3.5.0/playground/isInstalled"},next:{title:"sendPayment",permalink:"/docs/3.5.0/playground/sendPayment"}},c={},d=[{value:"<code>mintNFT()</code>",id:"mintnft",level:4}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"mintnft"},(0,a.kt)("inlineCode",{parentName:"h4"},"mintNFT()")),(0,a.kt)("strong",null,"Test GemWallet's `mintNFT` method:"),(0,a.kt)(o.z,{mdxType:"MintNFTDemo"}))}f.isMDXComponent=!0}}]);