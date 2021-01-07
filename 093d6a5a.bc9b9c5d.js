(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),p=(t(0),t(96)),o={title:"Pipeline"},a={unversionedId:"base_pipelines/pipeline",id:"base_pipelines/pipeline",isDocsHomePage:!1,title:"Pipeline",description:"The Pipeline component will execute all child pipe components in sequence",source:"@site/docs/base_pipelines/pipeline.md",slug:"/base_pipelines/pipeline",permalink:"/base_pipelines/pipeline",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/base_pipelines/pipeline.md",version:"current",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/introduction/examples"},next:{title:"AsyncPipeline",permalink:"/base_pipelines/async-pipeline"}},c=[],l={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"Pipeline")," component will execute all child pipe components in sequence"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {Pipeline} from "@morningtrain/react-pipelines";\n\nexport default function BasicPipeline() {\n    return (\n        <Pipeline>\n\n            /* The pipeline trigger */\n            {/* ... */}\n\n            /* The pipes of the pipeline */\n            {/* Sequential pipe #1 */}\n            {/* Sequential pipe #2 */}\n            {/* Sequential pipe #3 */}            \n            {/* Sequential pipe #4 */}\n            {/* Sequential pipe #5 */}\n            {/* Sequential pipe #6 */}\n            \n\n        </Pipeline>\n    );\n}\n\n')))}u.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,b=s["".concat(o,".").concat(m)]||s[m]||f[m]||p;return t?i.a.createElement(b,a(a({ref:n},l),{},{components:t})):i.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<p;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);