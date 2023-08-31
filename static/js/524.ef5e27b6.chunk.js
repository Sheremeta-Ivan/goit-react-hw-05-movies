"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[524],{126:function(e,t,r){r(791);var n=r(87),a=r(353),c=r(184);t.Z=function(e){var t=e.films;return(0,c.jsx)("ul",{className:"container ml-auto mr-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8  my-8",children:t.map((function(e){return(0,c.jsx)("li",{className:"max-w-xs ml-auto mr-auto bg-card border border-card rounded-lg ease-in duration-300 shadow hover:scale-105 ",children:(0,c.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:"flex flex-col",children:[(0,c.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(a),alt:e.title,className:"rounded-t-lg grow"}),(0,c.jsx)("p",{className:"mb-2 mt-3 text-2xl font-semibold tracking-tight text-white text-center truncate px-4 h-[10%]",children:e.title})]})},e.id)}))})}},524:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),o=r.n(c),i=r(791),u=r(231),s=r(126),l=r(323),p=r(184),f=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.wr)();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:"mb-10 mt-10 text-4xl font-bold tracking-tight text-center text-white",children:"Trending Movies"}),(0,p.jsx)(u.y,{baseColor:"#dddddd",highlightColor:"#a5a5a5",children:0===r.length?(0,p.jsx)(u.Z,{count:15,style:{height:30,width:300,marginTop:15,marginRight:"auto",marginLeft:"auto"}}):(0,p.jsx)(s.Z,{films:r})})]})}},323:function(e,t,r){r.d(t,{Hx:function(){return f},Y5:function(){return s},o1:function(){return l},uV:function(){return p},wr:function(){return u}});var n=r(861),a=r(757),c=r.n(a),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i={params:{api_key:"1527ea54837c90bfc98da5bb8785a014",language:"en-US"}},u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day",i);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(t),i);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie?query=".concat(t),i);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?"),i);case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?"),i);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},353:function(e,t,r){e.exports=r.p+"static/media/placeholder.766050a83a9c288363de.png"},231:function(e,t,r){r.d(t,{y:function(){return d},Z:function(){return f}});var n=r(439);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=r(791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=["children"],p=u.createContext({});function f(e){for(var t,r,a,c=e.count,l=void 0===c?1:c,f=e.wrapper,d=e.className,m=e.containerClassName,h=e.containerTestId,v=e.circle,b=void 0!==v&&v,g=e.style,y=i(e,s),x=u.useContext(p),w=o({},y),j=0,O=Object.entries(y);j<O.length;j++){var k=(0,n.Z)(O[j],2),Z=k[0];"undefined"===typeof k[1]&&delete w[Z]}var N=o(o(o({},x),w),{},{circle:b}),P=o(o({},g),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,a=e.height,c=e.borderRadius,o=e.circle,i=e.direction,u=e.duration,s=e.enableAnimation,l=void 0===s||s,p={};return"rtl"===i&&(p["--animation-direction"]="reverse"),"number"===typeof u&&(p["--animation-duration"]="".concat(u,"s")),l||(p["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(p.width=n),"string"!==typeof a&&"number"!==typeof a||(p.height=a),"string"!==typeof c&&"number"!==typeof c||(p.borderRadius=c),o&&(p.borderRadius="50%"),"undefined"!==typeof t&&(p["--base-color"]=t),"undefined"!==typeof r&&(p["--highlight-color"]=r),p}(N)),C="react-loading-skeleton";d&&(C+=" ".concat(d));for(var E=null!==(t=N.inline)&&void 0!==t&&t,_=[],R=Math.ceil(l),S=0;S<R;S++){var D=P;if(R>l&&S===R-1){var T=null!==(r=D.width)&&void 0!==r?r:"100%",U=l%1,I="number"===typeof T?T*U:"calc(".concat(T," * ").concat(U,")");D=o(o({},D),{},{width:I})}var L=u.createElement("span",{className:C,style:D,key:S},"\u200c");E?_.push(L):_.push(u.createElement(u.Fragment,{key:S},L,u.createElement("br",null)))}return u.createElement("span",{className:m,"data-testid":h,"aria-live":"polite","aria-busy":null===(a=N.enableAnimation)||void 0===a||a},f?_.map((function(e,t){return u.createElement(f,{key:t},e)})):_)}function d(e){var t=e.children,r=i(e,l);return u.createElement(p.Provider,{value:r},t)}}}]);
//# sourceMappingURL=524.ef5e27b6.chunk.js.map