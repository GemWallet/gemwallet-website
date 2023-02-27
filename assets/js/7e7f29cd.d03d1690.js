"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3222],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),c=i,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3341:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=t(3117),i=t(102),l=(t(7294),t(4137)),r=["components"],s={id:"using-gemwallet-in-browser",title:"Using GemWallet in the browser",description:"Provides the documentation on how to use GemWallet in the browser thanks to our CDN."},o=void 0,u={unversionedId:"api/using-gemwallet-in-browser",id:"version-2.2.0/api/using-gemwallet-in-browser",title:"Using GemWallet in the browser",description:"Provides the documentation on how to use GemWallet in the browser thanks to our CDN.",source:"@site/versioned_docs/version-2.2.0/api/using-in-browser.md",sourceDirName:"api",slug:"/api/using-gemwallet-in-browser",permalink:"/docs/api/using-gemwallet-in-browser",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.2.0/api/using-in-browser.md",tags:[],version:"2.2.0",frontMatter:{id:"using-gemwallet-in-browser",title:"Using GemWallet in the browser",description:"Provides the documentation on how to use GemWallet in the browser thanks to our CDN."},sidebar:"docs",previous:{title:"GemWallet API",permalink:"/docs/api/gemwallet-api"},next:{title:"Using GemWallet in Node.js",permalink:"/docs/api/using-gemwallet-in-node-js"}},p={},m=[{value:"Importing the library",id:"importing-the-library",level:2},{value:"Methods",id:"methods",level:2},{value:"isConnected()",id:"isconnected",level:3},{value:"getAddress()",id:"getaddress",level:3},{value:"getNetwork()",id:"getnetwork",level:3},{value:"getNFT()",id:"getnft",level:3},{value:"getPublicKey()",id:"getpublickey",level:3},{value:"sendPayment()",id:"sendpayment",level:3},{value:"signMessage()",id:"signmessage",level:3},{value:"addTrustline()",id:"addtrustline",level:3}],d={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This page assumes that you have GemWallet installed.")),(0,l.kt)("h2",{id:"importing-the-library"},"Importing the library"),(0,l.kt)("p",null,"Let's first import the library in the ",(0,l.kt)("inlineCode",{parentName:"p"},"<head>")," tag of our page."),(0,l.kt)("p",null,"Install the packaged library via script tag using unpkg."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <script src="https://unpkg.com/@gemwallet/api@2.2.0/umd/gemwallet-api.js"><\/script>\n</head>\n')),(0,l.kt)("p",null,"This will expose a global variable called ",(0,l.kt)("inlineCode",{parentName:"p"},"window.GemWalletApi")," that will contain our library."),(0,l.kt)("p",null,"Now let's dig into what functionalities are available to you."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"isconnected"},"isConnected()"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"We recommend that you check if the user is connected before using any of the other methods available.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isConnected() -> <Promise<boolean>>")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the user has GemWallet extension installed, and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    console.log("User has GemWallet!");\n  } else {\n    console.log("User doesn\'t have GemWallet!");\n  }\n});\n')),(0,l.kt)("h3",{id:"getaddress"},"getAddress()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getAddress() -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")," returns the classic address of the wallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused to share the address within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example of implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    GemWalletApi.getAddress().then((address) => {\n      console.log(`Your address: ${address}`);\n    });\n  }\n});\n")),(0,l.kt)("h3",{id:"getnetwork"},"getNetwork()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getNetwork() -> <Promise<'Mainnet'|'Testnet'|'Devnet'|'AMM-Devnet'>>")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Mainnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"main network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Testnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"test network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Devnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"developer network"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AMM-Devnet")," if the user is connected to the ",(0,l.kt)("inlineCode",{parentName:"li"},"AMM Devnet"),".")),(0,l.kt)("p",null,"Here is an example of implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    GemWalletApi.getNetwork().then((network) => {\n      console.log(`Your network: ${network}`);\n    });\n  }\n});\n")),(0,l.kt)("h3",{id:"getnft"},"getNFT()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getNFT(optionalParameters) -> <Promise<AccountNFToken[]|null|undefined>>")),(0,l.kt)("p",null,"Take as parameter an optional object:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optionalParameters")," object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const optionalParameters = {\n  // Limit the number of NFTokens to retrieve.\n  limit?: number;\n  // Value from a previous paginated response.\n  // Resume retrieving data where that response left off.\n  marker?: unknown;\n}\n")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AccountNFToken[]")," returns an array of owned NFTs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused to share owned NFTs within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface AccountNFToken {\n  Flags: number;\n  Issuer: string;\n  NFTokenID: string;\n  NFTokenTaxon: number;\n  URI?: string;\n  nft_serial: number;\n}\n")),(0,l.kt)("p",null,"Here is an example of implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    GemWalletApi.getNFT().then((nfts) => {\n      console.log(`Your NFTs: ${nfts}`);\n    });\n  }\n});\n")),(0,l.kt)("h3",{id:"getpublickey"},"getPublicKey()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getPublicKey() -> <Promise<{ publicKey: string, address: string }|null|undefined>>")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{ publicKey: string, address: string }")," returns the public key and the classic address of the wallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused to share the public key within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example of implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    GemWalletApi.getPublicKey().then(({ publicKey }) => {\n      console.log(`Your public key: ${publicKey}`);\n    });\n  }\n});\n")),(0,l.kt)("h3",{id:"sendpayment"},"sendPayment()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sendPayment(payment) -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Take as parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payment")," object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const payment = {\n  //    The amount of currency to deliver\n  amount: string;\n  // The unique address of the account receiving the payment\n  destination: string;\n  // The token that can be used\n  currency?: string;\n  // The issuer of the token\n  issuer?: string;\n}\n")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")," returns the hash of the transaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused the payment within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example of implementation for an XRP Payment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    const payment = {\n      amount: "10",\n      destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",\n    };\n    GemWalletApi.sendPayment(payment).then((trHash) => {\n      console.log("Transaction Hash: ", trHash);\n    });\n  }\n});\n')),(0,l.kt)("p",null,"Here is an example of implementation for an ETH Payment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    const payment = {\n      amount: "10",\n      destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",\n      currency: "ETH",\n      issuer: "rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",\n    };\n    GemWalletApi.sendPayment(payment).then((trHash) => {\n      console.log("Transaction Hash: ", trHash);\n    });\n  }\n});\n')),(0,l.kt)("h3",{id:"signmessage"},"signMessage()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"signMessage(message) -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Take as parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message")," string")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string")," returns the signed message."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," user refused the payment within GemWallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,l.kt)("p",null,"Here is an example of implementation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    GemWalletApi.signMessage("The message I want to get signed").then(\n      (signedMessage) => {\n        console.log("Signed message: ", signedMessage);\n      }\n    );\n  }\n});\n')),(0,l.kt)("h3",{id:"addtrustline"},"addTrustline()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"addTrustline(transaction) -> <Promise<string|null|undefined>>")),(0,l.kt)("p",null,"Take as parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"transaction")," object")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const transaction = {\n  // The token to be used\n  currency: string;\n  // The address of the account owing the token\n  issuer: string;\n  // Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.\n  // Some transaction types have different minimum requirements.\n  fee?: string;\n  //    The maximum amount of currency that can be exchanged to the trustline\n  value: string;\n}\n")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"string"),": hash of the transaction"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null"),": user refused the payment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),": something went wrong")),(0,l.kt)("p",null,"Here is an example with a React web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'GemWalletApi.isConnected().then((isConnected) => {\n  if (isConnected) {\n    const transaction = {\n      currency: "USD",\n      issuer: "rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",\n      value: "10000000",\n    };\n    GemWalletApi.addTrustline(transaction).then((trHash) => {\n      console.log("Transaction Hash: ", trHash);\n    });\n  }\n});\n')))}c.isMDXComponent=!0}}]);