!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="/",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=r(2),o=n(i),s=document.getElementById("swiper"),a=s.clientWidth,u=s.clientHeight;new o["default"](s,{width:a,height:u,direction:"x",items:['<div class="red swiper__inner">Slider1</div>','<div class="green swiper__inner">Slider2</div>','<div class="blue swiper__inner">Slider3</div>']})},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(7),a=n(s),u=r(3),l=function(){function t(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];i(this,t),this.el=e,this.opts=r,this.direction=r.direction||"x",this.startPos={x:0,y:0},this.currPos={x:0,y:0},this.width=r.width,this.height=r.height,this.total=r.items.length-1||0,this.curr=0,this.wrapStyle={width:this.width,transform:this.translate(0,0,0),transitionDuration:"0ms"},this.render(),this.wrapper=document.querySelector("."+a["default"].wrapper),this.bindEvents()}return o(t,[{key:"bindEvents",value:function(){var t=this,e=0;this.wrapper.addEventListener("touchstart",function(e){e.preventDefault(),t.startPos={x:e.touches[0].clientX,y:e.touches[0].clientY}}),this.wrapper.addEventListener("touchmove",function(r){r.preventDefault(),t.currPos={x:r.touches[0].clientX,y:r.touches[0].clientY},e=t.currPos[t.direction]-t.startPos[t.direction],t.moveWrap(e+-1*t.width*t.curr)}),this.wrapper.addEventListener("touchend",function(r){r.preventDefault(),Math.abs(e)/t.width>.5&&(0>e?(t.curr+=1,t.curr=t.curr<t.total?t.curr:t.total):(t.curr-=1,t.curr=t.curr>0?t.curr:0)),t.adjustPosition()})}},{key:"adjustPosition",value:function(){this.wrapStyle.transitionDuration="300ms",this.wrapper.style=(0,u.toStyle)(this.wrapStyle),this.moveWrap(-1*this.width*this.curr),this.wrapStyle.transitionDuration="0ms"}},{key:"moveWrap",value:function(t){"x"==this.direction?this.wrapStyle.transform=this.translate(t,0,0):this.wrapStyle.transform=this.translate(0,t,0),this.wrapper.style=(0,u.toStyle)(this.wrapStyle)}},{key:"translate",value:function(t,e,r){return"translate3d("+t+"px, "+e+"px, "+r+"px)"}},{key:"genItemsTpl",value:function(){for(var t=this.opts,e=t.items,r=t.width,n=t.height,i=(t.itemCls,""),o=0;o<e.length;o++)i+='<div class="'+a["default"].slider+'" style="'+(0,u.toStyle)({width:r,lineHeight:n/2})+'" >'+e[o]+"</div>";return i}},{key:"renderDom",value:function(){var t=this.opts;t.width,t.items;return'\n      <div class="'+a["default"].wrapper+'" style="'+(0,u.toStyle)(this.wrapStyle)+'" \n      >\n        '+this.genItemsTpl()+"\n      </div>\n      "}},{key:"render",value:function(){this.el.innerHTML=this.renderDom()}}]),t}();e["default"]=l},function(t,e){"use strict";function r(t){for(var e="",r=void 0,n=void 0,i=Object.keys(t),o=0;o<i.length;o++)r=i[o],n=t[r],r=r.replace(/[A-Z]/,function(t){return"-"+t.toLowerCase()}),"number"==typeof n&&(n+="px"),e+=r+": "+n+";";return e}Object.defineProperty(e,"__esModule",{value:!0}),e.toStyle=r},function(t,e,r){e=t.exports=r(5)(),e.push([t.id,"._1SDHsJz1_gv_MhaoDjTMgw{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}._2QOc5MSqAPastRF3TBb01q{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%}.red{background-color:red}.green{background-color:green}.blue{background-color:blue}.swiper__inner{height:100%;color:#fff;text-align:center;font-size:50px}",""]),e.locals={wrapper:"_1SDHsJz1_gv_MhaoDjTMgw",slider:"_2QOc5MSqAPastRF3TBb01q"}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=p[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(l(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(l(n.parts[o],e));p[n.id]={id:n.id,refs:1,parts:s}}}}function i(t){for(var e=[],r={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],a=i[2],u=i[3],l={css:s,media:a,sourceMap:u};r[o]?r[o].parts.push(l):e.push(r[o]={id:o,parts:[l]})}return e}function o(t,e){var r=y(),n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function l(t,e){var r,n,i;if(e.singleton){var o=g++;r=m||(m=a(e)),n=c.bind(null,r,o,!1),i=c.bind(null,r,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),n=d.bind(null,r),i=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=f.bind(null,r),i=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}function c(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function f(t,e){var r=e.css,n=e.media;e.sourceMap;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function d(t,e){var r=e.css,n=(e.media,e.sourceMap);n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,w=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=i(t);return n(r,e),function(t){for(var o=[],s=0;s<r.length;s++){var a=r[s],u=p[a.id];u.refs--,o.push(u)}if(t){var l=i(t);n(l,e)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var b=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.id,n,""]]);r(6)(n,{});n.locals&&(t.exports=n.locals)}]);