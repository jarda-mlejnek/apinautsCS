import React from 'react'
import PropTypes from 'prop-types'

export default function Spinner(props) {

	let cssClass = 'loader-container'
	if (props.class) {
		cssClass = cssClass + ' ' + props.class
	}

	return(
		<div className={cssClass}>
			<div className="loader"></div>
		</div>
	)
}

Spinner.propTypes = {
	class: PropTypes.string
}