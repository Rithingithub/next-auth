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
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./pages/auth/signin.tsx":
/*!*******************************!*\
  !*** ./pages/auth/signin.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SignIn = (props)=>{\n    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        // validate your userinfo\n        e.preventDefault();\n        const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            email: userInfo.email,\n            password: userInfo.password,\n            redirect: false\n        });\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sign-in-form\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: userInfo.email,\n                    onChange: ({ target  })=>setUserInfo({\n                            ...userInfo,\n                            email: target.value\n                        }),\n                    type: \"email\",\n                    placeholder: \"mail id\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: userInfo.password,\n                    onChange: ({ target  })=>setUserInfo({\n                            ...userInfo,\n                            password: target.value\n                        }),\n                    type: \"password\",\n                    placeholder: \"********\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ3lDO0FBQ1U7QUFJbkQsTUFBTUUsTUFBTSxHQUFhLENBQUNDLEtBQUssR0FBa0I7SUFDL0MsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFdBQVcsTUFBSUosK0NBQVEsQ0FBQztRQUFFSyxLQUFLLEVBQUUsRUFBRTtRQUFFQyxRQUFRLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDckUsTUFBTUMsWUFBWSxHQUFzQyxPQUFPQyxDQUFDLEdBQUs7UUFDbkUseUJBQXlCO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRW5CLE1BQU1DLEdBQUcsR0FBRyxNQUFNWCx1REFBTSxDQUFDLGFBQWEsRUFBRTtZQUN0Q00sS0FBSyxFQUFFRixRQUFRLENBQUNFLEtBQUs7WUFDckJDLFFBQVEsRUFBRUgsUUFBUSxDQUFDRyxRQUFRO1lBQzNCSyxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxjQUFjO2tCQUMzQiw0RUFBQ0MsTUFBSTtZQUFDQyxRQUFRLEVBQUVWLFlBQVk7OzhCQUMxQiw4REFBQ1csSUFBRTs4QkFBQyxPQUFLOzs7Ozs2QkFBSzs4QkFDZCw4REFBQ0MsT0FBSztvQkFDSkMsS0FBSyxFQUFFakIsUUFBUSxDQUFDRSxLQUFLO29CQUNyQmdCLFFBQVEsRUFBRSxDQUFDLEVBQUVDLE1BQU0sR0FBRSxHQUNuQmxCLFdBQVcsQ0FBQzs0QkFBRSxHQUFHRCxRQUFROzRCQUFFRSxLQUFLLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7eUJBQUUsQ0FBQztvQkFFbkRHLElBQUksRUFBQyxPQUFPO29CQUNaQyxXQUFXLEVBQUMsU0FBUzs7Ozs7NkJBQ3JCOzhCQUNGLDhEQUFDTCxPQUFLO29CQUNKQyxLQUFLLEVBQUVqQixRQUFRLENBQUNHLFFBQVE7b0JBQ3hCZSxRQUFRLEVBQUUsQ0FBQyxFQUFFQyxNQUFNLEdBQUUsR0FDbkJsQixXQUFXLENBQUM7NEJBQUUsR0FBR0QsUUFBUTs0QkFBRUcsUUFBUSxFQUFFZ0IsTUFBTSxDQUFDRixLQUFLO3lCQUFFLENBQUM7b0JBRXRERyxJQUFJLEVBQUMsVUFBVTtvQkFDZkMsV0FBVyxFQUFDLFVBQVU7Ozs7OzZCQUN0Qjs4QkFDRiw4REFBQ0wsT0FBSztvQkFBQ0ksSUFBSSxFQUFDLFFBQVE7b0JBQUNILEtBQUssRUFBQyxPQUFPOzs7Ozs2QkFBRzs7Ozs7O3FCQUNoQzs7Ozs7aUJBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVuQixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLWFwcC8uL3BhZ2VzL2F1dGgvc2lnbmluLnRzeD9lNzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5jb25zdCBTaWduSW46IE5leHRQYWdlID0gKHByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0OiBGb3JtRXZlbnRIYW5kbGVyPEhUTUxGb3JtRWxlbWVudD4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gdmFsaWRhdGUgeW91ciB1c2VyaW5mb1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcclxuICAgICAgZW1haWw6IHVzZXJJbmZvLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdXNlckluZm8ucGFzc3dvcmQsXHJcbiAgICAgIHJlZGlyZWN0OiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLWZvcm1cIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt1c2VySW5mby5lbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cclxuICAgICAgICAgICAgc2V0VXNlckluZm8oeyAuLi51c2VySW5mbywgZW1haWw6IHRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWFpbCBpZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt1c2VySW5mby5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cclxuICAgICAgICAgICAgc2V0VXNlckluZm8oeyAuLi51c2VySW5mbywgcGFzc3dvcmQ6IHRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVN0YXRlIiwiU2lnbkluIiwicHJvcHMiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signin.tsx"));
module.exports = __webpack_exports__;

})();