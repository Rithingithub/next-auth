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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SignIn = (props)=>{\n    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        // validate your userinfo\n        e.preventDefault();\n        const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            email: userInfo.email,\n            password: userInfo.password,\n            redirect: false\n        });\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sign-in-form\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: userInfo.email,\n                    onChange: ({ target  })=>setUserInfo({\n                            ...userInfo,\n                            email: target.value\n                        }),\n                    type: \"email\",\n                    placeholder: \"john@email.com\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: userInfo.password,\n                    onChange: ({ target  })=>setUserInfo({\n                            ...userInfo,\n                            password: target.value\n                        }),\n                    type: \"password\",\n                    placeholder: \"********\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Nextjs-project\\\\next-auth\\\\pages\\\\auth\\\\signin.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ3lDO0FBQ1U7QUFJbkQsTUFBTUUsTUFBTSxHQUFhLENBQUNDLEtBQUssR0FBa0I7SUFDL0MsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFdBQVcsTUFBSUosK0NBQVEsQ0FBQztRQUFFSyxLQUFLLEVBQUUsRUFBRTtRQUFFQyxRQUFRLEVBQUUsRUFBRTtLQUFFLENBQUM7SUFDckUsTUFBTUMsWUFBWSxHQUFzQyxPQUFPQyxDQUFDLEdBQUs7UUFDbkUseUJBQXlCO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRW5CLE1BQU1DLEdBQUcsR0FBRyxNQUFNWCx1REFBTSxDQUFDLGFBQWEsRUFBRTtZQUN0Q00sS0FBSyxFQUFFRixRQUFRLENBQUNFLEtBQUs7WUFDckJDLFFBQVEsRUFBRUgsUUFBUSxDQUFDRyxRQUFRO1lBQzNCSyxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxjQUFjO2tCQUMzQiw0RUFBQ0MsTUFBSTtZQUFDQyxRQUFRLEVBQUVWLFlBQVk7OzhCQUMxQiw4REFBQ1csSUFBRTs4QkFBQyxPQUFLOzs7Ozs2QkFBSzs4QkFDZCw4REFBQ0MsT0FBSztvQkFDSkMsS0FBSyxFQUFFakIsUUFBUSxDQUFDRSxLQUFLO29CQUNyQmdCLFFBQVEsRUFBRSxDQUFDLEVBQUVDLE1BQU0sR0FBRSxHQUNuQmxCLFdBQVcsQ0FBQzs0QkFBRSxHQUFHRCxRQUFROzRCQUFFRSxLQUFLLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7eUJBQUUsQ0FBQztvQkFFbkRHLElBQUksRUFBQyxPQUFPO29CQUNaQyxXQUFXLEVBQUMsZ0JBQWdCOzs7Ozs2QkFDNUI7OEJBQ0YsOERBQUNMLE9BQUs7b0JBQ0pDLEtBQUssRUFBRWpCLFFBQVEsQ0FBQ0csUUFBUTtvQkFDeEJlLFFBQVEsRUFBRSxDQUFDLEVBQUVDLE1BQU0sR0FBRSxHQUNuQmxCLFdBQVcsQ0FBQzs0QkFBRSxHQUFHRCxRQUFROzRCQUFFRyxRQUFRLEVBQUVnQixNQUFNLENBQUNGLEtBQUs7eUJBQUUsQ0FBQztvQkFFdERHLElBQUksRUFBQyxVQUFVO29CQUNmQyxXQUFXLEVBQUMsVUFBVTs7Ozs7NkJBQ3RCOzhCQUNGLDhEQUFDTCxPQUFLO29CQUFDSSxJQUFJLEVBQUMsUUFBUTtvQkFBQ0gsS0FBSyxFQUFDLE9BQU87Ozs7OzZCQUFHOzs7Ozs7cUJBQ2hDOzs7OztpQkFDSCxDQUNOO0NBQ0g7QUFFRCxpRUFBZW5CLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtYXBwLy4vcGFnZXMvYXV0aC9zaWduaW4udHN4P2U3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmNvbnN0IFNpZ25JbjogTmV4dFBhZ2UgPSAocHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQ6IEZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyB2YWxpZGF0ZSB5b3VyIHVzZXJpbmZvXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xyXG4gICAgICBlbWFpbDogdXNlckluZm8uZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiB1c2VySW5mby5wYXNzd29yZCxcclxuICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tZm9ybVwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJJbmZvLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxyXG4gICAgICAgICAgICBzZXRVc2VySW5mbyh7IC4uLnVzZXJJbmZvLCBlbWFpbDogdGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huQGVtYWlsLmNvbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt1c2VySW5mby5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cclxuICAgICAgICAgICAgc2V0VXNlckluZm8oeyAuLi51c2VySW5mbywgcGFzc3dvcmQ6IHRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVN0YXRlIiwiU2lnbkluIiwicHJvcHMiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.tsx\n");

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