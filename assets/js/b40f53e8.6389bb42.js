"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1497],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={},a="Income",c={unversionedId:"findoc/models/Income",id:"findoc/models/Income",title:"Income",description:"Default Model Definition",source:"@site/docs/findoc/models/Income.md",sourceDirName:"findoc/models",slug:"/findoc/models/Income",permalink:"/obsidian-plugins-docs/docs/findoc/models/Income",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/Income.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Expenses Monthly",permalink:"/obsidian-plugins-docs/docs/findoc/models/ExpensesMonthly"},next:{title:"Income Yearly",permalink:"/obsidian-plugins-docs/docs/findoc/models/IncomeYearly"}},l={},s=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],d={toc:s},u="wrapper";function m(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"income"},"Income"),(0,r.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'income: {\n    "dataSource": "splitDailyDates",\n    "categories": ["Income"],\n    "output": "generateDailyDataSet",\n    "beginAtZero": true,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "",\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: income\ntitle: Income\n```\n")),(0,r.kt)("h2",{id:"screenshot"},"Screenshot"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Income",src:t(2938).Z,width:"1466",height:"1216"})))}m.isMDXComponent=!0},2938:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/income-01ce7d85ed9e5529d81c4bf62c08629d.png"}}]);