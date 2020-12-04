function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("ReactTagsInput", ["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes);
    global.ReactTagsInput = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      return window.clipboardData.getData('Text');
    }

    if (e.clipboardData) {
      return e.clipboardData.getData('text/plain');
    }

    return '';
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

  function defaultRenderLayout(tagComponents, inputComponent) {
    return /*#__PURE__*/_react["default"].createElement("span", null, tagComponents, inputComponent);
  }

  function defaultPasteSplit(data) {
    return data.split(' ').map(function (d) {
      return d.trim();
    });
  }

  var defaultInputProps = {
    className: 'react-tagsinput-input',
    placeholder: 'Add a tag'
  };

  var TagsInput = /*#__PURE__*/function (_React$Component) {
    _inherits(TagsInput, _React$Component);

    var _super = _createSuper(TagsInput);

    /* istanbul ignore next */
    function TagsInput() {
      var _context;

      var _this;

      _classCallCheck(this, TagsInput);

      _this = _super.call(this);
      _this.state = {
        tag: '',
        isFocused: false
      };
      _this.focus = (_context = _this).focus.bind(_context);
      _this.blur = (_context = _this).blur.bind(_context);
      return _this;
    }

    _createClass(TagsInput, [{
      key: "_getTagDisplayValue",
      value: function _getTagDisplayValue(tag) {
        var tagDisplayProp = this.props.tagDisplayProp;

        if (tagDisplayProp) {
          return tag[tagDisplayProp];
        }

        return tag;
      }
    }, {
      key: "_makeTag",
      value: function _makeTag(tag) {
        var tagDisplayProp = this.props.tagDisplayProp;

        if (tagDisplayProp) {
          return _defineProperty({}, tagDisplayProp, tag);
        }

        return tag;
      }
    }, {
      key: "_removeTag",
      value: function _removeTag(index) {
        var value = this.props.value.concat([]);

        if (index > -1 && index < value.length) {
          var changed = value.splice(index, 1);
          this.props.onChange(value, changed, [index]);
        }
      }
    }, {
      key: "_clearInput",
      value: function _clearInput() {
        if (this.hasControlledInput()) {
          this.props.onChangeInput('');
        } else {
          this.setState({
            tag: ''
          });
        }
      }
    }, {
      key: "_tag",
      value: function _tag() {
        if (this.hasControlledInput()) {
          return this.props.inputValue;
        }

        return this.state.tag;
      }
    }, {
      key: "_addTags",
      value: function _addTags(tags) {
        var _this2 = this;

        var _this$props = this.props,
            onChange = _this$props.onChange,
            onValidationReject = _this$props.onValidationReject,
            onlyUnique = _this$props.onlyUnique,
            maxTags = _this$props.maxTags,
            value = _this$props.value;

        if (onlyUnique) {
          tags = uniq(tags);
          tags = tags.filter(function (tag) {
            return value.every(function (currentTag) {
              return _this2._getTagDisplayValue(currentTag) !== _this2._getTagDisplayValue(tag);
            });
          });
        }

        var rejectedTags = tags.filter(function (tag) {
          return !_this2._validate(_this2._getTagDisplayValue(tag));
        });
        tags = tags.filter(function (tag) {
          return _this2._validate(_this2._getTagDisplayValue(tag));
        });
        tags = tags.filter(function (tag) {
          var tagDisplayValue = _this2._getTagDisplayValue(tag);

          if (typeof tagDisplayValue.trim === 'function') {
            return tagDisplayValue.trim().length > 0;
          } else {
            return tagDisplayValue;
          }
        });

        if (maxTags >= 0) {
          var remainingLimit = Math.max(maxTags - value.length, 0);
          tags = tags.slice(0, remainingLimit);
        }

        if (onValidationReject && rejectedTags.length > 0) {
          onValidationReject(rejectedTags);
        }

        if (tags.length > 0) {
          var newValue = value.concat(tags);
          var indexes = [];

          for (var i = 0; i < tags.length; i++) {
            indexes.push(value.length + i);
          }

          onChange(newValue, tags, indexes);

          this._clearInput();

          return true;
        }

        if (rejectedTags.length > 0) {
          return false;
        }

        this._clearInput();

        return false;
      }
    }, {
      key: "_validate",
      value: function _validate(tag) {
        var _this$props2 = this.props,
            validate = _this$props2.validate,
            validationRegex = _this$props2.validationRegex;
        return validate(tag) && validationRegex.test(tag);
      }
    }, {
      key: "_shouldPreventDefaultEventOnAdd",
      value: function _shouldPreventDefaultEventOnAdd(added, empty, keyCode) {
        if (added) {
          return true;
        }

        if (keyCode === 13) {
          return this.props.preventSubmit || !this.props.preventSubmit && !empty;
        }

        return false;
      }
    }, {
      key: "focus",
      value: function focus() {
        if (this.input && typeof this.input.focus === 'function') {
          this.input.focus();
        }

        this.handleOnFocus();
      }
    }, {
      key: "blur",
      value: function blur() {
        if (this.input && typeof this.input.blur === 'function') {
          this.input.blur();
        }

        this.handleOnBlur();
      }
    }, {
      key: "accept",
      value: function accept() {
        var tag = this._tag();

        if (tag !== '') {
          tag = this._makeTag(tag);
          return this._addTags([tag]);
        }

        return false;
      }
    }, {
      key: "addTag",
      value: function addTag(tag) {
        return this._addTags([tag]);
      }
    }, {
      key: "clearInput",
      value: function clearInput() {
        this._clearInput();
      }
    }, {
      key: "handlePaste",
      value: function handlePaste(e) {
        var _this3 = this;

        var _this$props3 = this.props,
            addOnPaste = _this$props3.addOnPaste,
            pasteSplit = _this$props3.pasteSplit;

        if (!addOnPaste) {
          return;
        }

        e.preventDefault();
        var data = getClipboardData(e);
        var tags = pasteSplit(data).map(function (tag) {
          return _this3._makeTag(tag);
        });

        this._addTags(tags);
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(e) {
        if (e.defaultPrevented) {
          return;
        }

        var _this$props4 = this.props,
            value = _this$props4.value,
            removeKeys = _this$props4.removeKeys,
            addKeys = _this$props4.addKeys;

        var tag = this._tag();

        var empty = tag === '';
        var keyCode = e.keyCode;
        var key = e.key;
        var add = addKeys.indexOf(keyCode) !== -1 || addKeys.indexOf(key) !== -1;
        var remove = removeKeys.indexOf(keyCode) !== -1 || removeKeys.indexOf(key) !== -1;

        if (add) {
          var added = this.accept();

          if (this._shouldPreventDefaultEventOnAdd(added, empty, keyCode)) {
            e.preventDefault();
          }
        }

        if (remove && value.length > 0 && empty) {
          e.preventDefault();

          this._removeTag(value.length - 1);
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        if (e.target === this.div) {
          this.focus();
        }
      }
    }, {
      key: "handleChange",
      value: function handleChange(e) {
        var onChangeInput = this.props.onChangeInput;
        var onChange = this.props.inputProps.onChange;
        var tag = e.target.value;

        if (onChange) {
          onChange(e);
        }

        if (this.hasControlledInput()) {
          onChangeInput(tag);
        } else {
          this.setState({
            tag: tag
          });
        }
      }
    }, {
      key: "handleOnFocus",
      value: function handleOnFocus(e) {
        var onFocus = this.props.inputProps.onFocus;

        if (onFocus) {
          onFocus(e);
        }

        this.setState({
          isFocused: true
        });
      }
    }, {
      key: "handleOnBlur",
      value: function handleOnBlur(e) {
        var onBlur = this.props.inputProps.onBlur;
        this.setState({
          isFocused: false
        });

        if (e == null) {
          return;
        }

        if (onBlur) {
          onBlur(e);
        }

        if (this.props.addOnBlur) {
          var tag = this._makeTag(e.target.value);

          this._addTags([tag]);
        }
      }
    }, {
      key: "handleRemove",
      value: function handleRemove(tag) {
        this._removeTag(tag);
      }
    }, {
      key: "inputProps",
      value: function inputProps() {
        // eslint-disable-next-line
        var _this$props$inputProp = this.props.inputProps,
            onChange = _this$props$inputProp.onChange,
            onFocus = _this$props$inputProp.onFocus,
            onBlur = _this$props$inputProp.onBlur,
            otherInputProps = _objectWithoutProperties(_this$props$inputProp, ["onChange", "onFocus", "onBlur"]);

        var props = _objectSpread(_objectSpread({}, defaultInputProps), otherInputProps);

        if (this.props.disabled) {
          props.disabled = true;
        }

        return props;
      }
    }, {
      key: "inputValue",
      value: function inputValue(props) {
        return props.currentValue || props.inputValue || '';
      }
    }, {
      key: "hasControlledInput",
      value: function hasControlledInput() {
        var _this$props5 = this.props,
            inputValue = _this$props5.inputValue,
            onChangeInput = _this$props5.onChangeInput;
        return typeof onChangeInput === 'function' && typeof inputValue === 'string';
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.hasControlledInput()) {
          return;
        }

        this.setState({
          tag: this.inputValue(this.props)
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        /* istanbul ignore next */
        if (this.hasControlledInput()) {
          return;
        }

        if (!this.inputValue(nextProps)) {
          return;
        }

        this.setState({
          tag: this.inputValue(nextProps)
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        /* eslint-disable */
        var _this$props6 = this.props,
            value = _this$props6.value,
            onChange = _this$props6.onChange,
            tagProps = _this$props6.tagProps,
            renderLayout = _this$props6.renderLayout,
            renderTag = _this$props6.renderTag,
            renderInput = _this$props6.renderInput,
            addKeys = _this$props6.addKeys,
            removeKeys = _this$props6.removeKeys,
            className = _this$props6.className,
            focusedClassName = _this$props6.focusedClassName,
            addOnBlur = _this$props6.addOnBlur,
            addOnPaste = _this$props6.addOnPaste,
            inputProps = _this$props6.inputProps,
            pasteSplit = _this$props6.pasteSplit,
            onlyUnique = _this$props6.onlyUnique,
            maxTags = _this$props6.maxTags,
            validate = _this$props6.validate,
            validationRegex = _this$props6.validationRegex,
            disabled = _this$props6.disabled,
            tagDisplayProp = _this$props6.tagDisplayProp,
            inputValue = _this$props6.inputValue,
            onChangeInput = _this$props6.onChangeInput,
            other = _objectWithoutProperties(_this$props6, ["value", "onChange", "tagProps", "renderLayout", "renderTag", "renderInput", "addKeys", "removeKeys", "className", "focusedClassName", "addOnBlur", "addOnPaste", "inputProps", "pasteSplit", "onlyUnique", "maxTags", "validate", "validationRegex", "disabled", "tagDisplayProp", "inputValue", "onChangeInput"]);
        /* eslint-enable */


        var isFocused = this.state.isFocused;

        if (isFocused) {
          className += ' ' + focusedClassName;
        }

        var tagComponents = value.map(function (tag, index) {
          return renderTag(_objectSpread({
            key: index,
            tag: tag,
            onRemove: _this4.handleRemove.bind(_this4),
            disabled: disabled,
            getTagDisplayValue: _this4._getTagDisplayValue.bind(_this4)
          }, tagProps));
        });
        var inputComponent = renderInput(_objectSpread({
          ref: function ref(r) {
            _this4.input = r;
          },
          value: this._tag(),
          onPaste: this.handlePaste.bind(this),
          onKeyDown: this.handleKeyDown.bind(this),
          onChange: this.handleChange.bind(this),
          onFocus: this.handleOnFocus.bind(this),
          onBlur: this.handleOnBlur.bind(this),
          addTag: this.addTag.bind(this)
        }, this.inputProps()));
        return /*#__PURE__*/_react["default"].createElement("div", {
          ref: function ref(r) {
            _this4.div = r;
          },
          onClick: this.handleClick.bind(this),
          className: className
        }, renderLayout(tagComponents, inputComponent));
      }
    }]);

    return TagsInput;
  }(_react["default"].Component);

  _defineProperty(TagsInput, "defaultProps", {
    className: 'react-tagsinput',
    focusedClassName: 'react-tagsinput--focused',
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
      className: 'react-tagsinput-tag',
      classNameRemove: 'react-tagsinput-remove'
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
  });

  var _default = TagsInput;
  _exports["default"] = _default;
  module.exports = exports.default;
});

