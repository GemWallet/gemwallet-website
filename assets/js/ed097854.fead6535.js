"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[372],{5925:function(e,t,s){s.r(t),s.d(t,{assets:function(){return M},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var n=s(3117),a=s(102),r=s(7294),i=s(4137),l=s(1017),o=s(4035),g=s(5547),u="The message I want to get signed",c=function(){var e=(0,r.useState)(""),t=e[0],s=e[1],n=(0,r.useState)(""),a=n[0],i=n[1],c=(0,r.useCallback)((0,o.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return i("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,g.signMessage)(u);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return i("The signature of the message has been refused!"),e.abrupt("return");case 13:s(t.result.signedMessage),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return r.createElement("section",null,r.createElement("div",null,"This button is using the following message to be signed:",r.createElement("pre",null,r.createElement("code",null,u))),t?r.createElement("div",{style:{display:"block",margin:"1em 0"}},"Message: ",t):null,!t&&a?r.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",a):null,r.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Sign Message"))},d=["components"],m={id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},p=void 0,f={unversionedId:"playground/signMessage",id:"playground/signMessage",title:"signMessage",description:"Provides a playground to test signMessage function",source:"@site/docs/playground/signMessage.mdx",sourceDirName:"playground",slug:"/playground/signMessage",permalink:"/docs/next/playground/signMessage",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/signMessage.mdx",tags:[],version:"current",frontMatter:{id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},sidebar:"docs",previous:{title:"setTrustline",permalink:"/docs/next/playground/setTrustline"}},M={},b=[{value:"<code>signMessage()</code>",id:"signmessage",level:4}],y={toc:b};function k(e){var t=e.components,s=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"signmessage"},(0,i.kt)("inlineCode",{parentName:"h4"},"signMessage()")),(0,i.kt)("strong",null,"Test GemWallet's `signMessage` method:"),(0,i.kt)(c,{mdxType:"SignMessageDemo"}))}k.isMDXComponent=!0}}]);