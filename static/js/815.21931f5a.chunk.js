"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[815],{4126:function(e,t,r){r(2791);var n=r(7689),a=r(1087),o=r(5353),c=r(184);t.Z=function(e){var t=e.films,r=(0,n.TH)();return(0,c.jsx)("ul",{className:"container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4  my-8 px-6",children:t.map((function(e){return(0,c.jsx)("li",{className:"max-w-[290px] 2xl:max-w-[340px] mx-auto bg-card border border-card rounded-lg ease-in duration-300 shadow hover:scale-105 ",children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e.id),className:"flex flex-col",state:{from:r},children:[(0,c.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(o),alt:e.title,className:"rounded-t-lg grow"}),(0,c.jsx)("p",{className:"my-3 text-2xl font-semibold tracking-tight text-white text-center truncate px-4 h-[10%]",children:e.title})]})},e.id)}))})}},9815:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(3433),a=r(5861),o=r(9439),c=r(7757),i=r.n(c),u=r(2791),s=r(7231),l=r(4126),p=r(6323),f=r(1243),d=(f.Z.Axios,f.Z.AxiosError,f.Z.CanceledError,f.Z.isCancel),m=(f.Z.CancelToken,f.Z.VERSION,f.Z.all,f.Z.Cancel,f.Z.isAxiosError,f.Z.spread,f.Z.toFormData,f.Z.AxiosHeaders,f.Z.HttpStatusCode,f.Z.formToJSON,f.Z.getAdapter,f.Z.mergeConfig,r(184)),h=function(){var e=(0,u.useState)([]),t=(0,o.Z)(e,2),r=t[0],c=t[1],f=(0,u.useState)(1),h=(0,o.Z)(f,2),g=h[0],v=h[1];(0,u.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,a.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.wr)(g,{signal:e.signal});case 3:r=t.sent,c((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r.results))})),t.next=12;break;case 7:if(t.prev=7,t.t0=t.catch(0),!d(t.t0)){t.next=11;break}return t.abrupt("return");case 11:console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[g]);return(0,m.jsxs)("div",{className:"container mx-auto",children:[(0,m.jsx)("h2",{className:"mb-10 mt-10 text-4xl font-bold tracking-tight text-center text-white",children:"Trending Movies"}),(0,m.jsx)(s.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:0===r.length?(0,m.jsx)(s.Z,{count:15,style:{height:30,width:300,marginTop:15,marginRight:"auto",marginLeft:"auto"}}):(0,m.jsxs)("div",{className:"mx-auto text-center",children:[(0,m.jsx)(l.Z,{films:r}),(0,m.jsx)("button",{onClick:function(){v((function(){return g+1}))},className:" bg-blue-500 hover:bg-card text-white font-bold py-2 px-4 rounded my-5 text-center transition-all ease-in",children:"Load More"})]})})]})}},6323:function(e,t,r){r.d(t,{Hx:function(){return f},IS:function(){return u},Y5:function(){return s},o1:function(){return l},uV:function(){return p},wr:function(){return i}});var n=r(5861),a=r(7757),o=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"1527ea54837c90bfc98da5bb8785a014",language:"en-US"};var i=function(){var e=(0,n.Z)(o().mark((function e(t,r){var n,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.signal,a={page:t},e.next=4,c.Z.get("trending/movie/day",{params:a,signal:n});case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/videos?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(o().mark((function e(t,r){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.signal,e.next=3,c.Z.get("/search/movie?query=".concat(t),{signal:n});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5353:function(e,t,r){e.exports=r.p+"static/media/placeholder.766050a83a9c288363de.png"},7231:function(e,t,r){r.d(t,{y:function(){return d},Z:function(){return f}});var n=r(9439);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=r(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],p=u.createContext({});function f(e){for(var t,r,a,o=e.count,l=void 0===o?1:o,f=e.wrapper,d=e.className,m=e.containerClassName,h=e.containerTestId,g=e.circle,v=void 0!==g&&g,b=e.style,x=i(e,s),y=u.useContext(p),w=c({},x),Z=0,j=Object.entries(x);Z<j.length;Z++){var O=(0,n.Z)(j[Z],2),k=O[0];"undefined"===typeof O[1]&&delete w[k]}var C=c(c(c({},y),w),{},{circle:v}),N=c(c({},b),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,a=e.height,o=e.borderRadius,c=e.circle,i=e.direction,u=e.duration,s=e.enableAnimation,l=void 0===s||s,p={};return"rtl"===i&&(p["--animation-direction"]="reverse"),"number"===typeof u&&(p["--animation-duration"]="".concat(u,"s")),l||(p["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(p.width=n),"string"!==typeof a&&"number"!==typeof a||(p.height=a),"string"!==typeof o&&"number"!==typeof o||(p.borderRadius=o),c&&(p.borderRadius="50%"),"undefined"!==typeof t&&(p["--base-color"]=t),"undefined"!==typeof r&&(p["--highlight-color"]=r),p}(C)),E="react-loading-skeleton";d&&(E+=" ".concat(d));for(var P=null!==(t=C.inline)&&void 0!==t&&t,S=[],A=Math.ceil(l),R=0;R<A;R++){var T=N;if(A>l&&R===A-1){var _=null!==(r=T.width)&&void 0!==r?r:"100%",D=l%1,I="number"===typeof _?_*D:"calc(".concat(_," * ").concat(D,")");T=c(c({},T),{},{width:I})}var H=u.createElement("span",{className:E,style:T,key:R},"\u200c");P?S.push(H):S.push(u.createElement(u.Fragment,{key:R},H,u.createElement("br",null)))}return u.createElement("span",{className:m,"data-testid":h,"aria-live":"polite","aria-busy":null===(a=C.enableAnimation)||void 0===a||a},f?S.map((function(e,t){return u.createElement(f,{key:t},e)})):S)}function d(e){var t=e.children,r=i(e,l);return u.createElement(p.Provider,{value:r},t)}}}]);
//# sourceMappingURL=815.21931f5a.chunk.js.map