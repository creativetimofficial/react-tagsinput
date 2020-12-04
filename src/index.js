import React from 'react'
import PropTypes from 'prop-types'

function uniq (arr) {
  let out = []

  for (let i = 0; i < arr.length; i++) {
    if (out.indexOf(arr[i]) === -1) {
      out.push(arr[i])
    }
  }

  return out
}

/* istanbul ignore next */
function getClipboardData (e) {
  if (window.clipboardData) {
    return window.clipboardData.getData('Text')
  }

  if (e.clipboardData) {
    return e.clipboardData.getData('text/plain')
  }

  return ''
}

function defaultRenderTag (props) {
  let {tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other} = props
  return (
    <span key={key} {...other}>
      {getTagDisplayValue(tag)}
      {!disabled &&
        <a className={classNameRemove} onClick={(e) => onRemove(key)} />
      }
    </span>
  )
}

defaultRenderTag.propTypes = {
  key: PropTypes.number,
  tag: PropTypes.string,
  onRemove: PropTypes.func,
  classNameRemove: PropTypes.string,
  getTagDisplayValue: PropTypes.func
}

function defaultRenderInput ({addTag, ...props}) {
  let {onChange, value, ...other} = props
  return (
    <input type='text' onChange={onChange} value={value} {...other} />
  )
}

defaultRenderInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  addTag: PropTypes.func
}

function defaultRenderLayout (tagComponents, inputComponent) {
  return (
    <span>
      {tagComponents}
      {inputComponent}
    </span>
  )
}

function defaultPasteSplit (data) {
  return data.split(' ').map(d => d.trim())
}

const defaultInputProps = {
  className: 'react-tagsinput-input',
  placeholder: 'Add a tag'
}

function TagsInput(tagsInputProps){
  const [
    value,
    onChange,
    tagProps,
    renderLayout,
    renderTag,
    renderInput,
    addKeys,
    removeKeys,
    className,
    focusedClassName,
    addOnBlur,
    addOnPaste,
    inputProps,
    pasteSplit,
    onlyUnique,
    maxTags,
    validate,
    validationRegex,
    disabled,
    tagDisplayProp,
    inputValue,
    onChangeInput,
    onValidationReject,
    preventSubmit,
    ...other
  ] = tagsInputProps;
  const[tagState,setTagState] = React.useState("");
  const[isFocusedState,setIsFocusedState] = React.useState(false);
  const divElementRef = React.useRef(null);
  const inputElementRef = React.useRef(null);
  React.useEffect(() => {
    if (hasControlledInput()) {
      return;
    } else {
      setTagState(inputValueFunction(tagsInputProps))
    }
  },[])
  const _getTagDisplayValue = (tag) => {
    if (tagDisplayProp) {
      return tag[tagDisplayProp]
    }
    return tag
  }
  const _makeTag = (tag) => {
    if (tagDisplayProp) {
      return {
        [tagDisplayProp]: tag
      }
    }
    return tag
  }
  const _removeTag = (index) => {
    let newValue = value.concat([])
    if (index > -1 && index < newValue.length) {
      let changed = newValue.splice(index, 1)
      onChange(newValue, changed, [index])
    }
  }
  const _clearInput = () => {
    if (hasControlledInput()) {
      onChangeInput('')
    } else {
      setTagState("");
    }
  }
  const _tag = () => {
    if (hasControlledInput()) {
      return inputValue
    }
    return tagState
  }
  const _addTags = (tags) => {
    if (onlyUnique) {
      tags = uniq(tags)
      tags = tags.filter(tag => value.every(currentTag =>
        _getTagDisplayValue(currentTag) !== _getTagDisplayValue(tag))
      )
    }
    const rejectedTags = tags.filter(tag => !_validate(_getTagDisplayValue(tag)))
    tags = tags.filter(tag => _validate(_getTagDisplayValue(tag)))
    tags = tags.filter(tag => {
      let tagDisplayValue = _getTagDisplayValue(tag)
      if (typeof tagDisplayValue.trim === 'function') {
        return tagDisplayValue.trim().length > 0
      } else {
        return tagDisplayValue
      }
    })
    if (maxTags >= 0) {
      let remainingLimit = Math.max(maxTags - value.length, 0)
      tags = tags.slice(0, remainingLimit)
    }
    if (onValidationReject && rejectedTags.length > 0) {
      onValidationReject(rejectedTags)
    }
    if (tags.length > 0) {
      let newValue = value.concat(tags)
      let indexes = []
      for (let i = 0; i < tags.length; i++) {
        indexes.push(value.length + i)
      }
      onChange(newValue, tags, indexes)
      _clearInput()
      return true
    }
    if (rejectedTags.length > 0) {
      return false
    }
    _clearInput()
    return false
  }
  const _validate = (tag) => {
    return validate(tag) && validationRegex.test(tag)
  }
  const _shouldPreventDefaultEventOnAdd = (added, empty, keyCode) => {
    if (added) {
      return true
    }
    if (keyCode === 13) {
      return (preventSubmit || !preventSubmit && !empty)
    }
    return false
  }
  const focus = () => {
    if (inputElementRef.current && typeof inputElementRef.current.focus === 'function') {
      inputElementRef.current.focus()
    }
    handleOnFocus()
  }
  const blur = () => {
    if (inputElementRef.current && typeof inputElementRef.current.blur === 'function') {
      inputElementRef.current.blur()
    }
    handleOnBlur()
  }
  const accept = () => {
    let tag = _tag()
    if (tag !== '') {
      tag = _makeTag(tag)
      return _addTags([tag])
    }
    return false
  }
  const addTag = (tag) => {
    return _addTags([tag])
  }
  const clearInput = () => {
    _clearInput()
  }
  const handlePaste = (e) => {
    if (!addOnPaste) {
      return
    }
    e.preventDefault()
    let data = getClipboardData(e)
    let tags = pasteSplit(data).map(tag => _makeTag(tag))
    _addTags(tags)
  }
  const handleKeyDown = (e) => {
    if (e.defaultPrevented) {
      return
    }
    const tag = _tag()
    let empty = tag === ''
    let keyCode = e.keyCode
    let key = e.key
    let add = addKeys.indexOf(keyCode) !== -1 || addKeys.indexOf(key) !== -1
    let remove = removeKeys.indexOf(keyCode) !== -1 || removeKeys.indexOf(key) !== -1
    if (add) {
      let added = accept()
      if (_shouldPreventDefaultEventOnAdd(added, empty, keyCode)) {
        e.preventDefault()
      }
    }
    if (remove && value.length > 0 && empty) {
      e.preventDefault()
      _removeTag(value.length - 1)
    }
  }
  const handleClick = (e) => {
    if (e.target === divElementRef.current) {
      focus()
    }
  }
  const handleChange = (e) => {
    let {onChange} = inputProps
    let tag = e.target.value
    if (onChange) {
      onChange(e)
    }
    if (hasControlledInput()) {
      onChangeInput(tag)
    } else {
      setTagState(tag)
    }
  }
  const handleOnFocus = (e) => {
    let {onFocus} = inputProps
    if (onFocus) {
      onFocus(e)
    }
    setIsFocusedState(true)
  }
  const handleOnBlur = (e) => {
    let {onBlur} = inputProps
    setIsFocusedState(false);
    if (e == null) {
      return
    }
    if (onBlur) {
      onBlur(e)
    }
    if (addOnBlur) {
      const tag = _makeTag(e.target.value)
      _addTags([tag])
    }
  }
  const handleRemove = (tag) => {
    _removeTag(tag)
  }
  const inputPropsFunc = () => {
    // eslint-disable-next-line
    let {onChange, onFocus, onBlur, ...otherInputProps} = inputProps
    let props = {
      ...defaultInputProps,
      ...otherInputProps
    }
    if (disabled) {
      props.disabled = true
    }
    return props
  }
  const inputValueFunction = (props) => {
    return props.currentValue || props.inputValue || ''
  }
  const hasControlledInput = () => {
    return typeof onChangeInput === 'function' && typeof inputValue === 'string'
  }
  let newClassName = className;
  if (isFocused) {
    newClassName += ' ' + focusedClassName
  }
  let tagComponents = value.map((tag, index) => {
    return renderTag({
      key: index,
      tag,
      onRemove: handleRemove,
      disabled,
      getTagDisplayValue: _getTagDisplayValue,
      ...tagProps
    })
  })
  let inputComponent = renderInput({
    ref: inputElementRef,
    value: _tag(),
    onPaste: handlePaste,
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    addTag: addTag,
    ...inputPropsFunc()
  })
  return (
    <div ref={divElementRef} onClick={handleClick} className={newClassName}>
      {renderLayout(tagComponents, inputComponent)}
    </div>
  )
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
  tagProps: {className: 'react-tagsinput-tag', classNameRemove: 'react-tagsinput-remove'},
  onlyUnique: false,
  maxTags: -1,
  validate: () => true,
  validationRegex: /.*/,
  disabled: false,
  tagDisplayProp: null,
  preventSubmit: true
}

TagsInput.propTypes = {
  focusedClassName: PropTypes.string,
  addKeys: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  addOnBlur: PropTypes.bool,
  addOnPaste: PropTypes.bool,
  currentValue: PropTypes.string,
  inputValue: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func,
  removeKeys: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])),
  renderInput: PropTypes.func,
  renderTag: PropTypes.func,
  renderLayout: PropTypes.func,
  pasteSplit: PropTypes.func,
  tagProps: PropTypes.object,
  onlyUnique: PropTypes.bool,
  value: PropTypes.array.isRequired,
  maxTags: PropTypes.number,
  validate: PropTypes.func,
  validationRegex: PropTypes.instanceOf(RegExp),
  disabled: PropTypes.bool,
  tagDisplayProp: PropTypes.string,
  preventSubmit: PropTypes.bool
}
