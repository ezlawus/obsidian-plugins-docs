"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:6},a="Usage",l={unversionedId:"spotify-link/usage",id:"spotify-link/usage",title:"Usage",description:"Authentication",source:"@site/docs/spotify-link/usage.md",sourceDirName:"spotify-link",slug:"/spotify-link/usage",permalink:"/obsidian-plugins-docs/docs/spotify-link/usage",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/spotify-link/usage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"First Time Setup (Spotify API)",permalink:"/obsidian-plugins-docs/docs/spotify-link/spotify"},next:{title:"Configuration",permalink:"/obsidian-plugins-docs/docs/spotify-link/configuration"}},c={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Within a note",id:"within-a-note",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Spotify")," Logo in the left sidebar."),(0,i.kt)("li",{parentName:"ol"},"Follow the step in your browser to connect your account.")),(0,i.kt)("h2",{id:"within-a-note"},"Within a note"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("strong",{parentName:"li"},"Command Palette")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Command + p")," on MacOS)"),(0,i.kt)("li",{parentName:"ol"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"Append Spotify Currently Playing Track with Timestamp"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"You can also create a Hotkey binding")))),(0,i.kt)("li",{parentName:"ol"},"Voila !")))}f.isMDXComponent=!0}}]);