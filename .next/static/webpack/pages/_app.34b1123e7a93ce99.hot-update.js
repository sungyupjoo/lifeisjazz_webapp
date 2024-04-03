"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/KakaoMap.tsx":
/*!*************************************!*\
  !*** ./src/components/KakaoMap.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ KakaoMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction KakaoMap() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const kakaoMapScript = document.createElement(\"script\");\n        kakaoMapScript.async = false;\n        kakaoMapScript.src = \"//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false\";\n        document.head.appendChild(kakaoMapScript);\n        const onLoadKakaoAPI = ()=>{\n            window.kakao.maps.load(()=>{\n                const container = document.getElementById(\"map\");\n                const address = new window.kakao.maps.LatLng(37.490506, 126.993088);\n                const options = {\n                    center: address,\n                    level: 4\n                };\n                const marker = new window.kakao.maps.Marker({\n                    position: address\n                });\n                const map = new window.kakao.maps.Map(container, options);\n                marker.setMap(map);\n            });\n        };\n        kakaoMapScript.addEventListener(\"load\", onLoadKakaoAPI);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\",\n        style: {\n            marginTop: \"2rem\",\n            width: \"50%\",\n            height: \"400px\",\n            borderRadius: \"2rem\",\n            boxShadow: \"rgba(0, 0, 0, 0.16) 0px 1px 4px\",\n            flexShrink: 0\n        }\n    }, void 0, false, {\n        fileName: \"/Users/sungyupju/dev/lifeisjazz_webapp/src/components/KakaoMap.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(KakaoMap, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = KakaoMap;\nvar _c;\n$RefreshReg$(_c, \"KakaoMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9LYWthb01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQVE3QixTQUFTQzs7SUFDdEJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUUsaUJBQWlCQyxTQUFTQyxhQUFhLENBQUM7UUFDOUNGLGVBQWVHLEtBQUssR0FBRztRQUN2QkgsZUFBZUksR0FBRyxHQUFJO1FBQ3RCSCxTQUFTSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ047UUFDMUIsTUFBTU8saUJBQWlCO1lBQ3JCQyxPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDO2dCQUNyQixNQUFNQyxZQUFZWCxTQUFTWSxjQUFjLENBQUM7Z0JBQzFDLE1BQU1DLFVBQVUsSUFBSU4sT0FBT0MsS0FBSyxDQUFDQyxJQUFJLENBQUNLLE1BQU0sQ0FBQyxXQUFXO2dCQUN4RCxNQUFNQyxVQUFVO29CQUNkQyxRQUFRSDtvQkFDUkksT0FBTztnQkFDVDtnQkFDQSxNQUFNQyxTQUFTLElBQUlYLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDVSxNQUFNLENBQUM7b0JBQzFDQyxVQUFVUDtnQkFDWjtnQkFDQSxNQUFNUSxNQUFNLElBQUlkLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDYSxHQUFHLENBQUNYLFdBQVdJO2dCQUNqREcsT0FBT0ssTUFBTSxDQUFDRjtZQUNoQjtRQUNGO1FBQ0F0QixlQUFleUIsZ0JBQWdCLENBQUMsUUFBUWxCO0lBQzFDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbUI7UUFDQ0MsSUFBRztRQUNIQyxPQUFPO1lBQ0xDLFdBQVc7WUFDWEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGNBQWM7WUFDZEMsV0FBVztZQUNYQyxZQUFZO1FBQ2Q7Ozs7OztBQUdOO0dBckN3Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0tha2FvTWFwLnRzeD85ODMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBrYWthbzogYW55O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvTWFwKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtha2FvTWFwU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBrYWthb01hcFNjcmlwdC5hc3luYyA9IGZhbHNlO1xuICAgIGtha2FvTWFwU2NyaXB0LnNyYyA9IGAvL2RhcGkua2FrYW8uY29tL3YyL21hcHMvc2RrLmpzP2FwcGtleT03MDBkMzk5MDA2MjU2Zjk1NzMyZjA2YjE5YzA0NmJhNSZhdXRvbG9hZD1mYWxzZWA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChrYWthb01hcFNjcmlwdCk7XG4gICAgY29uc3Qgb25Mb2FkS2FrYW9BUEkgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cua2FrYW8ubWFwcy5sb2FkKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBuZXcgd2luZG93Lmtha2FvLm1hcHMuTGF0TG5nKDM3LjQ5MDUwNiwgMTI2Ljk5MzA4OCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgY2VudGVyOiBhZGRyZXNzLFxuICAgICAgICAgIGxldmVsOiA0LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgd2luZG93Lmtha2FvLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICBwb3NpdGlvbjogYWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyB3aW5kb3cua2FrYW8ubWFwcy5NYXAoY29udGFpbmVyLCBvcHRpb25zKTtcbiAgICAgICAgbWFya2VyLnNldE1hcChtYXApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBrYWthb01hcFNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWRLYWthb0FQSSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwibWFwXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiNDAwcHhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjJyZW1cIixcbiAgICAgICAgYm94U2hhZG93OiBcInJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHhcIixcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgIH19XG4gICAgPjwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIktha2FvTWFwIiwia2FrYW9NYXBTY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm9uTG9hZEtha2FvQVBJIiwid2luZG93Iiwia2FrYW8iLCJtYXBzIiwibG9hZCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiYWRkcmVzcyIsIkxhdExuZyIsIm9wdGlvbnMiLCJjZW50ZXIiLCJsZXZlbCIsIm1hcmtlciIsIk1hcmtlciIsInBvc2l0aW9uIiwibWFwIiwiTWFwIiwic2V0TWFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZsZXhTaHJpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/KakaoMap.tsx\n"));

/***/ })

});