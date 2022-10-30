"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[8409],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?i.createElement(k,r(r({ref:n},u),{},{components:t})):i.createElement(k,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var i=t(3117),a=t(102),l=(t(7294),t(4137)),r=["components"],o={id:"using-gemwallet-in-node-js",title:"Using GemWallet in Node.js",description:"Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm."},s=void 0,p={unversionedId:"api/using-gemwallet-in-node-js",id:"api/using-gemwallet-in-node-js",title:"Using GemWallet in Node.js",description:"Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm.",source:"@site/docs/api/using-in-node-js.md",sourceDirName:"api",slug:"/api/using-gemwallet-in-node-js",permalink:"/docs/next/api/using-gemwallet-in-node-js",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/api/using-in-node-js.md",tags:[],version:"current",frontMatter:{id:"using-gemwallet-in-node-js",title:"Using GemWallet in Node.js",description:"Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm."},sidebar:"docs",previous:{title:"Using GemWallet in the browser",permalink:"/docs/next/api/using-gemwallet-in-browser"},next:{title:"isConnected",permalink:"/docs/next/playground/isConnected"}},u={},d=[{value:"Installing the library",id:"installing-the-library",level:2},{value:"Methods",id:"methods",level:2},{value:"isConnected()",id:"isconnected",level:3},{value:"getAddress()",id:"getaddress",level:3},{value:"getNetwork()",id:"getnetwork",level:3},{value:"getPublicKey()",id:"getpublickey",level:3},{value:"sendPayment()",id:"sendpayment",level:3},{value:"signMessage()",id:"signmessage",level:3}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This page assumes that you have GemWallet installed.")),(0,l.kt)("h2",{id:"installing-the-library"},"Installing the library"),(0,l.kt)("p",null,"Let's first install the library from npm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install the module using npm: ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install @gemwallet/api"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install the module using yarn: ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn add @gemwallet/api")))),(0,l.kt)("p",null,"Now let's dig into what functionalities are available to you."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"isconnected"},"isConnected()"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"We definitely recommend that you check if the user is connected before using any of the other methods available.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isConnected() -> <Promise<boolean>>")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the user has GemWallet extension installed, and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) =>\n      console.log(`Is the user having GemWallet installed? ${isConnected}`)\n    );\n  };\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,l.kt)("h3",{id:"getaddress"},"getAddress()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getAddress() -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")," returns the classic address of the wallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused to share the address within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, getAddress } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        getAddress().then((address) => {\n          console.log(`Your address: ${address}`);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,l.kt)("h3",{id:"getnetwork"},"getNetwork()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getNetwork() -> <Promise<'Mainnet'|'Testnet'|'Devnet'|'NFTDevnet'>>")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Mainnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"main network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Testnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"test network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Devnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"developer network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NFTDevnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"NFT Devnet"),".")),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, getNetwork } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        getNetwork().then((network) => {\n          console.log(`Your network: ${network}`);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,l.kt)("h3",{id:"getpublickey"},"getPublicKey()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getPublicKey() -> <Promise<{ publicKey: string, address: string }|null|undefined>>")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ publicKey: string, address: string }")," returns the public key and the classic address of the wallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused to share the public key within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, getPublicKey } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        getPublicKey().then(({ publicKey }) => {\n          console.log(`Your public key: ${publicKey}`);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,l.kt)("h3",{id:"sendpayment"},"sendPayment()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sendPayment(payment) -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Take as parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payment")," object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const payment = {\n  // The amount of currency to deliver (in drops)\n  amount: string;\n  // The unique address of the account receiving the payment\n  destination: string;\n}\n")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")," returns the hash of the transaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused the payment within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, sendPayment } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        const payment = {\n          amount: "10",\n          destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",\n        };\n        sendPayment(payment).then((trHash) => {\n          console.log("Transaction Hash: ", trHash);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,l.kt)("h3",{id:"signmessage"},"signMessage()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"signMessage(message) -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Take as parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message")," string")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")," returns the signed message."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused the payment within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, signMessage } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        signMessage("The message I want to get signed").then(\n          (signedMessage) => {\n            console.log("Signed message: ", signedMessage);\n          }\n        );\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);