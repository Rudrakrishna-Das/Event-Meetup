"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetails.module.css */ \"./components/meetups/MeetupDetails.module.css\");\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar MeetupDetails = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var goingBackHandler = function() {\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.image,\n                alt: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rudra\\\\OneDrive\\\\Desktop\\\\Web Development\\\\React JS\\\\Next.js\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rudra\\\\OneDrive\\\\Desktop\\\\Web Development\\\\React JS\\\\Next.js\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                children: props.address\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rudra\\\\OneDrive\\\\Desktop\\\\Web Development\\\\React JS\\\\Next.js\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rudra\\\\OneDrive\\\\Desktop\\\\Web Development\\\\React JS\\\\Next.js\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().back),\n                onClick: goingBackHandler,\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rudra\\\\OneDrive\\\\Desktop\\\\Web Development\\\\React JS\\\\Next.js\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rudra\\\\OneDrive\\\\Desktop\\\\Web Development\\\\React JS\\\\Next.js\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupDetails.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(MeetupDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MeetupDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUF3QztBQUNTO0FBRWpELElBQU1FLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQy9CLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUUxQixJQUFNSyxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFUCwwRUFBZTs7MEJBQ2pDLDhEQUFDUyxLQUFHO2dCQUFDQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ1MsS0FBSztnQkFBRUMsR0FBRyxFQUFFVixLQUFLLENBQUNXLEtBQUs7Ozs7O3FCQUFJOzBCQUMzQyw4REFBQ0MsSUFBRTswQkFBRVosS0FBSyxDQUFDVyxLQUFLOzs7OztxQkFBTTswQkFDdEIsOERBQUNFLFNBQU87MEJBQUViLEtBQUssQ0FBQ2EsT0FBTzs7Ozs7cUJBQVc7MEJBQ2xDLDhEQUFDQyxHQUFDOzBCQUFFZCxLQUFLLENBQUNlLFdBQVc7Ozs7O3FCQUFLOzBCQUUxQiw4REFBQ0MsUUFBTTtnQkFBQ1gsU0FBUyxFQUFFUCx1RUFBWTtnQkFBRW9CLE9BQU8sRUFBRWhCLGdCQUFnQjswQkFBRSxNQUU1RDs7Ozs7cUJBQVM7Ozs7OzthQUNELENBQ1Y7QUFDSixDQUFDO0dBbEJLSCxhQUFhOztRQUNGRixrREFBUzs7O0FBRHBCRSxLQUFBQSxhQUFhO0FBb0JuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzLmpzP2YxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBDbGFzc2VzIGZyb20gXCIuL01lZXR1cERldGFpbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlscyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBnb2luZ0JhY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Q2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtDbGFzc2VzLmJhY2t9IG9uQ2xpY2s9e2dvaW5nQmFja0hhbmRsZXJ9PlxyXG4gICAgICAgIEJhY2tcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDbGFzc2VzIiwiTWVldHVwRGV0YWlscyIsInByb3BzIiwicm91dGVyIiwiZ29pbmdCYWNrSGFuZGxlciIsInB1c2giLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGV0YWlscyIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoMSIsImFkZHJlc3MiLCJwIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJiYWNrIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetails.js\n"));

/***/ })

});