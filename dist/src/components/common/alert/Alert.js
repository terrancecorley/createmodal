"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _button = _interopRequireDefault(require("../button"));

var _closeBtn = _interopRequireDefault(require("../../../images/close-btn.svg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    padding: 1em;\n    margin-top: 1em;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    padding: 1em;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 2em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Calibri', sans-serif;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: lightskyblue;\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    padding-top: 0;\n    margin-bottom: 2em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    border: 1px solid skyblue;\n    border-radius: 0.3rem;\n    position: fixed;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, -25%);\n    z-index: 1000;\n    animation: ", " 0.25s linear forwards;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Alert(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Overlay, {
    className: props.overlayClass
  }), _react.default.createElement(AlertWrapper, null, _react.default.createElement(AlertHeader, {
    className: props.alertHeaderClass
  }, _react.default.createElement(AlertTitle, null, props.title || 'This is an example title'), _react.default.createElement(CloseBtn, {
    src: _closeBtn.default,
    alt: "Close alert button",
    onClick: props.onClick
  })), _react.default.createElement(AlertBody, null, props.children || 'This is an example alert sentence.', _react.default.createElement(AlertButtonWrapper, null, _react.default.createElement(OkayButton, {
    onClick: props.onClick
  }, "Okay")))));
}

var _default = Alert;
exports.default = _default;
var fadeIn = (0, _styledComponents.keyframes)(_templateObject());

var Overlay = _styledComponents.default.div(_templateObject2());

var AlertWrapper = _styledComponents.default.div(_templateObject3(), fadeIn);

var AlertHeader = _styledComponents.default.div(_templateObject4());

var AlertTitle = _styledComponents.default.h2(_templateObject5());

var CloseBtn = _styledComponents.default.img(_templateObject6());

var AlertBody = _styledComponents.default.div(_templateObject7());

var AlertButtonWrapper = _styledComponents.default.div(_templateObject8());

var OkayButton = (0, _styledComponents.default)(_button.default)(_templateObject9());

//# sourceMappingURL=Alert.js.map