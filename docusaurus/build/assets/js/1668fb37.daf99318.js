"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3786:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Cloud Infrastructure",l={unversionedId:"getting-started/onboarding/cloud-infra",id:"getting-started/onboarding/cloud-infra",title:"Cloud Infrastructure",description:"MatosSphere Infrastructure",source:"@site/../contents/getting-started/onboarding/cloud-infra.md",sourceDirName:"getting-started/onboarding",slug:"/getting-started/onboarding/cloud-infra",permalink:"/matossphere/docs/getting-started/onboarding/cloud-infra",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Onboarding",permalink:"/matossphere/docs/category/onboarding"},next:{title:"Code Repository",permalink:"/matossphere/docs/getting-started/onboarding/code-repo"}},s={},c=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],u=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},p={toc:c,Highlight:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-infrastructure"},"Cloud Infrastructure"),(0,o.kt)("p",null,"MatosSphere Infrastructure"),(0,o.kt)("p",null,"Docusaurus supports ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,o.kt)("strong",{parentName:"p"},"additional features"),"."),(0,o.kt)("h2",{id:"front-matter"},"Front Matter"),(0,o.kt)("p",null,"Markdown documents have metadata at the top called ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/intro).\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/intro.md).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,o.kt)("a",{parentName:"p",href:"/matossphere/docs/intro"},"Create a page"),"."),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Regular Markdown images are supported."),(0,o.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/cloudmatos.png"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/cloudmatos.png)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus logo",src:n(5928).Z,width:"930",height:"318"})),(0,o.kt)("p",null,"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](./img/cloudmatos.png)\n")),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("h2",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,o.kt)("admonition",{title:"My tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,o.kt)("admonition",{title:"Take care",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,o.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,o.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,o.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,o.kt)("p",null,"This is ",(0,o.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,o.kt)("p",null,"This is ",(0,o.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}d.isMDXComponent=!0},5928:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloudmatos-74a4d93e09e91aed759aac969ee6ed03.png"}}]);