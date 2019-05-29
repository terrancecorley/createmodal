"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        background-color: #6C757D;\n        border: 1px solid #6C757D;\n\n        &:hover {\n            background-color: #5A6268;\n            border: 1px solid #545B62;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: #FFF;\n    border-radius: 0.25rem;\n    background-color: #007BFF;\n    border: 1px solid #007BFF;\n    box-shadow: 0;\n    font-size: 1.2em;\n\n    &:hover {\n        background-color: #0069D9;\n        border: 1px solid #0062CC;\n        transition: background-color 0.2s ease-out,\n                    border 0.2s ease-out;\n    }\n\n    /* Secondary button styles */\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), function (props) {
  return props.secondary && (0, _styledComponents.css)(_templateObject2());
});

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map