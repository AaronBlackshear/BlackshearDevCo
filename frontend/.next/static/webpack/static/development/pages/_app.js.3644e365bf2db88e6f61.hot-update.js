webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SidebarStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/SidebarStyle */ "./components/styles/SidebarStyle.js");
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarItem */ "./components/SidebarItem.js");
/* harmony import */ var _styles_BackgroundBlur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/BackgroundBlur */ "./components/styles/BackgroundBlur.js");
var _jsxFileName = "/Users/aaronblackshear/PersonalProjects/blackshear-dev-blog/frontend/components/Sidebar.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Sidebar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(75),
      _useState2 = _slicedToArray(_useState, 2),
      sidebarWidth = _useState2[0],
      setSidebarWidth = _useState2[1]; // const [windowWidth, setWindowWidth] = useState(0);
  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   window.addEventListener('resize', () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  //   return window.removeEventListener('resize', () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // }, []);


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SidebarStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onMouseOver: function onMouseOver() {
      setSidebarWidth(250);
    },
    onMouseLeave: function onMouseLeave() {
      setSidebarWidth(75);
    },
    width: sidebarWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/",
    textAlign: sidebarWidth === 75 ? 'center' : 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: sidebarWidth === 75 ? 'hide' : 'show',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/skills",
    textAlign: sidebarWidth === 75 ? 'center' : 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: sidebarWidth === 75 ? 'hide' : 'show',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Skills")));
}

/***/ })

})
//# sourceMappingURL=_app.js.3644e365bf2db88e6f61.hot-update.js.map