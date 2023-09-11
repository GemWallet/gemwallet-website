"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[8595],{12530:function(e,t,s){s.d(t,{N:function(){return l}});var n=s(1017),r=s(84035),a=s(67294),i=s(45547),o="The message I want to get signed",l=function(){var e=(0,a.useState)(""),t=e[0],s=e[1],l=(0,a.useState)(""),u=l[0],g=l[1],c=(0,a.useCallback)((0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return g("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,i.signMessage)(o);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return g("The signature of the message has been refused!"),e.abrupt("return");case 13:s(t.result.signedMessage),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),g("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return a.createElement("section",null,a.createElement("div",null,"This button is using the following message to be signed:",a.createElement("pre",null,a.createElement("code",null,o))),t?a.createElement("div",{style:{display:"block",margin:"1em 0"}},"Message: ",t):null,!t&&u?a.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",u):null,a.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Sign Message"))}},84727:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return d}});var n=s(83117),r=s(80102),a=(s(67294),s(3905)),i=s(12530),o=["components"],l={id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},u=void 0,g={unversionedId:"playground/signMessage",id:"version-3.2.0/playground/signMessage",title:"signMessage",description:"Provides a playground to test signMessage function",source:"@site/versioned_docs/version-3.2.0/playground/signMessage.mdx",sourceDirName:"playground",slug:"/playground/signMessage",permalink:"/docs/3.2.0/playground/signMessage",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.2.0/playground/signMessage.mdx",tags:[],version:"3.2.0",frontMatter:{id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},sidebar:"docs",previous:{title:"setTrustline",permalink:"/docs/3.2.0/playground/setTrustline"},next:{title:"submitTransaction",permalink:"/docs/3.2.0/playground/submitTransaction"}},c={},d=[{value:"<code>signMessage()</code>",id:"signmessage",level:4}],m={toc:d};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"signmessage"},(0,a.kt)("inlineCode",{parentName:"h4"},"signMessage()")),(0,a.kt)("strong",null,"Test GemWallet's `signMessage` method:"),(0,a.kt)(i.N,{mdxType:"SignMessageDemo"}))}p.isMDXComponent=!0}}]);