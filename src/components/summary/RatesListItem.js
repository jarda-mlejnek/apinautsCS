import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SomeRateListItem(props) {

	return (
		<div className="price-list-item">
            <div className="price">{props.value}</div>
            <div className="currency">
                <FontAwesomeIcon className="icon" icon={props.icon} />
            </div>
        </div>
	)   
}