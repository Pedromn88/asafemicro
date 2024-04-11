"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 587:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


'use client';
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(178);
const react_1 = __webpack_require__(953);
function ThirdPartyScriptEmbed({ html, height = null, width = null, children, dataNtpc = '', }) {
    (0, react_1.useEffect)(() => {
        if (dataNtpc) {
            // performance.mark is being used as a feature use signal. While it is traditionally used for performance
            // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
            // existing API.
            performance.mark('mark_feature_usage', {
                detail: {
                    feature: `next-third-parties-${dataNtpc}`,
                },
            });
        }
    }, [dataNtpc]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [children, html ? ((0, jsx_runtime_1.jsx)("div", { style: {
                    height: height != null ? `${height}px` : 'auto',
                    width: width != null ? `${width}px` : 'auto',
                }, "data-ntpc": dataNtpc, dangerouslySetInnerHTML: { __html: html } })) : null] }));
}
exports["default"] = ThirdPartyScriptEmbed;


/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendGAEvent = exports.GoogleAnalytics = void 0;
const jsx_runtime_1 = __webpack_require__(178);
// TODO: Evaluate import 'client only'
const react_1 = __webpack_require__(953);
const script_1 = __importDefault(__webpack_require__(573));
let currDataLayerName = undefined;
function GoogleAnalytics(props) {
    const { gaId, dataLayerName = 'dataLayer' } = props;
    if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName;
    }
    (0, react_1.useEffect)(() => {
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-ga',
            },
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(script_1.default, { id: "_next-ga-init", dangerouslySetInnerHTML: {
                    __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');`,
                } }), (0, jsx_runtime_1.jsx)(script_1.default, { id: "_next-ga", src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` })] }));
}
exports.GoogleAnalytics = GoogleAnalytics;
const sendGAEvent = (...args) => {
    if (currDataLayerName === undefined) {
        console.warn(`@next/third-parties: GA has not been initialized`);
        return;
    }
    if (window[currDataLayerName]) {
        window[currDataLayerName].push(...args);
    }
    else {
        console.warn(`@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`);
    }
};
exports.sendGAEvent = sendGAEvent;


/***/ }),

/***/ 885:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(178);
const third_party_capital_1 = __webpack_require__(235);
const ThirdPartyScriptEmbed_1 = __importDefault(__webpack_require__(587));
function GoogleMapsEmbed(props) {
    const { apiKey, ...restProps } = props;
    const formattedProps = { ...restProps, key: apiKey };
    const { html } = (0, third_party_capital_1.GoogleMapsEmbed)(formattedProps);
    return ((0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, { height: formattedProps.height || null, width: formattedProps.width || null, html: html, dataNtpc: "GoogleMapsEmbed" }));
}
exports["default"] = GoogleMapsEmbed;


/***/ }),

/***/ 142:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendGTMEvent = exports.GoogleTagManager = void 0;
const jsx_runtime_1 = __webpack_require__(178);
// TODO: Evaluate import 'client only'
const react_1 = __webpack_require__(953);
const script_1 = __importDefault(__webpack_require__(573));
let currDataLayerName = undefined;
function GoogleTagManager(props) {
    const { gtmId, dataLayerName = 'dataLayer', auth, preview, dataLayer } = props;
    if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName;
    }
    const gtmLayer = dataLayerName !== 'dataLayer' ? `$l=${dataLayerName}` : '';
    const gtmAuth = auth ? `&gtm_auth=${auth}` : '';
    const gtmPreview = preview ? `&gtm_preview=${preview}&gtm_cookies_win=x` : '';
    (0, react_1.useEffect)(() => {
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
            detail: {
                feature: 'next-third-parties-gtm',
            },
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(script_1.default, { id: "_next-gtm-init", dangerouslySetInnerHTML: {
                    __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
      })(window,'${dataLayerName}');`,
                } }), (0, jsx_runtime_1.jsx)(script_1.default, { id: "_next-gtm", "data-ntpc": "GTM", src: `https://www.googletagmanager.com/gtm.js?id=${gtmId}${gtmLayer}${gtmAuth}${gtmPreview}` })] }));
}
exports.GoogleTagManager = GoogleTagManager;
const sendGTMEvent = (data) => {
    if (currDataLayerName === undefined) {
        console.warn(`@next/third-parties: GTM has not been initialized`);
        return;
    }
    if (window[currDataLayerName]) {
        window[currDataLayerName].push(data);
    }
    else {
        console.warn(`@next/third-parties: GTM dataLayer ${currDataLayerName} does not exist`);
    }
};
exports.sendGTMEvent = sendGTMEvent;


/***/ }),

/***/ 804:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendGAEvent = exports.GoogleAnalytics = exports.sendGTMEvent = exports.GoogleTagManager = exports.YouTubeEmbed = exports.GoogleMapsEmbed = void 0;
var google_maps_embed_1 = __webpack_require__(885);
Object.defineProperty(exports, "GoogleMapsEmbed", ({ enumerable: true, get: function () { return __importDefault(google_maps_embed_1).default; } }));
var youtube_embed_1 = __webpack_require__(697);
Object.defineProperty(exports, "YouTubeEmbed", ({ enumerable: true, get: function () { return __importDefault(youtube_embed_1).default; } }));
var gtm_1 = __webpack_require__(142);
Object.defineProperty(exports, "GoogleTagManager", ({ enumerable: true, get: function () { return gtm_1.GoogleTagManager; } }));
Object.defineProperty(exports, "sendGTMEvent", ({ enumerable: true, get: function () { return gtm_1.sendGTMEvent; } }));
var ga_1 = __webpack_require__(402);
Object.defineProperty(exports, "GoogleAnalytics", ({ enumerable: true, get: function () { return ga_1.GoogleAnalytics; } }));
Object.defineProperty(exports, "sendGAEvent", ({ enumerable: true, get: function () { return ga_1.sendGAEvent; } }));


/***/ }),

/***/ 697:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsx_runtime_1 = __webpack_require__(178);
const script_1 = __importDefault(__webpack_require__(573));
const third_party_capital_1 = __webpack_require__(235);
const ThirdPartyScriptEmbed_1 = __importDefault(__webpack_require__(587));
const scriptStrategy = {
    server: 'beforeInteractive',
    client: 'afterInteractive',
    idle: 'lazyOnload',
    worker: 'worker',
};
function YouTubeEmbed(props) {
    const { html, scripts, stylesheets } = (0, third_party_capital_1.YouTubeEmbed)(props);
    return ((0, jsx_runtime_1.jsx)(ThirdPartyScriptEmbed_1.default, { height: props.height || null, width: props.width || null, html: html, dataNtpc: "YouTubeEmbed", children: scripts === null || scripts === void 0 ? void 0 : scripts.map((script) => ((0, jsx_runtime_1.jsx)(script_1.default, { src: script.url, strategy: scriptStrategy[script.strategy], stylesheets: stylesheets }, script.url))) }));
}
exports["default"] = YouTubeEmbed;


/***/ }),

/***/ 662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Analytics; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_third_parties_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(804);
/* harmony import */ var _next_third_parties_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_third_parties_google__WEBPACK_IMPORTED_MODULE_2__);



function Analytics() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_next_third_parties_google__WEBPACK_IMPORTED_MODULE_2__.GoogleAnalytics, {
        gaId: " G-4N5P9JYTPV"
    });
}


/***/ }),

/***/ 235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright 2023 Google LLC
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YouTubeEmbed = exports.GoogleMapsEmbed = exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var google_analytics_1 = __webpack_require__(911);
Object.defineProperty(exports, "GoogleAnalytics", ({ enumerable: true, get: function () { return google_analytics_1.GoogleAnalytics; } }));
var google_maps_embed_1 = __webpack_require__(398);
Object.defineProperty(exports, "GoogleMapsEmbed", ({ enumerable: true, get: function () { return google_maps_embed_1.GoogleMapsEmbed; } }));
var youtube_embed_1 = __webpack_require__(594);
Object.defineProperty(exports, "YouTubeEmbed", ({ enumerable: true, get: function () { return youtube_embed_1.YouTubeEmbed; } }));


/***/ }),

/***/ 911:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright 2023 Google LLC
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleAnalytics = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__webpack_require__(452));
const utils_1 = __webpack_require__(909);
const GoogleAnalytics = (_a) => {
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleAnalytics = GoogleAnalytics;


/***/ }),

/***/ 398:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright 2023 Google LLC
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleMapsEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__webpack_require__(399));
const utils_1 = __webpack_require__(909);
const GoogleMapsEmbed = (_a) => {
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.GoogleMapsEmbed = GoogleMapsEmbed;


/***/ }),

/***/ 594:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright 2023 Google LLC
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YouTubeEmbed = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     https://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const data_json_1 = __importDefault(__webpack_require__(699));
const utils_1 = __webpack_require__(909);
const YouTubeEmbed = (_a) => {
    var args = __rest(_a, []);
    return (0, utils_1.formatData)(data_json_1.default, args);
};
exports.YouTubeEmbed = YouTubeEmbed;


/***/ }),

/***/ 909:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatData = exports.createHtml = exports.formatUrl = void 0;
function filterArgs(args, selectedArgs, inverse = false) {
    if (!selectedArgs)
        return {};
    return Object.keys(args)
        .filter((key) => inverse ? !selectedArgs.includes(key) : selectedArgs.includes(key))
        .reduce((obj, key) => {
        obj[key] = args[key];
        return obj;
    }, {});
}
// Add all required search params with user inputs as values
function formatUrl(url, params, args, slug) {
    const newUrl = slug && Object.keys(slug).length > 0
        ? new URL(Object.values(slug)[0], url) // If there's a user inputted param for the URL slug, replace the default existing slug or include it
        : new URL(url);
    if (params && args) {
        params.forEach((param) => {
            if (args[param])
                newUrl.searchParams.set(param, args[param]);
        });
    }
    return newUrl.toString();
}
exports.formatUrl = formatUrl;
// Construct HTML element and include all default attributes and user-inputted attributes
function createHtml(element, attributes, htmlAttrArgs, urlQueryParamArgs, slugParamArg) {
    var _a;
    if (!attributes)
        return `<${element}></${element}>`;
    const formattedAttributes = ((_a = attributes.src) === null || _a === void 0 ? void 0 : _a.url)
        ? Object.assign(Object.assign({}, attributes), { src: formatUrl(attributes.src.url, attributes.src.params, urlQueryParamArgs, slugParamArg) }) : attributes;
    const htmlAttributes = Object.keys(Object.assign(Object.assign({}, formattedAttributes), htmlAttrArgs)).reduce((acc, name) => {
        const userVal = htmlAttrArgs === null || htmlAttrArgs === void 0 ? void 0 : htmlAttrArgs[name];
        const defaultVal = formattedAttributes[name];
        const finalVal = userVal !== null && userVal !== void 0 ? userVal : defaultVal; // overwrite
        const attrString = finalVal === true ? name : `${name}="${finalVal}"`;
        return finalVal ? acc + ` ${attrString}` : acc;
    }, '');
    return `<${element}${htmlAttributes}></${element}>`;
}
exports.createHtml = createHtml;
// Format JSON by including all default and user-required parameters
function formatData(data, args) {
    var _a, _b, _c, _d, _e;
    const allScriptParams = (_a = data.scripts) === null || _a === void 0 ? void 0 : _a.reduce((acc, script) => [
        ...acc,
        ...(Array.isArray(script.params) ? script.params : []),
    ], []);
    // First, find all input arguments that map to parameters passed to script URLs
    const scriptUrlParamInputs = filterArgs(args, allScriptParams);
    // Second, find all input arguments that map to parameters passed to the HTML src attribute
    const htmlUrlParamInputs = filterArgs(args, (_c = (_b = data.html) === null || _b === void 0 ? void 0 : _b.attributes.src) === null || _c === void 0 ? void 0 : _c.params);
    // Third, find the input argument that maps to the slug parameter passed to the HTML src attribute if present
    const htmlSlugParamInput = filterArgs(args, [
        (_e = (_d = data.html) === null || _d === void 0 ? void 0 : _d.attributes.src) === null || _e === void 0 ? void 0 : _e.slugParam,
    ]);
    // Lastly, all remaining arguments are forwarded as separate HTML attributes
    const htmlAttrInputs = filterArgs(args, [
        ...Object.keys(scriptUrlParamInputs),
        ...Object.keys(htmlUrlParamInputs),
        ...Object.keys(htmlSlugParamInput),
    ], true);
    return Object.assign(Object.assign({}, data), { 
        // Pass any custom attributes to HTML content
        html: data.html
            ? createHtml(data.html.element, data.html.attributes, htmlAttrInputs, htmlUrlParamInputs, htmlSlugParamInput)
            : null, 
        // Pass any required query params with user values for relevant scripts
        scripts: data.scripts
            ? data.scripts.map((script) => (Object.assign(Object.assign({}, script), { url: formatUrl(script.url, script.params, scriptUrlParamInputs) })))
            : null });
}
exports.formatData = formatData;


/***/ }),

/***/ 452:
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}');

/***/ }),

/***/ 399:
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}');

/***/ }),

/***/ 699:
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}');

/***/ })

};
;