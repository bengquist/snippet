webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Auth/LogIn.tsx":
/*!***********************************!*\
  !*** ./components/Auth/LogIn.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Styles/colors */ "./components/Styles/colors.ts");
/* harmony import */ var _Common_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Common/helpers */ "./components/Common/helpers.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");




var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\snippet\\components\\Auth\\LogIn.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation LOGIN_MUTATION($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      email\n      username\n      password\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var LOGIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function LogIn() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
    mutation: LOGIN_MUTATION,
    variables: {
      email: email,
      password: password
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, function (login, _ref) {
    var error = _ref.error,
        loading = _ref.loading,
        data = _ref.data;
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Form, {
      onSubmit: Object(_Common_helpers__WEBPACK_IMPORTED_MODULE_7__["preventDefault"])(
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return login();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Snippet"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Input, {
      onChange: function onChange(e) {
        return setEmail(e.target.value);
      },
      value: email,
      placeholder: "Username",
      type: "text",
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Input, {
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      value: password,
      placeholder: "Password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Log In"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (LogIn);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "LogIn__Form",
  componentId: "s3kh84-0"
})(["padding:40px;background:", ";border-radius:10px;width:100%;max-width:500px;display:grid;grid-gap:30px;justify-items:center;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_6__["colors"].green);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1.withConfig({
  displayName: "LogIn__Header",
  componentId: "s3kh84-1"
})(["color:", ";text-transform:uppercase;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_6__["colors"].white);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input.withConfig({
  displayName: "LogIn__Input",
  componentId: "s3kh84-2"
})(["height:40px;max-width:400px;width:100%;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "LogIn__Button",
  componentId: "s3kh84-3"
})(["border-radius:5px;padding:10px 20px;border:none;"]);

/***/ })

})
//# sourceMappingURL=login.js.441a3c0ff0470a6f3e67.hot-update.js.map