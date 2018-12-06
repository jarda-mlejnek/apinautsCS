import React from 'react'
import PropTypes from 'prop-types'

export default function TextInput(props) {
 
	const { 
		name,
		type = 'text',
		label, 
		placeholder, 
		required = (props.required) ? 'required' : null, 
		minLength = 0, 
		maxLength = 128,
		min, 
		max,
		value = '',
		disabled,
		onChange 
	} = props

	return (
		<div className="form-input">
			<label htmlFor={name} >{label}</label>
			<input 
				type={type}
				name={name} 
				value={value} 
				placeholder={placeholder} 
				onChange={onChange}
				minLength={minLength} 
				maxLength={maxLength}
				min={min}
				max={max}
				required={required}
				disabled={disabled}
			/>
			<div className="error-message"></div>
		</div>
	)
}
  
TextInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	onChange: PropTypes.func
}