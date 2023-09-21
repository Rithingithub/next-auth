"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            type: \"credentials\",\n            credentials: {},\n            authorize (credentials, req) {\n                const { email , password  } = credentials;\n                // perform you login logic\n                // find out user from db\n                if (email !== \"john@gmail.com\" || password !== \"1234\") {\n                    throw new Error(\"invalid credentials\");\n                }\n                // if everything is fine\n                return {\n                    id: \"1234\",\n                    name: \"John Doe\",\n                    email: \"john@gmail.com\",\n                    role: \"admin\"\n                };\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        jwt (params) {\n            // update token\n            if (params.user?.role) {\n                params.token.role = params.user.role;\n            }\n            // return final_token\n            return params.token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBQ1k7QUFFbEUsTUFBTUUsV0FBVyxHQUFvQjtJQUNuQ0MsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0RDLFNBQVMsRUFBRTtRQUNUSixzRUFBbUIsQ0FBQztZQUNsQkssSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFdBQVcsRUFBRSxFQUFFO1lBQ2ZDLFNBQVMsRUFBQ0QsV0FBVyxFQUFFRSxHQUFHLEVBQUU7Z0JBQzFCLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBR0osV0FBVztnQkFJdkMsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLElBQUlHLEtBQUssS0FBSyxnQkFBZ0IsSUFBSUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtvQkFDckQsTUFBTSxJQUFJQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDeEM7Z0JBRUQsd0JBQXdCO2dCQUN4QixPQUFPO29CQUNMQyxFQUFFLEVBQUUsTUFBTTtvQkFDVkMsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCSixLQUFLLEVBQUUsZ0JBQWdCO29CQUN2QkssSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQzthQUNIO1NBQ0YsQ0FBQztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUUsY0FBYztLQUd2QjtJQUNEQyxTQUFTLEVBQUU7UUFDVEMsR0FBRyxFQUFDQyxNQUFNLEVBQUU7WUFDVixlQUFlO1lBQ2YsSUFBSUEsTUFBTSxDQUFDQyxJQUFJLEVBQUVOLElBQUksRUFBRTtnQkFDckJLLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDUCxJQUFJLEdBQUdLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTixJQUFJLENBQUM7YUFDdEM7WUFDRCxxQkFBcUI7WUFDckIsT0FBT0ssTUFBTSxDQUFDRSxLQUFLLENBQUM7U0FDckI7S0FDRjtDQUNGO0FBRUQsaUVBQWV0QixnREFBUSxDQUFDRSxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcblxyXG5jb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgdHlwZTogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge30sXHJcbiAgICAgIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzIGFzIHtcclxuICAgICAgICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcGVyZm9ybSB5b3UgbG9naW4gbG9naWNcclxuICAgICAgICAvLyBmaW5kIG91dCB1c2VyIGZyb20gZGJcclxuICAgICAgICBpZiAoZW1haWwgIT09IFwiam9obkBnbWFpbC5jb21cIiB8fCBwYXNzd29yZCAhPT0gXCIxMjM0XCIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY3JlZGVudGlhbHNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBldmVyeXRoaW5nIGlzIGZpbmVcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IFwiMTIzNFwiLFxyXG4gICAgICAgICAgbmFtZTogXCJKb2huIERvZVwiLFxyXG4gICAgICAgICAgZW1haWw6IFwiam9obkBnbWFpbC5jb21cIixcclxuICAgICAgICAgIHJvbGU6IFwiYWRtaW5cIixcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxyXG4gICAgLy8gZXJyb3I6ICcvYXV0aC9lcnJvcicsXHJcbiAgICAvLyBzaWduT3V0OiAnL2F1dGgvc2lnbm91dCdcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgand0KHBhcmFtcykge1xyXG4gICAgICAvLyB1cGRhdGUgdG9rZW5cclxuICAgICAgaWYgKHBhcmFtcy51c2VyPy5yb2xlKSB7XHJcbiAgICAgICAgcGFyYW1zLnRva2VuLnJvbGUgPSBwYXJhbXMudXNlci5yb2xlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBmaW5hbF90b2tlblxyXG4gICAgICByZXR1cm4gcGFyYW1zLnRva2VuO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJ0eXBlIiwiY3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwiRXJyb3IiLCJpZCIsIm5hbWUiLCJyb2xlIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJwYXJhbXMiLCJ1c2VyIiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();