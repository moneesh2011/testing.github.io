"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Setting up for iOS app/web mobile testing",sidebar_label:"\ud83d\udcf1 iOS setup",sidebar_position:4},i=void 0,l={unversionedId:"setup/ios_setup",id:"setup/ios_setup",title:"Setting up for iOS app/web mobile testing",description:"Running tests in iOS requires XCode, Simulator and the necessary version modules.",source:"@site/docs/setup/ios_setup.md",sourceDirName:"setup",slug:"/setup/ios_setup",permalink:"/testing.github.io/docs/next/setup/ios_setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/ios_setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Setting up for iOS app/web mobile testing",sidebar_label:"\ud83d\udcf1 iOS setup",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf1 Android setup",permalink:"/testing.github.io/docs/next/setup/android_setup"},next:{title:"Webdriver",permalink:"/testing.github.io/docs/next/category/webdriver"}},s={},u=[{value:"Instructions for iOS setup",id:"instructions-for-ios-setup",level:2},{value:"Step-1 : Setup XCode",id:"step-1--setup-xcode",level:3},{value:"Step-2 : Install Carthage",id:"step-2--install-carthage",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Running tests in iOS requires XCode, Simulator and the necessary version modules."),(0,o.kt)("h2",{id:"instructions-for-ios-setup"},"Instructions for iOS setup"),(0,o.kt)("p",null,"Only supported on macOS. Linux, Windows and all other operating systems are unsupported."),(0,o.kt)("h3",{id:"step-1--setup-xcode"},"Step-1 : Setup XCode"),(0,o.kt)("p",null,"Download & Install XCode and iOS Simulator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install latest version of XCode from the Mac App Store"),(0,o.kt)("li",{parentName:"ul"},"Launch XCode and go to Preferences: (Menu bar) XCode -> Preferences"),(0,o.kt)("li",{parentName:"ul"},"In Preferences window, go to Components tab and download ",(0,o.kt)("inlineCode",{parentName:"li"},"iOS Simulator 13.5")," (If not found, please ask your team for alternatives)"),(0,o.kt)("li",{parentName:"ul"},"In terminal, enter the following to validate that XCode Command line tools are installed:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"xcrun simctl list devices\n")),(0,o.kt)("p",null,"If successful, the output will return you all iOS Simulators installed on your mac.\nIf unsuccessful, follow the output to install XCode command line tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you have more than one version of XCode on your machine, make sure you use the correct version using ",(0,o.kt)("inlineCode",{parentName:"li"},"xcode-select")," command")),(0,o.kt)("h3",{id:"step-2--install-carthage"},"Step-2 : Install Carthage"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"brew"),", install carthage in your environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install using below command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install carthage\n")))}d.isMDXComponent=!0}}]);