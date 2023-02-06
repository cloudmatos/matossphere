"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},l="Glossary",i={unversionedId:"Appendix/glossary",id:"Appendix/glossary",title:"Glossary",description:"MatosSphere Glossary of Terms",source:"@site/../contents/Appendix/glossary.mdx",sourceDirName:"Appendix",slug:"/Appendix/glossary",permalink:"/matossphere/docs/Appendix/glossary",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rajesh Bagavathiyappan",lastUpdatedAt:1675657787,formattedLastUpdatedAt:"Feb 6, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/matossphere/docs/Appendix/faq"},next:{title:"Support & Prerequisites",permalink:"/matossphere/docs/Appendix/prerequisites"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("p",null,"MatosSphere Glossary of Terms"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Term"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Environment"),(0,a.kt)("td",{parentName:"tr",align:null},"A grouping classification to bind resources specific to different environments. For e.g. dev, staging, pre-production, production etc. Accounts can define their own environments and each account starts with a \u201cDefault\u201d environment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"Another sub level grouping classification to group relevant/related resources under one label. For e.g. A GCP Project or an AWS account or a K8 cluster or an application stack of resources etc. Accounts can define their own application as required.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deploy"),(0,a.kt)("td",{parentName:"tr",align:null},"Selected IAC/PAC template execution from the repository catalogue to setup or reconfigure resources or policy enforcements.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Observe"),(0,a.kt)("td",{parentName:"tr",align:null},"Visualization of health and resource data for underlying resources of an application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Manage"),(0,a.kt)("td",{parentName:"tr",align:null},"General administration of account, settings, users and roles, template repository catalogues etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"History"),(0,a.kt)("td",{parentName:"tr",align:null},"Complete audit trail of all actions performed by human and non-human actors using the platform.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resource"),(0,a.kt)("td",{parentName:"tr",align:null},"Any cloud resource exposed by the supported cloud service providers. For e.g. EC2, RDS on AWS, CE or Cloud SQL on GCP etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Health"),(0,a.kt)("td",{parentName:"tr",align:null},"Health is computed using a base algorithm that considers various virtual resource and compliance factors of underlying individual resources to deduce the aggregate score for an application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Template"),(0,a.kt)("td",{parentName:"tr",align:null},"A collection of correlated scripts consisting of written instructions to set up, (re)configure cloud infrastructure resources and enforce policies as well as to remediate detected anomalies. For e.g. Terraform, Helm, Cloud Formation templates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Remediation"),(0,a.kt)("td",{parentName:"tr",align:null},"Resolution of detected anomalies based on deep observability of underlying cloud resources health using automated tools, templates or scripts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Observability"),(0,a.kt)("td",{parentName:"tr",align:null},"Observability provides the health and resource details of underlying resources to compute a relevant score to depict the current state of the overall application.")))))}u.isMDXComponent=!0}}]);