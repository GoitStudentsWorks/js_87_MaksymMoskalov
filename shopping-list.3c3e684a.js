!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},n=t.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},t.parcelRequired7c6=n),n.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}})),n.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",g={};function m(){}function y(){}function v(){}var w={};s(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==r&&n.call(x,i)&&(w=x);var L=v.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=v,s(L,"constructor",v),s(v,"constructor",y),y.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),s(L,c,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),n.register("xpKCW",(function(t,e){var r=document.querySelector(".charity-box"),n=document.querySelector(".icon-slide"),o=0;r.insertAdjacentHTML("afterbegin",[{title:"Save the Children",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Save_the_Children.png",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{title:"Project HOPE",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/ho.png",url:"https://www.projecthope.org/country/ukraine/"},{title:"UNITED24",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Internation_medical_corps.png",url:"https://u24.gov.ua/uk"},{title:"International Medical Corps",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/United24.png",url:"https://internationalmedicalcorps.org/country/ukraine/"},{title:"RAZOM",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Razom.png",url:"https://www.razomforukraine.org/"},{title:"Serhiy Prytula Charity Foundation",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/pr.png",url:"https://prytulafoundation.org/en"},{title:"Medicins Sans Frontieres",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Medicins_sans_frontieres.png",url:"https://www.msf.org/ukraine"},{title:"Action against hunger",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/Action_against_hunger.png",url:"https://www.actionagainsthunger.org/location/europe/ukraine/"},{title:"World vision",img:"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/World_vision.png",url:"https://www.wvi.org/emergencies/ukraine"}].map((function(t){var e=t.title,r=t.url,n=t.img,i=(++o).toString().padStart(2,"0");return'<li class="list-item-fund">\n        <a href="'.concat(r,'" target="_blank" tabindex="-1">\n        <div class="wrap-counter-img">\n        <span class="counter">').concat(i,'</span> \n            <img src="').concat(n,'" alt="').concat(e,'" class="charity-logo" tabindex="0">\n          </div>\n          </a>\n        </li>')})).join("")),document.querySelector(".button-slide").addEventListener("click",(function(){r.classList.contains("charity-box-clicked")?(r.classList.remove("charity-box-clicked"),n.classList.remove("icon-slide-clicked")):(r.classList.add("charity-box-clicked"),n.classList.add("icon-slide-clicked"))}))})),n.register("32ZrB",(function(t,e){var r=document.getElementById("theme-toggle"),n=document.body;function o(t){localStorage.setItem("theme",t)}function i(t){"dark"===t?(n.classList.remove("light-theme"),n.classList.add("dark-theme"),r.checked=!0):(n.classList.remove("dark-theme"),n.classList.add("light-theme"),r.checked=!1)}var a=localStorage.getItem("theme");a&&i(a),r.addEventListener("change",(function(){r.checked?(i("dark"),o("dark")):(i("light"),o("light"))}))})),n.register("cs7FV",(function(t,e){!function(){var t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");e.addEventListener("click",(function(){var r="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open"),document.body.classList.toggle("fixer"),e.classList.toggle("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(r){r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))}))}()}))}();
//# sourceMappingURL=shopping-list.3c3e684a.js.map
