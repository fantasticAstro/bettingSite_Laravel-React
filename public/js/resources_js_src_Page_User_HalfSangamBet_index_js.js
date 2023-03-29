"use strict";
(self["webpackChunkdatta_able_rv18_0_4"] = self["webpackChunkdatta_able_rv18_0_4"] || []).push([["resources_js_src_Page_User_HalfSangamBet_index_js"],{

/***/ "./resources/js/api/market.js":
/*!************************************!*\
  !*** ./resources/js/api/market.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./resources/js/config.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./resources/js/api/service.js");


var api = {};
api.get_liver_result = function (req) {
  return (0,_service__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: "/test",
    method: 'post',
    type: 'json',
    data: req
  });
};
api.get_market_list = function (req) {
  return (0,_service__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: "/get_market_list",
    method: 'post',
    type: 'json',
    data: req
  });
};
api.get_bet_info = function (req) {
  return (0,_service__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: "/get_bet_info",
    method: 'post',
    type: 'json',
    data: req
  });
};
api.save_bet = function (req) {
  return (0,_service__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: "/save_bet",
    method: 'post',
    type: 'json',
    data: req
  });
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/src/Component/CButton.js":
/*!***********************************************!*\
  !*** ./resources/js/src/Component/CButton.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function CButton(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHover = _useState2[0],
    setIsHover = _useState2[1];
  var style = {
    background: isHover ? props.hoverBackground ? props.hoverBackground : 'white' : props.background ? props.background : 'black',
    borderRadius: props.radius ? props.radius : '4px',
    padding: props.padding ? props.padding : '14px 16px 14px 16px',
    textAlign: props.textAlign ? props.textAlign : 'center',
    fontSize: props.fontSize ? props.fontSize : '16px',
    color: isHover ? props.hoverColor ? props.hoverColor : 'black' : props.color ? props.color : 'white',
    cursor: 'pointer',
    fontWeight: '700',
    border: props.border ? props.border : 'none',
    lineHeight: '100%',
    marginLeft: props.marginLeft ? props.marginLeft : "0px",
    marginRight: props.marginRight ? props.marginRight : "0px",
    // backgroundImage:
    //     isHover?
    //         props.hoverBackgroundImage?
    //             "url('"+props.hoverBackgroundImage+"')":'none'
    //         :
    //         props.backgroundImage?
    //             "url('"+props.backgroundImage+"')":'none',

    width: props.width ? props.width : 'unset'
  };
  var handleMouseEnter = function handleMouseEnter() {
    setIsHover(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setIsHover(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: props.callback,
    style: style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: props.text
  });
}
/* harmony default export */ __webpack_exports__["default"] = (CButton);

/***/ }),

/***/ "./resources/js/src/Component/Market.js":
/*!**********************************************!*\
  !*** ./resources/js/src/Component/Market.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_component_market_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/component/market.css */ "./resources/css/component/market.css");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _CButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CButton */ "./resources/js/src/Component/CButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./resources/js/store/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utils_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/Common */ "./resources/js/src/Utils/Common.js");
/* harmony import */ var _api_market__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/market */ "./resources/js/api/market.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Market(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    check_bet = _useState2[0],
    setChecBet = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
      name: '123',
      open_time: '00:00',
      time: '00:00'
    }, {
      name: '456',
      time: '00:00',
      close_time: '00:00'
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    market_list = _useState4[0],
    setMarketList = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      id: -1,
      name: '',
      type: 'OPEN',
      time: '00:00:00'
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    sel_market = _useState6[0],
    setMarket = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    total_amount = _useState8[0],
    setTotalAmount = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      id: -1,
      value: 0
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    bet_info = _useState10[0],
    setBetInfo = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpen = _useState12[0],
    setOpen = _useState12[1];
  var toggleDropdown = function toggleDropdown() {
    return setOpen(!isOpen);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // setBlocking(true) ;
    _api_market__WEBPACK_IMPORTED_MODULE_6__["default"].get_market_list({
      type: props.type
    }).then(function (result) {
      setMarketList(result);
      if (result.length > 0) {
        var _sel_market = result[0];
        setMarket(_sel_market);
      }
    });
    _api_market__WEBPACK_IMPORTED_MODULE_6__["default"].get_bet_info({
      name: props.type
    }).then(function (result) {
      if (result.length > 0) {
        setBetInfo(result[0]);
      }
    });
    return;
  }, 1);
  var setCheck = function setCheck(number) {
    number = number.toString();
    var _check_bet = check_bet;
    if (Object.keys(_check_bet).includes(number)) {
      _check_bet["".concat(number)] = !_check_bet["".concat(number)];
    } else {
      _check_bet["".concat(number)] = true;
    }
    setChecBet(_objectSpread({}, _check_bet));
    var _total_amount = 0;
    for (var key in _check_bet) {
      if (_check_bet[key]) {
        _total_amount += parseInt(bet_info.value);
      }
    }
    setTotalAmount(_total_amount);
  };
  var saveBet = function saveBet() {
    var req = [];
    try {
      _api_market__WEBPACK_IMPORTED_MODULE_6__["default"].save_bet({
        data: check_bet,
        bet_id: bet_info.id,
        market_id: sel_market.id
      }).then(function (result) {
        if (result.status == "200") {
          _Utils_Common__WEBPACK_IMPORTED_MODULE_5__["default"].toast("success", "Successfully");
        }
      });
    } catch (e) {
      _Utils_Common__WEBPACK_IMPORTED_MODULE_5__["default"].toast("error", "Faield");
    }
  };
  var selMarket = function selMarket(item) {
    setMarket(item);
    toggleDropdown();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "market",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "title",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "name",
        children: props.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "date",
        children: "2023-03-29"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "market-list",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "dropdown",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "dropdown-header",
          onClick: toggleDropdown,
          children: [sel_market.name, " ", sel_market.type, " (", sel_market.time, ")", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
            className: "fa fa-chevron-right icon ".concat(isOpen && "open")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "dropdown-body ".concat(isOpen && 'open'),
          children: market_list.map(function (item) {
            return sel_market.id != item.id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "dropdown-item",
              onClick: function onClick() {
                return selMarket(item);
              },
              children: [item.name, " ", item.type, " (", item.time, ")"]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {});
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "market-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BetField, {
        callback: setCheck,
        check_bet: check_bet,
        type: props.type
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "bid-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "bid-amount",
        children: ["TOTAL-BET - $ ", total_amount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        text: "PLACE BID",
        background: "#3F7E68",
        color: "white",
        padding: "10px 15px",
        fonSize: "15px",
        hoverBackground: "rgb(42,90,74)",
        hoverColor: "white",
        callback: saveBet
      })]
    })]
  });
}
function BetField(props) {
  var type = props.type;
  if (type == "single" || type == "single_patti" || type == "full_sangam" || type == "half_sangam") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(SingleBet, {
      callback: props.callback,
      check_bet: props.check_bet
    });
  } else if (type == "double_patti" || type == "jodi" || type == "full_sangam" || type == "half_sangam") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(DoubleBet, {
      callback: props.callback,
      check_bet: props.check_bet
    });
  } else if (type == "tripple_patti" || type == "full_sangam" || type == "half_sangam") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TrippleBet, {
      callback: props.callback,
      check_bet: props.check_bet
    });
  }
}
function DoubleBet(props) {
  var list = [];
  for (var k = 0; k < 100; k++) {
    list.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BetNumItem, {
      number: k,
      is_check: false,
      callback: props.callback,
      check_state: props.check_bet["".concat(k)]
    }));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: list
  });
}
function SingleBet(props) {
  var list = [];
  for (var k = 0; k < 10; k++) {
    list.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BetNumItem, {
      number: k,
      is_check: false,
      callback: props.callback,
      check_state: props.check_bet["".concat(k)]
    }));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: list
  });
}
function TrippleBet(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    children: "DEVLOPE"
  });
}
function BetNumItem(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    md: 3,
    sm: 2,
    onClick: function onClick() {
      return props.callback(props.number);
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "bet-number",
        children: props.number
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "bet-check",
        children: props['check_state'] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          className: "fa fa-check",
          style: {
            fontSize: '40px',
            color: '#4fcb1c'
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {})
      })]
    })
  });
}

// export default Market ;

var mapStateToProps = function mapStateToProps(state) {
  return {
    bet_slip: state.bet_slip
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addBetSlip: function addBetSlip() {
      return dispatch({
        type: _store_actions__WEBPACK_IMPORTED_MODULE_3__.ADD_BET_SLIP,
        bet_slip: bet_slip
      });
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(Market));

/***/ }),

/***/ "./resources/js/src/Page/User/HalfSangamBet/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/Page/User/HalfSangamBet/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component_Market__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Component/Market */ "./resources/js/src/Component/Market.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function HalfSangameBet(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Component_Market__WEBPACK_IMPORTED_MODULE_0__["default"], {
      name: "HALF SANGAM",
      type: "half_sangam"
    })
  });
}
/* harmony default export */ __webpack_exports__["default"] = (HalfSangameBet);

/***/ }),

/***/ "./resources/js/src/Utils/Common.js":
/*!******************************************!*\
  !*** ./resources/js/src/Utils/Common.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");

var common = {
  toast: function toast(type, text) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast[type](text);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/component/market.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/component/market.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.market .title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    color: black ;\r\n    margin: 0 0 10px;\r\n    border-bottom: 1px solid rgba(15,35,39,.4)  ;\r\n    \r\n}\r\n.market .title .name {\r\n    font-weight: 300px;\r\n    font-size: 24px;\r\n}\r\n.market .title .date {\r\n    font-family: \"Lato\";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    padding-top: 15px;\r\n    color: rgb(51, 50, 50)\r\n}\r\n.market .market-list .dropdown{\r\n    width: 50%;\r\n    margin: auto ;\r\n    margin-top: 15px;\r\n}\r\n\r\n.market .market-list .dropdown button, .dropdown-menu {\r\n    width: 100%;\r\n    background: #dedbd7 ;\r\n}\r\n.market .market-list .dropdown-menu {\r\n    padding: 0px;\r\n}\r\n.market .market-list .dropdown-menu .dropdown-item {\r\n    padding: 10px;\r\n}\r\n.market .market-list .dropdown-menu .dropdown-item:hover{\r\n    background: #acaaa9 ;\r\n}\r\n.market .market-content {\r\n    margin-top: 15px;\r\n}\r\n.market .market-content .item {\r\n    background: #dedbd7 ;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n    line-height: 50px;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.market .market-content .item .bet-number {\r\n    width: 40%;\r\n    background: #3F7E68 ;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    color: white ;\r\n    font-size: 25px;\r\n}\r\n\r\n.market .market-content .col-sm-2 {\r\n    width: 50% !important ; \r\n}\r\n.market .market-content .item .bet-check {\r\n    width: 60%;\r\n    text-align: center;\r\n}\r\n.market .bid-content {\r\n    margin-top: 15px;\r\n    padding-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: black ;\r\n    border-top: 1px solid rgba(15,35,39,.4) ;\r\n}\r\n\r\n.market .bid-content .bid-amount {\r\n    padding-left: 30px;\r\n    padding-top: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.dropdown {\r\n    width: 300px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 10px 25px rgba(0,0,0,.1);\r\n    background-color: white;\r\n  }\r\n  \r\n  .dropdown-header {\r\n    padding: 15px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  \r\n  .dropdown-body {\r\n    padding: 5px;\r\n    border-top: 1px solid #E5E8EC;\r\n    display: none;\r\n  }\r\n  \r\n  .dropdown-body.open {\r\n    display: block;\r\n  }\r\n  \r\n  .dropdown-item {\r\n    padding: 10px;\r\n  }\r\n  \r\n  .dropdown-item:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .dropdown-item-dot {\r\n    opacity: 0;\r\n    color: #91A5BE;\r\n    transition: all .2s ease-in-out;\r\n  }\r\n  \r\n  .dropdown-item-dot.selected {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .icon {\r\n    font-size: 13px;\r\n    color: #91A5BE;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    transition: all .2s ease-in-out;\r\n  }\r\n  \r\n  .icon.open {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n  }", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/component/market.css":
/*!********************************************!*\
  !*** ./resources/css/component/market.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_market_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./market.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/component/market.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_market_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_market_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Row.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");


var _excluded = ["bsPrefix", "className", "noGutters", "as"];



var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};
var Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default().apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ })

}]);