!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,f=a||s||Function("return this")(),l=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return f.Date.now()};function y(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=i.test(t);return e||u.test(t)?c(t.slice(2),e?2:8):r.test(t)?NaN:+t}n=function(t,n,e){var o,r,i,u,c,a,s=0,f=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=o,i=r;return o=r=void 0,s=n,u=t.apply(i,e)}function b(t){return s=t,c=setTimeout($,n),f?m(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||l&&t-s>=i}function $(){var t=v();if(j(t))return T(t);c=setTimeout($,function(t){var e=n-(t-a);return l?d(e,i-(t-s)):e}(t))}function T(t){return c=void 0,h&&o?m(t):(o=r=void 0,u)}function w(){var t=v(),e=j(t);if(o=arguments,r=this,a=t,e){if(void 0===c)return b(a);if(l)return c=setTimeout($,n),m(a)}return void 0===c&&(c=setTimeout($,n)),u}return n=g(n)||0,y(e)&&(f=!!e.leading,i=(l="maxWait"in e)?p(g(e.maxWait)||0,n):i,h="trailing"in e?!!e.trailing:h),w.cancel=function(){void 0!==c&&clearTimeout(c),s=0,o=a=r=c=void 0},w.flush=function(){return void 0===c?u:T(v())},w};const h={searchForm:document.querySelector("#search-box"),countriesList:document.querySelector(".country-list"),countryCard:document.querySelector(".country-info")};h.searchForm.addEventListener("input",t(n)((function(t){const n=t.target.value;if(!n)return;(e=n,fetch(`https://restcountries.com/v3.1/name/${e}`).then((t=>t.json())).catch((t=>console.log(t)))).then((t=>{console.log(t),console.log(t[1].languages),h.countriesList.innerHTML=t.map((t=>`<svg width='30' height='30'>\n    <use href='${t.flags.svg}'></use>\n    </svg>\n    <h2 class='country-title'>${t.name.official}</h2>\n    <p class='country-descr'>Capital:<span> ${t.capital}</span></p>\n    <p class='country-descr'>Polulation:<span> ${t.population}</span></p>\n    <p class='country-descr'>Languages:<span> ${t.languages}</span></p>`)).join("")}));var e}),300))}();
//# sourceMappingURL=index.3fe942ab.js.map