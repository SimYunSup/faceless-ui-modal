module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@faceless-ui/html-element")},function(e,t){e.exports=require("react-transition-group")},function(e,t){e.exports=require("qs")},function(e,t){e.exports=require("body-scroll-lock")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";n.r(t),n.d(t,"asModal",(function(){return h})),n.d(t,"Modal",(function(){return E})),n.d(t,"ModalContainer",(function(){return T})),n.d(t,"ModalContext",(function(){return p})),n.d(t,"ModalProvider",(function(){return U})),n.d(t,"ModalToggler",(function(){return X})),n.d(t,"useModal",(function(){return b})),n.d(t,"withModal",(function(){return G}));var r=n(1),o=n.n(r),a=n(6),c=n.n(a),i=n(0),l=n.n(i),u=n(3),s=n(2),f=n.n(s),p=o.a.createContext({}),b=function(){return Object(r.useContext)(p)},d=function(e){return e?{appear:"".concat(e,"--appear"),appearActive:"".concat(e,"--appearActive"),appearDone:"".concat(e,"--appearDone"),enter:"".concat(e,"--enter"),enterActive:"".concat(e,"--enterActive"),enterDone:"".concat(e,"--enterDone"),exit:"".concat(e,"--exit"),exitActive:"".concat(e,"--exitActive"),exitDone:"".concat(e,"--exitDone")}:{}};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(e,t){var n=function(n){var a=b(),i=a.currentModal,l=a.classPrefix,s=a.containerRef,p=a.transTime,m=a.setCloseOnBlur,v=a.open,j=a.setBodyScrollLock,h=n.id,P=n.className,w=n.style,S=n.htmlElement,E=n.htmlAttributes,x=n.slug,C=n.closeOnBlur,k=n.lockBodyScroll,D=t||x,A=Object(r.useRef)(!0),T=i===D;Object(r.useEffect)((function(){A&&(T&&v(D),A.current=!1)}),[T,v,A,D]),Object(r.useEffect)((function(){T&&m(C)}),[T,C,m]);var M=Object(r.useRef)(null),B=Object(r.useCallback)((function(e){M.current=e}),[M]);Object(r.useEffect)((function(){M.current&&j(!(!T||!k),M)}),[T,k,j]),Object(r.useEffect)((function(){return function(){return j(!1,M)}}),[j]);var N=g(Object(r.useState)(T),2),_=N[0],I=N[1];if(Object(r.useEffect)((function(){T?I(T):setTimeout((function(){return I(!1)}),p)}),[T,p]),s.current){var q="".concat(l,"__").concat("modal-item"),R=[q,"".concat(q,"--slug-").concat(D),P].filter(Boolean).join(" "),L=O({role:"dialog"!==S?"dialog":void 0,open:"dialog"===S?_||T:void 0,"aria-modal":!0,"aria-label":E["aria-labelledby"]?void 0:D},E);return c.a.createPortal(o.a.createElement(u.CSSTransition,{timeout:p,in:i===D,classNames:d(q),appear:!0},o.a.createElement(f.a,y({id:h||D,className:R,style:w,htmlElement:S,htmlAttributes:L},{ref:B}),o.a.createElement(e,O(O({},n),{},{isOpen:T,modal:a})))),s.current)}return null};return n.defaultProps={slug:"",closeOnBlur:!0,lockBodyScroll:!0,id:void 0,className:void 0,style:{},htmlElement:"dialog",htmlAttributes:{}},n.propTypes={slug:l.a.string,closeOnBlur:l.a.bool,lockBodyScroll:l.a.bool,id:l.a.string,className:l.a.string,style:l.a.shape({}),htmlElement:l.a.string,htmlAttributes:l.a.shape({id:l.a.string,className:l.a.string,style:l.a.shape({}),onClick:l.a.func})},n};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){var t=e.children;return t?"function"==typeof t?t(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)):t:null};S.defaultProps={children:void 0},S.propTypes={children:l.a.oneOfType([l.a.string,l.a.node,l.a.func,l.a.arrayOf(l.a.node)])};var E=h(S);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){var t=b(),n=t.oneIsOpen,r=t.classPrefix,a=t.transTime,c=t.setContainerRef,i=t.closeAll,l=t.closeOnBlur,s=e.id,p=e.className,y=e.style,m=e.htmlElement,O=e.htmlAttributes,v=e.children,g="".concat(r,"__").concat("modal-container"),j=[g,p].filter(Boolean).join(" "),h=k(k({},O),{},{onClick:function(){l&&i(),"function"==typeof O.onClick&&O.onClick()}});return o.a.createElement(u.CSSTransition,{in:n,timeout:a,classNames:d(g),appear:!0},o.a.createElement(f.a,x({id:s,className:j,style:y,htmlElement:m,htmlAttributes:h},{ref:c}),v&&v))};A.defaultProps={id:void 0,className:void 0,style:{},htmlElement:"div",htmlAttributes:{},children:void 0},A.propTypes={id:l.a.string,className:l.a.string,style:l.a.shape({}),htmlElement:l.a.string,htmlAttributes:l.a.shape({onClick:l.a.func}),children:l.a.node};var T=A,M=n(4),B=n.n(M),N=n(5);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=function(){return B.a.parse(window.location.search,{ignoreQueryPrefix:!0})},Q=function(e){var t=e.classPrefix,n=e.minifyCSS,a=e.generateCSS,c=e.zIndex,i=e.handleParamChange,l=e.children,u=e.transTime,s=Object(r.useRef)(null),f=R(Object(r.useState)(""),2),b=f[0],d=f[1],y=R(Object(r.useState)(!1),2),m=y[0],O=y[1],v=R(Object(r.useState)(!1),2),g=v[0],j=v[1],h=R(Object(r.useState)(!1),2),P=h[0],w=h[1],S=R(Object(r.useState)(""),2),E=S[0],x=S[1],C=R(Object(r.useState)(""),2),k=C[0],D=C[1],A=Object(r.useCallback)((function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e&&("function"==typeof i&&i({key:"modal",value:""}),"boolean"==typeof i&&i)){var t=z();delete t.modal;var n=B.a.stringify(t,{addQueryPrefix:!0}),r="".concat(window.location.pathname).concat(n);window.history.pushState({},"",r)}Object(N.clearAllBodyScrollLocks)(),d(""),O(!1)}),[i]),T=Object(r.useCallback)((function(e){27===e.keyCode&&A()}),[A]);Object(r.useEffect)((function(){return document.addEventListener("keydown",(function(e){return T(e)}),!1),d(z().modal||""),function(){return document.removeEventListener("keydown",(function(e){return T(e)}),!1)}}),[T]),Object(r.useEffect)((function(){var e="trbl";"string"==typeof t&&t&&(e=t),"boolean"!=typeof t||t||(e=void 0),D(e)}),[t]),Object(r.useEffect)((function(){if(a){var e="";e=function(e,t){var n=e?"".concat(e,"__"):"";return"\n    .".concat(n).concat("modal-container"," {\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      position: fixed;\n      pointer-events: none;\n      visibility: hidden;\n      z-index: -1;\n    }\n\n    .").concat(n).concat("modal-container","--appear,\n    .").concat(n).concat("modal-container","--appearDone,\n    .").concat(n).concat("modal-container","--enter,\n    .").concat(n).concat("modal-container","--enterDone,\n    .").concat(n).concat("modal-container","--exit {\n      pointer-events: all;\n      visibility: visible;\n      z-index: ").concat(t,";\n    }\n\n    .").concat(n).concat("modal-item"," {\n      position: absolute;\n      visibility: hidden;\n    }\n\n    .").concat(n).concat("modal-item","--appear,\n    .").concat(n).concat("modal-item","--appearDone,\n    .").concat(n).concat("modal-item","--enter,\n    .").concat(n).concat("modal-item","--enterDone,\n    .").concat(n).concat("modal-item","--exit {\n      visibility: visible;\n    }\n  ")}(k,c),n&&(e=e.replace(/\n/g,"").replace(/\s\s+/g," ")),x(e)}}),[a,n,c,k]);var M=Object(r.useCallback)((function(e,t){if(!t&&("function"==typeof i&&i({key:"modal",value:e}),"boolean"==typeof i&&i)){var n=z();n.modal=e;var r=B.a.stringify(n,{addQueryPrefix:!0}),o="".concat(window.location.pathname).concat(r);window.history.pushState({},"",o)}d(e),O(!0)}),[i]),_=Object(r.useCallback)((function(e){e===b?A():M(e)}),[A,M,b]),q=Object(r.useCallback)((function(e,t){e?(Object(N.disableBodyScroll)(t.current),w(!0)):(Object(N.enableBodyScroll)(t.current),w(!1))}),[]),L=Object(r.useCallback)((function(e){s.current=e}),[]),Q=I({},e);return delete Q.children,o.a.createElement(r.Fragment,null,a&&o.a.createElement("style",{dangerouslySetInnerHTML:{__html:E}}),o.a.createElement(p.Provider,{value:I(I({},Q),{},{transTime:u,containerRef:s,currentModal:b,oneIsOpen:m,closeOnBlur:g,bodyScrollIsLocked:P,classPrefix:k,closeAll:A,setCloseOnBlur:j,open:M,toggle:_,setContainerRef:L,setBodyScrollLock:q})},l&&l))};Q.defaultProps={generateCSS:!0,minifyCSS:!0,classPrefix:void 0,handleParamChange:void 0,transTime:0,zIndex:9999,children:void 0},Q.propTypes={generateCSS:l.a.bool,minifyCSS:l.a.bool,classPrefix:l.a.oneOfType([l.a.string,l.a.bool]),handleParamChange:l.a.oneOfType([l.a.func,l.a.bool]),transTime:l.a.number,zIndex:l.a.number,children:l.a.node};var U=Q;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){return function(t){return o.a.createElement(p.Consumer,null,(function(n){return o.a.createElement(e,F(F({},t),{},{modal:n}))}))}};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){var t=e.id,n=e.className,r=e.modal,a=r.currentModal,c=r.toggle,i=r.classPrefix,l=e.slug,u=e.style,s=e.htmlElement,p=e.htmlAttributes,b=e.children,d="".concat(i,"__modal-toggler"),y=a===l,m=[d,"".concat(d,"--slug-").concat(l),y&&"".concat(d,"--slug-").concat(l,"--is-open"),n].filter(Boolean).join(" "),O=K(K({role:"button","aria-expanded":y?"true":"false","aria-controls":l},p),{},{onClick:function(){c(l),"function"==typeof p.onClick&&p.onClick()}});return o.a.createElement(f.a,{id:t,className:m,style:u,htmlElement:s,htmlAttributes:O},b&&b)};W.defaultProps={id:void 0,className:void 0,style:{},htmlElement:"button",htmlAttributes:{},children:void 0},W.propTypes={slug:l.a.string.isRequired,modal:l.a.shape({currentModal:l.a.string,toggle:l.a.func,classPrefix:l.a.string}).isRequired,id:l.a.string,className:l.a.string,style:l.a.shape({}),htmlElement:l.a.string,htmlAttributes:l.a.shape({id:l.a.string,className:l.a.string,style:l.a.shape({}),onClick:l.a.func}),children:l.a.node};var X=G(W)}]);
//# sourceMappingURL=build.bundle.js.map