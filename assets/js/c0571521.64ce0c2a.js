"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[845],{60067:function(t,n,e){e.d(n,{U:function(){return u}});var s=e(1017),a=e(84035),i=e(67294),r=e(45547),o={transactions:[{ID:"001",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"002",TransactionType:"TrustSet",LimitAmount:{currency:"ETH",issuer:"rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",value:"10000000"},Fee:"199"},{ID:"003",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"004",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"005",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"006",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"007",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"008",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"009",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"},{ID:"010",TransactionType:"Payment",Destination:"rhikRdkFw28csKw9z7fVoBjWncz1HSoQij",Amount:"100000"}]},u=function(){var t=(0,i.useState)(),n=t[0],e=t[1],u=(0,i.useState)(""),c=u[0],l=u[1],m=(0,i.useCallback)((0,a.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,r.isInstalled)();case 3:if(t.sent.result.isInstalled){t.next=7;break}return l("Please install GemWallet"),t.abrupt("return");case 7:return t.next=9,(0,r.submitBulkTransactions)(o);case 9:if("reject"!==(n=t.sent).type){t.next=13;break}return l("The transaction has been refused!"),t.abrupt("return");case 13:e(n.result.transactions),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),console.error(t.t0),l("Something went wrong!");case 20:case"end":return t.stop()}}),t,null,[[0,16]])}))),[]);return i.createElement("section",null,i.createElement("div",null,"This button submits the following transaction:",i.createElement("pre",null,i.createElement("code",null,JSON.stringify(o,null,4)))),n?i.createElement("pre",null,i.createElement("code",null,JSON.stringify(n,null,4))):null,!n&&c?i.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",c):null,i.createElement("button",{type:"button",onClick:m,style:{margin:"1em 0"}},"Submit transactions"))}},94507:function(t,n,e){e.r(n),e.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var s=e(83117),a=e(80102),i=(e(67294),e(3905)),r=e(60067),o=["components"],u={id:"submitBulkTransactions",title:"submitBulkTransactions",description:"Provides a playground to test submitBulkTransactions function"},c=void 0,l={unversionedId:"playground/submitBulkTransactions",id:"playground/submitBulkTransactions",title:"submitBulkTransactions",description:"Provides a playground to test submitBulkTransactions function",source:"@site/docs/playground/submitBulkTransactions.mdx",sourceDirName:"playground",slug:"/playground/submitBulkTransactions",permalink:"/docs/next/playground/submitBulkTransactions",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/submitBulkTransactions.mdx",tags:[],version:"current",frontMatter:{id:"submitBulkTransactions",title:"submitBulkTransactions",description:"Provides a playground to test submitBulkTransactions function"},sidebar:"docs",previous:{title:"signTransaction",permalink:"/docs/next/playground/signTransaction"},next:{title:"submitTransaction",permalink:"/docs/next/playground/submitTransaction"}},m={},d=[{value:"<code>submitBulkTransactions()</code>",id:"submitbulktransactions",level:4}],k={toc:d};function p(t){var n=t.components,e=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,s.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"submitbulktransactions"},(0,i.kt)("inlineCode",{parentName:"h4"},"submitBulkTransactions()")),(0,i.kt)("strong",null,"Test GemWallet's `submitBulkTransactions` method:"),(0,i.kt)(r.U,{mdxType:"SubmitBulkTransactionsDemo"}))}p.isMDXComponent=!0}}]);