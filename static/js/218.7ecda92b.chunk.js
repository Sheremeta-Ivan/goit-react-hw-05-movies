/*! For license information please see 218.7ecda92b.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[218],{8262:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!==o--;){var i=a[o];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}},5102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2134:function(e,t,r){"use strict";r.d(t,{pHD:function(){return f}});var n=r(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return n.createElement(c,i({attr:i({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var r,o=e.attr,a=e.size,l=e.title,u=s(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]})(e)}},9686:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n=r(5671),o=r(3144),a=r(136),i=r(4104),s=r(7762),l=r(7757),u=r.n(l),c=r(2007),f=r.n(c),d=r(2791),p=r(8262),y=r.n(p),h=r(6071),v=r.n(h),g=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,C=function(e,t,r){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},S=function(e,t){for(var r in t||(t={}))w.call(t,r)&&C(e,r,t[r]);if(P){var n,o=(0,s.Z)(P(t));try{for(o.s();!(n=o.n()).done;){r=n.value;E.call(t,r)&&C(e,r,t[r])}}catch(a){o.e(a)}finally{o.f()}}return e},O=function(e,t){return m(e,b(t))};function A(e,t){var r,n;if(e.videoId!==t.videoId)return!0;var o=(null==(r=e.opts)?void 0:r.playerVars)||{},a=(null==(n=t.opts)?void 0:n.playerVars)||{};return o.start!==a.start||o.end!==a.end}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O(S({},e),{height:0,width:0,playerVars:O(S({},e.playerVars),{autoplay:0,start:0,end:0})})}function x(e,t){return e.videoId!==t.videoId||!y()(k(e.opts),k(t.opts))}function _(e,t){var r,n,o,a;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var N={videoId:f().string,id:f().string,className:f().string,iframeClassName:f().string,style:f().object,title:f().string,loading:f().oneOf(["lazy","eager"]),opts:f().objectOf(f().any),onReady:f().func,onError:f().func,onPlay:f().func,onPause:f().func,onEnd:f().func,onStateChange:f().func,onPlaybackRateChange:f().func,onPlaybackQualityChange:f().func},I=function(e){(0,a.Z)(r,e);var t=(0,i.Z)(r);function r(e){var o;return(0,n.Z)(this,r),(o=t.call(this,e)).destroyPlayerPromise=void 0,o.onPlayerReady=function(e){var t,r;return null==(r=(t=o.props).onReady)?void 0:r.call(t,e)},o.onPlayerError=function(e){var t,r;return null==(r=(t=o.props).onError)?void 0:r.call(t,e)},o.onPlayerStateChange=function(e){var t,n,a,i,s,l,u,c;switch(null==(n=(t=o.props).onStateChange)||n.call(t,e),e.data){case r.PlayerState.ENDED:null==(i=(a=o.props).onEnd)||i.call(a,e);break;case r.PlayerState.PLAYING:null==(l=(s=o.props).onPlay)||l.call(s,e);break;case r.PlayerState.PAUSED:null==(c=(u=o.props).onPause)||c.call(u,e)}},o.onPlayerPlaybackRateChange=function(e){var t,r;return null==(r=(t=o.props).onPlaybackRateChange)?void 0:r.call(t,e)},o.onPlayerPlaybackQualityChange=function(e){var t,r;return null==(r=(t=o.props).onPlaybackQualityChange)?void 0:r.call(t,e)},o.destroyPlayer=function(){return o.internalPlayer?(o.destroyPlayerPromise=o.internalPlayer.destroy().then((function(){return o.destroyPlayerPromise=void 0})),o.destroyPlayerPromise):Promise.resolve()},o.createPlayer=function(){if("undefined"!==typeof document)if(o.destroyPlayerPromise)o.destroyPlayerPromise.then(o.createPlayer);else{var e=O(S({},o.props.opts),{videoId:o.props.videoId});o.internalPlayer=v()(o.container,e),o.internalPlayer.on("ready",o.onPlayerReady),o.internalPlayer.on("error",o.onPlayerError),o.internalPlayer.on("stateChange",o.onPlayerStateChange),o.internalPlayer.on("playbackRateChange",o.onPlayerPlaybackRateChange),o.internalPlayer.on("playbackQualityChange",o.onPlayerPlaybackQualityChange),(o.props.title||o.props.loading)&&o.internalPlayer.getIframe().then((function(e){o.props.title&&e.setAttribute("title",o.props.title),o.props.loading&&e.setAttribute("loading",o.props.loading)}))}},o.resetPlayer=function(){return o.destroyPlayer().then(o.createPlayer)},o.updatePlayer=function(){var e;null==(e=o.internalPlayer)||e.getIframe().then((function(e){o.props.id?e.setAttribute("id",o.props.id):e.removeAttribute("id"),o.props.iframeClassName?e.setAttribute("class",o.props.iframeClassName):e.removeAttribute("class"),o.props.opts&&o.props.opts.width?e.setAttribute("width",o.props.opts.width.toString()):e.removeAttribute("width"),o.props.opts&&o.props.opts.height?e.setAttribute("height",o.props.opts.height.toString()):e.removeAttribute("height"),o.props.title?e.setAttribute("title",o.props.title):e.setAttribute("title","YouTube video player"),o.props.loading?e.setAttribute("loading",o.props.loading):e.removeAttribute("loading")}))},o.getInternalPlayer=function(){return o.internalPlayer},o.updateVideo=function(){var e,t,r,n;if("undefined"!==typeof o.props.videoId&&null!==o.props.videoId){var a=!1,i={videoId:o.props.videoId};(null==(t=o.props.opts)?void 0:t.playerVars)&&(a=1===o.props.opts.playerVars.autoplay,"start"in o.props.opts.playerVars&&(i.startSeconds=o.props.opts.playerVars.start),"end"in o.props.opts.playerVars&&(i.endSeconds=o.props.opts.playerVars.end)),a?null==(r=o.internalPlayer)||r.loadVideoById(i):null==(n=o.internalPlayer)||n.cueVideoById(i)}else null==(e=o.internalPlayer)||e.stopVideo()},o.refContainer=function(e){o.container=e},o.container=null,o.internalPlayer=null,o}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){return t=this,r=null,n=u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_(e,this.props)&&this.updatePlayer(),!x(e,this.props)){t.next=4;break}return t.next=4,this.resetPlayer();case 4:A(e,this.props)&&this.updateVideo();case 5:case"end":return t.stop()}}),t,this)})),new Promise((function(e,o){var a=function(e){try{s(n.next(e))}catch(t){o(t)}},i=function(e){try{s(n.throw(e))}catch(t){o(t)}},s=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(a,i)};s((n=n.apply(t,r)).next())}));var t,r,n}},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"render",value:function(){return d.createElement("div",{className:this.props.className,style:this.props.style},d.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}}]),r}(d.Component);I.propTypes=N,I.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},I.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var R=I},3457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},6364:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(5439),a=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},1698:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(2788)),o=s(r(5506)),a=s(r(626)),i=s(r(6364));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,i=void 0;try{for(var s,u=a.default[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){r(s.value)}}catch(c){o=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=i.default[n],o=e.getPlayerState(),a=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(a),r())}))})).then((function(){return a})):a}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},a=!0,s=!1,l=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var f=u.value;n(f)}}catch(d){s=!0,l=d}finally{try{!a&&c.return&&c.return()}finally{if(s)throw l}}return r}};t.default=u,e.exports=t.default},5439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},5506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},6071:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(r(3457)),a=s(r(1642)),i=s(r(1698));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(l||(l=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(r){"object"===("undefined"===typeof e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var o=new n.Player(e,t);return s.on("ready",(function(){r(o)})),null}))})),c=i.default.promisifyPlayer(u,r);return c.on=s.on,c.off=s.off,c},e.exports=t.default},1642:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(5102),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},2788:function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=r(3572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=n,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},3572:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var o=t.formatters[n];if("function"===typeof o){var a=i[l];r=o.call(e,a),i.splice(l,1),l--}return r})),t.formatArgs.call(e,i);var u=r.log||t.log||console.log.bind(console);u.apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"===typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"===typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(9426),t.names=[],t.skips=[],t.formatters={}},9426:function(e){var t=1e3,r=60*t,n=60*r,o=24*n,a=365.25*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,o,"day")||i(l,n,"hour")||i(l,r,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=218.7ecda92b.chunk.js.map