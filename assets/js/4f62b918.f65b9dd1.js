"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[5546],{1830:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(1017),l=n(84035),i=n(67294),u=n(45547),o=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],o=(0,i.useState)(""),a=o[0],c=o[1],s=(0,i.useCallback)((0,l.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return c("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,u.getPublicKey)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return c("Sharing the public key has been refused!"),e.abrupt("return");case 13:n(t.result.publicKey),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),c("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return i.createElement("section",null,i.createElement("div",null,"What is your public key?"),t?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Public key: ",t):null,!t&&a?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",a):null,i.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:s},"Get Public Key"))}},67483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return y}});var r=n(83117),l=n(80102),i=(n(67294),n(3905)),u=n(1830),o=["components"],a={id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},c=void 0,s={unversionedId:"playground/getPublicKey",id:"version-3.2.0/playground/getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function",source:"@site/versioned_docs/version-3.2.0/playground/getPublicKey.mdx",sourceDirName:"playground",slug:"/playground/getPublicKey",permalink:"/docs/3.2.0/playground/getPublicKey",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.2.0/playground/getPublicKey.mdx",tags:[],version:"3.2.0",frontMatter:{id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},sidebar:"docs",previous:{title:"getNFT",permalink:"/docs/3.2.0/playground/getNFT"},next:{title:"isInstalled",permalink:"/docs/3.2.0/playground/isInstalled"}},d={},y=[{value:"<code>getPublicKey()</code>",id:"getpublickey",level:4}],p={toc:y};function g(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"getpublickey"},(0,i.kt)("inlineCode",{parentName:"h4"},"getPublicKey()")),(0,i.kt)("strong",null,"Test GemWallet's `getPublicKey` method:"),(0,i.kt)(u.D,{mdxType:"GetPublicKeyDemo"}))}g.isMDXComponent=!0}}]);