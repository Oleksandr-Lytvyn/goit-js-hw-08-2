function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,c,u,f=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function h(e){return f=e,c=setTimeout(O,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=i}function O(){var e=g();if(S(e))return j(e);c=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,i-(e-f)):n}(e))}function j(e){return c=void 0,v&&r?b(e):(r=o=void 0,a)}function T(){var e=g(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===c)return h(u);if(s)return c=setTimeout(O,t),b(u)}return void 0===c&&(c=setTimeout(O,t)),a}return t=p(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(p(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==c&&clearTimeout(c),f=0,r=u=o=c=void 0},T.flush=function(){return void 0===c?a:j(g())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");!function(){const e=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("contactFormKey");if(!e)return;Object.entries(e).forEach((([e,t])=>{b.elements[e].value=t}))}();const h=e(t)((e=>{const{name:t,value:n}=e.target;try{let e=localStorage.getItem("contactFormKey");e=e?JSON.parse(e):{},e[t]=n,((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("contactFormKey",e);const r=JSON.stringify(e);localStorage.setItem("contactFormKey",r)}catch(e){console.error(e)}}),500);b.addEventListener("input",h),b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),e.currentTarget.reset(),localStorage.removeItem("contactFormKey")}));
//# sourceMappingURL=03-feedback.8fe7029f.js.map