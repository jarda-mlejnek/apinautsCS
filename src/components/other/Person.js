import React from 'react'
import PropTypes from 'prop-types'

export default function Person(props) {
    
	const items = props.items.map((item, index) => {
		return <div key={index} className="list-item">{item.name} {item.rate}</div>
	})

	return (
		<div className="items-list">
			{items}
		</div>
	)   
}

Person.propTypes = {
	items: PropTypes.array
}