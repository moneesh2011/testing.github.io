"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={title:"Setting up for Android app/web mobile testing",sidebar_label:"\ud83d\udcf1 Android setup",sidebar_position:3},a=void 0,l={unversionedId:"setup/android_setup",id:"setup/android_setup",title:"Setting up for Android app/web mobile testing",description:"Running tests in Android (mobile) needs prior setup by installing Android SDK, java and setting up environment variables.",source:"@site/docs/setup/android_setup.md",sourceDirName:"setup",slug:"/setup/android_setup",permalink:"/testing.github.io/docs/next/setup/android_setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/android_setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setting up for Android app/web mobile testing",sidebar_label:"\ud83d\udcf1 Android setup",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Test tagging",permalink:"/testing.github.io/docs/next/setup/desktop_mobile"},next:{title:"\ud83d\udcf1 iOS setup",permalink:"/testing.github.io/docs/next/setup/ios_setup"}},s={},u=[{value:"Instructions for Android setup",id:"instructions-for-android-setup",level:2},{value:"Step-1 : Setup Android SDK &amp; Emulator",id:"step-1--setup-android-sdk--emulator",level:3},{value:"Step-2 : Setup Android environment variables:",id:"step-2--setup-android-environment-variables",level:3},{value:"Step-3 : Install appium in your project",id:"step-3--install-appium-in-your-project",level:3},{value:"Step-4 : Install chromedriver",id:"step-4--install-chromedriver",level:3},{value:"Sample execution command",id:"sample-execution-command",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Running tests in Android (mobile) needs prior setup by installing Android SDK, java and setting up environment variables."),(0,o.kt)("h2",{id:"instructions-for-android-setup"},"Instructions for Android setup"),(0,o.kt)("h3",{id:"step-1--setup-android-sdk--emulator"},"Step-1 : Setup Android SDK & Emulator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Android SDK by downloading Android Studio from Android Developers website: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"https://developer.android.com/studio")),(0,o.kt)("li",{parentName:"ul"},'Take note of your Android SDK path in Android Studio -> Preferences -> Appearance & Behavior -> System Settings -> Android SDK (check "Android SDK Location")'),(0,o.kt)("li",{parentName:"ul"},"Launch AVD in Android Studio and proceed to create an Android emulator"),(0,o.kt)("li",{parentName:"ul"},"During AVD setup, download the required version of Android OS to use with your AVD; All SDK support libraries should be installed along with the OS"),(0,o.kt)("li",{parentName:"ul"},"Once your AVD is successfully created, launch your AVD and make sure Chrome (required version) is installed in the emulator. If not, you can install the required version of the Chrome .apk file by drag-and-drop on to the emulator window. All versions of Android Chrome can be found online in sites like APKMirror.")),(0,o.kt)("h3",{id:"step-2--setup-android-environment-variables"},"Step-2 : Setup Android environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the following environment variables are set up in your machine:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"JAVA_HOME=<path_to_java_home_dir>\nANDROID_HOME=<path_to_android_sdk>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ANDROID_HOME to your path, along with other sdk directories in the below order:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"PATH=$PATH:$ANDROID_HOME:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools\n")),(0,o.kt)("p",null,"Do not change the sequence, otherwise emulator will not be detected properly in your shell."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Re-launch your terminal/command window to reload the changes"),(0,o.kt)("li",{parentName:"ul"},"Check the number of AVDs installed using below command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"emulator -list-avds\n")),(0,o.kt)("h3",{id:"step-3--install-appium-in-your-project"},"Step-3 : Install appium in your project"),(0,o.kt)("p",null,"Install appium in your project using below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i appium@next -D\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Why is appium not packaged along with eol-ft-runner?")," \\\n",(0,o.kt)("em",{parentName:"p"},"Simple, too many security vulnerabilities. Plus, mobile browser is not everyone's cup of tea, so if you need it, we do support it. You just need to install appium separately.")),(0,o.kt)("h3",{id:"step-4--install-chromedriver"},"Step-4 : Install chromedriver"),(0,o.kt)("p",null,"If not already installed in your local package, Install chromedriver in your project using below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i chromedriver -D\n")),(0,o.kt)("p",null,"The version of chromedriver should match the version of chrome installed in the emulator."),(0,o.kt)("h2",{id:"sample-execution-command"},"Sample execution command"),(0,o.kt)("p",null,"The following command will run your tests against Android Chrome:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run test -- --config=config.json --tags=<tags> --browser=android\n")))}c.isMDXComponent=!0}}]);