module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){e.exports=n(9)()},function(e,t){e.exports=require("react")},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){e.exports=n(3)()},function(e,t){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=Object(r.forwardRef)((function(e,t){var n=e.id,r=e.className,a=e.style,i=e.htmlElement,u=e.htmlAttributes,p=e.children,f=[r,u.className].filter(Boolean).join(" "),d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u.style,{},a);return o.a.createElement(i,c({},u,{id:n,className:f||void 0,style:d,ref:t}),p&&p)}));u.defaultProps={id:void 0,className:void 0,style:{},htmlElement:"div",htmlAttributes:{},children:void 0},u.propTypes={id:i.a.string,className:i.a.string,style:i.a.shape({}),htmlElement:i.a.string,htmlAttributes:i.a.shape({id:i.a.string,className:i.a.string,style:i.a.shape({})}),children:i.a.node},t.default=u},function(e,t,n){"use strict";var r=n(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";var r=n(11),o=n(12),a=n(6);e.exports={formats:a,parse:o,stringify:r}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var a=t[r],i=a.obj[a.prop],c=Object.keys(i),s=0;s<c.length;++s){var l=c[s],u=i[l];"object"==typeof u&&null!==u&&-1===n.indexOf(u)&&(t.push({obj:i,prop:l}),n.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],a=0;a<n.length;++a)void 0!==n[a]&&r.push(n[a]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(e){return r}},encode:function(e,t,n){if(0===e.length)return e;var r=e;if("symbol"==typeof e?r=Symbol.prototype.toString.call(e):"string"!=typeof e&&(r=String(e)),"iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<r.length;++i){var c=r.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=r.charAt(i):c<128?o+=a[c]:c<2048?o+=a[192|c>>6]+a[128|63&c]:c<55296||c>=57344?o+=a[224|c>>12]+a[128|c>>6&63]+a[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(i)),o+=a[240|c>>18]+a[128|c>>12&63]+a[128|c>>6&63]+a[128|63&c])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,n,a){if(!n)return t;if("object"!=typeof n){if(o(t))t.push(n);else{if(!t||"object"!=typeof t)return[t,n];(a&&(a.plainObjects||a.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(n);var c=t;return o(t)&&!o(n)&&(c=i(t,a)),o(t)&&o(n)?(n.forEach((function(n,o){if(r.call(t,o)){var i=t[o];i&&"object"==typeof i&&n&&"object"==typeof n?t[o]=e(i,n,a):t.push(n)}else t[o]=n})),t):Object.keys(n).reduce((function(t,o){var i=n[o];return r.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),c)}}},function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g,a=n(5),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=a.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return String(e)}}},i)},,,function(e,t,n){"use strict";var r=n(10);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(5),o=n(6),a=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,l=function(e,t){s.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,p=o.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,format:p,formatter:o.formatters[p],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,n,o,a,i,s,u,p,d,m,y,h,b){var v,g=t;if("function"==typeof u?g=u(n,g):g instanceof Date?g=m(g):"comma"===o&&c(g)&&(g=g.join(",")),null===g){if(a)return s&&!h?s(n,f.encoder,b,"key"):n;g=""}if("string"==typeof(v=g)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||r.isBuffer(g))return s?[y(h?n:s(n,f.encoder,b,"key"))+"="+y(s(g,f.encoder,b,"value"))]:[y(n)+"="+y(String(g))];var O,E=[];if(void 0===g)return E;if(c(u))O=u;else{var x=Object.keys(g);O=p?x.sort(p):x}for(var j=0;j<O.length;++j){var P=O[j];i&&null===g[P]||(c(g)?l(E,e(g[P],"function"==typeof o?o(n,P):n,o,a,i,s,u,p,d,m,y,h,b)):l(E,e(g[P],n+(d?"."+P:"["+P+"]"),o,a,i,s,u,p,d,m,y,h,b)))}return E};e.exports=function(e,t){var n,r=e,s=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==e.format){if(!a.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=o.formatters[n],i=f.filter;return("function"==typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:i,formatter:r,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"==typeof s.filter?r=(0,s.filter)("",r):c(s.filter)&&(n=s.filter);var u,p=[];if("object"!=typeof r||null===r)return"";u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=i[u];n||(n=Object.keys(r)),s.sort&&n.sort(s.sort);for(var y=0;y<n.length;++y){var h=n[y];s.skipNulls&&null===r[h]||l(p,d(r[h],h,m,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.formatter,s.encodeValuesOnly,s.charset))}var b=p.join(s.delimiter),v=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),b.length>0?v+b:""}},function(e,t,n){"use strict";var r=n(5),o=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},s=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=n.depth>0&&/(\[[^[\]]*])/.exec(r),c=i?r.slice(0,i.index):r,l=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;l.push(c)}for(var u=0;n.depth>0&&null!==(i=a.exec(r))&&u<n.depth;){if(u+=1,!n.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!n.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+r.slice(i.index)+"]"),function(e,t,n){for(var r=s(t,n),o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i&&n.parseArrays)a=[].concat(r);else{a=n.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);n.parseArrays||""!==c?!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&n.parseArrays&&l<=n.arrayLimit?(a=[])[l]=r:a[c]=r:a={0:r}}r=a}return r}(l,t,n)}};e.exports=function(e,t){var n=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return n.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var n,l={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,p=t.parameterLimit===1/0?void 0:t.parameterLimit,f=u.split(t.delimiter,p),d=-1,m=t.charset;if(t.charsetSentinel)for(n=0;n<f.length;++n)0===f[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[n]?m="utf-8":"utf8=%26%2310003%3B"===f[n]&&(m="iso-8859-1"),d=n,n=f.length);for(n=0;n<f.length;++n)if(n!==d){var y,h,b=f[n],v=b.indexOf("]="),g=-1===v?b.indexOf("="):v+1;-1===g?(y=t.decoder(b,i.decoder,m,"key"),h=t.strictNullHandling?null:""):(y=t.decoder(b.slice(0,g),i.decoder,m,"key"),h=t.decoder(b.slice(g+1),i.decoder,m,"value")),h&&t.interpretNumericEntities&&"iso-8859-1"===m&&(h=c(h)),h=s(h,t),b.indexOf("[]=")>-1&&(h=a(h)?[h]:h),o.call(l,y)?l[y]=r.combine(l[y],h):l[y]=h}return l}(e,n):e,p=n.plainObjects?Object.create(null):{},f=Object.keys(u),d=0;d<f.length;++d){var m=f[d],y=l(m,u[m],n);p=r.merge(p,y,n)}return r.compact(p)}},function(e,t,n){"use strict";n.r(t),n.d(t,"asModal",(function(){return z})),n.d(t,"Modal",(function(){return W})),n.d(t,"ModalContainer",(function(){return X})),n.d(t,"ModalContext",(function(){return L})),n.d(t,"ModalProvider",(function(){return se})),n.d(t,"ModalToggler",(function(){return ye})),n.d(t,"useModal",(function(){return I})),n.d(t,"withModal",(function(){return pe}));var r=n(1),o=n.n(r),a=n(3),i=n.n(a),c=n(0),s=n.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function f(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var d=!1,m=o.a.createContext(null),y=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o="exited",r.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:o},r.nextCallback=null,r}p(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.a.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context?this.context.isMounting:t,a=this.getTimeouts(),i=o?a.appear:a.enter;!t&&!r||d?this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,o),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,o)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!d?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=u(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return o.a.createElement(m.Provider,{value:null},n(e,r));var a=o.a.Children.only(n);return o.a.createElement(m.Provider,{value:null},o.a.cloneElement(a,r))},t}(o.a.Component);function h(){}y.contextType=m,y.propTypes={},y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},y.UNMOUNTED=0,y.EXITED=1,y.ENTERING=2,y.ENTERED=3,y.EXITING=4;var b=y,v=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=f(n.className,r):n.setAttribute("class",f(n.className&&n.className.baseVal||"",r)));var n,r}))},g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=n?"appear":"enter";t.addClass(e,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=n?"appear":"enter";t.removeClasses(e,r),t.addClass(e,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}p(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,a=n.done;this.appliedClasses[t]={},r&&v(e,r),o&&v(e,o),a&&v(e,a)},n.render=function(){var e=this.props,t=(e.classNames,u(e,["classNames"]));return o.a.createElement(b,l({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component);g.defaultProps={classNames:""},g.propTypes={};var O=g,E=n(2),x=n.n(E);let j=!1;if("undefined"!=typeof window){const e={get passive(){j=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const P="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let w,S,C=[],N=!1,T=-1;const _=e=>C.some(t=>!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))),k=e=>{const t=e||window.event;return!!_(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},D=()=>{setTimeout(()=>{void 0!==S&&(document.body.style.paddingRight=S,S=void 0),void 0!==w&&(document.body.style.overflow=w,w=void 0)})},A=(e,t)=>{if(P){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!C.some(t=>t.targetElement===e)){const n={targetElement:e,options:t||{}};C=[...C,n],e.ontouchstart=e=>{1===e.targetTouches.length&&(T=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{const n=e.targetTouches[0].clientY-T;!_(e.target)&&(t&&0===t.scrollTop&&n>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&n<0?k(e):e.stopPropagation())})(t,e)},N||(document.addEventListener("touchmove",k,j?{passive:!1}:void 0),N=!0)}}else{(e=>{setTimeout(()=>{if(void 0===S){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(S=document.body.style.paddingRight,document.body.style.paddingRight=`${n}px`)}void 0===w&&(w=document.body.style.overflow,document.body.style.overflow="hidden")})})(t);const n={targetElement:e,options:t||{}};C=[...C,n]}},R=()=>{P?(C.forEach(e=>{e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),N&&(document.removeEventListener("touchmove",k,j?{passive:!1}:void 0),N=!1),C=[],T=-1):(D(),C=[])},M=e=>{if(P){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,C=C.filter(t=>t.targetElement!==e),N&&0===C.length&&(document.removeEventListener("touchmove",k,j?{passive:!1}:void 0),N=!1)}else C=C.filter(t=>t.targetElement!==e),C.length||D()};var L=o.a.createContext({}),I=function(){return Object(r.useContext)(L)},B=function(e){return e?{appear:"".concat(e,"--appear"),appearActive:"".concat(e,"--appearActive"),appearDone:"".concat(e,"--appearDone"),enter:"".concat(e,"--enter"),enterActive:"".concat(e,"--enterActive"),enterDone:"".concat(e,"--enterDone"),exit:"".concat(e,"--exit"),exitActive:"".concat(e,"--exitActive"),exitDone:"".concat(e,"--exitDone")}:{}};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e,t){var n=function(n){var a=I(),c=a.currentModal,s=a.classPrefix,l=a.containerRef,u=a.transTime,p=a.setCloseOnBlur,f=n.id,d=n.className,m=n.style,y=n.htmlElement,h=n.htmlAttributes,b=n.slug,v=n.closeOnBlur,g=n.lockScroll,E=t||b,j=c===E;Object(r.useEffect)((function(){j&&p(v)}),[j,v,p]);var P=Object(r.useRef)(null),w=Object(r.useCallback)((function(e){P.current=e}),[P]);if(Object(r.useEffect)((function(){return P.current&&(j&&g?A(P.current):M(P.current)),function(){return M(P.current)}}),[P,j,g]),l){var S="".concat(s,"__").concat("modal-item"),C=[S,"".concat(S,"--slug-").concat(E),d].filter(Boolean).join(" "),N=Q({role:"dialog"!==y?"dialog":void 0,open:j,"aria-modal":!0,"aria-label":h["aria-labelledby"]?void 0:E},h);return i.a.createPortal(o.a.createElement(O,{timeout:u,in:c===E,classNames:B(S),appear:!0},o.a.createElement(x.a,F({id:f||E,className:C,style:m,htmlElement:y,htmlAttributes:N},{ref:w}),o.a.createElement(e,Q({},n,{isOpen:j,modal:a})))),l)}return null};return n.defaultProps={id:void 0,className:void 0,style:{},htmlElement:"dialog",htmlAttributes:{},slug:"",autoFocus:!0,trapFocus:!0,returnFocus:!0,closeOnBlur:!0,lockScroll:!0},n.propTypes={id:s.a.string,className:s.a.string,style:s.a.shape({}),htmlElement:s.a.string,htmlAttributes:s.a.shape({id:s.a.string,className:s.a.string,style:s.a.shape({}),onClick:s.a.func}),slug:s.a.string,autoFocus:s.a.bool,trapFocus:s.a.bool,returnFocus:s.a.bool,closeOnBlur:s.a.bool,lockScroll:s.a.bool},n},V=function(e){return(0,e.children)(e.modal)};V.defaultProps={children:void 0},V.propTypes={children:s.a.func,modal:s.a.shape({}).isRequired};var W=z(V);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){var t=I(),n=t.oneIsOpen,r=t.classPrefix,a=t.transTime,i=t.setContainerRef,c=t.closeAll,s=t.closeOnBlur,l=e.id,u=e.className,p=e.style,f=e.htmlElement,d=e.htmlAttributes,m="".concat(r,"__").concat("modal-container"),y=[m,u].filter(Boolean).join(" "),h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d,{onClick:function(){s&&c(),"function"==typeof d.onClick&&d.onClick()}});return o.a.createElement(O,{in:n,timeout:a,classNames:B(m),appear:!0},o.a.createElement(x.a,q({id:l,className:y,style:p,htmlElement:f,htmlAttributes:h},{ref:i})))};G.defaultProps={id:void 0,className:void 0,style:{},htmlElement:"div",htmlAttributes:{}},G.propTypes={id:s.a.string,className:s.a.string,style:s.a.shape({}),htmlElement:s.a.string,htmlAttributes:s.a.shape({onClick:s.a.func})};var X=G,J=n(4),K=n.n(J);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?ne(e):t}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(s,e);var t,n,a,i,c=(t=s,function(){var e,n=oe(t);if(re()){var r=oe(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return te(this,e)});function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),ie(ne(e=c.call(this)),"closeAll",(function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=e.props.handleParamChange;if(t&&("function"==typeof n&&n({key:"modal",value:""}),"boolean"==typeof n&&n)){var r=e.getSearchQuery();delete r.modal;var o=K.a.stringify(r,{addQueryPrefix:!0}),a="".concat(window.location.pathname).concat(o);window.history.pushState({},"",a)}R(),e.setState({currentModal:"",oneIsOpen:!1})})),ie(ne(e),"open",(function(t){if(t){var n=e.props.handleParamChange;if("function"==typeof n&&n({key:"modal",value:t}),"boolean"==typeof n&&n){var r=e.getSearchQuery();r.modal=t;var o=K.a.stringify(r,{addQueryPrefix:!0}),a="".concat(window.location.pathname).concat(o);window.history.pushState({},"",a)}e.setState({currentModal:t,oneIsOpen:!0})}})),ie(ne(e),"toggle",(function(t){t===e.state.currentModal?e.closeAll():e.open(t)})),ie(ne(e),"getModalParam",(function(){return e.getSearchQuery().modal||""})),ie(ne(e),"getSearchQuery",(function(){return K.a.parse(window.location.search,{ignoreQueryPrefix:!0})})),ie(ne(e),"setContainerRef",(function(t){e.setState({containerRef:t})})),ie(ne(e),"setCloseOnBlur",(function(t){e.setState({closeOnBlur:t})})),ie(ne(e),"bindEsc",(function(t){27===t.keyCode&&e.closeAll()})),ie(ne(e),"minifyCSSString",(function(e){return e.replace(/\n/g,"").replace(/\s\s+/g," ")})),e.state={containerRef:void 0,currentModal:"",oneIsOpen:!1},e}return n=s,(a=[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){return e.bindEsc(t)}),!1);var t=this.getModalParam();this.setState({currentModal:t,oneIsOpen:Boolean(t)})}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",(function(t){return e.bindEsc(t)}),!1)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.generateCSS,a=e.classPrefix,i=e.minifyCSS,c=e.zIndex,s=e.transTime,l=this.state,u=l.containerRef,p=l.oneIsOpen,f=l.currentModal,d=l.closeOnBlur,m={containerRef:u,oneIsOpen:p,currentModal:f,closeAll:this.closeAll,closeOnBlur:d,setCloseOnBlur:this.setCloseOnBlur,open:this.open,toggle:this.toggle,setContainerRef:this.setContainerRef,classPrefix:a||"trbl",transTime:s},y="";return n&&(y=function(e,t){return"\n  .".concat(e,"__").concat("modal-container"," {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    pointer-events: none;\n    visibility: hidden;\n    z-index: -1;\n  }\n\n  .").concat(e,"__").concat("modal-container","--appear,\n  .").concat(e,"__").concat("modal-container","--appearDone,\n  .").concat(e,"__").concat("modal-container","--enter,\n  .").concat(e,"__").concat("modal-container","--enterDone,\n  .").concat(e,"__").concat("modal-container","--exit {\n    pointer-events: all;\n    visibility: visible;\n    z-index: ").concat(t,";\n  }\n\n  .").concat(e,"__").concat("modal-item"," {\n    position: absolute;\n    left: 0;\n    top: 0;\n    visibility: hidden;\n    border: unset;\n    background: unset;\n    padding: unset;\n  }\n\n  .").concat(e,"__").concat("modal-item","--appear,\n  .").concat(e,"__").concat("modal-item","--appearDone,\n  .").concat(e,"__").concat("modal-item","--enter,\n  .").concat(e,"__").concat("modal-item","--enterDone,\n  .").concat(e,"__").concat("modal-item","--exit {\n    visibility: visible;\n  }\n")}(a,c),i&&(y=this.minifyCSSString(y))),o.a.createElement(r.Fragment,null,n&&o.a.createElement("style",{dangerouslySetInnerHTML:{__html:y}}),o.a.createElement(L.Provider,{value:m},t&&t))}}])&&ee(n.prototype,a),i&&ee(n,i),s}(r.Component);ce.defaultProps={classPrefix:"",generateCSS:!0,minifyCSS:!0,zIndex:9999,transTime:1e3,handleParamChange:void 0,children:void 0},ce.propTypes={classPrefix:s.a.string,generateCSS:s.a.bool,minifyCSS:s.a.bool,zIndex:s.a.number,transTime:s.a.number,handleParamChange:s.a.oneOfType([s.a.func,s.a.bool]),children:s.a.node};var se=ce;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=function(e){return function(t){return o.a.createElement(L.Consumer,null,(function(n){return o.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{modal:n}))}))}};function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=function(e){var t=e.id,n=e.className,r=e.modal,a=r.currentModal,i=r.toggle,c=r.classPrefix,s=e.slug,l=e.style,u=e.htmlElement,p=e.htmlAttributes,f=e.children,d="".concat(c,"__modal-toggler"),m=a===s,y=[d,"".concat(d,"--slug-").concat(s),m&&"".concat(d,"--slug-").concat(s,"--is-open"),n].filter(Boolean).join(" "),h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({role:"button","aria-expanded":m?"true":"false","aria-controls":s},p,{onClick:function(){i(s),"function"==typeof p.onClick&&p.onClick()}});return o.a.createElement(x.a,{id:t,className:y,style:l,htmlElement:u,htmlAttributes:h},f&&f)};me.defaultProps={id:void 0,className:void 0,style:{},htmlElement:"button",htmlAttributes:{},children:void 0},me.propTypes={id:s.a.string,className:s.a.string,style:s.a.shape({}),htmlElement:s.a.string,htmlAttributes:s.a.shape({id:s.a.string,className:s.a.string,style:s.a.shape({}),onClick:s.a.func}),slug:s.a.string.isRequired,modal:s.a.shape({currentModal:s.a.string,toggle:s.a.func,classPrefix:s.a.string}).isRequired,children:s.a.node};var ye=pe(me)}]);
//# sourceMappingURL=build.bundle.js.map