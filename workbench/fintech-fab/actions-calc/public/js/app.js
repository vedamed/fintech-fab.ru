window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=Z.type(e);return"function"===n||Z.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return U.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=ht[e]={};return Z.each(e.match(dt)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+Math.random()}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(bt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:xt.test(n)?Z.parseJSON(n):n}catch(i){}yt.set(e,t,n)}else n=void 0;return n}function l(){return!0}function c(){return!1}function f(){try{return J.activeElement}catch(e){}}function p(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Pt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,r=e.length;r>n;n++)vt.set(e[n],"globalEval",!t||vt.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(vt.hasData(e)&&(o=vt.access(e),s=vt.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)Z.event.add(t,i,l[i][n])}yt.hasData(e)&&(a=yt.access(e),u=Z.extend({},a),yt.set(t,u))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Nt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function x(t,n){var r,i=Z(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Z.css(i[0],"display");return i.detach(),o}function b(e){var t=J,n=$t[e];return n||(n=x(e,t),"none"!==n&&n||(Wt=(Wt||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Wt[0].contentDocument,t.write(),t.close(),n=x(e,t),Wt.detach()),$t[e]=n),n}function w(e,t,n){var r,i,o,s,a=e.style;return n=n||_t(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),It.test(s)&&Bt.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Gt.length;i--;)if(t=Gt[i]+n,t in e)return t;return r}function N(e,t,n){var r=Xt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+Tt[o],!0,i)),r?("content"===n&&(s-=Z.css(e,"padding"+Tt[o],!0,i)),"margin"!==n&&(s-=Z.css(e,"border"+Tt[o]+"Width",!0,i))):(s+=Z.css(e,"padding"+Tt[o],!0,i),"padding"!==n&&(s+=Z.css(e,"border"+Tt[o]+"Width",!0,i)));return s}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=_t(e),s="border-box"===Z.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=w(e,t,o),(0>i||null==i)&&(i=e.style[t]),It.test(i))return i;r=s&&(Q.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(s?"border":"content"),r,o)+"px"}function S(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=vt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Ct(r)&&(o[s]=vt.access(r,"olddisplay",b(r.nodeName)))):(i=Ct(r),"none"===n&&i||vt.set(r,"olddisplay",i?n:Z.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function j(e,t,n,r,i){return new j.prototype.init(e,t,n,r,i)}function D(){return setTimeout(function(){Qt=void 0}),Qt=Z.now()}function A(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Tt[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function L(e,t,n){for(var r,i=(nn[t]||[]).concat(nn["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function q(e,t,n){var r,i,o,s,a,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&Ct(e),g=vt.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=Z.css(e,"display"),c="none"===l?vt.get(e,"olddisplay")||b(e.nodeName):l,"inline"===c&&"none"===Z.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Kt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||Z.style(e,r)}else l=void 0;if(Z.isEmptyObject(p))"inline"===("none"===l?b(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=vt.access(e,"fxshow",{}),o&&(g.hidden=!h),h?Z(e).show():f.done(function(){Z(e).hide()}),f.done(function(){var t;vt.remove(e,"fxshow");for(t in p)Z.style(e,t,p[t])});for(r in p)s=L(h?g[r]:0,r,f),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function H(e,t){var n,r,i,o,s;for(n in e)if(r=Z.camelCase(n),i=t[r],o=e[n],Z.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=Z.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function O(e,t,n){var r,i,o=0,s=tn.length,a=Z.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qt||D(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qt||D(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Z.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(H(c,l.opts.specialEasing);s>o;o++)if(r=tn[o].call(l,e,c,l.opts))return r;return Z.map(c,L,l),Z.isFunction(l.opts.start)&&l.opts.start.call(e,l),Z.fx.timer(Z.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(dt)||[];if(Z.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function P(e,t,n,r){function i(a){var u;return o[a]=!0,Z.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===Tn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function M(e,t){var n,r,i=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Z.extend(!0,e,r),e}function R(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function W(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function $(e,t,n,r){var i;if(Z.isArray(t))Z.each(t,function(t,i){n||En.test(e)?r(e,i):$(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Z.type(t))r(e,t);else for(i in t)$(e+"["+i+"]",t[i],n,r)}function B(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var I=[],_=I.slice,z=I.concat,X=I.push,U=I.indexOf,V={},Y=V.toString,G=V.hasOwnProperty,Q={},J=e.document,K="2.1.1",Z=function(e,t){return new Z.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,rt=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return _.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:_.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(_.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:X,sort:I.sort,splice:I.splice},Z.extend=Z.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(Z.isPlainObject(r)||(i=Z.isArray(r)))?(i?(i=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==Z.type(e)||e.nodeType||Z.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[Y.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,rt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Z.merge(r,"string"==typeof e?[e]:e):X.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:U.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return z.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(r=_.call(arguments,2),i=function(){return e.apply(t||this,r.concat(_.call(arguments)))},i.guid=e.guid=e.guid||Z.guid++,i):void 0},now:Date.now,support:Q}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()});var it=function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h,g;if((t?t.ownerDocument||t:$)!==q&&L(t),t=t||q,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(O&&!r){if(i=yt.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&R(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(s)),n}if(w.qsa&&(!F||!F.test(e))){if(d=f=W,h=t,g=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(l=k(e),(f=t.getAttribute("id"))?d=f.replace(bt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=xt.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return Z.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return S(e.replace(ut,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=q.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==V&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[B,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[W]||(t[W]={}),(a=u[r])&&a[0]===B&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function v(e,t,n,i,o,s){return i&&!i[W]&&(i=v(i)),o&&!o[W]&&(o=v(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,v=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:m(v,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y;if(n&&n(y,x,a,u),i)for(l=m(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?tt.call(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=m(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):Z.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return tt.call(t,e)>-1},s,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>a;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!T.relative[e[r].type];r++);return v(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ut,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],y=j,x=r||o&&T.find.TAG("*",l),b=B+=null==y?1:Math.random()||.1,w=x.length;for(l&&(j=s!==q&&s);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,s,a)){u.push(c);break}l&&(B=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,s,a);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=J.call(u));v=m(v)}Z.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(B=b,j=y),g};return i?r(s):s}var b,w,T,C,N,k,E,S,j,D,A,L,q,H,O,F,P,M,R,W="sizzle"+-new Date,$=e.document,B=0,I=0,_=n(),z=n(),X=n(),U=function(e,t){return e===t&&(A=!0),0},V="undefined",Y=1<<31,G={}.hasOwnProperty,Q=[],J=Q.pop,K=Q.push,Z=Q.push,et=Q.slice,tt=Q.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),st="\\["+rt+"*("+it+")(?:"+rt+"*([*^$|!~]?=)"+rt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+rt+"*\\]",at=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",ut=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),lt=new RegExp("^"+rt+"*,"+rt+"*"),ct=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),pt=new RegExp(at),dt=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xt=/[+~]/,bt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),Tt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(Q=et.call($.childNodes),$.childNodes),Q[$.childNodes.length].nodeType}catch(Ct){Z={apply:Q.length?function(e,t){K.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},N=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:$,r=n.defaultView;return n!==q&&9===n.nodeType&&n.documentElement?(q=n,H=n.documentElement,O=!N(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){L()},!1):r.attachEvent&&r.attachEvent("onunload",function(){L()})),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=vt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),w.getById=i(function(e){return H.appendChild(e).id=W,!n.getElementsByName||!n.getElementsByName(W).length}),w.getById?(T.find.ID=function(e,t){if(typeof t.getElementById!==V&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==V?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==V&&O?t.getElementsByClassName(e):void 0},P=[],F=[],(w.qsa=vt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&F.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||F.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=vt.test(M=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=M.call(e,"div"),M.call(e,"[s!='']:x"),P.push("!=",at)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),t=vt.test(H.compareDocumentPosition),R=t||vt.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return A=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!w.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===$&&R($,e)?-1:t===n||t.ownerDocument===$&&R($,t)?1:D?tt.call(D,e)-tt.call(D,t):0:4&r?-1:1)}:function(e,t){if(e===t)return A=!0,0;var r,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:D?tt.call(D,e)-tt.call(D,t):0;if(o===a)return s(e,t);for(r=e;r=r.parentNode;)u.unshift(r);for(r=t;r=r.parentNode;)l.unshift(r);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},n):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==q&&L(e),n=n.replace(ft,"='$1']"),!(!w.matchesSelector||!O||P&&P.test(n)||F&&F.test(n)))try{var r=M.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==q&&L(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==q&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&G.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(wt,Tt),e[3]=(e[3]||e[4]||e[5]||"").replace(wt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(wt,Tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(c=m[W]||(m[W]={}),l=c[e]||[],d=l[0]===B&&l[1],p=l[0]===B&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[B,d,p];break}}else if(y&&(l=(t[W]||(t[W]={}))[e])&&l[0]===B)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[W]||(f[W]={}))[e]=[B,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=tt.call(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(ut,"$1"));return i[W]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return dt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(wt,Tt).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return mt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=T.preFilter;a;){(!r||(i=lt.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=ct.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ut," ")}),a=a.slice(r.length));for(s in T.filter)!(i=ht[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):z(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=y(t[n]),o[W]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&k(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(t=(T.find.ID(s.matches[0].replace(wt,Tt),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=ht.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(wt,Tt),xt.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return(l||E(e,f))(r,t,!O,n,xt.test(e)&&c(t.parentNode)||t),n},w.sortStable=W.split("").sort(U).join("")===W,w.detectDuplicates=!!A,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(q.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Z.find=it,Z.expr=it.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=it.uniqueSort,Z.text=it.getText,Z.isXMLDoc=it.isXML,Z.contains=it.contains;var ot=Z.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Z.find.matchesSelector(r,e)?[r]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(i[t],this))return!0
}));for(t=0;n>t;t++)Z.find(e,i[t],r);return r=this.pushStack(n>1?Z.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ot.test(e)?Z(e):e||[],!1).length}});var ut,lt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ct=Z.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:lt.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ut).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),st.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=J.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof ut.ready?ut.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};ct.prototype=Z.fn,ut=Z(J);var ft=/^(?:parents|prev(?:Until|All))/,pt={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Z(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ot.test(e)||"string"!=typeof e?Z(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Z.unique(o):o)},index:function(e){return e?"string"==typeof e?U.call(Z(e),this[0]):U.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,r){var i=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Z.filter(r,i)),this.length>1&&(pt[e]||Z.unique(i),ft.test(e)&&i.reverse()),this.pushStack(i)}});var dt=/\S+/g,ht={};Z.Callbacks=function(e){e="string"==typeof e?ht[e]||o(e):Z.extend({},e);var t,n,r,i,s,a,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=u.length,r=!0;u&&s>a;a++)if(u[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function o(t){Z.each(t,function(t,n){var r=Z.type(n);"function"===r?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?s=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,u,n))>-1;)u.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,r):r}},i={};return r.pipe=r.then,Z.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=_.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,u=1===a?e:Z.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?_.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&Z.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}});var gt;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(gt.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(t){return gt||(gt=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),gt.promise(t)},Z.ready.promise();var mt=Z.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===Z.type(n)){i=!0;for(a in n)Z.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,Z.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Z(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Z.isEmptyObject(o))Z.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Z.isArray(t)?r=t.concat(t.map(Z.camelCase)):(i=Z.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(dt)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var vt=new a,yt=new a,xt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bt=/([A-Z])/g;Z.extend({hasData:function(e){return yt.hasData(e)||vt.hasData(e)},data:function(e,t,n){return yt.access(e,t,n)},removeData:function(e,t){yt.remove(e,t)},_data:function(e,t,n){return vt.access(e,t,n)},_removeData:function(e,t){vt.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=yt.get(o),1===o.nodeType&&!vt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=Z.camelCase(r.slice(5)),u(o,r,i[r])));vt.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){yt.set(this,e)}):mt(this,function(t){var n,r=Z.camelCase(e);if(o&&void 0===t){if(n=yt.get(o,e),void 0!==n)return n;if(n=yt.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=yt.get(this,r);yt.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&yt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){yt.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=vt.get(e,t),n&&(!r||Z.isArray(n)?r=vt.access(e,t,Z.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),r=n.length,i=n.shift(),o=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return vt.get(e,n)||vt.access(e,n,{empty:Z.Callbacks("once memory").add(function(){vt.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Z.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=vt.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var wt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Tt=["Top","Right","Bottom","Left"],Ct=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Nt=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var kt="undefined";Q.focusinBubbles="onfocusin"in e;var Et=/^key/,St=/^(?:mouse|pointer|contextmenu)|click/,jt=/^(?:focusinfocus|focusoutblur)$/,Dt=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=vt.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Z.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof Z!==kt&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(dt)||[""],l=t.length;l--;)a=Dt.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d&&(f=Z.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Z.event.special[d]||{},c=Z.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Z.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,s)!==!1||e.addEventListener&&e.addEventListener(d,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Z.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=vt.hasData(e)&&vt.get(e);if(m&&(u=m.events)){for(t=(t||"").match(dt)||[""],l=t.length;l--;)if(a=Dt.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=Z.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||Z.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)Z.event.remove(e,d+t[l],n,r,!0);Z.isEmptyObject(u)&&(delete m.handle,vt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||J],d=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||J,3!==r.nodeType&&8!==r.nodeType&&!jt.test(d+Z.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[Z.expando]?t:new Z.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Z.makeArray(n,[t]),f=Z.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Z.isWindow(r)){for(u=f.delegateType||d,jt.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||J)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(vt.get(s,"events")||{})[t.type]&&vt.get(s,"handle"),c&&c.apply(s,n),c=l&&s[l],c&&c.apply&&Z.acceptData(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Z.acceptData(r)||l&&Z.isFunction(r[d])&&!Z.isWindow(r)&&(a=r[l],a&&(r[l]=null),Z.event.triggered=d,r[d](),Z.event.triggered=void 0,a&&(r[l]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e);var t,n,r,i,o,s=[],a=_.call(arguments),u=(vt.get(this,"events")||{})[e.type]||[],l=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Z.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Z(i,this).index(u)>=0:Z.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=St.test(i)?this.mouseHooks:Et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Z.event.trigger(i,null,t):Z.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!Z.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Q.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=vt.access(r,t);i||r.addEventListener(e,n,!0),vt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=vt.access(r,t)-1;i?vt.access(r,t,i):(r.removeEventListener(e,n,!0),vt.remove(r,t))}}}),Z.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Z().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Z(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var At=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Lt=/<([\w:]+)/,qt=/<|&#?\w+;/,Ht=/<(?:script|style|link)/i,Ot=/checked\s*(?:[^=]|=\s*.checked.)/i,Ft=/^$|\/(?:java|ecma)script/i,Pt=/^true\/(.*)/,Mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Rt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Rt.optgroup=Rt.option,Rt.tbody=Rt.tfoot=Rt.colgroup=Rt.caption=Rt.thead,Rt.th=Rt.td,Z.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=Z.contains(e.ownerDocument,e);if(!(Q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),o=v(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||v(e),s=s||v(a),r=0,i=o.length;i>r;r++)m(o[r],s[r]);else m(e,a);return s=v(a,"script"),s.length>0&&g(s,!u&&v(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)if("object"===Z.type(i))Z.merge(f,i.nodeType?[i]:i);else if(qt.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(Lt.exec(i)||["",""])[1].toLowerCase(),a=Rt[s]||Rt._default,o.innerHTML=a[1]+i.replace(At,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;Z.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||-1===Z.inArray(i,r))&&(u=Z.contains(i.ownerDocument,i),o=v(c.appendChild(i),"script"),u&&g(o),n))for(l=0;i=o[l++];)Ft.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(i=n[vt.expando],i&&(t=vt.cache[i]))){if(t.events)for(r in t.events)o[r]?Z.event.remove(n,r):Z.removeEvent(n,r,t.handle);vt.cache[i]&&delete vt.cache[i]}delete yt.cache[n[yt.expando]]}}}),Z.fn.extend({text:function(e){return mt(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Z.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return mt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ht.test(e)&&!Rt[(Lt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(At,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=z.apply([],e);var n,r,i,o,s,a,u=0,l=this.length,c=this,f=l-1,p=e[0],g=Z.isFunction(p);if(g||l>1&&"string"==typeof p&&!Q.checkClone&&Ot.test(p))return this.each(function(n){var r=c.eq(n);g&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Z.map(v(n,"script"),d),o=i.length;l>u;u++)s=n,u!==f&&(s=Z.clone(s,!0,!0),o&&Z.merge(i,v(s,"script"))),t.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,Z.map(i,h),u=0;o>u;u++)s=i[u],Ft.test(s.type||"")&&!vt.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Mt,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,r=[],i=Z(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(i[s])[t](n),X.apply(r,n.get());return this.pushStack(r)}});var Wt,$t={},Bt=/^margin/,It=new RegExp("^("+wt+")(?!px)[a-z%]+$","i"),_t=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=J.documentElement,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Z.extend(Q,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),t}}))}(),Z.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var zt=/^(none|table(?!-c[ea]).+)/,Xt=new RegExp("^("+wt+")(.*)$","i"),Ut=new RegExp("^([+-])=("+wt+")","i"),Vt={position:"absolute",visibility:"hidden",display:"block"},Yt={letterSpacing:"0",fontWeight:"400"},Gt=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=w(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z.camelCase(t),u=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=C(u,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ut.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Z.css(e,t)),o="number"),void(null!=n&&n===n&&("number"!==o||Z.cssNumber[a]||(n+="px"),Q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=C(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=w(e,t,r)),"normal"===i&&t in Yt&&(i=Yt[t]),""===n||n?(o=parseFloat(i),n===!0||Z.isNumeric(o)?o||0:i):i}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,r){return n?zt.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Vt,function(){return E(e,t,r)}):E(e,t,r):void 0},set:function(e,n,r){var i=r&&_t(e);return N(e,n,r?k(e,t,r,"border-box"===Z.css(e,"boxSizing",!1,i),i):0)}}}),Z.cssHooks.marginRight=T(Q.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},w,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Tt[r]+t]=o[r]||o[r-2]||o[0];return i}},Bt.test(e)||(Z.cssHooks[e+t].set=N)}),Z.fn.extend({css:function(e,t){return mt(this,function(e,t,n){var r,i,o={},s=0;if(Z.isArray(t)){for(r=_t(e),i=t.length;i>s;s++)o[t[s]]=Z.css(e,t[s],!1,r);return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ct(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=j,j.prototype={constructor:j,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=j.propHooks[this.prop];return e&&e.get?e.get(this):j.propHooks._default.get(this)},run:function(e){var t,n=j.propHooks[this.prop];return this.pos=t=this.options.duration?Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):j.propHooks._default.set(this),this}},j.prototype.init.prototype=j.prototype,j.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},j.propHooks.scrollTop=j.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=j.prototype.init,Z.fx.step={};var Qt,Jt,Kt=/^(?:toggle|show|hide)$/,Zt=new RegExp("^(?:([+-])=|)("+wt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[q],nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Zt.exec(t),o=i&&i[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==o&&+r)&&Zt.exec(Z.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};Z.Animation=Z.extend(O,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),Z.speed=function(e,t,n){var r=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return r.duration=Z.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Z.fx.speeds?Z.fx.speeds[r.duration]:Z.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Z.isFunction(r.old)&&r.old.call(this),r.queue&&Z.dequeue(this,r.queue)},r},Z.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ct).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Z.isEmptyObject(e),o=Z.speed(t,n,r),s=function(){var t=O(this,Z.extend({},e),o);(i||vt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Z.timers,s=vt.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&en.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=vt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Z.timers,s=r?r.length:0;for(n.finish=!0,Z.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];
Z.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(A(t,!0),e,r,i)}}),Z.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Qt=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Qt=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Jt||(Jt=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Jt),Jt=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Q.checkOn=""!==e.value,Q.optSelected=n.selected,t.disabled=!0,Q.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Q.radioValue="t"===e.value}();var rn,on,sn=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return mt(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var r,i,o=e.nodeType;return e&&3!==o&&8!==o&&2!==o?typeof e.getAttribute===kt?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),r=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?on:rn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Z.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(dt);if(o&&1===e.nodeType)for(;n=o[i++];)r=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Q.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||Z.find.attr;sn[t]=function(e,t,r){var i,o;return r||(o=sn[t],sn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,sn[t]=o),i}});var an=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return mt(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?(o=1!==s||!Z.isXMLDoc(e),o&&(t=Z.propFix[t]||t,i=Z.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]):void 0},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Q.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var un=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(dt)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=Z.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(dt)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?Z.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Z(this),o=e.match(dt)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===kt||"boolean"===n)&&(this.className&&vt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":vt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(un," ").indexOf(t)>=0)return!0;return!1}});var ln=/\r/g;Z.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=Z.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Z(this).val()):e,null==i?i="":"number"==typeof i?i+="":Z.isArray(i)&&(i=Z.map(i,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=Z.valHooks[i.type]||Z.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ln,""):null==n?"":n)):void 0}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(Q.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Z.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=Z.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},Q.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var cn=Z.now(),fn=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var pn,dn,hn=/#.*$/,gn=/([?&])_=[^&]*/,mn=/^(.*?):[ \t]*([^\r\n]*)$/gm,vn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,yn=/^(?:GET|HEAD)$/,xn=/^\/\//,bn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,wn={},Tn={},Cn="*/".concat("*");try{dn=location.href}catch(Nn){dn=J.createElement("a"),dn.href="",dn=dn.href}pn=bn.exec(dn.toLowerCase())||[],Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:dn,type:"GET",isLocal:vn.test(pn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Cn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?M(M(e,Z.ajaxSettings),t):M(Z.ajaxSettings,e)},ajaxPrefilter:F(wn),ajaxTransport:F(Tn),ajax:function(e,t){function n(e,t,n,s){var u,c,v,y,b,T=t;2!==x&&(x=2,a&&clearTimeout(a),r=void 0,o=s||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(y=R(f,w,n)),y=W(f,y,w,u),u?(f.ifModified&&(b=w.getResponseHeader("Last-Modified"),b&&(Z.lastModified[i]=b),b=w.getResponseHeader("etag"),b&&(Z.etag[i]=b)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,u=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",u?h.resolveWith(p,[c,T,w]):h.rejectWith(p,[w,T,v]),w.statusCode(m),m=void 0,l&&d.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?c:v]),g.fireWith(p,[w,T]),l&&(d.trigger("ajaxComplete",[w,f]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,u,l,c,f=Z.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?Z(p):Z.event,h=Z.Deferred(),g=Z.Callbacks("once memory"),m=f.statusCode||{},v={},y={},x=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=mn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return r&&r.abort(t),n(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||dn)+"").replace(hn,"").replace(xn,pn[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Z.trim(f.dataType||"*").toLowerCase().match(dt)||[""],null==f.crossDomain&&(u=bn.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===pn[1]&&u[2]===pn[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(pn[3]||("http:"===pn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Z.param(f.data,f.traditional)),P(wn,f,t,w),2===x)return w;l=f.global,l&&0===Z.active++&&Z.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!yn.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(fn.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=gn.test(i)?i.replace(gn,"$1_="+cn++):i+(fn.test(i)?"&":"?")+"_="+cn++)),f.ifModified&&(Z.lastModified[i]&&w.setRequestHeader("If-Modified-Since",Z.lastModified[i]),Z.etag[i]&&w.setRequestHeader("If-None-Match",Z.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Cn+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)w.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===x))return w.abort();b="abort";for(c in{success:1,error:1,complete:1})w[c](f[c]);if(r=P(Tn,f,t,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},f.timeout));try{x=1,r.send(v,n)}catch(T){if(!(2>x))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,r,i){return Z.isFunction(n)&&(i=i||r,r=n,n=void 0),Z.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var kn=/%20/g,En=/\[\]$/,Sn=/\r?\n/g,jn=/^(?:submit|button|image|reset|file)$/i,Dn=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,r=[],i=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){i(this.name,this.value)});else for(n in e)$(n,e[n],t,i);return r.join("&").replace(kn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&Dn.test(this.nodeName)&&!jn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(Sn,"\r\n")}}):{name:t.name,value:n.replace(Sn,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var An=0,Ln={},qn={0:200,1223:204},Hn=Z.ajaxSettings.xhr();e.ActiveXObject&&Z(e).on("unload",function(){for(var e in Ln)Ln[e]()}),Q.cors=!!Hn&&"withCredentials"in Hn,Q.ajax=Hn=!!Hn,Z.ajaxTransport(function(e){var t;return Q.cors||Hn&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++An;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete Ln[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(qn[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Ln[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var On=[],Fn=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||Z.expando+"_"+cn++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(Fn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Fn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Fn,"$1"+i):t.jsonp!==!1&&(t.url+=(fn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Z.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,On.push(i)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var r=st.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Z.buildFragment([e],t,i),i&&i.length&&Z(i).remove(),Z.merge([],r.childNodes))};var Pn=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Pn)return Pn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Z.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Z("<div>").append(Z.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var Mn=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=Z.css(e,"position"),f=Z(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=Z.css(e,"top"),u=Z.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,Z.contains(t,r)?(typeof r.getBoundingClientRect!==kt&&(i=r.getBoundingClientRect()),n=B(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(r=e.offset()),r.top+=Z.css(e[0],"borderTopWidth",!0),r.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Z.css(n,"marginTop",!0),left:t.left-r.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Mn;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||Mn})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Z.fn[t]=function(i){return mt(this,function(t,i,o){var s=B(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=T(Q.pixelPosition,function(e,n){return n?(n=w(e,t),It.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Z.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return mt(this,function(t,n,r){var i;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Z.css(t,n,s):Z.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var Rn=e.jQuery,Wn=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=Wn),t&&e.jQuery===Z&&(e.jQuery=Rn),Z},typeof t===kt&&(e.jQuery=e.$=Z),Z});
!function (e) {
	"undefined" == typeof e.fn.each2 && e.extend(e.fn, {
		each2: function (t) {
			for (var s = e([0]), i = -1, n = this.length; ++i < n && (s.context = s[0] = this[i]) && t.call(s[0], i, s) !== !1;);
			return this
		}
	})
}(jQuery), function (e, t) {
	"use strict";
	function s(t) {
		var s = e(document.createTextNode(""));
		t.before(s), s.before(t), s.remove()
	}

	function i(e) {
		function t(e) {
			return j[e] || e
		}

		return e.replace(/[^\u0000-\u007E]/g, t)
	}

	function n(e, t) {
		for (var s = 0, i = t.length; i > s; s += 1)if (a(e, t[s]))return s;
		return -1
	}

	function o() {
		var t = e(z);
		t.appendTo("body");
		var s = {width: t.width() - t[0].clientWidth, height: t.height() - t[0].clientHeight};
		return t.remove(), s
	}

	function a(e, s) {
		return e === s ? !0 : e === t || s === t ? !1 : null === e || null === s ? !1 : e.constructor === String ? e + "" == s + "" : s.constructor === String ? s + "" == e + "" : !1
	}

	function r(t, s) {
		var i, n, o;
		if (null === t || t.length < 1)return [];
		for (i = t.split(s), n = 0, o = i.length; o > n; n += 1)i[n] = e.trim(i[n]);
		return i
	}

	function c(e) {
		return e.outerWidth(!1) - e.width()
	}

	function l(s) {
		var i = "keyup-change-value";
		s.on("keydown", function () {
			e.data(s, i) === t && e.data(s, i, s.val())
		}), s.on("keyup", function () {
			var n = e.data(s, i);
			n !== t && s.val() !== n && (e.removeData(s, i), s.trigger("keyup-change"))
		})
	}

	function h(s) {
		s.on("mousemove", function (s) {
			var i = F;
			(i === t || i.x !== s.pageX || i.y !== s.pageY) && e(s.target).trigger("mousemove-filtered", s)
		})
	}

	function u(e, s, i) {
		i = i || t;
		var n;
		return function () {
			var t = arguments;
			window.clearTimeout(n), n = window.setTimeout(function () {
				s.apply(i, t)
			}, e)
		}
	}

	function d(e, t) {
		var s = u(e, function (e) {
			t.trigger("scroll-debounced", e)
		});
		t.on("scroll", function (e) {
			n(e.target, t.get()) >= 0 && s(e)
		})
	}

	function p(e) {
		e[0] !== document.activeElement && window.setTimeout(function () {
			var t, s = e[0], i = e.val().length;
			e.focus();
			var n = s.offsetWidth > 0 || s.offsetHeight > 0;
			n && s === document.activeElement && (s.setSelectionRange ? s.setSelectionRange(i, i) : s.createTextRange && (t = s.createTextRange(), t.collapse(!1), t.select()))
		}, 0)
	}

	function f(t) {
		t = e(t)[0];
		var s = 0, i = 0;
		if ("selectionStart"in t)s = t.selectionStart, i = t.selectionEnd - s; else if ("selection"in document) {
			t.focus();
			var n = document.selection.createRange();
			i = document.selection.createRange().text.length, n.moveStart("character", -t.value.length), s = n.text.length - i
		}
		return {offset: s, length: i}
	}

	function g(e) {
		e.preventDefault(), e.stopPropagation()
	}

	function m(e) {
		e.preventDefault(), e.stopImmediatePropagation()
	}

	function v(t) {
		if (!L) {
			var s = t[0].currentStyle || window.getComputedStyle(t[0], null);
			L = e(document.createElement("div")).css({
				position: "absolute",
				left: "-10000px",
				top: "-10000px",
				display: "none",
				fontSize: s.fontSize,
				fontFamily: s.fontFamily,
				fontStyle: s.fontStyle,
				fontWeight: s.fontWeight,
				letterSpacing: s.letterSpacing,
				textTransform: s.textTransform,
				whiteSpace: "nowrap"
			}), L.attr("class", "select2-sizer"), e("body").append(L)
		}
		return L.text(t.val()), L.width()
	}

	function w(t, s, i) {
		var n, o, a = [];
		n = e.trim(t.attr("class")), n && (n = "" + n, e(n.split(/\s+/)).each2(function () {
			0 === this.indexOf("select2-") && a.push(this)
		})), n = e.trim(s.attr("class")), n && (n = "" + n, e(n.split(/\s+/)).each2(function () {
			0 !== this.indexOf("select2-") && (o = i(this), o && a.push(o))
		})), t.attr("class", a.join(" "))
	}

	function b(e, t, s, n) {
		var o = i(e.toUpperCase()).indexOf(i(t.toUpperCase())), a = t.length;
		return 0 > o ? void s.push(n(e)) : (s.push(n(e.substring(0, o))), s.push("<span class='select2-match'>"), s.push(n(e.substring(o, o + a))), s.push("</span>"), void s.push(n(e.substring(o + a, e.length))))
	}

	function C(e) {
		var t = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
		return String(e).replace(/[&<>"'\/\\]/g, function (e) {
			return t[e]
		})
	}

	function S(s) {
		var i, n = null, o = s.quietMillis || 100, a = s.url, r = this;
		return function (c) {
			window.clearTimeout(i), i = window.setTimeout(function () {
				var i = s.data, o = a, l = s.transport || e.fn.select2.ajaxDefaults.transport, h = {
					type: s.type || "GET",
					cache: s.cache || !1,
					jsonpCallback: s.jsonpCallback || t,
					dataType: s.dataType || "json"
				}, u = e.extend({}, e.fn.select2.ajaxDefaults.params, h);
				i = i ? i.call(r, c.term, c.page, c.context) : null, o = "function" == typeof o ? o.call(r, c.term, c.page, c.context) : o, n && "function" == typeof n.abort && n.abort(), s.params && (e.isFunction(s.params) ? e.extend(u, s.params.call(r)) : e.extend(u, s.params)), e.extend(u, {
					url: o,
					dataType: s.dataType,
					data: i,
					success: function (e) {
						var t = s.results(e, c.page, c);
						c.callback(t)
					},
					error: function (e, t, s) {
						var i = {hasError: !0, jqXHR: e, textStatus: t, errorThrown: s};
						c.callback(i)
					}
				}), n = l.call(r, u)
			}, o)
		}
	}

	function y(t) {
		var s, i, n = t, o = function (e) {
			return "" + e.text
		};
		e.isArray(n) && (i = n, n = {results: i}), e.isFunction(n) === !1 && (i = n, n = function () {
			return i
		});
		var a = n();
		return a.text && (o = a.text, e.isFunction(o) || (s = a.text, o = function (e) {
			return e[s]
		})), function (t) {
			var s, i = t.term, a = {results: []};
			return "" === i ? void t.callback(n()) : (s = function (n, a) {
				var r, c;
				if (n = n[0], n.children) {
					r = {};
					for (c in n)n.hasOwnProperty(c) && (r[c] = n[c]);
					r.children = [], e(n.children).each2(function (e, t) {
						s(t, r.children)
					}), (r.children.length || t.matcher(i, o(r), n)) && a.push(r)
				} else t.matcher(i, o(n), n) && a.push(n)
			}, e(n().results).each2(function (e, t) {
				s(t, a.results)
			}), void t.callback(a))
		}
	}

	function E(s) {
		var i = e.isFunction(s);
		return function (n) {
			var o = n.term, a = {results: []}, r = i ? s(n) : s;
			e.isArray(r) && (e(r).each(function () {
				var e = this.text !== t, s = e ? this.text : this;
				("" === o || n.matcher(o, s)) && a.results.push(e ? this : {id: this, text: this})
			}), n.callback(a))
		}
	}

	function x(t, s) {
		if (e.isFunction(t))return !0;
		if (!t)return !1;
		if ("string" == typeof t)return !0;
		throw new Error(s + " must be a string, function, or falsy value")
	}

	function T(t, s) {
		if (e.isFunction(t)) {
			var i = Array.prototype.slice.call(arguments, 2);
			return t.apply(s, i)
		}
		return t
	}

	function O(t) {
		var s = 0;
		return e.each(t, function (e, t) {
			t.children ? s += O(t.children) : s++
		}), s
	}

	function P(e, s, i, n) {
		var o, r, c, l, h, u = e, d = !1;
		if (!n.createSearchChoice || !n.tokenSeparators || n.tokenSeparators.length < 1)return t;
		for (; ;) {
			for (r = -1, c = 0, l = n.tokenSeparators.length; l > c && (h = n.tokenSeparators[c], r = e.indexOf(h), !(r >= 0)); c++);
			if (0 > r)break;
			if (o = e.substring(0, r), e = e.substring(r + h.length), o.length > 0 && (o = n.createSearchChoice.call(this, o, s), o !== t && null !== o && n.id(o) !== t && null !== n.id(o))) {
				for (d = !1, c = 0, l = s.length; l > c; c++)if (a(n.id(o), n.id(s[c]))) {
					d = !0;
					break
				}
				d || i(o)
			}
		}
		return u !== e ? e : void 0
	}

	function I() {
		var t = this;
		e.each(arguments, function (e, s) {
			t[s].remove(), t[s] = null
		})
	}

	function k(t, s) {
		var i = function () {
		};
		return i.prototype = new t, i.prototype.constructor = i, i.prototype.parent = t.prototype, i.prototype = e.extend(i.prototype, s), i
	}

	if (window.Select2 === t) {
		var A, R, D, H, M, L, N, U, F = {x: 0, y: 0}, A = {
			TAB: 9,
			ENTER: 13,
			ESC: 27,
			SPACE: 32,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,
			SHIFT: 16,
			CTRL: 17,
			ALT: 18,
			PAGE_UP: 33,
			PAGE_DOWN: 34,
			HOME: 36,
			END: 35,
			BACKSPACE: 8,
			DELETE: 46,
			isArrow: function (e) {
				switch (e = e.which ? e.which : e) {
					case A.LEFT:
					case A.RIGHT:
					case A.UP:
					case A.DOWN:
						return !0
				}
				return !1
			},
			isControl: function (e) {
				var t = e.which;
				switch (t) {
					case A.SHIFT:
					case A.CTRL:
					case A.ALT:
						return !0
				}
				return e.metaKey ? !0 : !1
			},
			isFunctionKey: function (e) {
				return e = e.which ? e.which : e, e >= 112 && 123 >= e
			}
		}, z = "<div class='select2-measure-scrollbar'></div>", j = {
			"Ⓐ": "A",
			"Ａ": "A",
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ầ": "A",
			"Ấ": "A",
			"Ẫ": "A",
			"Ẩ": "A",
			"Ã": "A",
			"Ā": "A",
			"Ă": "A",
			"Ằ": "A",
			"Ắ": "A",
			"Ẵ": "A",
			"Ẳ": "A",
			"Ȧ": "A",
			"Ǡ": "A",
			"Ä": "A",
			"Ǟ": "A",
			"Ả": "A",
			"Å": "A",
			"Ǻ": "A",
			"Ǎ": "A",
			"Ȁ": "A",
			"Ȃ": "A",
			"Ạ": "A",
			"Ậ": "A",
			"Ặ": "A",
			"Ḁ": "A",
			"Ą": "A",
			"Ⱥ": "A",
			"Ɐ": "A",
			"Ꜳ": "AA",
			"Æ": "AE",
			"Ǽ": "AE",
			"Ǣ": "AE",
			"Ꜵ": "AO",
			"Ꜷ": "AU",
			"Ꜹ": "AV",
			"Ꜻ": "AV",
			"Ꜽ": "AY",
			"Ⓑ": "B",
			"Ｂ": "B",
			"Ḃ": "B",
			"Ḅ": "B",
			"Ḇ": "B",
			"Ƀ": "B",
			"Ƃ": "B",
			"Ɓ": "B",
			"Ⓒ": "C",
			"Ｃ": "C",
			"Ć": "C",
			"Ĉ": "C",
			"Ċ": "C",
			"Č": "C",
			"Ç": "C",
			"Ḉ": "C",
			"Ƈ": "C",
			"Ȼ": "C",
			"Ꜿ": "C",
			"Ⓓ": "D",
			"Ｄ": "D",
			"Ḋ": "D",
			"Ď": "D",
			"Ḍ": "D",
			"Ḑ": "D",
			"Ḓ": "D",
			"Ḏ": "D",
			"Đ": "D",
			"Ƌ": "D",
			"Ɗ": "D",
			"Ɖ": "D",
			"Ꝺ": "D",
			"Ǳ": "DZ",
			"Ǆ": "DZ",
			"ǲ": "Dz",
			"ǅ": "Dz",
			"Ⓔ": "E",
			"Ｅ": "E",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ề": "E",
			"Ế": "E",
			"Ễ": "E",
			"Ể": "E",
			"Ẽ": "E",
			"Ē": "E",
			"Ḕ": "E",
			"Ḗ": "E",
			"Ĕ": "E",
			"Ė": "E",
			"Ë": "E",
			"Ẻ": "E",
			"Ě": "E",
			"Ȅ": "E",
			"Ȇ": "E",
			"Ẹ": "E",
			"Ệ": "E",
			"Ȩ": "E",
			"Ḝ": "E",
			"Ę": "E",
			"Ḙ": "E",
			"Ḛ": "E",
			"Ɛ": "E",
			"Ǝ": "E",
			"Ⓕ": "F",
			"Ｆ": "F",
			"Ḟ": "F",
			"Ƒ": "F",
			"Ꝼ": "F",
			"Ⓖ": "G",
			"Ｇ": "G",
			"Ǵ": "G",
			"Ĝ": "G",
			"Ḡ": "G",
			"Ğ": "G",
			"Ġ": "G",
			"Ǧ": "G",
			"Ģ": "G",
			"Ǥ": "G",
			"Ɠ": "G",
			"Ꞡ": "G",
			"Ᵹ": "G",
			"Ꝿ": "G",
			"Ⓗ": "H",
			"Ｈ": "H",
			"Ĥ": "H",
			"Ḣ": "H",
			"Ḧ": "H",
			"Ȟ": "H",
			"Ḥ": "H",
			"Ḩ": "H",
			"Ḫ": "H",
			"Ħ": "H",
			"Ⱨ": "H",
			"Ⱶ": "H",
			"Ɥ": "H",
			"Ⓘ": "I",
			"Ｉ": "I",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ĩ": "I",
			"Ī": "I",
			"Ĭ": "I",
			"İ": "I",
			"Ï": "I",
			"Ḯ": "I",
			"Ỉ": "I",
			"Ǐ": "I",
			"Ȉ": "I",
			"Ȋ": "I",
			"Ị": "I",
			"Į": "I",
			"Ḭ": "I",
			"Ɨ": "I",
			"Ⓙ": "J",
			"Ｊ": "J",
			"Ĵ": "J",
			"Ɉ": "J",
			"Ⓚ": "K",
			"Ｋ": "K",
			"Ḱ": "K",
			"Ǩ": "K",
			"Ḳ": "K",
			"Ķ": "K",
			"Ḵ": "K",
			"Ƙ": "K",
			"Ⱪ": "K",
			"Ꝁ": "K",
			"Ꝃ": "K",
			"Ꝅ": "K",
			"Ꞣ": "K",
			"Ⓛ": "L",
			"Ｌ": "L",
			"Ŀ": "L",
			"Ĺ": "L",
			"Ľ": "L",
			"Ḷ": "L",
			"Ḹ": "L",
			"Ļ": "L",
			"Ḽ": "L",
			"Ḻ": "L",
			"Ł": "L",
			"Ƚ": "L",
			"Ɫ": "L",
			"Ⱡ": "L",
			"Ꝉ": "L",
			"Ꝇ": "L",
			"Ꞁ": "L",
			"Ǉ": "LJ",
			"ǈ": "Lj",
			"Ⓜ": "M",
			"Ｍ": "M",
			"Ḿ": "M",
			"Ṁ": "M",
			"Ṃ": "M",
			"Ɱ": "M",
			"Ɯ": "M",
			"Ⓝ": "N",
			"Ｎ": "N",
			"Ǹ": "N",
			"Ń": "N",
			"Ñ": "N",
			"Ṅ": "N",
			"Ň": "N",
			"Ṇ": "N",
			"Ņ": "N",
			"Ṋ": "N",
			"Ṉ": "N",
			"Ƞ": "N",
			"Ɲ": "N",
			"Ꞑ": "N",
			"Ꞥ": "N",
			"Ǌ": "NJ",
			"ǋ": "Nj",
			"Ⓞ": "O",
			"Ｏ": "O",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Ồ": "O",
			"Ố": "O",
			"Ỗ": "O",
			"Ổ": "O",
			"Õ": "O",
			"Ṍ": "O",
			"Ȭ": "O",
			"Ṏ": "O",
			"Ō": "O",
			"Ṑ": "O",
			"Ṓ": "O",
			"Ŏ": "O",
			"Ȯ": "O",
			"Ȱ": "O",
			"Ö": "O",
			"Ȫ": "O",
			"Ỏ": "O",
			"Ő": "O",
			"Ǒ": "O",
			"Ȍ": "O",
			"Ȏ": "O",
			"Ơ": "O",
			"Ờ": "O",
			"Ớ": "O",
			"Ỡ": "O",
			"Ở": "O",
			"Ợ": "O",
			"Ọ": "O",
			"Ộ": "O",
			"Ǫ": "O",
			"Ǭ": "O",
			"Ø": "O",
			"Ǿ": "O",
			"Ɔ": "O",
			"Ɵ": "O",
			"Ꝋ": "O",
			"Ꝍ": "O",
			"Ƣ": "OI",
			"Ꝏ": "OO",
			"Ȣ": "OU",
			"Ⓟ": "P",
			"Ｐ": "P",
			"Ṕ": "P",
			"Ṗ": "P",
			"Ƥ": "P",
			"Ᵽ": "P",
			"Ꝑ": "P",
			"Ꝓ": "P",
			"Ꝕ": "P",
			"Ⓠ": "Q",
			"Ｑ": "Q",
			"Ꝗ": "Q",
			"Ꝙ": "Q",
			"Ɋ": "Q",
			"Ⓡ": "R",
			"Ｒ": "R",
			"Ŕ": "R",
			"Ṙ": "R",
			"Ř": "R",
			"Ȑ": "R",
			"Ȓ": "R",
			"Ṛ": "R",
			"Ṝ": "R",
			"Ŗ": "R",
			"Ṟ": "R",
			"Ɍ": "R",
			"Ɽ": "R",
			"Ꝛ": "R",
			"Ꞧ": "R",
			"Ꞃ": "R",
			"Ⓢ": "S",
			"Ｓ": "S",
			"ẞ": "S",
			"Ś": "S",
			"Ṥ": "S",
			"Ŝ": "S",
			"Ṡ": "S",
			"Š": "S",
			"Ṧ": "S",
			"Ṣ": "S",
			"Ṩ": "S",
			"Ș": "S",
			"Ş": "S",
			"Ȿ": "S",
			"Ꞩ": "S",
			"Ꞅ": "S",
			"Ⓣ": "T",
			"Ｔ": "T",
			"Ṫ": "T",
			"Ť": "T",
			"Ṭ": "T",
			"Ț": "T",
			"Ţ": "T",
			"Ṱ": "T",
			"Ṯ": "T",
			"Ŧ": "T",
			"Ƭ": "T",
			"Ʈ": "T",
			"Ⱦ": "T",
			"Ꞇ": "T",
			"Ꜩ": "TZ",
			"Ⓤ": "U",
			"Ｕ": "U",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ũ": "U",
			"Ṹ": "U",
			"Ū": "U",
			"Ṻ": "U",
			"Ŭ": "U",
			"Ü": "U",
			"Ǜ": "U",
			"Ǘ": "U",
			"Ǖ": "U",
			"Ǚ": "U",
			"Ủ": "U",
			"Ů": "U",
			"Ű": "U",
			"Ǔ": "U",
			"Ȕ": "U",
			"Ȗ": "U",
			"Ư": "U",
			"Ừ": "U",
			"Ứ": "U",
			"Ữ": "U",
			"Ử": "U",
			"Ự": "U",
			"Ụ": "U",
			"Ṳ": "U",
			"Ų": "U",
			"Ṷ": "U",
			"Ṵ": "U",
			"Ʉ": "U",
			"Ⓥ": "V",
			"Ｖ": "V",
			"Ṽ": "V",
			"Ṿ": "V",
			"Ʋ": "V",
			"Ꝟ": "V",
			"Ʌ": "V",
			"Ꝡ": "VY",
			"Ⓦ": "W",
			"Ｗ": "W",
			"Ẁ": "W",
			"Ẃ": "W",
			"Ŵ": "W",
			"Ẇ": "W",
			"Ẅ": "W",
			"Ẉ": "W",
			"Ⱳ": "W",
			"Ⓧ": "X",
			"Ｘ": "X",
			"Ẋ": "X",
			"Ẍ": "X",
			"Ⓨ": "Y",
			"Ｙ": "Y",
			"Ỳ": "Y",
			"Ý": "Y",
			"Ŷ": "Y",
			"Ỹ": "Y",
			"Ȳ": "Y",
			"Ẏ": "Y",
			"Ÿ": "Y",
			"Ỷ": "Y",
			"Ỵ": "Y",
			"Ƴ": "Y",
			"Ɏ": "Y",
			"Ỿ": "Y",
			"Ⓩ": "Z",
			"Ｚ": "Z",
			"Ź": "Z",
			"Ẑ": "Z",
			"Ż": "Z",
			"Ž": "Z",
			"Ẓ": "Z",
			"Ẕ": "Z",
			"Ƶ": "Z",
			"Ȥ": "Z",
			"Ɀ": "Z",
			"Ⱬ": "Z",
			"Ꝣ": "Z",
			"ⓐ": "a",
			"ａ": "a",
			"ẚ": "a",
			"à": "a",
			"á": "a",
			"â": "a",
			"ầ": "a",
			"ấ": "a",
			"ẫ": "a",
			"ẩ": "a",
			"ã": "a",
			"ā": "a",
			"ă": "a",
			"ằ": "a",
			"ắ": "a",
			"ẵ": "a",
			"ẳ": "a",
			"ȧ": "a",
			"ǡ": "a",
			"ä": "a",
			"ǟ": "a",
			"ả": "a",
			"å": "a",
			"ǻ": "a",
			"ǎ": "a",
			"ȁ": "a",
			"ȃ": "a",
			"ạ": "a",
			"ậ": "a",
			"ặ": "a",
			"ḁ": "a",
			"ą": "a",
			"ⱥ": "a",
			"ɐ": "a",
			"ꜳ": "aa",
			"æ": "ae",
			"ǽ": "ae",
			"ǣ": "ae",
			"ꜵ": "ao",
			"ꜷ": "au",
			"ꜹ": "av",
			"ꜻ": "av",
			"ꜽ": "ay",
			"ⓑ": "b",
			"ｂ": "b",
			"ḃ": "b",
			"ḅ": "b",
			"ḇ": "b",
			"ƀ": "b",
			"ƃ": "b",
			"ɓ": "b",
			"ⓒ": "c",
			"ｃ": "c",
			"ć": "c",
			"ĉ": "c",
			"ċ": "c",
			"č": "c",
			"ç": "c",
			"ḉ": "c",
			"ƈ": "c",
			"ȼ": "c",
			"ꜿ": "c",
			"ↄ": "c",
			"ⓓ": "d",
			"ｄ": "d",
			"ḋ": "d",
			"ď": "d",
			"ḍ": "d",
			"ḑ": "d",
			"ḓ": "d",
			"ḏ": "d",
			"đ": "d",
			"ƌ": "d",
			"ɖ": "d",
			"ɗ": "d",
			"ꝺ": "d",
			"ǳ": "dz",
			"ǆ": "dz",
			"ⓔ": "e",
			"ｅ": "e",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ề": "e",
			"ế": "e",
			"ễ": "e",
			"ể": "e",
			"ẽ": "e",
			"ē": "e",
			"ḕ": "e",
			"ḗ": "e",
			"ĕ": "e",
			"ė": "e",
			"ë": "e",
			"ẻ": "e",
			"ě": "e",
			"ȅ": "e",
			"ȇ": "e",
			"ẹ": "e",
			"ệ": "e",
			"ȩ": "e",
			"ḝ": "e",
			"ę": "e",
			"ḙ": "e",
			"ḛ": "e",
			"ɇ": "e",
			"ɛ": "e",
			"ǝ": "e",
			"ⓕ": "f",
			"ｆ": "f",
			"ḟ": "f",
			"ƒ": "f",
			"ꝼ": "f",
			"ⓖ": "g",
			"ｇ": "g",
			"ǵ": "g",
			"ĝ": "g",
			"ḡ": "g",
			"ğ": "g",
			"ġ": "g",
			"ǧ": "g",
			"ģ": "g",
			"ǥ": "g",
			"ɠ": "g",
			"ꞡ": "g",
			"ᵹ": "g",
			"ꝿ": "g",
			"ⓗ": "h",
			"ｈ": "h",
			"ĥ": "h",
			"ḣ": "h",
			"ḧ": "h",
			"ȟ": "h",
			"ḥ": "h",
			"ḩ": "h",
			"ḫ": "h",
			"ẖ": "h",
			"ħ": "h",
			"ⱨ": "h",
			"ⱶ": "h",
			"ɥ": "h",
			"ƕ": "hv",
			"ⓘ": "i",
			"ｉ": "i",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ĩ": "i",
			"ī": "i",
			"ĭ": "i",
			"ï": "i",
			"ḯ": "i",
			"ỉ": "i",
			"ǐ": "i",
			"ȉ": "i",
			"ȋ": "i",
			"ị": "i",
			"į": "i",
			"ḭ": "i",
			"ɨ": "i",
			"ı": "i",
			"ⓙ": "j",
			"ｊ": "j",
			"ĵ": "j",
			"ǰ": "j",
			"ɉ": "j",
			"ⓚ": "k",
			"ｋ": "k",
			"ḱ": "k",
			"ǩ": "k",
			"ḳ": "k",
			"ķ": "k",
			"ḵ": "k",
			"ƙ": "k",
			"ⱪ": "k",
			"ꝁ": "k",
			"ꝃ": "k",
			"ꝅ": "k",
			"ꞣ": "k",
			"ⓛ": "l",
			"ｌ": "l",
			"ŀ": "l",
			"ĺ": "l",
			"ľ": "l",
			"ḷ": "l",
			"ḹ": "l",
			"ļ": "l",
			"ḽ": "l",
			"ḻ": "l",
			"ſ": "l",
			"ł": "l",
			"ƚ": "l",
			"ɫ": "l",
			"ⱡ": "l",
			"ꝉ": "l",
			"ꞁ": "l",
			"ꝇ": "l",
			"ǉ": "lj",
			"ⓜ": "m",
			"ｍ": "m",
			"ḿ": "m",
			"ṁ": "m",
			"ṃ": "m",
			"ɱ": "m",
			"ɯ": "m",
			"ⓝ": "n",
			"ｎ": "n",
			"ǹ": "n",
			"ń": "n",
			"ñ": "n",
			"ṅ": "n",
			"ň": "n",
			"ṇ": "n",
			"ņ": "n",
			"ṋ": "n",
			"ṉ": "n",
			"ƞ": "n",
			"ɲ": "n",
			"ŉ": "n",
			"ꞑ": "n",
			"ꞥ": "n",
			"ǌ": "nj",
			"ⓞ": "o",
			"ｏ": "o",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"ồ": "o",
			"ố": "o",
			"ỗ": "o",
			"ổ": "o",
			"õ": "o",
			"ṍ": "o",
			"ȭ": "o",
			"ṏ": "o",
			"ō": "o",
			"ṑ": "o",
			"ṓ": "o",
			"ŏ": "o",
			"ȯ": "o",
			"ȱ": "o",
			"ö": "o",
			"ȫ": "o",
			"ỏ": "o",
			"ő": "o",
			"ǒ": "o",
			"ȍ": "o",
			"ȏ": "o",
			"ơ": "o",
			"ờ": "o",
			"ớ": "o",
			"ỡ": "o",
			"ở": "o",
			"ợ": "o",
			"ọ": "o",
			"ộ": "o",
			"ǫ": "o",
			"ǭ": "o",
			"ø": "o",
			"ǿ": "o",
			"ɔ": "o",
			"ꝋ": "o",
			"ꝍ": "o",
			"ɵ": "o",
			"ƣ": "oi",
			"ȣ": "ou",
			"ꝏ": "oo",
			"ⓟ": "p",
			"ｐ": "p",
			"ṕ": "p",
			"ṗ": "p",
			"ƥ": "p",
			"ᵽ": "p",
			"ꝑ": "p",
			"ꝓ": "p",
			"ꝕ": "p",
			"ⓠ": "q",
			"ｑ": "q",
			"ɋ": "q",
			"ꝗ": "q",
			"ꝙ": "q",
			"ⓡ": "r",
			"ｒ": "r",
			"ŕ": "r",
			"ṙ": "r",
			"ř": "r",
			"ȑ": "r",
			"ȓ": "r",
			"ṛ": "r",
			"ṝ": "r",
			"ŗ": "r",
			"ṟ": "r",
			"ɍ": "r",
			"ɽ": "r",
			"ꝛ": "r",
			"ꞧ": "r",
			"ꞃ": "r",
			"ⓢ": "s",
			"ｓ": "s",
			"ß": "s",
			"ś": "s",
			"ṥ": "s",
			"ŝ": "s",
			"ṡ": "s",
			"š": "s",
			"ṧ": "s",
			"ṣ": "s",
			"ṩ": "s",
			"ș": "s",
			"ş": "s",
			"ȿ": "s",
			"ꞩ": "s",
			"ꞅ": "s",
			"ẛ": "s",
			"ⓣ": "t",
			"ｔ": "t",
			"ṫ": "t",
			"ẗ": "t",
			"ť": "t",
			"ṭ": "t",
			"ț": "t",
			"ţ": "t",
			"ṱ": "t",
			"ṯ": "t",
			"ŧ": "t",
			"ƭ": "t",
			"ʈ": "t",
			"ⱦ": "t",
			"ꞇ": "t",
			"ꜩ": "tz",
			"ⓤ": "u",
			"ｕ": "u",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ũ": "u",
			"ṹ": "u",
			"ū": "u",
			"ṻ": "u",
			"ŭ": "u",
			"ü": "u",
			"ǜ": "u",
			"ǘ": "u",
			"ǖ": "u",
			"ǚ": "u",
			"ủ": "u",
			"ů": "u",
			"ű": "u",
			"ǔ": "u",
			"ȕ": "u",
			"ȗ": "u",
			"ư": "u",
			"ừ": "u",
			"ứ": "u",
			"ữ": "u",
			"ử": "u",
			"ự": "u",
			"ụ": "u",
			"ṳ": "u",
			"ų": "u",
			"ṷ": "u",
			"ṵ": "u",
			"ʉ": "u",
			"ⓥ": "v",
			"ｖ": "v",
			"ṽ": "v",
			"ṿ": "v",
			"ʋ": "v",
			"ꝟ": "v",
			"ʌ": "v",
			"ꝡ": "vy",
			"ⓦ": "w",
			"ｗ": "w",
			"ẁ": "w",
			"ẃ": "w",
			"ŵ": "w",
			"ẇ": "w",
			"ẅ": "w",
			"ẘ": "w",
			"ẉ": "w",
			"ⱳ": "w",
			"ⓧ": "x",
			"ｘ": "x",
			"ẋ": "x",
			"ẍ": "x",
			"ⓨ": "y",
			"ｙ": "y",
			"ỳ": "y",
			"ý": "y",
			"ŷ": "y",
			"ỹ": "y",
			"ȳ": "y",
			"ẏ": "y",
			"ÿ": "y",
			"ỷ": "y",
			"ẙ": "y",
			"ỵ": "y",
			"ƴ": "y",
			"ɏ": "y",
			"ỿ": "y",
			"ⓩ": "z",
			"ｚ": "z",
			"ź": "z",
			"ẑ": "z",
			"ż": "z",
			"ž": "z",
			"ẓ": "z",
			"ẕ": "z",
			"ƶ": "z",
			"ȥ": "z",
			"ɀ": "z",
			"ⱬ": "z",
			"ꝣ": "z",
			"Ά": "Α",
			"Έ": "Ε",
			"Ή": "Η",
			"Ί": "Ι",
			"Ϊ": "Ι",
			"Ό": "Ο",
			"Ύ": "Υ",
			"Ϋ": "Υ",
			"Ώ": "Ω",
			"ά": "α",
			"έ": "ε",
			"ή": "η",
			"ί": "ι",
			"ϊ": "ι",
			"ΐ": "ι",
			"ό": "ο",
			"ύ": "υ",
			"ϋ": "υ",
			"ΰ": "υ",
			"ω": "ω",
			"ς": "σ"
		};
		N = e(document), M = function () {
			var e = 1;
			return function () {
				return e++
			}
		}(), R = k(Object, {
			bind: function (e) {
				var t = this;
				return function () {
					e.apply(t, arguments)
				}
			}, init: function (s) {
				var i, n, a = ".select2-results";
				this.opts = s = this.prepareOpts(s), this.id = s.id, s.element.data("select2") !== t && null !== s.element.data("select2") && s.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = e("<span>", {
					role: "status",
					"aria-live": "polite"
				}).addClass("select2-hidden-accessible").appendTo(document.body), this.containerId = "s2id_" + (s.element.attr("id") || "autogen" + M()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", s.element.attr("title")), this.body = e("body"), w(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", s.element.attr("style")), this.container.css(T(s.containerCss, this.opts.element)), this.container.addClass(T(s.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", g), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), w(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(T(s.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", g), this.results = i = this.container.find(a), this.search = n = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", g), h(this.results), this.dropdown.on("mousemove-filtered", a, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", a, this.bind(function (e) {
					this._touchEvent = !0, this.highlightUnderEvent(e)
				})), this.dropdown.on("touchmove", a, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", a, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function () {
					this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
				})), d(80, this.results), this.dropdown.on("scroll-debounced", a, this.bind(this.loadMoreIfNeeded)), e(this.container).on("change", ".select2-input", function (e) {
					e.stopPropagation()
				}), e(this.dropdown).on("change", ".select2-input", function (e) {
					e.stopPropagation()
				}), e.fn.mousewheel && i.mousewheel(function (e, t, s, n) {
					var o = i.scrollTop();
					n > 0 && 0 >= o - n ? (i.scrollTop(0), g(e)) : 0 > n && i.get(0).scrollHeight - i.scrollTop() + n <= i.height() && (i.scrollTop(i.get(0).scrollHeight - i.height()), g(e))
				}), l(n), n.on("keyup-change input paste", this.bind(this.updateResults)), n.on("focus", function () {
					n.addClass("select2-focused")
				}), n.on("blur", function () {
					n.removeClass("select2-focused")
				}), this.dropdown.on("mouseup", a, this.bind(function (t) {
					e(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t))
				})), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) {
					e.stopPropagation()
				}), this.nextSearchTerm = t, e.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== s.maximumInputLength && this.search.attr("maxlength", s.maximumInputLength);
				var r = s.element.prop("disabled");
				r === t && (r = !1), this.enable(!r);
				var c = s.element.prop("readonly");
				c === t && (c = !1), this.readonly(c), U = U || o(), this.autofocus = s.element.prop("autofocus"), s.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", s.searchInputPlaceholder)
			}, destroy: function () {
				var e = this.opts.element, s = e.data("select2"), i = this;
				this.close(), e.length && e[0].detachEvent && e.each(function () {
					this.detachEvent("onpropertychange", i._sync)
				}), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, s !== t && (s.container.remove(), s.liveRegion.remove(), s.dropdown.remove(), e.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? e.attr({tabindex: this.elementTabIndex}) : e.removeAttr("tabindex"), e.show()), I.call(this, "container", "liveRegion", "dropdown", "results", "search")
			}, optionToData: function (e) {
				return e.is("option") ? {
					id: e.prop("value"),
					text: e.text(),
					element: e.get(),
					css: e.attr("class"),
					disabled: e.prop("disabled"),
					locked: a(e.attr("locked"), "locked") || a(e.data("locked"), !0)
				} : e.is("optgroup") ? {
					text: e.attr("label"),
					children: [],
					element: e.get(),
					css: e.attr("class")
				} : void 0
			}, prepareOpts: function (s) {
				var i, n, o, c, l = this;
				if (i = s.element, "select" === i.get(0).tagName.toLowerCase() && (this.select = n = s.element), n && e.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
						if (this in s)throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
					}), s = e.extend({}, {
						populateResults: function (i, n, o) {
							var a, r = this.opts.id, c = this.liveRegion;
							(a = function (i, n, h) {
								var u, d, p, f, g, m, v, w, b, C;
								i = s.sortResults(i, n, o);
								var S = [];
								for (u = 0, d = i.length; d > u; u += 1)p = i[u], g = p.disabled === !0, f = !g && r(p) !== t, m = p.children && p.children.length > 0, v = e("<li></li>"), v.addClass("select2-results-dept-" + h), v.addClass("select2-result"), v.addClass(f ? "select2-result-selectable" : "select2-result-unselectable"), g && v.addClass("select2-disabled"), m && v.addClass("select2-result-with-children"), v.addClass(l.opts.formatResultCssClass(p)), v.attr("role", "presentation"), w = e(document.createElement("div")), w.addClass("select2-result-label"), w.attr("id", "select2-result-label-" + M()), w.attr("role", "option"), C = s.formatResult(p, w, o, l.opts.escapeMarkup), C !== t && (w.html(C), v.append(w)), m && (b = e("<ul></ul>"), b.addClass("select2-result-sub"), a(p.children, b, h + 1), v.append(b)), v.data("select2-data", p), S.push(v[0]);
								n.append(S), c.text(s.formatMatches(i.length))
							})(n, i, 0)
						}
					}, e.fn.select2.defaults, s), "function" != typeof s.id && (o = s.id, s.id = function (e) {
						return e[o]
					}), e.isArray(s.element.data("select2Tags"))) {
					if ("tags"in s)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + s.element.attr("id");
					s.tags = s.element.data("select2Tags")
				}
				if (n ? (s.query = this.bind(function (e) {
						var s, n, o, a = {results: [], more: !1}, r = e.term;
						o = function (t, s) {
							var i;
							t.is("option") ? e.matcher(r, t.text(), t) && s.push(l.optionToData(t)) : t.is("optgroup") && (i = l.optionToData(t), t.children().each2(function (e, t) {
								o(t, i.children)
							}), i.children.length > 0 && s.push(i))
						}, s = i.children(), this.getPlaceholder() !== t && s.length > 0 && (n = this.getPlaceholderOption(), n && (s = s.not(n))), s.each2(function (e, t) {
							o(t, a.results)
						}), e.callback(a)
					}), s.id = function (e) {
						return e.id
					}) : "query"in s || ("ajax"in s ? (c = s.element.data("ajax-url"), c && c.length > 0 && (s.ajax.url = c), s.query = S.call(s.element, s.ajax)) : "data"in s ? s.query = y(s.data) : "tags"in s && (s.query = E(s.tags), s.createSearchChoice === t && (s.createSearchChoice = function (t) {
						return {id: e.trim(t), text: e.trim(t)}
					}), s.initSelection === t && (s.initSelection = function (t, i) {
						var n = [];
						e(r(t.val(), s.separator)).each(function () {
							var t = {id: this, text: this}, i = s.tags;
							e.isFunction(i) && (i = i()), e(i).each(function () {
								return a(this.id, t.id) ? (t = this, !1) : void 0
							}), n.push(t)
						}), i(n)
					}))), "function" != typeof s.query)throw"query function not defined for Select2 " + s.element.attr("id");
				if ("top" === s.createSearchChoicePosition)s.createSearchChoicePosition = function (e, t) {
					e.unshift(t)
				}; else if ("bottom" === s.createSearchChoicePosition)s.createSearchChoicePosition = function (e, t) {
					e.push(t)
				}; else if ("function" != typeof s.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
				return s
			}, monitorSource: function () {
				var s, i = this.opts.element, n = this;
				i.on("change.select2", this.bind(function () {
					this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
				})), this._sync = this.bind(function () {
					var e = i.prop("disabled");
					e === t && (e = !1), this.enable(!e);
					var s = i.prop("readonly");
					s === t && (s = !1), this.readonly(s), w(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(T(this.opts.containerCssClass, this.opts.element)), w(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(T(this.opts.dropdownCssClass, this.opts.element))
				}), i.length && i[0].attachEvent && i.each(function () {
					this.attachEvent("onpropertychange", n._sync)
				}), s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new s(function (t) {
					e.each(t, n._sync)
				}), this.propertyObserver.observe(i.get(0), {attributes: !0, subtree: !1}))
			}, triggerSelect: function (t) {
				var s = e.Event("select2-selecting", {val: this.id(t), object: t, choice: t});
				return this.opts.element.trigger(s), !s.isDefaultPrevented()
			}, triggerChange: function (t) {
				t = t || {}, t = e.extend({}, t, {
					type: "change",
					val: this.val()
				}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(t), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
			}, isInterfaceEnabled: function () {
				return this.enabledInterface === !0
			}, enableInterface: function () {
				var e = this._enabled && !this._readonly, t = !e;
				return e === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = e, !0)
			}, enable: function (e) {
				e === t && (e = !0), this._enabled !== e && (this._enabled = e, this.opts.element.prop("disabled", !e), this.enableInterface())
			}, disable: function () {
				this.enable(!1)
			}, readonly: function (e) {
				e === t && (e = !1), this._readonly !== e && (this._readonly = e, this.opts.element.prop("readonly", e), this.enableInterface())
			}, opened: function () {
				return this.container ? this.container.hasClass("select2-dropdown-open") : !1
			}, positionDropdown: function () {
				var t, s, i, n, o, a = this.dropdown, r = this.container.offset(), c = this.container.outerHeight(!1), l = this.container.outerWidth(!1), h = a.outerHeight(!1), u = e(window), d = u.width(), p = u.height(), f = u.scrollLeft() + d, g = u.scrollTop() + p, m = r.top + c, v = r.left, w = g >= m + h, b = r.top - h >= u.scrollTop(), C = a.outerWidth(!1), S = f >= v + C, y = a.hasClass("select2-drop-above");
				y ? (s = !0, !b && w && (i = !0, s = !1)) : (s = !1, !w && b && (i = !0, s = !0)), i && (a.hide(), r = this.container.offset(), c = this.container.outerHeight(!1), l = this.container.outerWidth(!1), h = a.outerHeight(!1), f = u.scrollLeft() + d, g = u.scrollTop() + p, m = r.top + c, v = r.left, C = a.outerWidth(!1), S = f >= v + C, a.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (o = e(".select2-results", a)[0], a.addClass("select2-drop-auto-width"), a.css("width", ""), C = a.outerWidth(!1) + (o.scrollHeight === o.clientHeight ? 0 : U.width), C > l ? l = C : C = l, h = a.outerHeight(!1), S = f >= v + C) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (t = this.body.offset(), m -= t.top, v -= t.left), S || (v = r.left + this.container.outerWidth(!1) - C), n = {
					left: v,
					width: l
				}, s ? (n.top = r.top - h, n.bottom = "auto", this.container.addClass("select2-drop-above"), a.addClass("select2-drop-above")) : (n.top = m, n.bottom = "auto", this.container.removeClass("select2-drop-above"), a.removeClass("select2-drop-above")), n = e.extend(n, T(this.opts.dropdownCss, this.opts.element)), a.css(n)
			}, shouldOpen: function () {
				var t;
				return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = e.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented())
			}, clearDropdownAlignmentPreference: function () {
				this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
			}, open: function () {
				return this.shouldOpen() ? (this.opening(), N.on("mousemove.select2Event", function (e) {
					F.x = e.pageX, F.y = e.pageY
				}), !0) : !1
			}, opening: function () {
				var t, i = this.containerEventName, n = "scroll." + i, o = "resize." + i, a = "orientationchange." + i;
				this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), t = e("#select2-drop-mask"), 0 == t.length && (t = e(document.createElement("div")), t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), t.hide(), t.appendTo(this.body), t.on("mousedown touchstart click", function (i) {
					s(t);
					var n, o = e("#select2-drop");
					o.length > 0 && (n = o.data("select2"), n.opts.selectOnBlur && n.selectHighlighted({noFocus: !0}), n.close(), i.preventDefault(), i.stopPropagation())
				})), this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t), e("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), t.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
				var r = this;
				this.container.parents().add(window).each(function () {
					e(this).on(o + " " + n + " " + a, function () {
						r.opened() && r.positionDropdown()
					})
				})
			}, close: function () {
				if (this.opened()) {
					var t = this.containerEventName, s = "scroll." + t, i = "resize." + t, n = "orientationchange." + t;
					this.container.parents().add(window).each(function () {
						e(this).off(s).off(i).off(n)
					}), this.clearDropdownAlignmentPreference(), e("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), N.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(e.Event("select2-close"))
				}
			}, externalSearch: function (e) {
				this.open(), this.search.val(e), this.updateResults(!1)
			}, clearSearch: function () {
			}, getMaximumSelectionSize: function () {
				return T(this.opts.maximumSelectionSize, this.opts.element)
			}, ensureHighlightVisible: function () {
				var t, s, i, n, o, a, r, c, l = this.results;
				if (s = this.highlight(), !(0 > s)) {
					if (0 == s)return void l.scrollTop(0);
					t = this.findHighlightableChoices().find(".select2-result-label"), i = e(t[s]), c = (i.offset() || {}).top || 0, n = c + i.outerHeight(!0), s === t.length - 1 && (r = l.find("li.select2-more-results"), r.length > 0 && (n = r.offset().top + r.outerHeight(!0))), o = l.offset().top + l.outerHeight(!0), n > o && l.scrollTop(l.scrollTop() + (n - o)), a = c - l.offset().top, 0 > a && "none" != i.css("display") && l.scrollTop(l.scrollTop() + a)
				}
			}, findHighlightableChoices: function () {
				return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
			}, moveHighlight: function (t) {
				for (var s = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < s.length;) {
					i += t;
					var n = e(s[i]);
					if (n.hasClass("select2-result-selectable") && !n.hasClass("select2-disabled") && !n.hasClass("select2-selected")) {
						this.highlight(i);
						break
					}
				}
			}, highlight: function (t) {
				var s, i, o = this.findHighlightableChoices();
				return 0 === arguments.length ? n(o.filter(".select2-highlighted")[0], o.get()) : (t >= o.length && (t = o.length - 1), 0 > t && (t = 0), this.removeHighlight(), s = e(o[t]), s.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", s.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(s.text()), i = s.data("select2-data"), void(i && this.opts.element.trigger({
					type: "select2-highlight",
					val: this.id(i),
					choice: i
				})))
			}, removeHighlight: function () {
				this.results.find(".select2-highlighted").removeClass("select2-highlighted")
			}, touchMoved: function () {
				this._touchMoved = !0
			}, clearTouchMoved: function () {
				this._touchMoved = !1
			}, countSelectableResults: function () {
				return this.findHighlightableChoices().length
			}, highlightUnderEvent: function (t) {
				var s = e(t.target).closest(".select2-result-selectable");
				if (s.length > 0 && !s.is(".select2-highlighted")) {
					var i = this.findHighlightableChoices();
					this.highlight(i.index(s))
				} else 0 == s.length && this.removeHighlight()
			}, loadMoreIfNeeded: function () {
				var e, t = this.results, s = t.find("li.select2-more-results"), i = this.resultsPage + 1, n = this, o = this.search.val(), a = this.context;
				0 !== s.length && (e = s.offset().top - t.offset().top - t.height(), e <= this.opts.loadMorePadding && (s.addClass("select2-active"), this.opts.query({
					element: this.opts.element,
					term: o,
					page: i,
					context: a,
					matcher: this.opts.matcher,
					callback: this.bind(function (e) {
						n.opened() && (n.opts.populateResults.call(this, t, e.results, {
							term: o,
							page: i,
							context: a
						}), n.postprocessResults(e, !1, !1), e.more === !0 ? (s.detach().appendTo(t).text(T(n.opts.formatLoadMore, n.opts.element, i + 1)), window.setTimeout(function () {
							n.loadMoreIfNeeded()
						}, 10)) : s.remove(), n.positionDropdown(), n.resultsPage = i, n.context = e.context, this.opts.element.trigger({
							type: "select2-loaded",
							items: e
						}))
					})
				})))
			}, tokenize: function () {
			}, updateResults: function (s) {
				function i() {
					l.removeClass("select2-active"), d.positionDropdown(), d.liveRegion.text(h.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? h.text() : d.opts.formatMatches(h.find(".select2-result-selectable").length))
				}

				function n(e) {
					h.html(e), i()
				}

				var o, r, c, l = this.search, h = this.results, u = this.opts, d = this, p = l.val(), f = e.data(this.container, "select2-last-term");
				if ((s === !0 || !f || !a(p, f)) && (e.data(this.container, "select2-last-term", p), s === !0 || this.showSearchInput !== !1 && this.opened())) {
					c = ++this.queryCount;
					var g = this.getMaximumSelectionSize();
					if (g >= 1 && (o = this.data(), e.isArray(o) && o.length >= g && x(u.formatSelectionTooBig, "formatSelectionTooBig")))return void n("<li class='select2-selection-limit'>" + T(u.formatSelectionTooBig, u.element, g) + "</li>");
					if (l.val().length < u.minimumInputLength)return n(x(u.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + T(u.formatInputTooShort, u.element, l.val(), u.minimumInputLength) + "</li>" : ""), void(s && this.showSearch && this.showSearch(!0));
					if (u.maximumInputLength && l.val().length > u.maximumInputLength)return void n(x(u.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + T(u.formatInputTooLong, u.element, l.val(), u.maximumInputLength) + "</li>" : "");
					u.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + T(u.formatSearching, u.element) + "</li>"), l.addClass("select2-active"), this.removeHighlight(), r = this.tokenize(), r != t && null != r && l.val(r), this.resultsPage = 1, u.query({
						element: u.element,
						term: l.val(),
						page: this.resultsPage,
						context: null,
						matcher: u.matcher,
						callback: this.bind(function (o) {
							var r;
							if (c == this.queryCount) {
								if (!this.opened())return void this.search.removeClass("select2-active");
								if (o.hasError !== t && x(u.formatAjaxError, "formatAjaxError"))return void n("<li class='select2-ajax-error'>" + T(u.formatAjaxError, u.element, o.jqXHR, o.textStatus, o.errorThrown) + "</li>");
								if (this.context = o.context === t ? null : o.context, this.opts.createSearchChoice && "" !== l.val() && (r = this.opts.createSearchChoice.call(d, l.val(), o.results), r !== t && null !== r && d.id(r) !== t && null !== d.id(r) && 0 === e(o.results).filter(function () {
										return a(d.id(this), d.id(r))
									}).length && this.opts.createSearchChoicePosition(o.results, r)), 0 === o.results.length && x(u.formatNoMatches, "formatNoMatches"))return void n("<li class='select2-no-results'>" + T(u.formatNoMatches, u.element, l.val()) + "</li>");
								h.empty(), d.opts.populateResults.call(this, h, o.results, {
									term: l.val(),
									page: this.resultsPage,
									context: null
								}), o.more === !0 && x(u.formatLoadMore, "formatLoadMore") && (h.append("<li class='select2-more-results'>" + u.escapeMarkup(T(u.formatLoadMore, u.element, this.resultsPage)) + "</li>"), window.setTimeout(function () {
									d.loadMoreIfNeeded()
								}, 10)), this.postprocessResults(o, s), i(), this.opts.element.trigger({
									type: "select2-loaded",
									items: o
								})
							}
						})
					})
				}
			}, cancel: function () {
				this.close()
			}, blur: function () {
				this.opts.selectOnBlur && this.selectHighlighted({noFocus: !0}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
			}, focusSearch: function () {
				p(this.search)
			}, selectHighlighted: function (e) {
				if (this._touchMoved)return void this.clearTouchMoved();
				var t = this.highlight(), s = this.results.find(".select2-highlighted"), i = s.closest(".select2-result").data("select2-data");
				i ? (this.highlight(t), this.onSelect(i, e)) : e && e.noFocus && this.close()
			}, getPlaceholder: function () {
				var e;
				return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((e = this.getPlaceholderOption()) !== t ? e.text() : t)
			}, getPlaceholderOption: function () {
				if (this.select) {
					var s = this.select.children("option").first();
					if (this.opts.placeholderOption !== t)return "first" === this.opts.placeholderOption && s || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
					if ("" === e.trim(s.text()) && "" === s.val())return s
				}
			}, initContainerWidth: function () {
				function s() {
					var s, i, n, o, a, r;
					if ("off" === this.opts.width)return null;
					if ("element" === this.opts.width)return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
					if ("copy" === this.opts.width || "resolve" === this.opts.width) {
						if (s = this.opts.element.attr("style"), s !== t)for (i = s.split(";"), o = 0, a = i.length; a > o; o += 1)if (r = i[o].replace(/\s/g, ""), n = r.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== n && n.length >= 1)return n[1];
						return "resolve" === this.opts.width ? (s = this.opts.element.css("width"), s.indexOf("%") > 0 ? s : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
					}
					return e.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
				}

				var i = s.call(this);
				null !== i && this.container.css("width", i)
			}
		}), D = k(R, {
			createContainer: function () {
				var t = e(document.createElement("div")).attr({"class": "select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
				return t
			}, enableInterface: function () {
				this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
			}, opening: function () {
				var s, i, n;
				this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), s = this.search.get(0), s.createTextRange ? (i = s.createTextRange(), i.collapse(!1), i.select()) : s.setSelectionRange && (n = this.search.val().length, s.setSelectionRange(n, n))), "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(e.Event("select2-open"))
			}, close: function () {
				this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			}, focus: function () {
				this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			}, isFocused: function () {
				return this.container.hasClass("select2-container-active")
			}, cancel: function () {
				this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
			}, destroy: function () {
				e("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), I.call(this, "selection", "focusser")
			}, initContainer: function () {
				var t, i, n = this.container, o = this.dropdown, a = M();
				this.showSearch(this.opts.minimumResultsForSearch < 0 ? !1 : !0), this.selection = t = n.find(".select2-choice"), this.focusser = n.find(".select2-focusser"), t.find(".select2-chosen").attr("id", "select2-chosen-" + a), this.focusser.attr("aria-labelledby", "select2-chosen-" + a), this.results.attr("id", "select2-results-" + a), this.search.attr("aria-owns", "select2-results-" + a), this.focusser.attr("id", "s2id_autogen" + a), i = e("label[for='" + this.opts.element.attr("id") + "']"), this.focusser.prev().text(i.text()).attr("for", this.focusser.attr("id"));
				var r = this.opts.element.attr("title");
				this.opts.element.attr("title", r || i.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(e("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function (e) {
					if (this.isInterfaceEnabled() && 229 != e.keyCode) {
						if (e.which === A.PAGE_UP || e.which === A.PAGE_DOWN)return void g(e);
						switch (e.which) {
							case A.UP:
							case A.DOWN:
								return this.moveHighlight(e.which === A.UP ? -1 : 1), void g(e);
							case A.ENTER:
								return this.selectHighlighted(), void g(e);
							case A.TAB:
								return void this.selectHighlighted({noFocus: !0});
							case A.ESC:
								return this.cancel(e), void g(e)
						}
					}
				})), this.search.on("blur", this.bind(function () {
					document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function () {
						this.opened() && this.search.focus()
					}), 0)
				})), this.focusser.on("keydown", this.bind(function (e) {
					if (this.isInterfaceEnabled() && e.which !== A.TAB && !A.isControl(e) && !A.isFunctionKey(e) && e.which !== A.ESC) {
						if (this.opts.openOnEnter === !1 && e.which === A.ENTER)return void g(e);
						if (e.which == A.DOWN || e.which == A.UP || e.which == A.ENTER && this.opts.openOnEnter) {
							if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)return;
							return this.open(), void g(e)
						}
						return e.which == A.DELETE || e.which == A.BACKSPACE ? (this.opts.allowClear && this.clear(), void g(e)) : void 0
					}
				})), l(this.focusser), this.focusser.on("keyup-change input", this.bind(function (e) {
					if (this.opts.minimumResultsForSearch >= 0) {
						if (e.stopPropagation(), this.opened())return;
						this.open()
					}
				})), t.on("mousedown touchstart", "abbr", this.bind(function (e) {
					this.isInterfaceEnabled() && (this.clear(), m(e), this.close(), this.selection.focus())
				})), t.on("mousedown touchstart", this.bind(function (i) {
					s(t), this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), g(i)
				})), o.on("mousedown touchstart", this.bind(function () {
					this.opts.shouldFocusInput(this) && this.search.focus()
				})), t.on("focus", this.bind(function (e) {
					g(e)
				})), this.focusser.on("focus", this.bind(function () {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active")
				})).on("blur", this.bind(function () {
					this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(e.Event("select2-blur")))
				})), this.search.on("focus", this.bind(function () {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active")
				})), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
			}, clear: function (t) {
				var s = this.selection.data("select2-data");
				if (s) {
					var i = e.Event("select2-clearing");
					if (this.opts.element.trigger(i), i.isDefaultPrevented())return;
					var n = this.getPlaceholderOption();
					this.opts.element.val(n ? n.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), t !== !1 && (this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(s),
						choice: s
					}), this.triggerChange({removed: s}))
				}
			}, initSelection: function () {
				if (this.isPlaceholderOptionSelected())this.updateSelection(null), this.close(), this.setPlaceholder(); else {
					var e = this;
					this.opts.initSelection.call(null, this.opts.element, function (s) {
						s !== t && null !== s && (e.updateSelection(s), e.close(), e.setPlaceholder(), e.nextSearchTerm = e.opts.nextSearchTerm(s, e.search.val()))
					})
				}
			}, isPlaceholderOptionSelected: function () {
				var e;
				return this.getPlaceholder() === t ? !1 : (e = this.getPlaceholderOption()) !== t && e.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === t || null === this.opts.element.val()
			}, prepareOpts: function () {
				var t = this.parent.prepareOpts.apply(this, arguments), s = this;
				return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function (e, t) {
					var i = e.find("option").filter(function () {
						return this.selected && !this.disabled
					});
					t(s.optionToData(i))
				} : "data"in t && (t.initSelection = t.initSelection || function (s, i) {
					var n = s.val(), o = null;
					t.query({
						matcher: function (e, s, i) {
							var r = a(n, t.id(i));
							return r && (o = i), r
						}, callback: e.isFunction(i) ? function () {
							i(o)
						} : e.noop
					})
				}), t
			}, getPlaceholder: function () {
				return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments)
			}, setPlaceholder: function () {
				var e = this.getPlaceholder();
				if (this.isPlaceholderOptionSelected() && e !== t) {
					if (this.select && this.getPlaceholderOption() === t)return;
					this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
				}
			}, postprocessResults: function (e, t, s) {
				var i = 0, n = this;
				if (this.findHighlightableChoices().each2(function (e, t) {
						return a(n.id(t.data("select2-data")), n.opts.element.val()) ? (i = e, !1) : void 0
					}), s !== !1 && this.highlight(t === !0 && i >= 0 ? i : 0), t === !0) {
					var o = this.opts.minimumResultsForSearch;
					o >= 0 && this.showSearch(O(e.results) >= o)
				}
			}, showSearch: function (t) {
				this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), e(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
			}, onSelect: function (e, t) {
				if (this.triggerSelect(e)) {
					var s = this.opts.element.val(), i = this.data();
					this.opts.element.val(this.id(e)), this.updateSelection(e), this.opts.element.trigger({
						type: "select2-selected",
						val: this.id(e),
						choice: e
					}), this.nextSearchTerm = this.opts.nextSearchTerm(e, this.search.val()), this.close(), t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), a(s, this.id(e)) || this.triggerChange({
						added: e,
						removed: i
					})
				}
			}, updateSelection: function (e) {
				var s, i, n = this.selection.find(".select2-chosen");
				this.selection.data("select2-data", e), n.empty(), null !== e && (s = this.opts.formatSelection(e, n, this.opts.escapeMarkup)), s !== t && n.append(s), i = this.opts.formatSelectionCssClass(e, n), i !== t && n.addClass(i), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
			}, val: function () {
				var e, s = !1, i = null, n = this, o = this.data();
				if (0 === arguments.length)return this.opts.element.val();
				if (e = arguments[0], arguments.length > 1 && (s = arguments[1]), this.select)this.select.val(e).find("option").filter(function () {
					return this.selected
				}).each2(function (e, t) {
					return i = n.optionToData(t), !1
				}), this.updateSelection(i), this.setPlaceholder(), s && this.triggerChange({
					added: i,
					removed: o
				}); else {
					if (!e && 0 !== e)return void this.clear(s);
					if (this.opts.initSelection === t)throw new Error("cannot call val() if initSelection() is not defined");
					this.opts.element.val(e), this.opts.initSelection(this.opts.element, function (e) {
						n.opts.element.val(e ? n.id(e) : ""), n.updateSelection(e), n.setPlaceholder(), s && n.triggerChange({
							added: e,
							removed: o
						})
					})
				}
			}, clearSearch: function () {
				this.search.val(""), this.focusser.val("")
			}, data: function (e) {
				var s, i = !1;
				return 0 === arguments.length ? (s = this.selection.data("select2-data"), s == t && (s = null), s) : (arguments.length > 1 && (i = arguments[1]), void(e ? (s = this.data(), this.opts.element.val(e ? this.id(e) : ""), this.updateSelection(e), i && this.triggerChange({
					added: e,
					removed: s
				})) : this.clear(i)))
			}
		}), H = k(R, {
			createContainer: function () {
				var t = e(document.createElement("div")).attr({"class": "select2-container select2-container-multi"}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
				return t
			}, prepareOpts: function () {
				var t = this.parent.prepareOpts.apply(this, arguments), s = this;
				return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function (e, t) {
					var i = [];
					e.find("option").filter(function () {
						return this.selected && !this.disabled
					}).each2(function (e, t) {
						i.push(s.optionToData(t))
					}), t(i)
				} : "data"in t && (t.initSelection = t.initSelection || function (s, i) {
					var n = r(s.val(), t.separator), o = [];
					t.query({
						matcher: function (s, i, r) {
							var c = e.grep(n, function (e) {
								return a(e, t.id(r))
							}).length;
							return c && o.push(r), c
						}, callback: e.isFunction(i) ? function () {
							for (var e = [], s = 0; s < n.length; s++)for (var r = n[s], c = 0; c < o.length; c++) {
								var l = o[c];
								if (a(r, t.id(l))) {
									e.push(l), o.splice(c, 1);
									break
								}
							}
							i(e)
						} : e.noop
					})
				}), t
			}, selectChoice: function (e) {
				var t = this.container.find(".select2-search-choice-focus");
				t.length && e && e[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), e && e.length && (this.close(), e.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", e)))
			}, destroy: function () {
				e("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), I.call(this, "searchContainer", "selection")
			}, initContainer: function () {
				var t, s = ".select2-choices";
				this.searchContainer = this.container.find(".select2-search-field"), this.selection = t = this.container.find(s);
				var i = this;
				this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function () {
					i.search[0].focus(), i.selectChoice(e(this))
				}), this.search.attr("id", "s2id_autogen" + M()), this.search.prev().text(e("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function () {
					this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
				})), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (e) {
					if (this.isInterfaceEnabled()) {
						++this.keydowns;
						var s = t.find(".select2-search-choice-focus"), i = s.prev(".select2-search-choice:not(.select2-locked)"), n = s.next(".select2-search-choice:not(.select2-locked)"), o = f(this.search);
						if (s.length && (e.which == A.LEFT || e.which == A.RIGHT || e.which == A.BACKSPACE || e.which == A.DELETE || e.which == A.ENTER)) {
							var a = s;
							return e.which == A.LEFT && i.length ? a = i : e.which == A.RIGHT ? a = n.length ? n : null : e.which === A.BACKSPACE ? this.unselect(s.first()) && (this.search.width(10), a = i.length ? i : n) : e.which == A.DELETE ? this.unselect(s.first()) && (this.search.width(10), a = n.length ? n : null) : e.which == A.ENTER && (a = null), this.selectChoice(a), g(e), void(a && a.length || this.open())
						}
						if ((e.which === A.BACKSPACE && 1 == this.keydowns || e.which == A.LEFT) && 0 == o.offset && !o.length)return this.selectChoice(t.find(".select2-search-choice:not(.select2-locked)").last()), void g(e);
						if (this.selectChoice(null), this.opened())switch (e.which) {
							case A.UP:
							case A.DOWN:
								return this.moveHighlight(e.which === A.UP ? -1 : 1), void g(e);
							case A.ENTER:
								return this.selectHighlighted(), void g(e);
							case A.TAB:
								return this.selectHighlighted({noFocus: !0}), void this.close();
							case A.ESC:
								return this.cancel(e), void g(e)
						}
						if (e.which !== A.TAB && !A.isControl(e) && !A.isFunctionKey(e) && e.which !== A.BACKSPACE && e.which !== A.ESC) {
							if (e.which === A.ENTER) {
								if (this.opts.openOnEnter === !1)return;
								if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)return
							}
							this.open(), (e.which === A.PAGE_UP || e.which === A.PAGE_DOWN) && g(e), e.which === A.ENTER && g(e)
						}
					}
				})), this.search.on("keyup", this.bind(function () {
					this.keydowns = 0, this.resizeSearch()
				})), this.search.on("blur", this.bind(function (t) {
					this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), t.stopImmediatePropagation(), this.opts.element.trigger(e.Event("select2-blur"))
				})), this.container.on("click", s, this.bind(function (t) {
					this.isInterfaceEnabled() && (e(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault()))
				})), this.container.on("focus", s, this.bind(function () {
					this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(e.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
				})), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
			}, enableInterface: function () {
				this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
			}, initSelection: function () {
				if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
					var e = this;
					this.opts.initSelection.call(null, this.opts.element, function (s) {
						s !== t && null !== s && (e.updateSelection(s), e.close(), e.clearSearch())
					})
				}
			}, clearSearch: function () {
				var e = this.getPlaceholder(), s = this.getMaxSearchWidth();
				e !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(e).addClass("select2-default"), this.search.width(s > 0 ? s : this.container.css("width"))) : this.search.val("").width(10)
			}, clearPlaceholder: function () {
				this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
			}, opening: function () {
				this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(e.Event("select2-open"))
			}, close: function () {
				this.opened() && this.parent.close.apply(this, arguments)
			}, focus: function () {
				this.close(), this.search.focus()
			}, isFocused: function () {
				return this.search.hasClass("select2-focused")
			}, updateSelection: function (t) {
				var s = [], i = [], o = this;
				e(t).each(function () {
					n(o.id(this), s) < 0 && (s.push(o.id(this)), i.push(this))
				}), t = i, this.selection.find(".select2-search-choice").remove(), e(t).each(function () {
					o.addSelectedChoice(this)
				}), o.postprocessResults()
			}, tokenize: function () {
				var e = this.search.val();
				e = this.opts.tokenizer.call(this, e, this.data(), this.bind(this.onSelect), this.opts), null != e && e != t && (this.search.val(e), e.length > 0 && this.open())
			}, onSelect: function (e, s) {
				this.triggerSelect(e) && "" !== e.text && (this.addSelectedChoice(e), this.opts.element.trigger({
					type: "selected",
					val: this.id(e),
					choice: e
				}), this.nextSearchTerm = this.opts.nextSearchTerm(e, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(e, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({added: e}), s && s.noFocus || this.focusSearch())
			}, cancel: function () {
				this.close(), this.focusSearch()
			}, addSelectedChoice: function (s) {
				var i, n, o = !s.locked, a = e("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"), r = e("<li class='select2-search-choice select2-locked'><div></div></li>"), c = o ? a : r, l = this.id(s), h = this.getVal();
				i = this.opts.formatSelection(s, c.find("div"), this.opts.escapeMarkup), i != t && c.find("div").replaceWith("<div>" + i + "</div>"), n = this.opts.formatSelectionCssClass(s, c.find("div")), n != t && c.addClass(n), o && c.find(".select2-search-choice-close").on("mousedown", g).on("click dblclick", this.bind(function (t) {
					this.isInterfaceEnabled() && (this.unselect(e(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), g(t), this.close(), this.focusSearch())
				})).on("focus", this.bind(function () {
					this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
				})), c.data("select2-data", s), c.insertBefore(this.searchContainer), h.push(l), this.setVal(h)
			}, unselect: function (t) {
				var s, i, o = this.getVal();
				if (t = t.closest(".select2-search-choice"), 0 === t.length)throw"Invalid argument: " + t + ". Must be .select2-search-choice";
				if (s = t.data("select2-data")) {
					var a = e.Event("select2-removing");
					if (a.val = this.id(s), a.choice = s, this.opts.element.trigger(a), a.isDefaultPrevented())return !1;
					for (; (i = n(this.id(s), o)) >= 0;)o.splice(i, 1), this.setVal(o), this.select && this.postprocessResults();
					return t.remove(), this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(s),
						choice: s
					}), this.triggerChange({removed: s}), !0
				}
			}, postprocessResults: function (e, t, s) {
				var i = this.getVal(), o = this.results.find(".select2-result"), a = this.results.find(".select2-result-with-children"), r = this;
				o.each2(function (e, t) {
					var s = r.id(t.data("select2-data"));
					n(s, i) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
				}), a.each2(function (e, t) {
					t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected")
				}), -1 == this.highlight() && s !== !1 && r.highlight(0), !this.opts.createSearchChoice && !o.filter(".select2-result:not(.select2-selected)").length > 0 && (!e || e && !e.more && 0 === this.results.find(".select2-no-results").length) && x(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + T(r.opts.formatNoMatches, r.opts.element, r.search.val()) + "</li>")
			}, getMaxSearchWidth: function () {
				return this.selection.width() - c(this.search)
			}, resizeSearch: function () {
				var e, t, s, i, n, o = c(this.search);
				e = v(this.search) + 10, t = this.search.offset().left, s = this.selection.width(), i = this.selection.offset().left, n = s - (t - i) - o, e > n && (n = s - o), 40 > n && (n = s - o), 0 >= n && (n = e), this.search.width(Math.floor(n))
			}, getVal: function () {
				var e;
				return this.select ? (e = this.select.val(), null === e ? [] : e) : (e = this.opts.element.val(), r(e, this.opts.separator))
			}, setVal: function (t) {
				var s;
				this.select ? this.select.val(t) : (s = [], e(t).each(function () {
					n(this, s) < 0 && s.push(this)
				}), this.opts.element.val(0 === s.length ? "" : s.join(this.opts.separator)))
			}, buildChangeDetails: function (e, t) {
				for (var t = t.slice(0), e = e.slice(0), s = 0; s < t.length; s++)for (var i = 0; i < e.length; i++)a(this.opts.id(t[s]), this.opts.id(e[i])) && (t.splice(s, 1), s > 0 && s--, e.splice(i, 1), i--);
				return {added: t, removed: e}
			}, val: function (s, i) {
				var n, o = this;
				if (0 === arguments.length)return this.getVal();
				if (n = this.data(), n.length || (n = []), !s && 0 !== s)return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(i && this.triggerChange({
					added: this.data(),
					removed: n
				}));
				if (this.setVal(s), this.select)this.opts.initSelection(this.select, this.bind(this.updateSelection)), i && this.triggerChange(this.buildChangeDetails(n, this.data())); else {
					if (this.opts.initSelection === t)throw new Error("val() cannot be called if initSelection() is not defined");
					this.opts.initSelection(this.opts.element, function (t) {
						var s = e.map(t, o.id);
						o.setVal(s), o.updateSelection(t), o.clearSearch(), i && o.triggerChange(o.buildChangeDetails(n, o.data()))
					})
				}
				this.clearSearch()
			}, onSortStart: function () {
				if (this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
				this.search.width(0), this.searchContainer.hide()
			}, onSortEnd: function () {
				var t = [], s = this;
				this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
					t.push(s.opts.id(e(this).data("select2-data")))
				}), this.setVal(t), this.triggerChange()
			}, data: function (t, s) {
				var i, n, o = this;
				return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function () {
					return e(this).data("select2-data")
				}).get() : (n = this.data(), t || (t = []), i = e.map(t, function (e) {
					return o.opts.id(e)
				}), this.setVal(i), this.updateSelection(t), this.clearSearch(), s && this.triggerChange(this.buildChangeDetails(n, this.data())), void 0)
			}
		}), e.fn.select2 = function () {
			var s, i, o, a, r, c = Array.prototype.slice.call(arguments, 0), l = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], h = ["opened", "isFocused", "container", "dropdown"], u = ["val", "data"], d = {search: "externalSearch"};
			return this.each(function () {
				if (0 === c.length || "object" == typeof c[0])s = 0 === c.length ? {} : e.extend({}, c[0]), s.element = e(this), "select" === s.element.get(0).tagName.toLowerCase() ? r = s.element.prop("multiple") : (r = s.multiple || !1, "tags"in s && (s.multiple = r = !0)), i = r ? new window.Select2["class"].multi : new window.Select2["class"].single, i.init(s); else {
					if ("string" != typeof c[0])throw"Invalid arguments to select2 plugin: " + c;
					if (n(c[0], l) < 0)throw"Unknown method: " + c[0];
					if (a = t, i = e(this).data("select2"), i === t)return;
					if (o = c[0], "container" === o ? a = i.container : "dropdown" === o ? a = i.dropdown : (d[o] && (o = d[o]), a = i[o].apply(i, c.slice(1))), n(c[0], h) >= 0 || n(c[0], u) >= 0 && 1 == c.length)return !1
				}
			}), a === t ? this : a
		}, e.fn.select2.defaults = {
			width: "copy",
			loadMorePadding: 0,
			closeOnSelect: !0,
			openOnEnter: !0,
			containerCss: {},
			dropdownCss: {},
			containerCssClass: "",
			dropdownCssClass: "",
			formatResult: function (e, t, s, i) {
				var n = [];
				return b(e.text, s.term, n, i), n.join("")
			},
			formatSelection: function (e, s, i) {
				return e ? i(e.text) : t
			},
			sortResults: function (e) {
				return e
			},
			formatResultCssClass: function (e) {
				return e.css
			},
			formatSelectionCssClass: function () {
				return t
			},
			minimumResultsForSearch: 0,
			minimumInputLength: 0,
			maximumInputLength: null,
			maximumSelectionSize: 0,
			id: function (e) {
				return e == t ? null : e.id
			},
			matcher: function (e, t) {
				return i("" + t).toUpperCase().indexOf(i("" + e).toUpperCase()) >= 0
			},
			separator: ",",
			tokenSeparators: [],
			tokenizer: P,
			escapeMarkup: C,
			blurOnChange: !1,
			selectOnBlur: !1,
			adaptContainerCssClass: function (e) {
				return e
			},
			adaptDropdownCssClass: function () {
				return null
			},
			nextSearchTerm: function () {
				return t
			},
			searchInputPlaceholder: "",
			createSearchChoicePosition: "top",
			shouldFocusInput: function (e) {
				var t = "ontouchstart"in window || navigator.msMaxTouchPoints > 0;
				return t && e.opts.minimumResultsForSearch < 0 ? !1 : !0
			}
		}, e.fn.select2.locales = [], e.fn.select2.locales.en = {
			formatMatches: function (e) {
				return 1 === e ? "One result is available, press enter to select it." : e + " results are available, use up and down arrow keys to navigate."
			}, formatNoMatches: function () {
				return "No matches found"
			}, formatAjaxError: function () {
				return "Loading failed"
			}, formatInputTooShort: function (e, t) {
				var s = t - e.length;
				return "Please enter " + s + " or more character" + (1 == s ? "" : "s")
			}, formatInputTooLong: function (e, t) {
				var s = e.length - t;
				return "Please delete " + s + " character" + (1 == s ? "" : "s")
			}, formatSelectionTooBig: function (e) {
				return "You can only select " + e + " item" + (1 == e ? "" : "s")
			}, formatLoadMore: function () {
				return "Loading more results…"
			}, formatSearching: function () {
				return "Searching…"
			}
		}, e.extend(e.fn.select2.defaults, e.fn.select2.locales.en), e.fn.select2.ajaxDefaults = {
			transport: e.ajax,
			params: {type: "GET", cache: !1, dataType: "json"}
		}, window.Select2 = {
			query: {ajax: S, local: y, tags: E},
			util: {debounce: u, markMatch: b, escapeMarkup: C, stripDiacritics: i},
			"class": {"abstract": R, single: D, multi: H}
		}
	}
}(jQuery);
