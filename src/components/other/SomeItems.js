import React from 'react'
import PropTypes from 'prop-types'

export default function SomeItems(props) {
    
	const items = props.items.map((item, index) => {
		return <div key={index} className="list-item">{item.title}</div>
	})

	return (
		<div className="items-list">
			{items}
		</div>
	)   
}

SomeItems.propTypes = {
	items: PropTypes.array
}