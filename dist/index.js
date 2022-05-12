"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,0.50);\n"])));

var ModalConfirmation = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #fff;\n    padding: 1.9em;\n    width: 50%;\n    border-radius: 5px;\n"])));

var ModalClose = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    top: -1.9em;\n    right: -16.2em;\n    font-size: 1.3em;\n"])));

function Modal(props) {
  var close = function close() {
    props.setDisplay(false);
  };

  return /*#__PURE__*/_react.default.createElement(ModalDiv, null, /*#__PURE__*/_react.default.createElement(ModalConfirmation, null, props.children, /*#__PURE__*/_react.default.createElement(ModalClose, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: close,
    icon: _freeSolidSvgIcons.faCircleXmark
  }))));
}

var _default = Modal;
exports.default = _default;