"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={title:"Tags for desktop and mobile tests",sidebar_label:"Test tagging",sidebar_position:2},a=void 0,s={unversionedId:"setup/desktop_mobile",id:"setup/desktop_mobile",title:"Tags for desktop and mobile tests",description:"The framework uses @mobile and @desktop tags for identifying desktop and mobile tests respectively. Both these tags are reserved and should not be used outside of this context.",source:"@site/docs/setup/desktop_mobile.md",sourceDirName:"setup",slug:"/setup/desktop_mobile",permalink:"/testing.github.io/docs/next/setup/desktop_mobile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup/desktop_mobile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Tags for desktop and mobile tests",sidebar_label:"Test tagging",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u2757\ufe0fConfiguration",permalink:"/testing.github.io/docs/next/setup/config"},next:{title:"\ud83d\udcf1 Android setup",permalink:"/testing.github.io/docs/next/setup/android_setup"}},l={},p=[{value:"Differentiating desktop and mobile tests",id:"differentiating-desktop-and-mobile-tests",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The framework uses ",(0,r.kt)("inlineCode",{parentName:"p"},"@mobile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@desktop")," tags for identifying desktop and mobile tests respectively. Both these tags are reserved and should not be used outside of this context."),(0,r.kt)("h3",{id:"differentiating-desktop-and-mobile-tests"},"Differentiating desktop and mobile tests"),(0,r.kt)("p",null,"To indicate that a scenario is desktop-specific, you need to tag that scenario with ",(0,r.kt)("inlineCode",{parentName:"p"},"@desktop"),", and all mobile-specific scenario as ",(0,r.kt)("inlineCode",{parentName:"p"},"@mobile"),".\nBy default, all chrome/firefox/safari tests will exclude scenarios that have ",(0,r.kt)("inlineCode",{parentName:"p"},"@mobile")," tag and all android/ios executions will exclude scenarios that have ",(0,r.kt)("inlineCode",{parentName:"p"},"@desktop")," tag.\nIf your tests are cross-compatible with desktop & mobile, you do not need to tag them with ",(0,r.kt)("inlineCode",{parentName:"p"},"@desktop")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@mobile"),"."))}u.isMDXComponent=!0}}]);