(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),o=(t(0),t(90)),p={title:"usePipeline"},a={unversionedId:"hooks/use-pipeline",id:"hooks/use-pipeline",isDocsHomePage:!1,title:"usePipeline",description:"The usePipeline hook implement React.useContext with the PipelineContext.",source:"@site/docs/hooks/use-pipeline.md",slug:"/hooks/use-pipeline",permalink:"/hooks/use-pipeline",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hooks/use-pipeline.md",version:"current",sidebar:"someSidebar",previous:{title:"useIsPiping",permalink:"/hooks/use-is-piping"},next:{title:"Basic pipeline",permalink:"/cookbook/basic-pipeline"}},c=[],l={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The usePipeline hook implement ",Object(o.b)("inlineCode",{parentName:"p"},"React.useContext")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"PipelineContext"),". "),Object(o.b)("p",null,"It is essentially a shortcut to this implementation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {PipelineContext} from "@morningtrain/react-pipelines";\n\nexport default function TestComponentUsingPipeline() {\n    \n    const pipeline = React.useContext(PipelineContext);\n    \n    /// Do something with the pipeline instance.\n    \n    return null;\n}\n')),Object(o.b)("p",null,"The implementation becomes a bit simpler by utilizing the custom hook."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {usePipeline} from "@morningtrain/react-pipelines";\n\nexport default function TestComponentUsingPipeline() {\n    \n    const pipeline = usePipeline();\n    \n    /// Do something with the pipeline instance.\n    \n    return null;\n}\n')))}s.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return t?i.a.createElement(f,a(a({ref:n},l),{},{components:t})):i.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=b;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var l=2;l<o;l++)p[l]=t[l];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);