(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var i=t(3),r=t(7),p=(t(0),t(107)),a={title:"NestedAsyncPipeline"},l={unversionedId:"pipelines/nested-async-pipeline",id:"pipelines/nested-async-pipeline",isDocsHomePage:!1,title:"NestedAsyncPipeline",description:"The NestedAsyncPipeline component is essentially a pipe that will trigger a new AsyncPipeline that is wrapped around its children.",source:"@site/docs/pipelines/nested-async-pipeline.md",slug:"/pipelines/nested-async-pipeline",permalink:"/pipelines/nested-async-pipeline",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/pipelines/nested-async-pipeline.md",version:"current",sidebar:"someSidebar",previous:{title:"NestedPipeline",permalink:"/pipelines/nested-pipeline"},next:{title:"ConditionalNestedPipeline",permalink:"/pipelines/conditional-nested-pipeline"}},o=[],c={toc:o};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"NestedAsyncPipeline")," component is essentially a pipe that will trigger a new ",Object(p.b)("a",{parentName:"p",href:"async-pipeline"},"AsyncPipeline")," that is wrapped around its children."),Object(p.b)("p",null,"The real power comes from mixing synchronous and asynchronous pipelines."),Object(p.b)("p",null,"In the following example, all upper-level pipes are executed in sequence\nwhile the nested pipes are executed in parallel.\nThe last 3 pipes after the nested pipeline will not execute until all 3 async pipes are done."),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport {Pipeline, NestedAsyncPipeline} from "@morningtrain/react-pipelines";\n\nexport default function BasicPipelineWithNestedAsyncPipeline() {\n    return (\n        <Pipeline>\n\n            /* The pipeline trigger */\n            {/* ... */}\n\n            /* The pipes of the pipeline */\n            {/* Sequential pipe */}\n            {/* Sequential pipe */}\n            {/* Sequential pipe */}\n            \n            <NestedAsyncPipeline>\n                {/* Async nested pipe */}\n                {/* Async nested pipe */}\n                {/* Async nested pipe */}\n            </NestedAsyncPipeline>\n            \n            {/* Sequential pipe */}\n            {/* Sequential pipe */}\n            {/* Sequential pipe */}\n            \n\n        </Pipeline>\n    );\n}\n\n')))}s.isMDXComponent=!0},107:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return y}));var i=t(0),r=t.n(i);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,y=u["".concat(a,".").concat(f)]||u[f]||d[f]||p;return t?r.a.createElement(y,l(l({ref:n},c),{},{components:t})):r.a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<p;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);