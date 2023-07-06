"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3322],{794:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var i=t(3117),l=t(102),a=(t(7294),t(4137)),s=["components"],o={id:"using-gemwallet-in-node-js",title:"Using GemWallet in Node.js",description:"Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm."},r=void 0,d={unversionedId:"api/using-gemwallet-in-node-js",id:"version-2.0.0/api/using-gemwallet-in-node-js",title:"Using GemWallet in Node.js",description:"Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm.",source:"@site/versioned_docs/version-2.0.0/api/using-in-node-js.md",sourceDirName:"api",slug:"/api/using-gemwallet-in-node-js",permalink:"/docs/2.0.0/api/using-gemwallet-in-node-js",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.0.0/api/using-in-node-js.md",tags:[],version:"2.0.0",frontMatter:{id:"using-gemwallet-in-node-js",title:"Using GemWallet in Node.js",description:"Provides the documentation on how to use GemWallet in a Node.js application like React thanks to npm."},sidebar:"docs",previous:{title:"Using GemWallet in the browser",permalink:"/docs/2.0.0/api/using-gemwallet-in-browser"},next:{title:"isConnected",permalink:"/docs/2.0.0/playground/isConnected"}},p={},u=[{value:"Installing the library",id:"installing-the-library",level:2},{value:"Methods",id:"methods",level:2},{value:"isConnected()",id:"isconnected",level:3},{value:"getAddress()",id:"getaddress",level:3},{value:"getNetwork()",id:"getnetwork",level:3},{value:"getPublicKey()",id:"getpublickey",level:3},{value:"sendPayment()",id:"sendpayment",level:3},{value:"signMessage()",id:"signmessage",level:3}],m={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page assumes that you have GemWallet installed.")),(0,a.kt)("h2",{id:"installing-the-library"},"Installing the library"),(0,a.kt)("p",null,"Let's first install the library from npm:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the module using npm: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @gemwallet/api"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the module using yarn: ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @gemwallet/api")))),(0,a.kt)("p",null,"Now let's dig into what functionalities are available to you."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"isconnected"},"isConnected()"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We definitely recommend that you check if the user is connected before using any of the other methods available.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isConnected() -> <Promise<boolean>>")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the user has GemWallet extension installed, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("p",null,"Here is an example with a React web application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) =>\n      console.log(`Is the user having GemWallet installed? ${isConnected}`)\n    );\n  };\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"getaddress"},"getAddress()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAddress() -> <Promise<string|null|undefined>>")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")," returns the classic address of the wallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," user refused to share the address within GemWallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,a.kt)("p",null,"Here is an example with a React web application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, getAddress } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        getAddress().then((address) => {\n          console.log(`Your address: ${address}`);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"getnetwork"},"getNetwork()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getNetwork() -> <Promise<'Mainnet'|'Testnet'|'Devnet'|'NFTDevnet'>>")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Mainnet")," if the user is connected to the ",(0,a.kt)("inlineCode",{parentName:"li"},"main network"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Testnet")," if the user is connected to the ",(0,a.kt)("inlineCode",{parentName:"li"},"test network"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Devnet")," if the user is connected to the ",(0,a.kt)("inlineCode",{parentName:"li"},"developer network"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NFTDevnet")," if the user is connected to the ",(0,a.kt)("inlineCode",{parentName:"li"},"NFT Devnet"),".")),(0,a.kt)("p",null,"Here is an example with a React web application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, getNetwork } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        getNetwork().then((network) => {\n          console.log(`Your network: ${network}`);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"getpublickey"},"getPublicKey()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getPublicKey() -> <Promise<{ publicKey: string, address: string }|null|undefined>>")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{ publicKey: string, address: string }")," returns the public key and the classic address of the wallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," user refused to share the public key within GemWallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,a.kt)("p",null,"Here is an example with a React web application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, getPublicKey } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        getPublicKey().then(({ publicKey }) => {\n          console.log(`Your public key: ${publicKey}`);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"sendpayment"},"sendPayment()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sendPayment(payment) -> <Promise<string|null|undefined>>")),(0,a.kt)("p",null,"Take as parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payment")," object")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const payment = {\n  // The amount of currency to deliver (in drops)\n  amount: string;\n  // The unique address of the account receiving the payment\n  destination: string;\n}\n")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")," returns the hash of the transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," user refused the payment within GemWallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,a.kt)("p",null,"Here is an example with a React web application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, sendPayment } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        const payment = {\n          amount: "10",\n          destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",\n        };\n        sendPayment(payment).then((trHash) => {\n          console.log("Transaction Hash: ", trHash);\n        });\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("h3",{id:"signmessage"},"signMessage()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"signMessage(message) -> <Promise<string|null|undefined>>")),(0,a.kt)("p",null,"Take as parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," string")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")," returns the signed message."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," user refused the payment within GemWallet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," something went wrong.")),(0,a.kt)("p",null,"Here is an example with a React web application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { isConnected, signMessage } from "@gemwallet/api";\n\nfunction App() {\n  const handleConnect = () => {\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        signMessage("The message I want to get signed").then(\n          (signedMessage) => {\n            console.log("Signed message: ", signedMessage);\n          }\n        );\n      }\n    });\n  };\n\n  return (\n    <div className="App">\n      <button onClick={handleConnect}>Click me!</button>\n    </div>\n  );\n}\n\nexport default App;\n')))}c.isMDXComponent=!0}}]);