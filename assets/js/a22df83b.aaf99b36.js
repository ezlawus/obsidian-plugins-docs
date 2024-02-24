"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var s=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=s.createContext({}),p=function(e){var n=s.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=o,m=c["".concat(i,".").concat(f)]||c[f]||d[f]||r;return t?s.createElement(m,a(a({ref:n},u),{},{components:t})):s.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var s=t(7462),o=(t(7294),t(3905));const r={},a="Expenses plus House Expenses by Year/Month",l={unversionedId:"findoc/models/expensesPlusHouseExpensesByYearMonth",id:"findoc/models/expensesPlusHouseExpensesByYearMonth",title:"Expenses plus House Expenses by Year/Month",description:"Default Model Definition",source:"@site/docs/findoc/models/expensesPlusHouseExpensesByYearMonth.md",sourceDirName:"findoc/models",slug:"/findoc/models/expensesPlusHouseExpensesByYearMonth",permalink:"/obsidian-plugins-docs/docs/findoc/models/expensesPlusHouseExpensesByYearMonth",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/expensesPlusHouseExpensesByYearMonth.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Expenses only Yearly",permalink:"/obsidian-plugins-docs/docs/findoc/models/expensesOnlyYearly"},next:{title:"Expenses plus House Expenses Year/Month Report",permalink:"/obsidian-plugins-docs/docs/findoc/models/expensesPlusHouseExpensesByYearMonthReport"}},i={},p=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,s.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expenses-plus-house-expenses-by-yearmonth"},"Expenses plus House Expenses by Year/Month"),(0,o.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'expensesPlusHouseExpensesByYearMonth: {\n    "dataSource": "splitByYearMonth",\n    "categories": ["Expenses", "House Expenses"],\n    "output": "generateSum",\n    "beginAtZero": true,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "Expenses, House Expenses"\n}\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: expensesPlusHouseExpensesByYearMonth\ntitle: Expenses plus House Expenses by Year/Month\n```\n")),(0,o.kt)("h2",{id:"screenshot"},"Screenshot"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Expenses plus House Expenses by Year/Month",src:t(8401).Z,width:"1466",height:"1216"})))}d.isMDXComponent=!0},8401:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/expensesPlusHouseExpensesByYearMonth-9b0201e927e5be3a9efc524a43087a94.png"}}]);