"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[8893],{1850:function(e,t,n){n.d(t,{b:function(){return s}});var r=n(1017),o=n(4035),i=n(7294),a=n(791),s=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],s=(0,i.useState)(""),u=s[0],l=s[1],c=(0,i.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.isConnected)();case 3:if(e.sent){e.next=7;break}return l("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,a.getNetwork)();case 9:if(null!==(t=e.sent)){e.next=13;break}return l("Sharing the network has been refused!"),e.abrupt("return");case 13:if(void 0!==t){e.next=16;break}return l("Something went wrong!"),e.abrupt("return");case 16:n(t),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),l("Something went wrong");case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),[]);return i.createElement("section",null,i.createElement("div",null,"What network is GemWallet using?"),t?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Network: ",t):null,!t&&u?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",u):null,i.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Get Network"))}},3507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=n(1850),s=["components"],u={id:"getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function",sidebar_position:2},l=void 0,c={unversionedId:"playground/getNetwork",id:"version-1.0.2/playground/getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function",source:"@site/versioned_docs/version-1.0.2/playground/getNetwork.mdx",sourceDirName:"playground",slug:"/playground/getNetwork",permalink:"/docs/1.0.2/playground/getNetwork",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-1.0.2/playground/getNetwork.mdx",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{id:"getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function",sidebar_position:2},sidebar:"docs",previous:{title:"isConnected",permalink:"/docs/1.0.2/playground/isConnected"},next:{title:"transactionRequest",permalink:"/docs/1.0.2/playground/transactionRequest"}},d={},g=[{value:"<code>getNetwork()</code>",id:"getnetwork",level:4}],k={toc:g};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"getnetwork"},(0,i.kt)("inlineCode",{parentName:"h4"},"getNetwork()")),(0,i.kt)("strong",null,"Test GemWallet's `getNetwork` method:"),(0,i.kt)(a.b,{mdxType:"GetNetworkDemo"}))}p.isMDXComponent=!0}}]);