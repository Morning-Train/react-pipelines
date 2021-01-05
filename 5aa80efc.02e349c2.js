(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),i=t(7),o=(t(0),t(92)),a={title:"WhenIsPiping"},p={unversionedId:"conditionals/when-is-piping",id:"conditionals/when-is-piping",isDocsHomePage:!1,title:"WhenIsPiping",description:"This component will render its children whenever its immediate parent pipeline is executing (running its pipeline).",source:"@site/docs/conditionals/when-is-piping.md",slug:"/conditionals/when-is-piping",permalink:"/conditionals/when-is-piping",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conditionals/when-is-piping.md",version:"current",sidebar:"someSidebar",previous:{title:"NestedAsyncPipeline",permalink:"/components/nested-async-pipeline"},next:{title:"WhenIsNotPiping",permalink:"/conditionals/when-is-not-piping"}},c=[],s={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This component will render its children whenever its immediate parent pipeline is executing (running its pipeline)."),Object(o.b)("p",null,"It could be used to make a loading animation appear whenever the pipeline is running."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport {Pipeline, WhenIsPiping} from "@morningtrain/react-pipelines";\n\nexport default function PipelineWithLoader() {\n    return (\n        <Pipeline>\n            {/* Place trigger here */}\n            {/* Place pipes here */}\n            \n            <WhenIsPiping>\n                {/* Some custom loader */}\n            </WhenIsPiping>\n        </Pipeline>\n    );\n}\n\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./when-is-not-piping"}),"WhenIsNotPiping")," for the reverse case."))}l.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return t?i.a.createElement(f,p(p({ref:n},s),{},{components:t})):i.a.createElement(f,p({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);