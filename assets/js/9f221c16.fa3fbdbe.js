"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[4555],{98153:function(e,t,r){r.d(t,{V:function(){return o}});var s=r(1017),n=r(84035),d=r(67294),a=r(45547),o=function(){var e=(0,d.useState)(""),t=e[0],r=e[1],o=(0,d.useState)(""),i=o[0],l=o[1],u=(0,d.useCallback)((0,n.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return l("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,a.getAddress)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return l("Sharing the address has been refused!"),e.abrupt("return");case 13:r(t.result.address),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),l("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return d.createElement("section",null,d.createElement("div",null,"What is your address?"),t?d.createElement("div",{style:{display:"block",margin:"1em 0"}},"Address: ",t):null,!t&&i?d.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",i):null,d.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:u},"Get Address"))}},44241:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return g}});var s=r(83117),n=r(80102),d=(r(67294),r(3905)),a=r(98153),o=["components"],i={id:"getAddress",title:"getAddress",description:"Provides a playground to test getAddress function"},l=void 0,u={unversionedId:"playground/getAddress",id:"version-3.2.0/playground/getAddress",title:"getAddress",description:"Provides a playground to test getAddress function",source:"@site/versioned_docs/version-3.2.0/playground/getAddress.mdx",sourceDirName:"playground",slug:"/playground/getAddress",permalink:"/docs/3.2.0/playground/getAddress",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.2.0/playground/getAddress.mdx",tags:[],version:"3.2.0",frontMatter:{id:"getAddress",title:"getAddress",description:"Provides a playground to test getAddress function"},sidebar:"docs",previous:{title:"createOffer",permalink:"/docs/3.2.0/playground/createOffer"},next:{title:"getNetwork",permalink:"/docs/3.2.0/playground/getNetwork"}},c={},g=[{value:"<code>getAddress()</code>",id:"getaddress",level:4}],p={toc:g};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,d.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h4",{id:"getaddress"},(0,d.kt)("inlineCode",{parentName:"h4"},"getAddress()")),(0,d.kt)("strong",null,"Test GemWallet's `getAddress` method:"),(0,d.kt)(a.V,{mdxType:"GetAddressDemo"}))}m.isMDXComponent=!0}}]);