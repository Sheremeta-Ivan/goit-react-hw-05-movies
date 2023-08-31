(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{126:function(e,t,n){"use strict";n(791);var r=n(87),o=n(353),i=n(184);t.Z=function(e){var t=e.films;return(0,i.jsx)("ul",{className:"container ml-auto mr-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8  pl-6 pr-6",children:t.map((function(e){return(0,i.jsx)("li",{className:"max-w-xs ml-auto mr-auto bg-card border border-gray-200 rounded-lg ease-in duration-300 shadow hover:scale-105 ",children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(e.id),children:[(0,i.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(o),alt:e.title,className:"rounded-t-lg"}),(0,i.jsx)("p",{className:"mb-2 mt-3 text-2xl font-bold tracking-tight text-white text-center",children:e.title})]})},e.id)}))})}},640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(861),o=n(439),i=n(757),u=n.n(i),a=n(323),c=n(231),s=n(87),l=n(791),f=n(628),p=n(184),d=function(e){var t=e.value,n=e.onChange;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"pl-6 pr-6 container text-center ml-auto mr-auto",children:[(0,p.jsx)("h2",{className:"mb-10 mt-10 text-4xl font-bold tracking-tight text-white",children:"Movie Search"}),(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,p.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,p.jsx)("path",{stroke:"white",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,p.jsx)(f.DebounceInput,{className:"text-white block w-full p-4 pl-10 text-m border border-header-color rounded-lg bg-card mb-[40px]",type:"text",debounceTimeout:500,value:t,onChange:function(e){return n(e.target.value)},placeholder:"Type here"})]})]})})},v=n(126),y=function(){var e=(0,l.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],f=(0,s.lr)(),y=(0,o.Z)(f,2),h=y[0],b=y[1],m=h.get("query")||"",g=(0,l.useState)(!1),w=(0,o.Z)(g,2),O=w[0],j=w[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,a.o1)(m);case 4:t=e.sent,i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,p.jsx)("div",{className:"h-full",children:(0,p.jsxs)(c.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:[(0,p.jsx)(d,{value:m,onChange:function(e){b(""!==e&&{query:e})}}),O?(0,p.jsx)(c.Z,{count:15,style:{height:30,width:300,marginTop:15}}):0===n.length&&m?(0,p.jsx)("h2",{className:"mb-10 mt-10 text-3xl text-center font-thin tracking-tight text-white",children:"\ud83d\udd0e Nothing found"}):(0,p.jsx)(v.Z,{films:n})]})})}},323:function(e,t,n){"use strict";n.d(t,{Hx:function(){return p},Y5:function(){return s},o1:function(){return l},uV:function(){return f},wr:function(){return c}});var r=n(861),o=n(757),i=n.n(o),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var a={params:{api_key:"1527ea54837c90bfc98da5bb8785a014",language:"en-US"}},c=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day",a);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?query=".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?"),a);case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?"),a);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},95:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,l=c||s||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return l.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,a,c,s=0,l=!1,f=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function g(e){return s=e,a=setTimeout(O,t),l?m(e):u}function w(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-s>=i}function O(){var e=v();if(w(e))return j(e);a=setTimeout(O,function(e){var n=t-(e-c);return f?d(n,i-(e-s)):n}(e))}function j(e){return a=void 0,b&&r?m(e):(r=o=void 0,u)}function x(){var e=v(),n=w(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return g(c);if(f)return a=setTimeout(O,t),m(c)}return void 0===a&&(a=setTimeout(O,t)),u}return t=h(t)||0,y(n)&&(l=!!n.leading,i=(f="maxWait"in n)?p(h(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=c=o=a=void 0},x.flush=function(){return void 0===a?u:j(v())},x}},674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=a(n(791)),i=a(n(95)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,r,a=d(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),b(y(t=a.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(l(l({},e),{},{target:l(l({},e.target),{},{value:""})}))}))})),b(y(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),b(y(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),b(y(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,i.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),b(y(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),b(y(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(l(l({},e),{},{target:l(l({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=s,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,i=e.value,u=this.state.value;"undefined"!==typeof n&&i!==n&&u!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,i=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),a=n.forceNotifyOnBlur,s=n.onKeyDown,f=n.onBlur,p=n.inputRef,d=c(n,u),v=this.state.value;e=i?{onKeyDown:this.onKeyDown}:s?{onKeyDown:s}:{},t=a?{onBlur:this.onBlur}:f?{onBlur:f}:{};var y=p?{ref:p}:{};return o.default.createElement(r,l(l(l(l({},d),{},{onChange:this.onChange,value:v},e),t),y))}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.DebounceInput=m,b(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},628:function(e,t,n){"use strict";var r=n(674).DebounceInput;r.DebounceInput=r,e.exports=r},353:function(e,t,n){"use strict";e.exports=n.p+"static/media/placeholder.766050a83a9c288363de.png"},231:function(e,t,n){"use strict";n.d(t,{y:function(){return d},Z:function(){return p}});var r=n(439);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=n(791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],f=c.createContext({});function p(e){for(var t,n,o,i=e.count,l=void 0===i?1:i,p=e.wrapper,d=e.className,v=e.containerClassName,y=e.containerTestId,h=e.circle,b=void 0!==h&&h,m=e.style,g=a(e,s),w=c.useContext(f),O=u({},g),j=0,x=Object.entries(g);j<x.length;j++){var N=(0,r.Z)(x[j],2),k=N[0];"undefined"===typeof N[1]&&delete O[k]}var P=u(u(u({},w),O),{},{circle:b}),D=u(u({},m),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,o=e.height,i=e.borderRadius,u=e.circle,a=e.direction,c=e.duration,s=e.enableAnimation,l=void 0===s||s,f={};return"rtl"===a&&(f["--animation-direction"]="reverse"),"number"===typeof c&&(f["--animation-duration"]="".concat(c,"s")),l||(f["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(f.width=r),"string"!==typeof o&&"number"!==typeof o||(f.height=o),"string"!==typeof i&&"number"!==typeof i||(f.borderRadius=i),u&&(f.borderRadius="50%"),"undefined"!==typeof t&&(f["--base-color"]=t),"undefined"!==typeof n&&(f["--highlight-color"]=n),f}(P)),E="react-loading-skeleton";d&&(E+=" ".concat(d));for(var S=null!==(t=P.inline)&&void 0!==t&&t,Z=[],C=Math.ceil(l),T=0;T<C;T++){var _=D;if(C>l&&T===C-1){var B=null!==(n=_.width)&&void 0!==n?n:"100%",R=l%1,I="number"===typeof B?B*R:"calc(".concat(B," * ").concat(R,")");_=u(u({},_),{},{width:I})}var L=c.createElement("span",{className:E,style:_,key:T},"\u200c");S?Z.push(L):Z.push(c.createElement(c.Fragment,{key:T},L,c.createElement("br",null)))}return c.createElement("span",{className:v,"data-testid":y,"aria-live":"polite","aria-busy":null===(o=P.enableAnimation)||void 0===o||o},p?Z.map((function(e,t){return c.createElement(p,{key:t},e)})):Z)}function d(e){var t=e.children,n=a(e,l);return c.createElement(f.Provider,{value:n},t)}}}]);
//# sourceMappingURL=414.b03b0cb9.chunk.js.map