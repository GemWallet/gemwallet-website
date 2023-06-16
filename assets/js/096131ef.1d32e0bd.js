"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[1642],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=["components"],l={id:"introduction",title:"Introduction",description:"Provides the documentation on why GemWallet is created and what's our vision."},u=void 0,c={unversionedId:"user-guide/introduction",id:"user-guide/introduction",title:"Introduction",description:"Provides the documentation on why GemWallet is created and what's our vision.",source:"@site/docs/user-guide/introduction.md",sourceDirName:"user-guide",slug:"/user-guide/introduction",permalink:"/docs/next/user-guide/introduction",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/user-guide/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",description:"Provides the documentation on why GemWallet is created and what's our vision."},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/next/user-guide/getting-started"}},s={},d=[{value:"Welcome to GemWallet",id:"welcome-to-gemwallet",level:2},{value:"Why GemWallet",id:"why-gemwallet",level:2},{value:"Blockchain Connection",id:"blockchain-connection",level:2},{value:"GemWallet Tutorials",id:"gemwallet-tutorials",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"welcome-to-gemwallet"},"Welcome to GemWallet"),(0,i.kt)("p",null,"Welcome to GemWallet\u2019s Developer Documentation. GemWallet is the bridge between the blockchain (XRPL) and fast payments over the internet. It is currently available as a browser extension (and much more soon). This documentation webpage illustrates how to use it."),(0,i.kt)("p",null,"If you want to know about our last updates and announcements, follow us on ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/gemwallet_app"},"Twitter")," and check out our ",(0,i.kt)("a",{parentName:"p",href:"/blog"},"blog"),"."),(0,i.kt)("p",null,"Once you've installed the extension and the API, familiarize yourself with how to integrate it, then head down to the Playground to test your connection with the extension."),(0,i.kt)("h2",{id:"why-gemwallet"},"Why GemWallet"),(0,i.kt)("p",null,"GemWallet makes fast secure online payments on the blockchain easier and more user-friendly."),(0,i.kt)("p",null,"Our vision is oriented toward payments, micro-payments, and donations."),(0,i.kt)("p",null,"Get started here"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn more about our ",(0,i.kt)("a",{parentName:"li",href:"../api/gemwallet-api-installation"},"JavaScript Provider API"),".")),(0,i.kt)("h2",{id:"blockchain-connection"},"Blockchain Connection"),(0,i.kt)("p",null,"GemWallet comes pre-loaded with fast connections to the XRP Ledger. This allows you to get started without synchronizing a full node, while still providing the option to upgrade your security and use the blockchain provider of your choice."),(0,i.kt)("p",null,"GemWallet is compatible with the XRP Ledger (XRPL). For development, we recommend running on the testnet."),(0,i.kt)("h2",{id:"gemwallet-tutorials"},"GemWallet Tutorials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/getting-started-with-gemwallet-beta"},"Getting Started with GemWallet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/getting-started-with-gemwallet-beta#importing-and-adding-a-wallet-with-gemwallet"},"Importing and adding a wallet with GemWallet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/getting-started-with-gemwallet-beta#tutorial-creation-of-a-donation-website"},"Creation of a donation website with GemWallet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=20EjOtXnICY"},"GemWallet Web3 authentication on the XRPL\n"))),(0,i.kt)("admonition",{title:"Contributing",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Post your tutorial here by editing this page.")))}p.isMDXComponent=!0}}]);