"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2914],{69771:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return h}});var n=a(83117),o=a(80102),l=(a(67294),a(3905)),r=["components"],i={slug:"gemwallet-looking-for-beta-testers",title:"GemWallet looking for beta testers",authors:"florianb",tags:["GemWallet","Release 2.0.0"]},s=void 0,m={permalink:"/blog/gemwallet-looking-for-beta-testers",editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/blog/2022-07-26-gemwallet-looking-for-beta-testers.mdx",source:"@site/blog/2022-07-26-gemwallet-looking-for-beta-testers.mdx",title:"GemWallet looking for beta testers",description:"GemWallet Beta - looking for beta testers",date:"2022-07-26T00:00:00.000Z",formattedDate:"July 26, 2022",tags:[{label:"GemWallet",permalink:"/blog/tags/gem-wallet"},{label:"Release 2.0.0",permalink:"/blog/tags/release-2-0-0"}],readingTime:3.135,hasTruncateMarker:!1,authors:[{name:"Florian Bouron",title:"Founder and Maintainer of GemWallet",url:"https://github.com/FlorianBouron",imageURL:"https://github.com/FlorianBouron.png",key:"florianb"}],frontMatter:{slug:"gemwallet-looking-for-beta-testers",title:"GemWallet looking for beta testers",authors:"florianb",tags:["GemWallet","Release 2.0.0"]},prevItem:{title:"Import XUMM wallets into GemWallet",permalink:"/blog/import-xumm-wallets-into-gemwallet"},nextItem:{title:"GemWallet awarded $75,000 by Ripple to speed up its development",permalink:"/blog/gemwallet-awarded-$75,000-by-ripple-to-speed-up-its-development"}},p={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:3},{value:"What&#39;s new?",id:"whats-new",level:3},{value:"How to install it?",id:"how-to-install-it",level:3},{value:"How to use it?",id:"how-to-use-it",level:3},{value:"How to give feedback?",id:"how-to-give-feedback",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],u={toc:h};function c(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GemWallet Beta - looking for beta testers",src:a(65867).Z,width:"1366",height:"768"})),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"GemWallet has already presented its beta version in a previous article, but now are working hard on version 2.0.0."),(0,l.kt)("p",null,"You can find the last source code of version 2.0.0 on the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GemWallet/gemwallet-extension/tree/release/2.0.0"},"release/2.0.0 branch"),"."),(0,l.kt)("p",null,"In this article, I am going to explain to you what changes in this version and what is planned on the TODO list before going to the Chrome Store."),(0,l.kt)("h3",{id:"whats-new"},"What's new?"),(0,l.kt)("p",null,"\ud83c\udf31 Features:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Refactor transaction payment API"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Make the payload simpler"),(0,l.kt)("li",{parentName:"ul"},"Return the hash of the transaction in case of a successful transaction"),(0,l.kt)("li",{parentName:"ul"},"Return an error in case of an unsuccessful transaction"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Inform the user when the password is wrong")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Allow the user to go to the previous page on import seed phrase or create a new wallet")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Inform users when they don't have enough funds in their wallet before executing a transaction"))),(0,l.kt)("p",null,"\ud83e\uddf0 Tech Improvements:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Replace constants by enum"),(0,l.kt)("li",{parentName:"ol"},"Properly catch errors"),(0,l.kt)("li",{parentName:"ol"},"Refactor onboardings"),(0,l.kt)("li",{parentName:"ol"},"Disconnect the WebSocket to the ledger before the extension closes"),(0,l.kt)("li",{parentName:"ol"},"Catch errors within Sentry")),(0,l.kt)("p",null,"And much more, you can check the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GemWallet/gemwallet-extension/pull/44"},"release 2.0.0 pull request")," to see the other improvements."),(0,l.kt)("h3",{id:"how-to-install-it"},"How to install it?"),(0,l.kt)("p",null,"To install the last beta version, it's pretty easy:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download it ",(0,l.kt)("a",{target:"_blank",href:a(83046).Z},"here"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Extract the zip file you have just downloaded")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install it in your web browser:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chrome: At the top right, click on ",(0,l.kt)("img",{alt:"More",src:a(72459).Z,width:"24",height:"24"}),', "More tools" and then "Extensions".'),(0,l.kt)("li",{parentName:"ul"},"Brave: At the top right, click on ",(0,l.kt)("img",{alt:"More",src:a(72459).Z,width:"24",height:"24"}),', then "Extensions".'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Activate the developer mode by switching on the slider")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Click on "Load unpacked" and select the folder of your extension.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Congrats \ud83c\udf89 you now have GemWallet installed."))),(0,l.kt)("p",null,"The video below is put at the right timestamp to show you how to install GemWallet within your web browser."),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GQFdgM6k60g?start=117",title:"GemWallet Beta Installation",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("h3",{id:"how-to-use-it"},"How to use it?"),(0,l.kt)("p",null,"To use GemWallet, you need to use the GemWallet API described in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/user-guide/introduction"},"documentation"),"."),(0,l.kt)("p",null,"Unfortunately, the documentation is not up to date as the package is still under development."),(0,l.kt)("p",null,"I am going to show you how to connect the version beta with the following code snippet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { isConnected, sendPayment } from "@gemwallet/api";\n\nexport function Checkout() {\n  const handlePayment = () => {\n    // We make sure that we are connected to the ledger with the isConnected API\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        const transaction = {\n          amount: "0.999999",\n          destination: "rNvFCZXpDtGeQ3bSas15wGLN6N2stGmA9o",\n        };\n        // We send the payment to the extension which will forward it to the XRP Ledger\n        sendPayment(transaction)\n          .then((trHash) => {\n            // If the transaction is a success, the promise returns a transaction hash\n            console.log("Transaction Hash: ", trHash);\n          })\n          .catch((e) => {\n            console.log("THE ERROR: ", e);\n          });\n      } else {\n        console.log("You are not connected");\n      }\n    });\n  };\n\n  return (\n    <button\n      onClick={handlePayment}\n      className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n    >\n      PAY\n    </button>\n  );\n}\n')),(0,l.kt)("p",null,"In order to don't pollute the npm repository of GemWallet the beta is under the package: ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gemwallet-beta/api"},"@gemwallet-beta/api"),"."),(0,l.kt)("p",null,"The code above is extracted from this repository where you can have an example of implementation: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/FlorianBouron/gemwallet-store-demo/tree/release/2.0.0"},"https://github.com/FlorianBouron/gemwallet-store-demo/tree/release/2.0.0")),(0,l.kt)("h3",{id:"how-to-give-feedback"},"How to give feedback?"),(0,l.kt)("p",null,"Giving us feedback has never been that easy, there are a few ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contact us on ",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/gemwallet_app"},"Twitter")),(0,l.kt)("li",{parentName:"ul"},"Join the ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/CnkP9KGHBe"},"Discord"))),(0,l.kt)("h3",{id:"whats-next"},"What's next?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improvements in explaining the reserved amount within the Ledger"),(0,l.kt)("li",{parentName:"ul"},"Enable GemWallet to be connected to the mainnet"),(0,l.kt)("li",{parentName:"ul"},"Answer to your feedback"),(0,l.kt)("li",{parentName:"ul"},"Create a Sign Method to allow authentication within web3 pages"),(0,l.kt)("li",{parentName:"ul"},"Make the 2.0.0 release"),(0,l.kt)("li",{parentName:"ul"},"And much more (Stay tuned for the next announcements, follow us on ",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/gemwallet_app"},"Twitter"),").")))}c.isMDXComponent=!0},83046:function(e,t,a){t.Z=a.p+"assets/files/gemwallet-beta-8f2860bee30fe2f6f6cd7b6b18f09f6e.zip"},65867:function(e,t,a){t.Z=a.p+"assets/images/GemWalletBeta-70440d6f296006462a2a3b541921b23e.png"},72459:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAKElEQVR4AWMYrqDUvfQ5ELoTrQGo+D8QPqeZBoSTqAVGQ2k0lIYpAAA/gTrh2+TtPAAAAABJRU5ErkJggg=="}}]);