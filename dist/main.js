/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/browser-cookies/src/browser-cookies.js":
/*!*************************************************************!*\
  !*** ./node_modules/browser-cookies/src/browser-cookies.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.defaults = {};

exports.set = function (name, value, options) {
  // Retrieve options and defaults
  var opts = options || {};
  var defaults = exports.defaults; // Apply default value for unspecified options

  var expires = opts.expires || defaults.expires;
  var domain = opts.domain || defaults.domain;
  var path = opts.path !== undefined ? opts.path : defaults.path !== undefined ? defaults.path : '/';
  var secure = opts.secure !== undefined ? opts.secure : defaults.secure;
  var httponly = opts.httponly !== undefined ? opts.httponly : defaults.httponly;
  var samesite = opts.samesite !== undefined ? opts.samesite : defaults.samesite; // Determine cookie expiration date
  // If succesful the result will be a valid Date, otherwise it will be an invalid Date or false(ish)

  var expDate = expires ? new Date( // in case expires is an integer, it should specify the number of days till the cookie expires
  typeof expires === 'number' ? new Date().getTime() + expires * 864e5 : // else expires should be either a Date object or in a format recognized by Date.parse()
  expires) : 0; // Set cookie

  document.cookie = name.replace(/[^+#$&^`|]/g, encodeURIComponent) // Encode cookie name
  .replace('(', '%28').replace(')', '%29') + '=' + value.replace(/[^+#$&/:<-\[\]-}]/g, encodeURIComponent) + ( // Encode cookie value (RFC6265)
  expDate && expDate.getTime() >= 0 ? ';expires=' + expDate.toUTCString() : '') + ( // Add expiration date
  domain ? ';domain=' + domain : '') + ( // Add domain
  path ? ';path=' + path : '') + ( // Add path
  secure ? ';secure' : '') + ( // Add secure option
  httponly ? ';httponly' : '') + ( // Add httponly option
  samesite ? ';samesite=' + samesite : ''); // Add samesite option
};

exports.get = function (name) {
  var cookies = document.cookie.split(';'); // Iterate all cookies

  while (cookies.length) {
    var cookie = cookies.pop(); // Determine separator index ("name=value")

    var separatorIndex = cookie.indexOf('='); // IE<11 emits the equal sign when the cookie value is empty

    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, '')); // Return cookie value if the name matches

    if (cookie_name === name) {
      return decodeURIComponent(cookie.slice(separatorIndex + 1));
    }
  } // Return `null` as the cookie was not found


  return null;
};

exports.erase = function (name, options) {
  exports.set(name, '', {
    expires: -1,
    domain: options && options.domain,
    path: options && options.path,
    secure: 0,
    httponly: 0
  });
};

exports.all = function () {
  var all = {};
  var cookies = document.cookie.split(';'); // Iterate all cookies

  while (cookies.length) {
    var cookie = cookies.pop(); // Determine separator index ("name=value")

    var separatorIndex = cookie.indexOf('='); // IE<11 emits the equal sign when the cookie value is empty

    separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex; // add the cookie name and value to the `all` object

    var cookie_name = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));
    all[cookie_name] = decodeURIComponent(cookie.slice(separatorIndex + 1));
  }

  return all;
};

/***/ }),

/***/ "./node_modules/ttag/dist/ttag.js":
/*!****************************************!*\
  !*** ./node_modules/ttag/dist/ttag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else { var i, a; }
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // identity function for calling harmony imports with the correct context

      /******/

      __webpack_require__.i = function (value) {
        return value;
      };
      /******/

      /******/
      // define getter function for harmony exports

      /******/


      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 4);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      function pluralFnBody(n) {
        return "return args[+ (" + n + ")];";
      }

      Object.defineProperty(exports, "__esModule", {
        value: !0
      });
      var localeRegExp = /(\w+)[-_].*/;

      function tryGetLangData(n, a) {
        if (a[n]) return a[n];
        var t = n.match(localeRegExp);
        if (!t) throw new Error("Can't find lang or lcale with code " + n);
        return a[t[1]];
      }

      var fnCache = {};

      function createPluralFunc(n) {
        var a = fnCache[n];
        return a || (a = new Function("n", "args", pluralFnBody(n)), fnCache[n] = a), a;
      }

      var DATA = {
        ach: "2;n>1",
        af: "2;n!=1",
        ak: "2;n>1",
        am: "2;n>1",
        an: "2;n!=1",
        ar: "6;n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5",
        arn: "2;n>1",
        ast: "2;n!=1",
        ay: "1;0",
        az: "2;n!=1",
        be: "3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        bg: "2;n!=1",
        bn: "2;n!=1",
        bo: "1;0",
        br: "2;n>1",
        brx: "2;n!=1",
        bs: "3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        ca: "2;n!=1",
        cgg: "1;0",
        cs: "3;n==1?0:(n>=2&&n<=4)?1:2",
        csb: "3;n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        cy: "4;n==1?0:n==2?1:(n!=8&&n!=11)?2:3",
        da: "2;n!=1",
        de: "2;n!=1",
        doi: "2;n!=1",
        dz: "1;0",
        el: "2;n!=1",
        en: "2;n!=1",
        eo: "2;n!=1",
        es: "2;n!=1",
        et: "2;n!=1",
        eu: "2;n!=1",
        fa: "1;0",
        ff: "2;n!=1",
        fi: "2;n!=1",
        fil: "2;n>1",
        fo: "2;n!=1",
        fr: "2;n>1",
        fur: "2;n!=1",
        fy: "2;n!=1",
        ga: "5;n==1?0:n==2?1:n<7?2:n<11?3:4",
        gd: "4;(n==1||n==11)?0:(n==2||n==12)?1:(n>2&&n<20)?2:3",
        gl: "2;n!=1",
        gu: "2;n!=1",
        gun: "2;n>1",
        ha: "2;n!=1",
        he: "2;n!=1",
        hi: "2;n!=1",
        hne: "2;n!=1",
        hr: "3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        hu: "2;n!=1",
        hy: "2;n!=1",
        id: "1;0",
        is: "2;n%10!=1||n%100==11",
        it: "2;n!=1",
        ja: "1;0",
        jbo: "1;0",
        jv: "2;n!==0",
        ka: "1;0",
        kk: "1;0",
        km: "1;0",
        kn: "2;n!=1",
        ko: "1;0",
        ku: "2;n!=1",
        kw: "4;n==1?0:n==2?1:n==3?2:3",
        ky: "1;0",
        lb: "2;n!=1",
        ln: "2;n>1",
        lo: "1;0",
        lt: "3;n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2",
        lv: "3;n%10==1&&n%100!=11?0:n!=0?1:2",
        mai: "2;n!=1",
        mfe: "2;n>1",
        mg: "2;n>1",
        mi: "2;n>1",
        mk: "2;n==1||n%10==1?0:1",
        ml: "2;n!=1",
        mn: "2;n!=1",
        mni: "2;n!=1",
        mnk: "3;n==0?0:n==1?1:2",
        mr: "2;n!=1",
        ms: "1;0",
        mt: "4;n==1?0:n==0||(n%100>1&&n%100<11)?1:(n%100>10&&n%100<20)?2:3",
        my: "1;0",
        nah: "2;n!=1",
        nap: "2;n!=1",
        nb: "2;n!=1",
        ne: "2;n!=1",
        nl: "2;n!=1",
        nn: "2;n!=1",
        no: "2;n!=1",
        nso: "2;n!=1",
        oc: "2;n>1",
        or: "2;n!=1",
        pa: "2;n!=1",
        pap: "2;n!=1",
        pl: "3;n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        pms: "2;n!=1",
        ps: "2;n!=1",
        pt: "2;n!=1",
        rm: "2;n!=1",
        ro: "3;n==1?0:(n==0||(n%100>0&&n%100<20))?1:2",
        ru: "3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        rw: "2;n!=1",
        sah: "1;0",
        sat: "2;n!=1",
        sco: "2;n!=1",
        sd: "2;n!=1",
        se: "2;n!=1",
        si: "2;n!=1",
        sk: "3;n==1?0:(n>=2&&n<=4)?1:2",
        sl: "4;n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0",
        so: "2;n!=1",
        son: "2;n!=1",
        sq: "2;n!=1",
        sr: "3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        su: "1;0",
        sv: "2;n!=1",
        sw: "2;n!=1",
        ta: "2;n!=1",
        te: "2;n!=1",
        tg: "2;n>1",
        th: "1;0",
        ti: "2;n>1",
        tk: "2;n!=1",
        tr: "2;n>1",
        tt: "1;0",
        ug: "1;0",
        uk: "3;n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2",
        ur: "2;n!=1",
        uz: "2;n>1",
        vi: "1;0",
        wa: "2;n>1",
        wo: "1;0",
        yo: "2;n!=1",
        zh: "1;0"
      };

      function getFormula(n) {
        return tryGetLangData(n, DATA).split(";")[1];
      }

      function getNPlurals(n) {
        var a = tryGetLangData(n, DATA);
        return parseInt(a.split(";")[0], 10);
      }

      function getPluralFunc(n) {
        return createPluralFunc(getFormula(n));
      }

      function hasLang(n) {
        try {
          return tryGetLangData(n, DATA), !0;
        } catch (n) {
          return !1;
        }
      }

      function getAvailLangs() {
        return Object.keys(DATA);
      }

      exports.getFormula = getFormula, exports.getNPlurals = getNPlurals, exports.getPluralFunc = getPluralFunc, exports.hasLang = hasLang, exports.getAvailLangs = getAvailLangs;
      /***/
    },
    /* 1 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "b", function () {
        return getMsgid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return msgid2Orig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return buildStr;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return buildArr;
      });
      /* unused harmony export makePluralFunc */

      /* unused harmony export getPluralFunc */

      /* harmony export (immutable) */


      __webpack_exports__["g"] = transformTranslateObj;
      /* harmony export (immutable) */

      __webpack_exports__["h"] = transformCompactObj;
      /* harmony export (immutable) */

      __webpack_exports__["a"] = dedentStr;
      /* harmony export (immutable) */

      __webpack_exports__["f"] = getPluralFnForTrans;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0_dedent__ = __webpack_require__(5);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_dedent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dedent__);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal__);

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      var getMsgid = function getMsgid(str, exprs) {
        return str.reduce(function (s, l, i) {
          return s + l + (exprs[i] !== undefined && "${".concat(i, "}") || '');
        }, '');
      };

      var removeSpaces = function removeSpaces(str) {
        return str.replace(/\s/g, '');
      };

      var mem = {};

      var memoize1 = function memoize1(f) {
        return function (arg) {
          if (mem[arg]) {
            return mem[arg];
          }

          mem[arg] = f(arg);
          return mem[arg];
        };
      };

      var reg = function reg(i) {
        return new RegExp("\\$\\{(?:[\\s]+?|\\s?)".concat(i, "(?:[\\s]+?|\\s?)}"));
      };

      var memReg = memoize1(reg);

      var msgid2Orig = function msgid2Orig(id, exprs) {
        return exprs.reduce(function (r, expr, i) {
          return r.replace(memReg(i), expr);
        }, id);
      };

      var buildStr = function buildStr(strs, exprs) {
        return strs.reduce(function (r, s, i) {
          return r + s + (exprs[i] !== undefined ? exprs[i] : '');
        }, '');
      };

      var buildArr = function buildArr(strs, exprs) {
        return strs.reduce(function (r, s, i) {
          return exprs[i] !== undefined ? r.concat(s, exprs[i]) : r.concat(s);
        }, []);
      };

      function pluralFnBody(pluralStr) {
        return "return args[+ (".concat(pluralStr, ")];");
      }

      var fnCache = {};

      function makePluralFunc(pluralStr) {
        /* eslint-disable no-new-func */
        var fn = fnCache[pluralStr];

        if (!fn) {
          fn = new Function('n', 'args', pluralFnBody(pluralStr));
          fnCache[pluralStr] = fn;
        }

        return fn;
      }

      var pluralRegex = /\splural ?=?([\s\S]*);?/;

      function getPluralFunc(headers) {
        var pluralFn = pluralRegex.exec(headers['plural-forms'])[1];

        if (pluralFn[pluralFn.length - 1] === ';') {
          pluralFn = pluralFn.slice(0, -1);
        }

        return pluralFn;
      }

      var variableREG = /\$\{\s*([.\w+\[\]])*\s*\}/g;

      function getObjectKeys(obj) {
        var keys = [];

        for (var key in obj) {
          // eslint-disable-line no-restricted-syntax
          if (obj.hasOwnProperty(key)) {
            keys.push(key);
          }
        }

        return keys;
      }

      function replaceVariables(str, obj) {
        return str.replace(variableREG, function (variable) {
          return "${".concat(obj[removeSpaces(variable)], "}");
        });
      }

      function getVariablesMap(msgid) {
        var variableNumberMap = {};
        var variables = msgid.match(variableREG);
        if (!variables) return null;

        for (var i = 0; i < variables.length; i++) {
          variableNumberMap[removeSpaces(variables[i])] = i;
        }

        return variableNumberMap;
      }

      function transformTranslate(translate) {
        var variableNumberMap = getVariablesMap(translate.msgid);

        if (!variableNumberMap) {
          return translate;
        }

        var msgid = replaceVariables(translate.msgid, variableNumberMap);
        var newTranslate = {
          msgid: msgid
        };

        if (translate.msgid_plural) {
          newTranslate.msgid_plural = replaceVariables(translate.msgid_plural, variableNumberMap);
        }

        newTranslate.msgstr = [];
        var transStrs = translate.msgstr;

        for (var i = 0; i < transStrs.length; i++) {
          newTranslate.msgstr.push(replaceVariables(transStrs[i], variableNumberMap));
        }

        newTranslate.comments = translate.comments;
        return newTranslate;
      }

      function transformTranslateObj(translateObj) {
        var newTranslations = {};
        var transKeys = getObjectKeys(translateObj.translations);

        for (var i = 0; i < transKeys.length; i++) {
          var key = transKeys[i];
          var translation = translateObj.translations[key];
          var newTranslation = {};
          var msgids = getObjectKeys(translation);

          for (var j = 0; j < msgids.length; j++) {
            var msgid = msgids[j];
            var newTranslate = transformTranslate(translation[msgid]);
            newTranslation[newTranslate.msgid] = newTranslate;
          }

          newTranslations[key] = newTranslation;
        }

        translateObj.translations = newTranslations;
        return translateObj;
      }

      function transformCompactTranslate(msgid, translations) {
        var variableNumberMap = getVariablesMap(msgid);

        if (!variableNumberMap) {
          return [msgid, translations];
        }

        var newMsgid = replaceVariables(msgid, variableNumberMap);
        var newTranslations = translations.map(function (trans) {
          return replaceVariables(trans, variableNumberMap);
        });
        return [newMsgid, newTranslations];
      }

      function transformCompactObj(compactObj) {
        var newObj = {
          headers: compactObj.headers
        };
        var newContexts = {};
        var keys = getObjectKeys(compactObj.contexts);

        for (var i = 0; i < keys.length; i++) {
          var ctx = keys[i];
          var newContext = {};
          var msgids = getObjectKeys(compactObj.contexts[ctx]);

          for (var j = 0; j < msgids.length; j++) {
            var msgid = msgids[j];
            var translations = compactObj.contexts[ctx][msgid];

            var _transformCompactTran = transformCompactTranslate(msgid, translations),
                _transformCompactTran2 = _slicedToArray(_transformCompactTran, 2),
                newMsgid = _transformCompactTran2[0],
                newTranslations = _transformCompactTran2[1];

            newContext[newMsgid] = newTranslations;
          }

          newContexts[ctx] = newContext;
        }

        newObj.contexts = newContexts;
        return newObj;
      }

      function dedentStr(rawStr) {
        if (!(typeof rawStr === 'string')) {
          return rawStr;
        }

        if (rawStr.indexOf('\n') === -1) {
          return rawStr;
        }

        return __WEBPACK_IMPORTED_MODULE_0_dedent___default()(rawStr);
      }

      function getPluralFnForTrans(config) {
        var headers = config.getCurrentLocaleHeaders();
        var language = headers.language | headers.Language;

        if (language) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_plural_forms_dist_minimal__["getPluralFunc"])(language);
        }

        var pluralStr = getPluralFunc(headers);
        return makePluralFunc(pluralStr);
      }
      /***/

    },
    /* 2 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["e"] = validateLocaleCode;
      /* harmony export (immutable) */

      __webpack_exports__["f"] = validateLocaleData;
      /* harmony export (immutable) */

      __webpack_exports__["g"] = validateLocales;
      /* harmony export (immutable) */

      __webpack_exports__["a"] = validateNgettextMsgid;
      /* harmony export (immutable) */

      __webpack_exports__["b"] = validateNgettextNumber;
      /* harmony export (immutable) */

      __webpack_exports__["c"] = validateNgettextPluralForms;
      /* harmony export (immutable) */

      __webpack_exports__["d"] = validateLang;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__);

      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function validateLocale(locale, availLocales) {
        if (true) {
          if (!availLocales[locale]) {
            throw new Error("\n                    Locale '".concat(locale, "' is not found in config.\n                    useLocales accepts only existing locales. Use addLocale function before.\n                    Available locales: ").concat(JSON.stringify(availLocales)));
          }
        }
      }

      function validateLocaleCode(locale) {
        if (true) {
          if (typeof locale !== 'string') {
            throw new Error("Expected locale code to be a string but recieved ".concat(_typeof(locale), " insttead"));
          }
        }
      }

      function validateLocaleData(data) {
        if (true) {
          // eslint-disable-next-line
          var addLocaleDoc = 'https://ttag.js.org/docs/library-api.html#addlocale';

          if (!data) {
            throw new Error("\n            Locale data should not be empty.\n            see - ".concat(addLocaleDoc, "\n            "));
          }

          if (!data.headers) {
            throw new Error("\n            Locale data should contain headers \"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
          }

          if (!data.headers['plural-forms'] && !data.headers['Plural-Forms']) {
            throw new Error("\n            Locale data.headers should contain 'Plural-Forms' attribute \"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
          }

          if (!data.translations && !data.contexts) {
            throw new Error("\n            Locale data should contain translations or contexts property \"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
          }

          if (data.translations && !Object.keys(data.translations).length) {
            throw new Error("\n            Locale data.translations should have at least 1 key\"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
          }

          if (data.contexts && !Object.keys(data.contexts).length) {
            throw new Error("\n            Locale data.contexts should have at least 1 key\"".concat(JSON.stringify(data), "\".\n            see - ").concat(addLocaleDoc, "\n            "));
          }
        }
      }

      function validateLocales(locales, availLocales) {
        if (true) {
          if (!Array.isArray(locales)) {
            throw new Error('useLocales accepts only array as the first argument');
          }

          locales.forEach(function (locale) {
            return validateLocale(locale, availLocales);
          });
        }
      }

      function validateNgettextMsgid(str) {
        if (true) {
          var ngettextDoc = 'https://ttag.js.org/docs/ngettext.html';

          if (!(str.hasOwnProperty('_strs') && str.hasOwnProperty('_exprs'))) {
            throw new Error("The first argument for ngettext must be tagged with 'msgid' tag.\n                see - ".concat(ngettextDoc, ";\n                "));
          }
        }
      }

      function validateNgettextNumber(n) {
        if (true) {
          var ngettextDoc = 'https://ttag.js.org/docs/ngettext.html';

          if (!(typeof n === 'number')) {
            throw new Error("The last argument to ngettext - '".concat(n, "' expected to be a number. Got '").concat(_typeof(n), "' instead.\n                see - ").concat(ngettextDoc));
          }
        }
      }

      function validateNgettextPluralForms(expectedFormsCount, actualFormsCount) {
        if (true) {
          if (actualFormsCount !== expectedFormsCount) {
            throw new Error( // eslint-disable-next-line max-len
            "ngettext expects ".concat(expectedFormsCount, " for the current default locale, but received - ").concat(actualFormsCount, "."));
          }
        }
      }

      function validateLang(lang) {
        if (true) {
          var langs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__["getAvailLangs"])().join(',');

          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_plural_forms_dist_minimal__["hasLang"])(lang)) {
            throw new Error("Unknown lang code - ".concat(lang, ". Lang should be one of: ").concat(langs, "."));
          }
        }
      }
      /***/

    },
    /* 3 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (immutable) */

      __webpack_exports__["a"] = Config;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__validation__ = __webpack_require__(2);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__ = __webpack_require__(0);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__);

      function Config() {
        var _this = this;

        var config = {
          locales: {},
          currentLocales: [],
          currentLocale: 'en',
          dedent: true,
          defaultLang: 'en'
        };

        this.addLocale = function (locale, localeData) {
          if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["e"
          /* validateLocaleCode */
          ])(locale);
          if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["f"
          /* validateLocaleData */
          ])(localeData);

          if (localeData.translations) {
            localeData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["g"
            /* transformTranslateObj */
            ])(localeData);
          } else if (localeData.contexts) {
            localeData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["h"
            /* transformCompactObj */
            ])(localeData);
          } else {
            throw new Error('Invalid locale data format');
          }

          config.locales[locale] = localeData;
        };

        this.setCurrentLocale = function (locale) {
          config.currentLocale = locale;
        };

        this.setDedent = function (dedent) {
          config.dedent = dedent;
        };

        this.setCurrentLocales = function (locales) {
          if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["g"
          /* validateLocales */
          ])(locales, _this.getAvailLocales());
          config.currentLocales = locales;
        };

        this.getAvailLocales = function () {
          return config.locales;
        };

        this.getCurrentLocales = function () {
          return config.currentLocales;
        };

        this.getCurrentLocale = function () {
          return config.currentLocale;
        };

        this.isDedent = function () {
          return config.dedent;
        };

        this.setDefaultLang = function (lang) {
          config.defaultLang = lang;
        };

        this.getDefaultPluralFn = function () {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__["getPluralFunc"])(config.defaultLang);
        };

        this.getDefaultPluralFormsCount = function () {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_plural_forms_dist_minimal__["getNPlurals"])(config.defaultLang);
        };

        this.getCurrentLocaleHeaders = function () {
          return config.locales[config.currentLocale].headers;
        };
      }
      /***/

    },
    /* 4 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
      });
      /* harmony export (immutable) */

      __webpack_exports__["t"] = t;
      /* harmony export (immutable) */

      __webpack_exports__["jt"] = jt;
      /* harmony export (immutable) */

      __webpack_exports__["msgid"] = msgid;
      /* harmony export (immutable) */

      __webpack_exports__["gettext"] = gettext;
      /* harmony export (binding) */

      __webpack_require__.d(__webpack_exports__, "_", function () {
        return _;
      });
      /* harmony export (immutable) */


      __webpack_exports__["ngettext"] = ngettext;
      /* harmony export (immutable) */

      __webpack_exports__["addLocale"] = addLocale;
      /* harmony export (immutable) */

      __webpack_exports__["useLocale"] = useLocale;
      /* harmony export (immutable) */

      __webpack_exports__["setDedent"] = setDedent;
      /* harmony export (immutable) */

      __webpack_exports__["useLocales"] = useLocales;
      /* harmony export (immutable) */

      __webpack_exports__["setDefaultLang"] = setDefaultLang;
      /* harmony export (immutable) */

      __webpack_exports__["c"] = c;
      /* harmony import */

      var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_1__validation__ = __webpack_require__(2);
      /* harmony import */


      var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(3);

      var conf = new __WEBPACK_IMPORTED_MODULE_2__config__["a"
      /* default */
      ]();

      function Context(context) {
        if (true) {
          if (typeof context !== 'string') {
            throw new Error('String type is expected as a first ' + 'argument to c() function.');
          }
        }

        this.getContext = function () {
          return context;
        };
      }

      var getTransContext = function getTransContext(obj) {
        if (obj instanceof Context) {
          return obj.getContext();
        }

        return '';
      };

      function isFuzzy(translationObj) {
        return translationObj && translationObj.comments && translationObj.comments.flag === 'fuzzy';
      }

      function hasTranslations(msgstr) {
        if (!msgstr) return false;

        for (var i = 0; i < msgstr.length; i++) {
          if (!msgstr[i].length) return false;
        }

        return true;
      }

      function findTransObj(locale, str, ctx) {
        var locales = conf.getAvailLocales();
        var localeData = locales[locale];
        if (!localeData) return null; // verbose format

        if (localeData.translations) {
          var translations = localeData.translations[ctx] || localeData.translations[''];
          var translation = translations && translations[str];

          if (translation && !isFuzzy(translation) && hasTranslations(translation.msgstr)) {
            return translation.msgstr;
          }
        } // compact format


        if (localeData.contexts) {
          var _translations = localeData.contexts[ctx] || localeData.contexts[''];

          var _translation = _translations && _translations[str];

          if (_translation && hasTranslations(_translation)) {
            return _translation;
          }
        }

        return null;
      }

      function findTranslation(str, ctx) {
        var locales = conf.getCurrentLocales();

        if (locales.length) {
          for (var i = 0; i < locales.length; i++) {
            var translation = findTransObj(locales[i], str, ctx);

            if (translation) {
              conf.setCurrentLocale(locales[i]);
              return translation;
            }
          }
        }

        return findTransObj(conf.getCurrentLocale(), str, ctx);
      }

      var maybeDedent = function maybeDedent(str) {
        return conf.isDedent() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a"
        /* dedentStr */
        ])(str) : str;
      };

      function t(strings) {
        var result = strings;

        if (strings && strings.reduce) {
          for (var _len = arguments.length, exprs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            exprs[_key - 1] = arguments[_key];
          }

          var id = maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b"
          /* getMsgid */
          ])(strings, exprs));
          var context = getTransContext(this);
          var trans = findTranslation(id, context);
          result = trans ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c"
          /* msgid2Orig */
          ])(trans[0], exprs) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d"
          /* buildStr */
          ])(strings, exprs);
        }

        return maybeDedent(result);
      }

      var separator = /(\${\s*\d+\s*})/g;
      var slotIdRegexp = /\${\s*(\d+)\s*}/;

      function jt(strings) {
        for (var _len2 = arguments.length, exprs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          exprs[_key2 - 1] = arguments[_key2];
        }

        if (strings && strings.reduce) {
          var id = maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b"
          /* getMsgid */
          ])(strings, exprs));
          var context = getTransContext(this);
          var trans = findTranslation(id, context);
          if (!trans) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["e"
          /* buildArr */
          ])(strings, exprs); // splits string & capturing group into tokens
          //

          var translatedTokens = trans[0].split(separator);
          return translatedTokens.map(function (token) {
            var slotIdMatch = token.match(slotIdRegexp); // slotIdMatch is not null only when the token is a variable slot (${xx})

            return slotIdMatch ? exprs[+slotIdMatch[1]] : token;
          });
        }

        return strings;
      }

      function msgid(strings) {
        /* eslint-disable no-new-wrappers */
        if (strings && strings.reduce) {
          for (var _len3 = arguments.length, exprs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            exprs[_key3 - 1] = arguments[_key3];
          }

          var result = new String(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d"
          /* buildStr */
          ])(strings, exprs));
          result._strs = strings;
          result._exprs = exprs;
          return result;
        }

        return strings;
      }

      function gettext(id) {
        var context = getTransContext(this);
        var trans = findTranslation(id, context);
        return trans ? trans[0] : id;
      }

      var _ = gettext;

      function ngettext() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["a"
        /* validateNgettextMsgid */
        ])(args[0]);
        var id = maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b"
        /* getMsgid */
        ])(args[0]._strs, args[0]._exprs));
        var n = args[args.length - 1];
        if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["b"
        /* validateNgettextNumber */
        ])(n);
        var forms = args.slice(1, -1);
        forms.unshift(args[0].toString());

        if (true) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["c"
          /* validateNgettextPluralForms */
          ])(conf.getDefaultPluralFormsCount(), forms.length);
        }

        var trans = findTranslation(id, getTransContext(this));

        if (trans) {
          var _pluralFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["f"
          /* getPluralFnForTrans */
          ])(conf);

          return maybeDedent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c"
          /* msgid2Orig */
          ])(_pluralFn(n, trans), args[0]._exprs));
        }

        var pluralFn = conf.getDefaultPluralFn();
        return maybeDedent(pluralFn(n, forms));
      }

      function addLocale(locale, data) {
        conf.addLocale(locale, data);
      }

      function useLocale(locale) {
        conf.setCurrentLocale(locale);
      }

      function setDedent(value) {
        conf.setDedent(Boolean(value));
      }

      function useLocales(locales) {
        conf.setCurrentLocales(locales);
      }

      function setDefaultLang(lang) {
        if (true) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validation__["d"
        /* validateLang */
        ])(lang);
        conf.setDefaultLang(lang);
      }

      function c(context) {
        var ctx = new Context(context);
        return {
          t: t.bind(ctx),
          jt: jt.bind(ctx),
          gettext: gettext.bind(ctx),
          ngettext: ngettext.bind(ctx)
        };
      }
      /***/

    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      function dedent(strings) {
        var raw = void 0;

        if (typeof strings === "string") {
          // dedent can be used as a plain function
          raw = [strings];
        } else {
          raw = strings.raw;
        } // first, perform interpolation


        var result = "";

        for (var i = 0; i < raw.length; i++) {
          result += raw[i]. // join lines when there is a suppressed newline
          replace(/\\\n[ \t]*/g, ""). // handle escaped backticks
          replace(/\\`/g, "`");

          if (i < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
            result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
          }
        } // now strip indentation


        var lines = result.split("\n");
        var mindent = null;
        lines.forEach(function (l) {
          var m = l.match(/^(\s+)\S+/);

          if (m) {
            var indent = m[1].length;

            if (!mindent) {
              // this is the first indented line
              mindent = indent;
            } else {
              mindent = Math.min(mindent, indent);
            }
          }
        });

        if (mindent !== null) {
          result = lines.map(function (l) {
            return l[0] === " " ? l.slice(mindent) : l;
          }).join("\n");
        } // dedent eats leading and trailing whitespace too


        result = result.trim(); // handle escaped newlines at the end to ensure they don't get stripped too

        return result.replace(/\\n/g, "\n");
      }

      if (true) {
        module.exports = dedent;
      }
      /***/

    }])
  );
});

/***/ }),

/***/ "./node_modules/ttag/index.js":
/*!************************************!*\
  !*** ./node_modules/ttag/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */
if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/ttag.js */ "./node_modules/ttag/dist/ttag.js");
}

/***/ }),

/***/ "./src/i18nSetup.js":
/*!**************************!*\
  !*** ./src/i18nSetup.js ***!
  \**************************/
/*! exports provided: setupi18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupi18n", function() { return setupi18n; });
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ttag */ "./node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browser_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-cookies */ "./node_modules/browser-cookies/src/browser-cookies.js");
/* harmony import */ var browser_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_cookies__WEBPACK_IMPORTED_MODULE_1__);


async function setupi18n() {
  const locale = browser_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.get('lang');

  if (locale === 'uk') {
    const data = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../i18n/uk.po.json */ "./i18n/uk.po.json", 3));
    Object(ttag__WEBPACK_IMPORTED_MODULE_0__["addLocale"])(locale, data);
    Object(ttag__WEBPACK_IMPORTED_MODULE_0__["useLocale"])(locale);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ttag */ "./node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18nSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18nSetup */ "./src/i18nSetup.js");
/* harmony import */ var browser_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser-cookies */ "./node_modules/browser-cookies/src/browser-cookies.js");
/* harmony import */ var browser_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(browser_cookies__WEBPACK_IMPORTED_MODULE_2__);




document.getElementById('en-select').onclick = ev => {
  ev.preventDefault();
  browser_cookies__WEBPACK_IMPORTED_MODULE_2___default.a.set('lang', 'en');
  window.location.reload();
};

document.getElementById('uk-select').onclick = ev => {
  ev.preventDefault();
  browser_cookies__WEBPACK_IMPORTED_MODULE_2___default.a.set('lang', 'uk');
  window.location.href = '/';
  window.location.reload();
};

const render = () => {
  document.getElementById('content').innerHTML = `
  <h2>${ttag__WEBPACK_IMPORTED_MODULE_0__["t"]`Hello with ttag`}</h2>
  `;
};

async function start() {
  await Object(_i18nSetup__WEBPACK_IMPORTED_MODULE_1__["setupi18n"])();
  render();
}

start();

/***/ })

/******/ });