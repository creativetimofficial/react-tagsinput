(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('ReactTagsInput', ['react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.React, global.propTypes);
    global.ReactTagsInput = mod.exports;
  }
})(this, function (_react, _propTypes) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

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
        other = _objectWithoutProperties(props, ['tag', 'key', 'disabled', 'onRemove', 'classNameRemove', 'getTagDisplayValue']);

    return _react2.default.createElement(
      'span',
      _extends({ key: key }, other),
      getTagDisplayValue(tag),
      !disabled && _react2.default.createElement('a', { className: classNameRemove, onClick: function onClick(e) {
          return onRemove(key);
        } })
    );
  }

  function defaultRenderInput(_ref) {
    var addTag = _ref.addTag,
        props = _objectWithoutProperties(_ref, ['addTag']);

    var onChange = props.onChange,
        value = props.value,
        other = _objectWithoutProperties(props, ['onChange', 'value']);

    return _react2.default.createElement('input', _extends({ type: 'text', onChange: onChange, value: value }, other));
  }

  function defaultRenderLayout(tagComponents, inputComponent) {
    return _react2.default.createElement(
      'span',
      null,
      tagComponents,
      inputComponent
    );
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

  function TagsInput(tagsInputProps) {
    var _this = this;

    var _tagsInputProps = _toArray(tagsInputProps),
        value = _tagsInputProps[0],
        onChange = _tagsInputProps[1],
        tagProps = _tagsInputProps[2],
        renderLayout = _tagsInputProps[3],
        renderTag = _tagsInputProps[4],
        renderInput = _tagsInputProps[5],
        addKeys = _tagsInputProps[6],
        removeKeys = _tagsInputProps[7],
        className = _tagsInputProps[8],
        focusedClassName = _tagsInputProps[9],
        addOnBlur = _tagsInputProps[10],
        addOnPaste = _tagsInputProps[11],
        inputProps = _tagsInputProps[12],
        pasteSplit = _tagsInputProps[13],
        onlyUnique = _tagsInputProps[14],
        maxTags = _tagsInputProps[15],
        validate = _tagsInputProps[16],
        validationRegex = _tagsInputProps[17],
        disabled = _tagsInputProps[18],
        tagDisplayProp = _tagsInputProps[19],
        inputValue = _tagsInputProps[20],
        onChangeInput = _tagsInputProps[21],
        onValidationReject = _tagsInputProps[22],
        preventSubmit = _tagsInputProps[23],
        other = _tagsInputProps.slice(24);

    var _React$useState = _react2.default.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        tagState = _React$useState2[0],
        setTagState = _React$useState2[1];

    var _React$useState3 = _react2.default.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isFocusedState = _React$useState4[0],
        setIsFocusedState = _React$useState4[1];

    _react2.default.useEffect(function () {
      if (hasControlledInput()) {
        return;
      } else {
        setTagState(inputValueFunction(tagsInputProps));
      }
    }, []);
    var _getTagDisplayValue = function _getTagDisplayValue(tag) {
      if (tagDisplayProp) {
        return tag[tagDisplayProp];
      }
      return tag;
    };
    var _makeTag = function _makeTag(tag) {
      if (tagDisplayProp) {
        return _defineProperty({}, tagDisplayProp, tag);
      }
      return tag;
    };
    var _removeTag = function _removeTag(index) {
      var newValue = value.concat([]);
      if (index > -1 && index < newValue.length) {
        var changed = newValue.splice(index, 1);
        onChange(newValue, changed, [index]);
      }
    };
    var _clearInput = function _clearInput() {
      if (hasControlledInput()) {
        onChangeInput('');
      } else {
        setTagState("");
      }
    };
    var _tag = function _tag() {
      if (hasControlledInput()) {
        return inputValue;
      }
      return tagState;
    };
    var _addTags = function _addTags(tags) {
      if (onlyUnique) {
        tags = uniq(tags);
        tags = tags.filter(function (tag) {
          return value.every(function (currentTag) {
            return _getTagDisplayValue(currentTag) !== _getTagDisplayValue(tag);
          });
        });
      }
      var rejectedTags = tags.filter(function (tag) {
        return !_validate(_getTagDisplayValue(tag));
      });
      tags = tags.filter(function (tag) {
        return _validate(_getTagDisplayValue(tag));
      });
      tags = tags.filter(function (tag) {
        var tagDisplayValue = _getTagDisplayValue(tag);
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
        _clearInput();
        return true;
      }
      if (rejectedTags.length > 0) {
        return false;
      }
      _clearInput();
      return false;
    };
    var _validate = function _validate(tag) {
      return validate(tag) && validationRegex.test(tag);
    };
    var _shouldPreventDefaultEventOnAdd = function _shouldPreventDefaultEventOnAdd(added, empty, keyCode) {
      if (added) {
        return true;
      }
      if (keyCode === 13) {
        return preventSubmit || !preventSubmit && !empty;
      }
      return false;
    };
    var focus = function focus() {
      if (_this.input && typeof _this.input.focus === 'function') {
        _this.input.focus();
      }
      handleOnFocus();
    };
    var blur = function blur() {
      if (_this.input && typeof _this.input.blur === 'function') {
        _this.input.blur();
      }
      handleOnBlur();
    };
    var accept = function accept() {
      var tag = _tag();
      if (tag !== '') {
        tag = _makeTag(tag);
        return _addTags([tag]);
      }
      return false;
    };
    var addTag = function addTag(tag) {
      return _addTags([tag]);
    };
    var clearInput = function clearInput() {
      _clearInput();
    };
    var handlePaste = function handlePaste(e) {
      if (!addOnPaste) {
        return;
      }
      e.preventDefault();
      var data = getClipboardData(e);
      var tags = pasteSplit(data).map(function (tag) {
        return _makeTag(tag);
      });
      _addTags(tags);
    };
    var handleKeyDown = function handleKeyDown(e) {
      if (e.defaultPrevented) {
        return;
      }
      var tag = _tag();
      var empty = tag === '';
      var keyCode = e.keyCode;
      var key = e.key;
      var add = addKeys.indexOf(keyCode) !== -1 || addKeys.indexOf(key) !== -1;
      var remove = removeKeys.indexOf(keyCode) !== -1 || removeKeys.indexOf(key) !== -1;
      if (add) {
        var added = accept();
        if (_shouldPreventDefaultEventOnAdd(added, empty, keyCode)) {
          e.preventDefault();
        }
      }
      if (remove && value.length > 0 && empty) {
        e.preventDefault();
        _removeTag(value.length - 1);
      }
    };
    var handleClick = function handleClick(e) {
      if (e.target === _this.div) {
        focus();
      }
    };
    var handleChange = function handleChange(e) {
      var onChange = inputProps.onChange;

      var tag = e.target.value;
      if (onChange) {
        onChange(e);
      }
      if (hasControlledInput()) {
        onChangeInput(tag);
      } else {
        setTagState(tag);
      }
    };
    var handleOnFocus = function handleOnFocus(e) {
      var onFocus = inputProps.onFocus;

      if (onFocus) {
        onFocus(e);
      }
      setIsFocusedState(true);
    };
    var handleOnBlur = function handleOnBlur(e) {
      var onBlur = inputProps.onBlur;

      setIsFocusedState(false);
      if (e == null) {
        return;
      }
      if (onBlur) {
        onBlur(e);
      }
      if (addOnBlur) {
        var tag = _makeTag(e.target.value);
        _addTags([tag]);
      }
    };
    var handleRemove = function handleRemove(tag) {
      _removeTag(tag);
    };
    var inputPropsFunc = function inputPropsFunc() {
      var onChange = inputProps.onChange,
          onFocus = inputProps.onFocus,
          onBlur = inputProps.onBlur,
          otherInputProps = _objectWithoutProperties(inputProps, ['onChange', 'onFocus', 'onBlur']);

      var props = _extends({}, defaultInputProps, otherInputProps);
      if (disabled) {
        props.disabled = true;
      }
      return props;
    };
    var inputValueFunction = function inputValueFunction(props) {
      return props.currentValue || props.inputValue || '';
    };
    var hasControlledInput = function hasControlledInput() {
      return typeof onChangeInput === 'function' && typeof inputValue === 'string';
    };
    var newClassName = className;
    if (isFocused) {
      newClassName += ' ' + focusedClassName;
    }
    var tagComponents = value.map(function (tag, index) {
      return renderTag(_extends({
        key: index,
        tag: tag,
        onRemove: _this.handleRemove.bind(_this),
        disabled: disabled,
        getTagDisplayValue: _this._getTagDisplayValue.bind(_this)
      }, tagProps));
    });
    var inputComponent = renderInput(_extends({
      ref: function ref(r) {
        _this.input = r;
      },
      value: this._tag(),
      onPaste: this.handlePaste.bind(this),
      onKeyDown: this.handleKeyDown.bind(this),
      onChange: this.handleChange.bind(this),
      onFocus: this.handleOnFocus.bind(this),
      onBlur: this.handleOnBlur.bind(this),
      addTag: this.addTag.bind(this)
    }, this.inputPropsFunc()));
    return _react2.default.createElement(
      'div',
      { ref: function ref(r) {
          _this.div = r;
        }, onClick: this.handleClick.bind(this), className: newClassName },
      renderLayout(tagComponents, inputComponent)
    );
  }

  TagsInput.defaultProps = {
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
    tagProps: { className: 'react-tagsinput-tag', classNameRemove: 'react-tagsinput-remove' },
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
});

