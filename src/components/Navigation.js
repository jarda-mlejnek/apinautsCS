import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navigation(props) {

	return (
		<div className="navigation-container">
			<div className="nav-items">
				<div className="header">MEETY</div>
			</div>
		</div>
	)
}

Navigation.propTypes = {
	links: PropTypes.array.isRequired
}