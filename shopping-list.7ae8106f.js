function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},n.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var i,o;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var r={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},o=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"2DQ2d":"shopping-list.7ae8106f.js","3XKNb":"amazon.c9513f1c.png","3egVH":"applebook.99f5b86b.png","f06Fg":"bookshop.579c7059.png","4SZ3I":"amazondark.4d7f1b4a.png"}'));var s;s=new URL(r("kyEFX").resolve("3XKNb"),import.meta.url).toString();var a;a=new URL(r("kyEFX").resolve("3egVH"),import.meta.url).toString();var c;c=new URL(r("kyEFX").resolve("f06Fg"),import.meta.url).toString();var u;u=new URL(r("kyEFX").resolve("4SZ3I"),import.meta.url).toString();var l,p={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,l=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,r,s=Object.prototype.hasOwnProperty;for(o=1,r=arguments.length;o<r;o+=1)for(i in n=arguments[o])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),r=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):r(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,o=n;n>=0&&o<r;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),r=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=r(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),r=n(0),s=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=r({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),r=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>o&&(e=Math.max(o-r+1,1),n=o)):(e=(s-1)*r+1,n=s*r,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){var i=n(0),o=n(14),r=n(4),s=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,r=e===i.context,s=o&&r;return s&&n._forgetContext(i.context),s}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),r=n(21),s=n(22),a=n(24),c=n(25),u=n(0),l=n(4),p=n(28),h=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],m=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,(function(t){this._buttons[t]=h.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(d,(function(t){var e="disabled"+h.capitalizeFirstLetter(t);this._buttons[e]=h.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=h.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=h.createElementByTemplate(this._template.currentPage,{page:n}):(e=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,o=r(e);a(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!h.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],h.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),r=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=r(t,e),a=!1;o(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,r){i(e)?o(e.split(/\s+/g),(function(e){s(t,e,n,r)})):o(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),r=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),r=n(2),s=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,f=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,s=0;return o(e,(function(t,o){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,o)),s=o+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,s="";return o(i.exps,(function(t,e){return(r=y(t,n))&&(s=x(i.sourcesInsideIf[e],n)),!r})),s},each:function(t,e,n){var i=y(t,n),s=r(i)?"@index":"@key",c={},u="";return o(i,(function(t,i){c[s]=i,c["@this"]=t,a(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var o=i("as",t),r=t[o+1],s=y(t.slice(0,o),n),c={};return c[r]=s,x(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return o.push(t.slice(r)),o};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:f.test(t)?i=t.replace(d,""):u.test(t)?i=_((n=t.split(l))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(h))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,o,r,a,c=m[t],u=1,l=2,p=e[l];u&&s(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,r=i,(a=e.splice(o+1,r-o)).pop(),a),n),e}function y(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,o,r=1,a=t[r];s(a);)i=(n=a.split(" "))[0],m[i]?(o=b(i,t.splice(r,t.length-r),e),t=t.concat(o)):t[r]=y(n,e),a=t[r+=2];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},p=l();const h=document.querySelector(".empty");h.classList.add("not-is-hidden");const f=document.querySelector(".book-list"),d=document.getElementById("pagination"),g=new(e(p))(d,{totalItems:v().length,itemsPerPage:3,visiblePages:1,centerAlign:!0});!async function(){const t=await JSON.parse(localStorage.getItem("book-to-buy"));if(t)if(t.length>0){h.classList.replace("not-is-hidden","is-hidden");const e=m(t);f.innerHTML=e,_(1,t)}else h.classList.replace("is-hidden","not-is-hidden"),d.style.display="none"}();function m(t){const n=document.body.classList.contains("dark-theme");return t.map((({_id:t,list_name:i,book_image:o,author:r,title:l,description:p,buy_links:h})=>{const f=e(n?u:s);return`<li class="book-item" id="${t}">\n              <div class="book-data">\n                <div class="book-img"">\n                <img src="${o}" alt="book1"></div>\n                <div class="book-info">\n                  <h2 class="book-name">${l}</h2>\n                  <p class="book-category">${i}</p>\n                  <p class="book-desc">\n                    ${p||"no content"}\n                  </p>\n                  <div class="author-shoplinks">\n                    <p class="book-author">${r}</p>\n                    <ul class="shop-links">\n                      <li class="item-book">\n                        <a href="${h[0].url}" target="_blank" class="">\n                          <img class = "img-amazzon-dark"\n                            src="${f}"\n                            alt="${h[0].name}"\n                          />\n                        </a>\n                      </li>\n                      <li class="item-book">\n                        <a href="${h[1].url}" target="_blank" class="">\n                          <img\n                            src="${e(a)}"\n                            alt="${h[1].name}"\n                            width="16px"\n                            height="16px"\n                          />\n                        </a>\n                      </li>\n                      <li class="item-book">\n                        <a href="${h[4].url}" target="_blank" class="">\n                          <img\n                            src="${e(c)}"\n                            alt="${h[4].name}"\n                            width="16px"\n                            height="16px"\n                          />\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <button type="button" class="btn-delete" data-id="${t}">\n                <svg class="icon-delete" data-id="${t}" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n                     <path data-id="${t}" d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                </svg>\n              </button>\n            </li>`})).join("")}function v(){try{const t=localStorage.getItem("book-to-buy");return t?JSON.parse(t):[]}catch(t){console.log(t.message)}}function _(t,e){const n=3*(t-1),i=n+3,o=m(e.slice(n,i));f.innerHTML=o}f.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName&&"svg"!==t.target.nodeName&&"path"!==t.target.nodeName)return;const e=g.getCurrentPage(),n=v(),i=n.findIndex((({_id:e})=>e===t.target.dataset.id));if(n.splice(i,1),function(t){localStorage.setItem("book-to-buy",JSON.stringify(t))}(n),g.reset(n.length),0===n.length){h.classList.replace("is-hidden","not-is-hidden"),d.style.display="none";const t=m(n);f.innerHTML=t}else{h.classList.replace("not-is-hidden","is-hidden");const t=m(n);f.innerHTML=t,_(1,n)}e>g.totalPages?g.movePageTo(g.totalPages):g.movePageTo(e);_(g.getCurrentPage(),n)})),g.on("beforeMove",(function(t){_(t.page,v())}));const b=document.querySelector(".charity-box"),y=document.querySelector(".icon-slide");let x=0;b.insertAdjacentHTML("afterbegin",[{title:"Save the Children",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Save_the_Children.png",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{title:"Project HOPE",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/ho.png",url:"https://www.projecthope.org/country/ukraine/"},{title:"UNITED24",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Internation_medical_corps.png",url:"https://u24.gov.ua/uk"},{title:"International Medical Corps",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/United24.png",url:"https://internationalmedicalcorps.org/country/ukraine/"},{title:"RAZOM",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Razom.png",url:"https://www.razomforukraine.org/"},{title:"Serhiy Prytula Charity Foundation",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/pr.png",url:"https://prytulafoundation.org/en"},{title:"Medicins Sans Frontieres",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Medicins_sans_frontieres.png",url:"https://www.msf.org/ukraine"},{title:"Action against hunger",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Action_against_hunger.png",url:"https://www.actionagainsthunger.org/location/europe/ukraine/"},{title:"World vision",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/World_vision.png",url:"https://www.wvi.org/emergencies/ukraine"}].map((({title:t,url:e,img:n})=>(x++,`<li class="list-item-fund">\n        <a href="${e}" target="_blank" tabindex="-1">\n        <div class="wrap-counter-img">\n        <span class="counter">${x.toString().padStart(2,"0")}</span> \n            <img src="${n}" alt="${t}" class="charity-logo" tabindex="0">\n          </div>\n          </a>\n        </li>`))).join(""));document.querySelector(".button-slide").addEventListener("click",(function(){b.classList.contains("charity-box-clicked")?(b.classList.remove("charity-box-clicked"),y.classList.remove("icon-slide-clicked")):(b.classList.add("charity-box-clicked"),y.classList.add("icon-slide-clicked"))}));const w=document.getElementById("theme-toggle"),P=document.body;function E(t){localStorage.setItem("theme",t)}function k(t){"dark"===t?(P.classList.remove("light-theme"),P.classList.add("dark-theme"),w.checked=!0):(P.classList.remove("dark-theme"),P.classList.add("light-theme"),w.checked=!1)}const C=localStorage.getItem("theme");C&&k(C),w.addEventListener("change",(function(){w.checked?(k("dark"),E("dark")):(k("light"),E("light"))})),(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");e.addEventListener("click",(()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),document.body.classList.toggle("fixer"),e.classList.toggle("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))}))})();
//# sourceMappingURL=shopping-list.7ae8106f.js.map
