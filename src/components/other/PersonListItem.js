import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'react-image'

export default function PersonListItem(props) {
    console.log(props)
	return (
		<div className="people-list-item">
            <div className="avatar"><Img src={props.person.avatar} alt="avatar" /></div>
            <div className="name">{props.person.name}</div>
            <div className="rate">{props.person.mdRate}</div>
        </div>
	)   
}

//        <div className="avatar"><Img src={props.person.avatar} alt="avatar" /></div>