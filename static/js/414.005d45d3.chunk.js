(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{126:function(e,t,n){"use strict";n(791);var r=n(87),o=n(184);t.Z=function(e){var t=e.films;return(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{className:"border-[4px] w-[300px] border-red-300",children:(0,o.jsxs)(r.rU,{to:"/movies/".concat(e.id),children:[(0,o.jsx)("p",{children:e.title}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,width:200})]})},e.id)}))})}},640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(861),o=n(439),i=n(757),u=n.n(i),c=n(323),a=n(231),f=n(87),s=n(791),l=n(628),p=n(184),y=function(e){var t=e.value,n=e.onChange;return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,p.jsx)("h2",{children:"Movie Search"}),(0,p.jsx)(l.DebounceInput,{type:"text",debounceTimeout:500,value:t,onChange:function(e){return n(e.target.value)},placeholder:"Type here"})]})},v=n(126),d=function(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],l=(0,f.lr)(),d=(0,o.Z)(l,2),b=d[0],h=d[1],m=b.get("query")||"",g=(0,s.useState)(!1),O=(0,o.Z)(g,2),w=O[0],j=O[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,c.o1)(m);case 4:t=e.sent,i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,p.jsx)("div",{children:(0,p.jsxs)(a.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:[(0,p.jsx)(y,{value:m,onChange:function(e){h(""!==e&&{query:e})}}),w?(0,p.jsx)(a.Z,{count:15,style:{height:30,width:300,marginTop:15}}):0===n.length&&m?(0,p.jsx)("h2",{children:"\ud83d\udd0e Nothing found"}):(0,p.jsx)(v.Z,{films:n})]})})}},323:function(e,t,n){"use strict";n.d(t,{Hx:function(){return p},Y5:function(){return f},o1:function(){return s},uV:function(){return l},wr:function(){return a}});var r=n(861),o=n(757),i=n.n(o),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:"1527ea54837c90bfc98da5bb8785a014",language:"en-US"}},a=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day",c);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t),c);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?query=".concat(t),c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?"),c);case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?"),c);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},95:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=a||f||Function("return this")(),l=Object.prototype.toString,p=Math.max,y=Math.min,v=function(){return s.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,c,a,f=0,s=!1,l=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function g(e){return f=e,c=setTimeout(w,t),s?m(e):u}function O(e){var n=e-a;return void 0===a||n>=t||n<0||l&&e-f>=i}function w(){var e=v();if(O(e))return j(e);c=setTimeout(w,function(e){var n=t-(e-a);return l?y(n,i-(e-f)):n}(e))}function j(e){return c=void 0,h&&r?m(e):(r=o=void 0,u)}function x(){var e=v(),n=O(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return g(a);if(l)return c=setTimeout(w,t),m(a)}return void 0===c&&(c=setTimeout(w,t)),u}return t=b(t)||0,d(n)&&(s=!!n.leading,i=(l="maxWait"in n)?p(b(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=a=o=c=void 0},x.flush=function(){return void 0===c?u:j(v())},x}},674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=c(n(791)),i=c(n(95)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(f,e);var t,n,r,c=y(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),h(d(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(s(s({},e),{},{target:s(s({},e.target),{},{value:""})}))}))})),h(d(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),h(d(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),h(d(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,i.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),h(d(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),h(d(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(s(s({},e),{},{target:s(s({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=f,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,i=e.value,u=this.state.value;"undefined"!==typeof n&&i!==n&&u!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,i=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,f=n.onKeyDown,l=n.onBlur,p=n.inputRef,y=a(n,u),v=this.state.value;e=i?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},t=c?{onBlur:this.onBlur}:l?{onBlur:l}:{};var d=p?{ref:p}:{};return o.default.createElement(r,s(s(s(s({},y),{},{onChange:this.onChange,value:v},e),t),d))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o.default.PureComponent);t.DebounceInput=m,h(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},628:function(e,t,n){"use strict";var r=n(674).DebounceInput;r.DebounceInput=r,e.exports=r},231:function(e,t,n){"use strict";n.d(t,{y:function(){return y},Z:function(){return p}});var r=n(439);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=n(791),f=["count","wrapper","className","containerClassName","containerTestId","circle","style"],s=["children"],l=a.createContext({});function p(e){for(var t,n,o,i=e.count,s=void 0===i?1:i,p=e.wrapper,y=e.className,v=e.containerClassName,d=e.containerTestId,b=e.circle,h=void 0!==b&&b,m=e.style,g=c(e,f),O=a.useContext(l),w=u({},g),j=0,x=Object.entries(g);j<x.length;j++){var P=(0,r.Z)(x[j],2),D=P[0];"undefined"===typeof P[1]&&delete w[D]}var N=u(u(u({},O),w),{},{circle:h}),k=u(u({},m),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,o=e.height,i=e.borderRadius,u=e.circle,c=e.direction,a=e.duration,f=e.enableAnimation,s=void 0===f||f,l={};return"rtl"===c&&(l["--animation-direction"]="reverse"),"number"===typeof a&&(l["--animation-duration"]="".concat(a,"s")),s||(l["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(l.width=r),"string"!==typeof o&&"number"!==typeof o||(l.height=o),"string"!==typeof i&&"number"!==typeof i||(l.borderRadius=i),u&&(l.borderRadius="50%"),"undefined"!==typeof t&&(l["--base-color"]=t),"undefined"!==typeof n&&(l["--highlight-color"]=n),l}(N)),E="react-loading-skeleton";y&&(E+=" ".concat(y));for(var S=null!==(t=N.inline)&&void 0!==t&&t,C=[],T=Math.ceil(s),Z=0;Z<T;Z++){var _=k;if(T>s&&Z===T-1){var B=null!==(n=_.width)&&void 0!==n?n:"100%",R=s%1,I="number"===typeof B?B*R:"calc(".concat(B," * ").concat(R,")");_=u(u({},_),{},{width:I})}var K=a.createElement("span",{className:E,style:_,key:Z},"\u200c");S?C.push(K):C.push(a.createElement(a.Fragment,{key:Z},K,a.createElement("br",null)))}return a.createElement("span",{className:v,"data-testid":d,"aria-live":"polite","aria-busy":null===(o=N.enableAnimation)||void 0===o||o},p?C.map((function(e,t){return a.createElement(p,{key:t},e)})):C)}function y(e){var t=e.children,n=c(e,s);return a.createElement(l.Provider,{value:n},t)}}}]);
//# sourceMappingURL=414.005d45d3.chunk.js.map