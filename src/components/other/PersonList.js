import React from 'react'
import PropTypes from 'prop-types'
import PersonListItem from './PersonListItem'

export default function Person(props) {
    
	const items = props.items.map((item, index) => {
		return <PersonListItem key={index} person={item} />
	})

	return (
		<div className="people-list-container">
			{items}
		</div>
	)   
}

Person.propTypes = {
	items: PropTypes.array
}