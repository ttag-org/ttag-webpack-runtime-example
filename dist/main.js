!function(n){function t(t){for(var e,o,u=t[0],a=t[1],i=0,s=[];i<u.length;i++)o=u[i],r[o]&&s.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e]);for(c&&c(t);s.length;)s.shift()()}var e={},r={0:0};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(n){var t=[],e=r[n];if(0!==e)if(e)t.push(e[2]);else{var u=new Promise(function(t,o){e=r[n]=[t,o]});t.push(e[2]=u);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(n){return o.p+""+({}[n]||n)+".js"}(n);var c=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var e=r[n];if(0!==e){if(e){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+u+")",c.name="ChunkLoadError",c.type=o,c.request=u,e[1](c)}r[n]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},o.m=n,o.c=e,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="./dist/",o.oe=function(n){throw console.error(n),n};var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var c=a;o(o.s=3)}([function(n,t,e){n.exports=e(2)},function(n,t){t.defaults={},t.set=function(n,e,r){var o=r||{},u=t.defaults,a=o.expires||u.expires,i=o.domain||u.domain,c=void 0!==o.path?o.path:void 0!==u.path?u.path:"/",s=void 0!==o.secure?o.secure:u.secure,l=void 0!==o.httponly?o.httponly:u.httponly,f=void 0!==o.samesite?o.samesite:u.samesite,d=a?new Date("number"==typeof a?(new Date).getTime()+864e5*a:a):0;document.cookie=n.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+e.replace(/[^+#$&\/:<-\[\]-}]/g,encodeURIComponent)+(d&&d.getTime()>=0?";expires="+d.toUTCString():"")+(i?";domain="+i:"")+(c?";path="+c:"")+(s?";secure":"")+(l?";httponly":"")+(f?";samesite="+f:"")},t.get=function(n){for(var t=document.cookie.split(";");t.length;){var e=t.pop(),r=e.indexOf("=");if(r=r<0?e.length:r,decodeURIComponent(e.slice(0,r).replace(/^\s+/,""))===n)return decodeURIComponent(e.slice(r+1))}return null},t.erase=function(n,e){t.set(n,"",{expires:-1,domain:e&&e.domain,path:e&&e.path,secure:0,httponly:0})},t.all=function(){for(var n={},t=document.cookie.split(";");t.length;){var e=t.pop(),r=e.indexOf("=");r=r<0?e.length:r,n[decodeURIComponent(e.slice(0,r).replace(/^\s+/,""))]=decodeURIComponent(e.slice(r+1))}return n}},function(n,t,e){n.exports=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=4)}([function(n,t,e){"use strict";function r(n,t){if(t[n])return t[n];var e=n.match(u);if(!e)throw new Error("Can't find lang or lcale with code "+n);return t[e[1]]}function o(n){return r(n,i).split(";")[1]}Object.defineProperty(t,"__esModule",{value:!0});var u=/(\w+)[-_].*/,a={},i={ach:"2;n>1",af:"2;n!=1",ak:"2;n>1",am:"2;n>1",an:"2;n!=1",ar:"6;n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5",arn:"2;n>1",ast:"2;n!=1",ay:"1;0",az:"2;n!=1",be:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",bg:"2;n!=1",bn:"2;n!=1",bo:"1;0",br:"2;n>1",brx:"2;n!=1",bs:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",ca:"2;n!=1",cgg:"1;0",cs:"3;n==1?0:(n>=2&&n<=4)?1:2",csb:"3;n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",cy:"4;n==1?0:n==2?1:(n!=8&&n!=11)?2:3",da:"2;n!=1",de:"2;n!=1",doi:"2;n!=1",dz:"1;0",el:"2;n!=1",en:"2;n!=1",eo:"2;n!=1",es:"2;n!=1",et:"2;n!=1",eu:"2;n!=1",fa:"1;0",ff:"2;n!=1",fi:"2;n!=1",fil:"2;n>1",fo:"2;n!=1",fr:"2;n>1",fur:"2;n!=1",fy:"2;n!=1",ga:"5;n==1?0:n==2?1:n<7?2:n<11?3:4",gd:"4;(n==1||n==11)?0:(n==2||n==12)?1:(n>2&&n<20)?2:3",gl:"2;n!=1",gu:"2;n!=1",gun:"2;n>1",ha:"2;n!=1",he:"2;n!=1",hi:"2;n!=1",hne:"2;n!=1",hr:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",hu:"2;n!=1",hy:"2;n!=1",id:"1;0",is:"2;n%10!=1||n%100==11",it:"2;n!=1",ja:"1;0",jbo:"1;0",jv:"2;n!==0",ka:"1;0",kk:"1;0",km:"1;0",kn:"2;n!=1",ko:"1;0",ku:"2;n!=1",kw:"4;n==1?0:n==2?1:n==3?2:3",ky:"1;0",lb:"2;n!=1",ln:"2;n>1",lo:"1;0",lt:"3;n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2",lv:"3;n%10==1&&n%100!=11?0:n!=0?1:2",mai:"2;n!=1",mfe:"2;n>1",mg:"2;n>1",mi:"2;n>1",mk:"2;n==1||n%10==1?0:1",ml:"2;n!=1",mn:"2;n!=1",mni:"2;n!=1",mnk:"3;n==0?0:n==1?1:2",mr:"2;n!=1",ms:"1;0",mt:"4;n==1?0:n==0||(n%100>1&&n%100<11)?1:(n%100>10&&n%100<20)?2:3",my:"1;0",nah:"2;n!=1",nap:"2;n!=1",nb:"2;n!=1",ne:"2;n!=1",nl:"2;n!=1",nn:"2;n!=1",no:"2;n!=1",nso:"2;n!=1",oc:"2;n>1",or:"2;n!=1",pa:"2;n!=1",pap:"2;n!=1",pl:"3;n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",pms:"2;n!=1",ps:"2;n!=1",pt:"2;n!=1",rm:"2;n!=1",ro:"3;n==1?0:(n==0||(n%100>0&&n%100<20))?1:2",ru:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",rw:"2;n!=1",sah:"1;0",sat:"2;n!=1",sco:"2;n!=1",sd:"2;n!=1",se:"2;n!=1",si:"2;n!=1",sk:"3;n==1?0:(n>=2&&n<=4)?1:2",sl:"4;n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0",so:"2;n!=1",son:"2;n!=1",sq:"2;n!=1",sr:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",su:"1;0",sv:"2;n!=1",sw:"2;n!=1",ta:"2;n!=1",te:"2;n!=1",tg:"2;n>1",th:"1;0",ti:"2;n>1",tk:"2;n!=1",tr:"2;n>1",tt:"1;0",ug:"1;0",uk:"3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",ur:"2;n!=1",uz:"2;n>1",vi:"1;0",wa:"2;n>1",wo:"1;0",yo:"2;n!=1",zh:"1;0"};t.getFormula=o,t.getNPlurals=function(n){var t=r(n,i);return parseInt(t.split(";")[0],10)},t.getPluralFunc=function(n){return function(n){var t=a[n];return t||(t=new Function("n","args",function(n){return"return args[+ ("+n+")];"}(n)),a[n]=t),t}(o(n))},t.hasLang=function(n){try{return r(n,i),!0}catch(n){return!1}},t.getAvailLangs=function(){return Object.keys(i)}},function(n,t,e){"use strict";function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,u=n}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t}function u(n,t){return n.replace(x,function(n){return"${".concat(t[g(n)],"}")})}function a(n){var t={},e=n.match(x);if(!e)return null;for(var r=0;r<e.length;r++)t[g(e[r])]=r;return t}function i(n){var t=a(n.msgid);if(!t)return n;var e=u(n.msgid,t),r={msgid:e};n.msgid_plural&&(r.msgid_plural=u(n.msgid_plural,t)),r.msgstr=[];for(var o=n.msgstr,i=0;i<o.length;i++)r.msgstr.push(u(o[i],t));return r.comments=n.comments,r}function c(n,t){var e=a(n);return e?[u(n,e),t.map(function(n){return u(n,e)})]:[n,t]}e.d(t,"b",function(){return d}),e.d(t,"c",function(){return v}),e.d(t,"d",function(){return m}),e.d(t,"e",function(){return y}),t.g=function(n){for(var t={},e=o(n.translations),r=0;r<e.length;r++){for(var u=e[r],a=n.translations[u],c={},s=o(a),l=0;l<s.length;l++){var f=s[l],d=i(a[f]);c[d.msgid]=d}t[u]=c}return n.translations=t,n},t.h=function(n){for(var t={headers:n.headers},e={},u=o(n.contexts),a=0;a<u.length;a++){for(var i=u[a],s={},l=o(n.contexts[i]),f=0;f<l.length;f++){var d=l[f],g=n.contexts[i][d],p=c(d,g),h=r(p,2),v=h[0],m=h[1];s[v]=m}e[i]=s}return t.contexts=e,t},t.a=function(n){return"string"!=typeof n?n:-1===n.indexOf("\n")?n:l()(n)},t.f=function(n){var t=n.getCurrentLocaleHeaders(),r=t.language|t.Language;return r?e.i(f.getPluralFunc)(r):function(n){var t=b[n];return t||(t=new Function("n","args",function(n){return"return args[+ (".concat(n,")];")}(n)),b[n]=t),t}(function(n){var t=w.exec(n["plural-forms"])[1];return";"===t[t.length-1]&&(t=t.slice(0,-1)),t}(t))};var s=e(5),l=e.n(s),f=e(0),d=(e.n(f),function(n,t){return n.reduce(function(n,e,r){return n+e+(void 0!==t[r]&&"${".concat(r,"}")||"")},"")}),g=function(n){return n.replace(/\s/g,"")},p={},h=function(n){return function(t){return p[t]?p[t]:(p[t]=n(t),p[t])}}(function(n){return new RegExp("\\$\\{(?:[\\s]+?|\\s?)".concat(n,"(?:[\\s]+?|\\s?)}"))}),v=function(n,t){return t.reduce(function(n,t,e){return n.replace(h(e),t)},n)},m=function(n,t){return n.reduce(function(n,e,r){return n+e+(void 0!==t[r]?t[r]:"")},"")},y=function(n,t){return n.reduce(function(n,e,r){return void 0!==t[r]?n.concat(e,t[r]):n.concat(e)},[])},b={},w=/\splural ?=?([\s\S]*);?/,x=/\$\{\s*([.\w+\[\]])*\s*\}/g},function(n,t,e){"use strict";var r=e(0);e.n(r)},function(n,t,e){"use strict";t.a=function(){var n={locales:{},currentLocales:[],currentLocale:"en",dedent:!0,defaultLang:"en"};this.addLocale=function(t,o){if(o.translations)o=e.i(r.g)(o);else{if(!o.contexts)throw new Error("Invalid locale data format");o=e.i(r.h)(o)}n.locales[t]=o},this.setCurrentLocale=function(t){n.currentLocale=t},this.setDedent=function(t){n.dedent=t},this.setCurrentLocales=function(t){n.currentLocales=t},this.getAvailLocales=function(){return n.locales},this.getCurrentLocales=function(){return n.currentLocales},this.getCurrentLocale=function(){return n.currentLocale},this.isDedent=function(){return n.dedent},this.setDefaultLang=function(t){n.defaultLang=t},this.getDefaultPluralFn=function(){return e.i(o.getPluralFunc)(n.defaultLang)},this.getDefaultPluralFormsCount=function(){return e.i(o.getNPlurals)(n.defaultLang)},this.getCurrentLocaleHeaders=function(){return n.locales[n.currentLocale].headers}};var r=e(1),o=(e(2),e(0));e.n(o)},function(n,t,e){"use strict";function r(n){this.getContext=function(){return n}}function o(n){if(!n)return!1;for(var t=0;t<n.length;t++)if(!n[t].length)return!1;return!0}function u(n,t,e){var r=g.getAvailLocales(),u=r[n];if(!u)return null;if(u.translations){var a=u.translations[e]||u.translations[""],i=a&&a[t];if(i&&!function(n){return n&&n.comments&&"fuzzy"===n.comments.flag}(i)&&o(i.msgstr))return i.msgstr}if(u.contexts){var c=u.contexts[e]||u.contexts[""],s=c&&c[t];if(s&&o(s))return s}return null}function a(n,t){var e=g.getCurrentLocales();if(e.length)for(var r=0;r<e.length;r++){var o=u(e[r],n,t);if(o)return g.setCurrentLocale(e[r]),o}return u(g.getCurrentLocale(),n,t)}function i(n){var t=n;if(n&&n.reduce){for(var r=arguments.length,o=new Array(r>1?r-1:0),u=1;u<r;u++)o[u-1]=arguments[u];var i=h(e.i(f.b)(n,o)),c=p(this),s=a(i,c);t=s?e.i(f.c)(s[0],o):e.i(f.d)(n,o)}return h(t)}function c(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(n&&n.reduce){var u=h(e.i(f.b)(n,r)),i=p(this),c=a(u,i);return c?c[0].split(v).map(function(n){var t=n.match(m);return t?r[+t[1]]:n}):e.i(f.e)(n,r)}return n}function s(n){var t=p(this),e=a(n,t);return e?e[0]:n}function l(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var o=h(e.i(f.b)(t[0]._strs,t[0]._exprs)),u=t[t.length-1],i=t.slice(1,-1);i.unshift(t[0].toString());var c=a(o,p(this));if(c){var s=e.i(f.f)(g);return h(e.i(f.c)(s(u,c),t[0]._exprs))}var l=g.getDefaultPluralFn();return h(l(u,i))}Object.defineProperty(t,"__esModule",{value:!0}),t.t=i,t.jt=c,t.msgid=function(n){if(n&&n.reduce){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var u=new String(e.i(f.d)(n,r));return u._strs=n,u._exprs=r,u}return n},t.gettext=s,e.d(t,"_",function(){return y}),t.ngettext=l,t.addLocale=function(n,t){g.addLocale(n,t)},t.useLocale=function(n){g.setCurrentLocale(n)},t.setDedent=function(n){g.setDedent(Boolean(n))},t.useLocales=function(n){g.setCurrentLocales(n)},t.setDefaultLang=function(n){g.setDefaultLang(n)},t.c=function(n){var t=new r(n);return{t:i.bind(t),jt:c.bind(t),gettext:s.bind(t),ngettext:l.bind(t)}};var f=e(1),d=(e(2),e(3)),g=new d.a,p=function(n){return n instanceof r?n.getContext():""},h=function(n){return g.isDedent()?e.i(f.a)(n):n},v=/(\${\s*\d+\s*})/g,m=/\${\s*(\d+)\s*}/,y=s},function(n,t,e){"use strict";n.exports=function(n){var t=void 0;t="string"==typeof n?[n]:n.raw;for(var e="",r=0;r<t.length;r++)e+=t[r].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),r<(arguments.length<=1?0:arguments.length-1)&&(e+=arguments.length<=r+1?void 0:arguments[r+1]);var o=e.split("\n"),u=null;return o.forEach(function(n){var t=n.match(/^(\s+)\S+/);if(t){var e=t[1].length;u=u?Math.min(u,e):e}}),null!==u&&(e=o.map(function(n){return" "===n[0]?n.slice(u):n}).join("\n")),(e=e.trim()).replace(/\\n/g,"\n")}}])},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(1),u=e.n(o);function a(n){u.a.set("lang",n),window.location.reload()}document.getElementById("en-select").onclick=n=>{n.preventDefault(),a("en")},document.getElementById("uk-select").onclick=n=>{n.preventDefault(),a("uk")},async function(){await async function(){const n=u.a.get("lang");if("uk"===n){const t=await e.e(1).then(e.t.bind(null,4,3));Object(r.addLocale)(n,t),Object(r.useLocale)(n)}}(),document.getElementById("content").innerHTML=r.t`Hello with ttag`}()}]);