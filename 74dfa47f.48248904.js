(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(92)),a={title:"Render when piping"},c={unversionedId:"cookbook/render-when-piping",id:"cookbook/render-when-piping",isDocsHomePage:!1,title:"Render when piping",description:"See the useIsPiping hook for details",source:"@site/docs/cookbook/render-when-piping.md",slug:"/cookbook/render-when-piping",permalink:"/cookbook/render-when-piping",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cookbook/render-when-piping.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom pipes",permalink:"/cookbook/custom-pipes"}},p=[],u={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../hooks/use-is-piping"}),"useIsPiping")," hook for details\nabout how to conditionally render something when the pipeline is in an executing (piping) state.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"useIsPiping")," hook can be utilized in your own components."),Object(i.b)("p",null,"You can alternatively use the provided ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../conditionals/when-is-piping"}),"WhenIsPiping"),"\nor ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../conditionals/when-is-not-piping"}),"WhenIsNotPiping")," conditional components.\nIt is the preferred approach for most use-cases."))}s.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),d=r,f=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return t?o.a.createElement(f,c(c({ref:n},u),{},{components:t})):o.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);