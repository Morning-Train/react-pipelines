(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return t?a.a.createElement(b,p(p({ref:n},s),{},{components:t})):a.a.createElement(b,p({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var o=t(3),a=t(7),r=(t(0),t(103)),i={title:"Custom pipes"},p={unversionedId:"cookbook/custom-pipes",id:"cookbook/custom-pipes",isDocsHomePage:!1,title:"Custom pipes",description:"The useWillPipe hook is used to implement custom pipes.",source:"@site/docs/cookbook/custom-pipes.md",slug:"/cookbook/custom-pipes",permalink:"/cookbook/custom-pipes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cookbook/custom-pipes.md",version:"current",sidebar:"someSidebar",previous:{title:"OnClickPipeline",permalink:"/cookbook/on-click-pipeline"},next:{title:"Render when piping",permalink:"/cookbook/render-when-piping"}},c=[{value:"useEffect dependencies",id:"useeffect-dependencies",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"../hooks/use-will-pipe"},"useWillPipe")," hook is used to implement custom pipes."),Object(r.b)("p",null,"A custom pipe is a React functional component the renders ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\n(although it could in principle return another React component).\nThe pipe becomes more predictable by not returning anything."),Object(r.b)("p",null,"This is the simplest possible pipe implementation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport {useWillPipe} from "@morningtrain/react-pipelines";\n\nexport default function CustomPipe() {\n    \n    useWillPipe(payload => {\n        /// Perform pipe action\n        \n        return payload;\n    });\n    \n    return null;\n}\n')),Object(r.b)("p",null,"The pipe will execute synchronously any logic added inside the callback."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Pipes gets passed a payload object that should always be returned from the pipe.\nIf the payload is not returned, it will not be provided to any following pipes."))),Object(r.b)("p",null,"In order to execute any asynchronous tasks in the pipe,\nthe pipe should return a promise which resolves the payload whenever the task has been completed. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport {useWillPipe} from "@morningtrain/react-pipelines";\n\nexport default function CustomAsyncPipe() {\n    \n    useWillPipe(payload => {\n        return new Promise(((resolve, reject) => {\n            \n            /// Perform async pipe action\n            asyncTask()\n                .then(() => {\n                    resolve(payload);\n                })\n                .catch(() => {\n                    reject(new Error(\'Something bad happended\'));\n                });\n            \n        }));\n    });\n    \n    return null;\n}\n')),Object(r.b)("p",null,"It is possible to prevent the execution of any following pipes by rejecting the promise\nor by throwing an Exception in the case of the synchronous pipe."),Object(r.b)("h3",{id:"useeffect-dependencies"},"useEffect dependencies"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useWillPipe")," hook implements ",Object(r.b)("inlineCode",{parentName:"p"},"React.useEffect")," under the hood.\nA ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," arguments has been added to ",Object(r.b)("inlineCode",{parentName:"p"},"useWillPipe"),"\nin order to support passing any dependencies to ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect"),"."),Object(r.b)("p",null,"Passing an array with all dependencies as the second parameter\nwill ensure that the executed pipe has access to all recent instances of any variables\ndefined outside the scope of the callback."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport {useWillPipe} from "@morningtrain/react-pipelines";\n\nexport default function CustomAsyncPipe() {\n    \n    const someDependency = React.useState(false);\n    \n    useWillPipe(payload => {\n        return new Promise(((resolve, reject) => {\n            \n            /// Perform async pipe action\n            asyncTask(someDependency)\n                .then(() => {\n                    resolve(payload);\n                })\n                .catch(() => {\n                    reject(new Error(\'Something bad happended\'));\n                });\n            \n        }));\n    }, [someDependency]);\n    \n    return null;\n}\n')),Object(r.b)("p",null,"An empty array will be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," if nothing is provided to ",Object(r.b)("inlineCode",{parentName:"p"},"useWillPipe"),".\nThe resulting behaviour will be that its internal useEffect callback will only trigger\nwhen the component mounts and unmounts."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Always pass all dependencies as the second parameter to the ",Object(r.b)("inlineCode",{parentName:"p"},"useWillPipe")," hook.\nIf not all dependencies are provided, then it might not be the current version of the pipe callback that is executed."),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"useWillPipe")," hook is essentially a wrapper around ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"React.useEffect"),"."),Object(r.b)("p",{parentName:"div"},"Any dependency should be stable - meaning that they should not change on every render.\nUnstable dependencies will lead to undesireable infinite loops."))))}l.isMDXComponent=!0}}]);