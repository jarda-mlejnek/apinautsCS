import React from 'react';
import PropTypes from 'prop-types'

export default function Textarea(props) {
 
  const { 
    name,
    type = "text",
    label, 
    placeholder, 
    required = (props.required) ? "required" : null, 
    minLength = 0, 
    maxLength = 128,
    value = '',
    rows = 5,
    onChange 
  } = props

  return (
    <div className="form-input">
      <label htmlFor={name} >{label}</label>
      <textarea 
        type={type}
        name={name} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}
        minLength={minLength} 
        maxLength={maxLength}
        required={required}
        rows={rows}
      />
      <div className="error-message"></div>
    </div>
  )
}
  
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func
}