(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var i=t(3),a=t(7),r=(t(0),t(96)),o={title:"Examples"},l={unversionedId:"getting_started/examples",id:"getting_started/examples",isDocsHomePage:!1,title:"Examples",description:"This page contains some common real-life examples of how to use pipelines.",source:"@site/docs/getting_started/examples.md",slug:"/getting_started/examples",permalink:"/getting_started/examples",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started/examples.md",version:"current",sidebar:"someSidebar",previous:{title:"Best practices",permalink:"/getting_started/best-practices"},next:{title:"Pipeline",permalink:"/pipelines/pipeline"}},c=[{value:"Navigate on click",id:"navigate-on-click",children:[]},{value:"Delete with extra confirmation on click",id:"delete-with-extra-confirmation-on-click",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page contains some common real-life examples of how to use pipelines.\nThe examples are JSX-only and should be considered to be pseudo-code."),Object(r.b)("p",null,"In order to actually make the examples work in your project,\nthe different components not provided by this package would have to be imported from a different package\nor be implemented on a project level."),Object(r.b)("p",null,"Dependencies resolvable by this package are provided as imports above the JSX example."),Object(r.b)("h3",{id:"navigate-on-click"},"Navigate on click"),Object(r.b)("p",null,"This example will navigate the user to a different route when a button is clicked.\nIt does this by implementing a custom pipe called ",Object(r.b)("inlineCode",{parentName:"p"},"NavigateOnPipe"),".\nThis pipe would hook into whatever routing package the application is using and initiate a route change."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n    Pipeline,\n    TriggerPipelineOnClick\n} from \"@morningtrain/react-pipelines\";\n/* ----------------------------------------- */\n<Pipeline>\n    <TriggerPipelineOnClick>\n        <a>Click me to navigate</a>\n    </TriggerPipelineOnClick>\n    <NavigateOnPipe route={'users.index'} />\n</Pipeline>\n")),Object(r.b)("p",null,"For easier reuse, this could be transformed into a component that can be wrapped around any clickable component."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"\nexport default function NavigateOnClick({children, route}) {\n    return (\n        <Pipeline>\n            <TriggerPipelineOnClick>\n                {children}\n            </TriggerPipelineOnClick>\n            <NavigateOnPipe route={route} />\n        </Pipeline>\n    );\n}\n\n")),Object(r.b)("p",null,"Our ",Object(r.b)("inlineCode",{parentName:"p"},"NavigateOnClick")," component is independent of any layout constraints and can be used with any type of button that is clickable.\nThis allows for easier reuse. It is entirely possible to implement a project-level ",Object(r.b)("inlineCode",{parentName:"p"},"Link")," component\nthat both provides layout and functionality by pairing the above reusable component with a UI component."),Object(r.b)("h3",{id:"delete-with-extra-confirmation-on-click"},"Delete with extra confirmation on click"),Object(r.b)("p",null,"One could develop a ",Object(r.b)("inlineCode",{parentName:"p"},"ConfirmOnPipe")," custom pipe that would implement a confirmation modal when triggered.\nIt could utilize a nested pipeline and look something like the following example.\nNote that the ",Object(r.b)("inlineCode",{parentName:"p"},"modalRef")," variable defined in the example would have to be declared in the React component."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'import {\n    NestedPipeline,\n    CallbackOnPipe\n} from "@morningtrain/react-pipelines";\n/* ----------------------------------------- */\n<NestedPipeline>\n    <Modal ref={modalRef}>\n        <ConfirmModalContent onConfirm={confirmFunction} />\n    </Modal>\n    <OpenModalOnPipe modalRef={modalRef} />\n    <CallbackOnPipe callback={awaitConfirmFunction} />\n    <CloseModalOnPipe modalRef={modalRef} />\n</NestedPipeline>\n\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"OpenModalOnPipe")," and ",Object(r.b)("inlineCode",{parentName:"p"},"CloseModalOnPipe")," pipe components are used to open and close the modal\nwhenever that step in the pipeline is reached."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"awaitConfirmFunction")," function will return a promise that only resolves whenever the ",Object(r.b)("inlineCode",{parentName:"p"},"confirmFunction")," is called\nby the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfirmModalContent")," component.\nThis would be accomplished by ",Object(r.b)("inlineCode",{parentName:"p"},"awaitConfirmFunction")," setting a local resolve and reject variable in the React component\nthat should contain the value from the promise. It could look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const awaitConfirmFunction = (payload) => {\n    return new Promise((resolve, reject) => {\n        _resolve.current = data => {\n            payload.data = data;\n            resolve(data);\n        };\n        _reject.current = (err) => {\n            reject(err);\n        };\n    });\n};\n")),Object(r.b)("p",null,"and "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const confirmFunction = (data) => {\n    if (_resolve.current !== null) {\n        _resolve.current(data);\n    }\n};\n")),Object(r.b)("p",null,"With the above functionality, it would not be possible to implement a pipeline\nthat will send an ajax DELETE request whenever the user clicks a button.\nThe example uses a pseudo ",Object(r.b)("inlineCode",{parentName:"p"},"SendDeleteAjaxRequestOnPipe")," component."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n    Pipeline,\n    TriggerPipelineOnClick\n} from \"@morningtrain/react-pipelines\";\n/* ----------------------------------------- */\n<Pipeline>\n    <TriggerPipelineOnClick>\n        <a>Click me to delete</a>\n    </TriggerPipelineOnClick>\n    <ConfirmOnPipe confirmText={'Are you sure that you would like to delete?'} />\n    <SendDeleteAjaxRequestOnPipe />\n</Pipeline>\n")),Object(r.b)("p",null,"Having implemented the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfirmOnPipe")," pipe component - we are now able to reuse it in other pipelines.\nWe could for instance include a confirmation modal before navigating in the first ",Object(r.b)("inlineCode",{parentName:"p"},"NavigateOnClick"),"example."))}s.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?a.a.createElement(b,l(l({ref:n},p),{},{components:t})):a.a.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);