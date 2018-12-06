import React from 'react'
import Spinner from '../shared/Spinner'

export default function SomeItems(props) {

	return (
		<div className="price-list">
			{(props.loading) ? <Spinner /> : props.children}
		</div>
	)   
}