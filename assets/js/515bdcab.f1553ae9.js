"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[4595],{3458:function(e,n,s){s.d(n,{N:function(){return o}});var t=s(7294),i=s(5547),o=function(){var e=(0,t.useState)(""),n=e[0],s=e[1],o=(0,t.useCallback)((function(){(0,i.isConnected)().then((function(e){e?(0,i.signMessage)("The message I want to get signed").then((function(e){s(null===e?"The signature of the message has been refused!":void 0===e?"Something went wrong!":e)})):s("Please install GemWallet")}))}),[]);return t.createElement("section",null,t.createElement("div",null,"This button is using the following message to be signed:",t.createElement("code",null,"The message I want to get signed")),t.createElement("input",{readOnly:!0,value:n,style:{display:"block",margin:"1em 0",width:"50%"}}),t.createElement("button",{type:"button",onClick:o},"Sign Message"))}},7601:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var t=s(3117),i=s(102),o=(s(7294),s(4137)),a=s(3458),g=["components"],r={id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},l=void 0,u={unversionedId:"playground/signMessage",id:"version-2.1.0/playground/signMessage",title:"signMessage",description:"Provides a playground to test signMessage function",source:"@site/versioned_docs/version-2.1.0/playground/signMessage.mdx",sourceDirName:"playground",slug:"/playground/signMessage",permalink:"/docs/2.1.0/playground/signMessage",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.1.0/playground/signMessage.mdx",tags:[],version:"2.1.0",frontMatter:{id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},sidebar:"docs",previous:{title:"sendPayment",permalink:"/docs/2.1.0/playground/sendPayment"}},d={},c=[{value:"<code>signMessage()</code>",id:"signmessage",level:4}],m={toc:c};function p(e){var n=e.components,s=(0,i.Z)(e,g);return(0,o.kt)("wrapper",(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"signmessage"},(0,o.kt)("inlineCode",{parentName:"h4"},"signMessage()")),(0,o.kt)("strong",null,"Test GemWallet's `signMessage` method:"),(0,o.kt)(a.N,{mdxType:"SignMessageDemo"}))}p.isMDXComponent=!0}}]);