"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function uniq(arr) {
  var out = [];

  for (var i = 0; i < arr.length; i++) {
    if (out.indexOf(arr[i]) === -1) {
      out.push(arr[i]);
    }
  }

  return out;
}
/* istanbul ignore next */


function getClipboardData(e) {
  if (window.clipboardData) {
    return window.clipboardData.getData("Text");
  }

  if (e.clipboardData) {
    return e.clipboardData.getData("text/plain");
  }

  return "";
}

function defaultRenderTag(props) {
  var tag = props.tag,
      key = props.key,
      disabled = props.disabled,
      onRemove = props.onRemove,
      classNameRemove = props.classNameRemove,
      getTagDisplayValue = props.getTagDisplayValue,
      other = _objectWithoutProperties(props, ["tag", "key", "disabled", "onRemove", "classNameRemove", "getTagDisplayValue"]);

  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    key: key
  }, other), getTagDisplayValue(tag), !disabled && /*#__PURE__*/_react["default"].createElement("a", {
    className: classNameRemove,
    onClick: function onClick(e) {
      return onRemove(key);
    }
  }));
}

defaultRenderTag.propTypes = {
  key: _propTypes["default"].number,
  tag: _propTypes["default"].string,
  onRemove: _propTypes["default"].func,
  classNameRemove: _propTypes["default"].string,
  getTagDisplayValue: _propTypes["default"].func
};

function defaultRenderInput(_ref) {
  var addTag = _ref.addTag,
      props = _objectWithoutProperties(_ref, ["addTag"]);

  var onChange = props.onChange,
      value = props.value,
      other = _objectWithoutProperties(props, ["onChange", "value"]);

  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "text",
    onChange: onChange,
    value: value
  }, other));
}

defaultRenderInput.propTypes = {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  addTag: _propTypes["default"].func
};

function defaultRenderLayout(tagComponents, inputComponent) {
  return /*#__PURE__*/_react["default"].createElement("span", null, tagComponents, inputComponent);
}

function defaultPasteSplit(data) {
  return data.split(" ").map(function (d) {
    return d.trim();
  });
}

var defaultInputProps = {
  className: "react-tagsinput-input",
  placeholder: "Add a tag"
};

var TagsInput = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var divElementRef = ref ? ref : _react["default"].useRef(null);

  var inputElementRef = _react["default"].useRef(null);

  var _React$useState = _react["default"].useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tagState = _React$useState2[0],
      setTagState = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isFocusedState = _React$useState4[0],
      setIsFocusedState = _React$useState4[1];

  _react["default"].useEffect(function () {
    if (hasControlledInputHook() && !inputValueHook(props)) {} else {
      setTagState(inputValueHook(props));
    }
  }, [props]);

  var value = props.value,
      onChange = props.onChange,
      tagProps = props.tagProps,
      renderLayout = props.renderLayout,
      renderTag = props.renderTag,
      renderInput = props.renderInput,
      addKeys = props.addKeys,
      removeKeys = props.removeKeys,
      className = props.className,
      focusedClassName = props.focusedClassName,
      addOnBlur = props.addOnBlur,
      addOnPaste = props.addOnPaste,
      inputProps = props.inputProps,
      pasteSplit = props.pasteSplit,
      onlyUnique = props.onlyUnique,
      maxTags = props.maxTags,
      validate = props.validate,
      validationRegex = props.validationRegex,
      disabled = props.disabled,
      tagDisplayProp = props.tagDisplayProp,
      inputValue = props.inputValue,
      onChangeInput = props.onChangeInput,
      other = _objectWithoutProperties(props, ["value", "onChange", "tagProps", "renderLayout", "renderTag", "renderInput", "addKeys", "removeKeys", "className", "focusedClassName", "addOnBlur", "addOnPaste", "inputProps", "pasteSplit", "onlyUnique", "maxTags", "validate", "validationRegex", "disabled", "tagDisplayProp", "inputValue", "onChangeInput"]);

  var _getTagDisplayValueHook = function _getTagDisplayValueHook(tagInner) {
    if (tagDisplayProp) {
      return tagInner[tagDisplayProp];
    }

    return tagInner;
  };

  var _makeTagHook = function _makeTagHook(tagInner) {
    if (tagDisplayProp) {
      return _defineProperty({}, tagDisplayProp, tagInner);
    }

    return tagInner;
  };

  var _removeTagHook = function _removeTagHook(indexInner) {
    var valueInner = value.concat([]);

    if (indexInner > -1 && indexInner < valueInner.length) {
      var changed = valueInner.splice(indexInner, 1);
      onChange(valueInner, changed, [indexInner]);
    }
  };

  var _clearInputHook = function _clearInputHook() {
    if (hasControlledInputHook()) {
      onChangeInput("");
    } else {
      setTagState("");
    }
  };

  var _tagHook = function _tagHook() {
    if (hasControlledInputHook()) {
      return inputValue;
    }

    return tagState;
  };

  var _addTagsHook = function _addTagsHook(tagsInner) {
    var onValidationReject = props.onValidationReject;

    if (onlyUnique) {
      tagsInner = uniq(tagsInner);
      tagsInner = tagsInner.filter(function (tag) {
        return value.every(function (currentTag) {
          return _getTagDisplayValueHook(currentTag) !== _getTagDisplayValueHook(tag);
        });
      });
    }

    var rejectedTags = tagsInner.filter(function (tag) {
      return !_validateHook(_getTagDisplayValueHook(tag));
    });
    tagsInner = tagsInner.filter(function (tag) {
      return _validateHook(_getTagDisplayValueHook(tag));
    });
    tagsInner = tagsInner.filter(function (tag) {
      var tagDisplayValueInner = _getTagDisplayValueHook(tag);

      if (typeof tagDisplayValueInner.trim === "function") {
        return tagDisplayValueInner.trim().length > 0;
      } else {
        return tagDisplayValueInner;
      }
    });

    if (maxTags >= 0) {
      var remainingLimitInner = Math.max(maxTags - value.length, 0);
      tagsInner = tagsInner.slice(0, remainingLimitInner);
    }

    if (onValidationReject && rejectedTags.length > 0) {
      onValidationReject(rejectedTags);
    }

    if (tagsInner.length > 0) {
      var newValueInner = value.concat(tagsInner);
      var indexesInner = [];

      for (var i = 0; i < tagsInner.length; i++) {
        indexesInner.push(value.length + i);
      }

      onChange(newValueInner, tagsInner, indexesInner);

      _clearInputHook();

      return true;
    }

    if (rejectedTags.length > 0) {
      return false;
    }

    _clearInputHook();

    return false;
  };

  var _validateHook = function _validateHook(tagInner) {
    return validate(tagInner) && validationRegex.test(tagInner);
  };

  var _shouldPreventDefaultEventOnAddHook = function _shouldPreventDefaultEventOnAddHook(addedInner, emptyInner, keyCodeInner) {
    if (addedInner) {
      return true;
    }

    if (keyCodeInner === 13) {
      return props.preventSubmit || !props.preventSubmit && !emptyInner;
    }

    return false;
  };

  var focusHook = function focusHook() {
    if (inputElementRef.current && typeof inputElementRef.current.focus === "function") {
      inputElementRef.current.focus();
    }

    handleOnFocusHook();
  };

  var blurHook = function blurHook() {
    if (inputElementRef.current && typeof inputElementRef.current.blur === "function") {
      inputElementRef.current.blur();
    }

    handleOnBlurHook();
  };

  var acceptHook = function acceptHook() {
    var tagInner = _tagHook();

    if (tagInner !== "") {
      tagInner = _makeTagHook(tagInner);
      return _addTagsHook([tagInner]);
    }

    return false;
  };

  var addTagHook = function addTagHook(tagInner) {
    return _addTagsHook([tagInner]);
  };

  var clearInputHook = function clearInputHook() {
    _clearInputHook();
  };

  var handlePasteHook = function handlePasteHook(e) {
    if (!addOnPaste) {
      return;
    }

    e.preventDefault();
    var dataInner = getClipboardData(e);
    var tagsInner = pasteSplit(dataInner).map(function (tagInner) {
      return _makeTagHook(tagInner);
    });

    _addTagsHook(tagsInner);
  };

  var handleKeyDownHook = function handleKeyDownHook(e) {
    if (e.defaultPrevented) {
      return;
    }

    var tagInner = _tagHook();

    var emptyInner = tagInner === "";
    var keyCodeInner = e.keyCode;
    var keyInner = e.key;
    var addInner = addKeys.indexOf(keyCodeInner) !== -1 || addKeys.indexOf(keyInner) !== -1;
    var removeInner = removeKeys.indexOf(keyCodeInner) !== -1 || removeKeys.indexOf(keyInner) !== -1;

    if (addInner) {
      var addedInner = acceptHook();

      if (_shouldPreventDefaultEventOnAddHook(addedInner, emptyInner, keyCodeInner)) {
        e.preventDefault();
      }
    }

    if (removeInner && value.length > 0 && emptyInner) {
      e.preventDefault();

      _removeTagHook(value.length - 1);
    }
  };

  var handleClickHook = function handleClickHook(e) {
    if (e.target === divElementRef.current) {
      focusHook();
    }
  };

  var handleChangeHook = function handleChangeHook(e) {
    var onChange = props.inputProps.onChange;
    var tagInner = e.target.value;

    if (onChange) {
      onChange(e);
    }

    if (hasControlledInputHook()) {
      onChangeInput(tagInner);
    } else {
      setTagState(tagInner);
    }
  };

  var handleOnFocusHook = function handleOnFocusHook(e) {
    var onFocus = props.inputProps.onFocus;

    if (onFocus) {
      onFocus(e);
    }

    setIsFocusedState(true);
  };

  var handleOnBlurHook = function handleOnBlurHook(e) {
    var onBlur = props.inputProps.onBlur;
    setIsFocusedState(false);

    if (e == null) {
      return;
    }

    if (onBlur) {
      onBlur(e);
    }

    if (addOnBlur) {
      var tagInner = _makeTagHook(e.target.value);

      _addTagsHook([tagInner]);
    }
  };

  var handleRemoveHook = function handleRemoveHook(tagInner) {
    _removeTagHook(tagInner);
  };

  var inputPropsHook = function inputPropsHook() {
    // eslint-disable-next-line
    var _props$inputProps = props.inputProps,
        onChange = _props$inputProps.onChange,
        onFocus = _props$inputProps.onFocus,
        onBlur = _props$inputProps.onBlur,
        otherInputProps = _objectWithoutProperties(_props$inputProps, ["onChange", "onFocus", "onBlur"]);

    var propsInner = _objectSpread(_objectSpread({}, defaultInputProps), otherInputProps);

    if (disabled) {
      propsInner.disabled = true;
    }

    return propsInner;
  };

  var inputValueHook = function inputValueHook(propsInner) {
    return propsInner.currentValue || propsInner.inputValue || "";
  };

  var hasControlledInputHook = function hasControlledInputHook() {
    return typeof onChangeInput === "function" && typeof inputValue === "string";
  };

  var divClassName = className;

  if (isFocusedState) {
    divClassName = className + " " + focusedClassName;
  }

  var tagComponents = value.map(function (tag, index) {
    return renderTag(_objectSpread({
      key: index,
      tag: tag,
      onRemove: handleRemoveHook,
      disabled: disabled,
      getTagDisplayValue: _getTagDisplayValueHook
    }, tagProps));
  });
  var inputComponent = renderInput(_objectSpread({
    ref: inputElementRef,
    value: _tagHook(),
    onPaste: handlePasteHook,
    onKeyDown: handleKeyDownHook,
    onChange: handleChangeHook,
    onFocus: handleOnFocusHook,
    onBlur: handleOnBlurHook,
    addTag: addTagHook
  }, inputPropsHook()));
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: divElementRef,
    onClick: handleClickHook,
    className: divClassName
  }, renderLayout(tagComponents, inputComponent));
});

TagsInput.defaultProps = {
  className: "react-tagsinput",
  focusedClassName: "react-tagsinput--focused",
  addKeys: [9, 13],
  addOnBlur: false,
  addOnPaste: false,
  inputProps: {},
  removeKeys: [8],
  renderInput: defaultRenderInput,
  renderTag: defaultRenderTag,
  renderLayout: defaultRenderLayout,
  pasteSplit: defaultPasteSplit,
  tagProps: {
    className: "react-tagsinput-tag",
    classNameRemove: "react-tagsinput-remove"
  },
  onlyUnique: false,
  maxTags: -1,
  validate: function validate() {
    return true;
  },
  validationRegex: /.*/,
  disabled: false,
  tagDisplayProp: null,
  preventSubmit: true
};
TagsInput.propTypes = {
  focusedClassName: _propTypes["default"].string,
  addKeys: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  addOnBlur: _propTypes["default"].bool,
  addOnPaste: _propTypes["default"].bool,
  currentValue: _propTypes["default"].string,
  inputValue: _propTypes["default"].string,
  inputProps: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired,
  onChangeInput: _propTypes["default"].func,
  removeKeys: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  renderInput: _propTypes["default"].func,
  renderTag: _propTypes["default"].func,
  renderLayout: _propTypes["default"].func,
  pasteSplit: _propTypes["default"].func,
  tagProps: _propTypes["default"].object,
  onlyUnique: _propTypes["default"].bool,
  value: _propTypes["default"].array.isRequired,
  maxTags: _propTypes["default"].number,
  validate: _propTypes["default"].func,
  validationRegex: _propTypes["default"].instanceOf(RegExp),
  disabled: _propTypes["default"].bool,
  tagDisplayProp: _propTypes["default"].string,
  preventSubmit: _propTypes["default"].bool
};
var _default = TagsInput;
exports["default"] = _default;

