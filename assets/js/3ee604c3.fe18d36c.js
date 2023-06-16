"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[875],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=["components"],l={id:"gemwallet-api",title:"GemWallet API",description:"Provides the documentation on how to use GemWallet.",sidebar_position:1},s=void 0,p={unversionedId:"api/gemwallet-api",id:"version-1.0.2/api/gemwallet-api",title:"GemWallet API",description:"Provides the documentation on how to use GemWallet.",source:"@site/versioned_docs/version-1.0.2/api/introduction.md",sourceDirName:"api",slug:"/api/gemwallet-api",permalink:"/docs/1.0.2/api/gemwallet-api",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-1.0.2/api/introduction.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{id:"gemwallet-api",title:"GemWallet API",description:"Provides the documentation on how to use GemWallet.",sidebar_position:1},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/1.0.2/user-guide/getting-started"},next:{title:"Using GemWallet in the browser",permalink:"/docs/1.0.2/api/using-gemwallet-in-browser"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"For browser-based applications",id:"for-browser-based-applications",level:2},{value:"For Node.js applications",id:"for-nodejs-applications",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("admonition",{title:"Recommended Reading",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before reading this section, make sure that you have the GemWallet extension installed. You can have a read to the ",(0,a.kt)("a",{parentName:"p",href:"../user-guide/getting-started"},"Getting Started")," section.")),(0,a.kt)("p",null,"The GemWallet API is used to bridge communication between your website and the GemWallet extension."),(0,a.kt)("p",null,"We provide two ways of installing the extension:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Via CDN for ",(0,a.kt)("a",{parentName:"li",href:"./gemwallet-api#for-browser-based-applications"},"browser-based applications")),(0,a.kt)("li",{parentName:"ul"},"Via an NPM package for ",(0,a.kt)("a",{parentName:"li",href:"./gemwallet-api#for-nodejs-applications"},"Node.js applications"))),(0,a.kt)("h2",{id:"for-browser-based-applications"},"For browser-based applications"),(0,a.kt)("p",null,"Install the packaged library via script tag using cdnjs, swapping in the desired version number for {version}:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/gh/GemWallet/gemwallet-extension@{version}/dist/gemwallet-api.min.js"><\/script>\n')),(0,a.kt)("p",null,"After adding the library to your web pages using GemWallet, you will need to import the proper functions as explained in the guide ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/using-gemwallet-in-browser"},"here"),"."),(0,a.kt)("h2",{id:"for-nodejs-applications"},"For Node.js applications"),(0,a.kt)("p",null,"You can either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the module using npm: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install @gemwallet/api"))),(0,a.kt)("p",null,"or"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the module using yarn: ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add @gemwallet/api"))),(0,a.kt)("p",null,"When the library is installed, you will need to import the proper functions as explained in the guide ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/using-gemwallet-in-node-js"},"here"),"."))}m.isMDXComponent=!0}}]);