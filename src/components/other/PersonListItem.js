import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PersonListItem(props) {

	return (
		<div className="people-list-item">
            <div className="name">{props.name}</div>
            <div className="rate">{props.rate}</div>
        </div>
	)   
}