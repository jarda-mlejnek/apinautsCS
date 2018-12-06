import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SomeRateListItem(props) {

	return (
		<div className="price-list-item">
            <div className="price">{props.value} {props.info}</div>
            <div className="currency">
                <FontAwesomeIcon className="icon" icon={props.icon} />
              <div>
                {props.text}
              </div>
            </div>
        </div>
	)   
}