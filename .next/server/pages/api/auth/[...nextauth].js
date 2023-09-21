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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            type: \"credentials\",\n            credentials: {},\n            authorize (credentials, req) {\n                const { email , password  } = credentials;\n                // perform you login logic\n                // find out user from db\n                if (email !== \"rithin@gmail.com\" || password !== \"1234\") {\n                    throw new Error(\"invalid credentials\");\n                }\n                // if everything is fine\n                return {\n                    id: \"1234\",\n                    name: \"Rithin\",\n                    email: \"rithin@gmail.com\",\n                    role: \"admin\"\n                };\n            }\n        }), \n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        jwt (params) {\n            // update token\n            if (params.user?.role) {\n                params.token.role = params.user.role;\n            }\n            // return final_token\n            return params.token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBQ1k7QUFFbEUsTUFBTUUsV0FBVyxHQUFvQjtJQUNuQ0MsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0RDLFNBQVMsRUFBRTtRQUNUSixzRUFBbUIsQ0FBQztZQUNsQkssSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFdBQVcsRUFBRSxFQUFFO1lBQ2ZDLFNBQVMsRUFBQ0QsV0FBVyxFQUFFRSxHQUFHLEVBQUU7Z0JBQzFCLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBR0osV0FBVztnQkFJdkMsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLElBQUlHLEtBQUssS0FBSyxrQkFBa0IsSUFBSUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtvQkFDdkQsTUFBTSxJQUFJQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDeEM7Z0JBRUQsd0JBQXdCO2dCQUN4QixPQUFPO29CQUNMQyxFQUFFLEVBQUUsTUFBTTtvQkFDVkMsSUFBSSxFQUFFLFFBQVE7b0JBQ2RKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCSyxJQUFJLEVBQUUsT0FBTztpQkFDZCxDQUFDO2FBQ0g7U0FDRixDQUFDO0tBQ0g7SUFDREMsS0FBSyxFQUFFO1FBQ0xDLE1BQU0sRUFBRSxjQUFjO0tBR3ZCO0lBQ0RDLFNBQVMsRUFBRTtRQUNUQyxHQUFHLEVBQUNDLE1BQU0sRUFBRTtZQUNWLGVBQWU7WUFDZixJQUFJQSxNQUFNLENBQUNDLElBQUksRUFBRU4sSUFBSSxFQUFFO2dCQUNyQkssTUFBTSxDQUFDRSxLQUFLLENBQUNQLElBQUksR0FBR0ssTUFBTSxDQUFDQyxJQUFJLENBQUNOLElBQUksQ0FBQzthQUN0QztZQUNELHFCQUFxQjtZQUNyQixPQUFPSyxNQUFNLENBQUNFLEtBQUssQ0FBQztTQUNyQjtLQUNGO0NBQ0Y7QUFFRCxpRUFBZXRCLGdEQUFRLENBQUNFLFdBQVcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuXHJcbmNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICB0eXBlOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7fSxcclxuICAgICAgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHMgYXMge1xyXG4gICAgICAgICAgZW1haWw6IHN0cmluZztcclxuICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBwZXJmb3JtIHlvdSBsb2dpbiBsb2dpY1xyXG4gICAgICAgIC8vIGZpbmQgb3V0IHVzZXIgZnJvbSBkYlxyXG4gICAgICAgIGlmIChlbWFpbCAhPT0gXCJyaXRoaW5AZ21haWwuY29tXCIgfHwgcGFzc3dvcmQgIT09IFwiMTIzNFwiKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgZXZlcnl0aGluZyBpcyBmaW5lXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBcIjEyMzRcIixcclxuICAgICAgICAgIG5hbWU6IFwiUml0aGluXCIsXHJcbiAgICAgICAgICBlbWFpbDogXCJyaXRoaW5AZ21haWwuY29tXCIsXHJcbiAgICAgICAgICByb2xlOiBcImFkbWluXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvYXV0aC9zaWduaW5cIixcclxuICAgIC8vIGVycm9yOiAnL2F1dGgvZXJyb3InLFxyXG4gICAgLy8gc2lnbk91dDogJy9hdXRoL3NpZ25vdXQnXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGp3dChwYXJhbXMpIHtcclxuICAgICAgLy8gdXBkYXRlIHRva2VuXHJcbiAgICAgIGlmIChwYXJhbXMudXNlcj8ucm9sZSkge1xyXG4gICAgICAgIHBhcmFtcy50b2tlbi5yb2xlID0gcGFyYW1zLnVzZXIucm9sZTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gZmluYWxfdG9rZW5cclxuICAgICAgcmV0dXJuIHBhcmFtcy50b2tlbjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwidHlwZSIsImNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWwiLCJwYXNzd29yZCIsIkVycm9yIiwiaWQiLCJuYW1lIiwicm9sZSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwicGFyYW1zIiwidXNlciIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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