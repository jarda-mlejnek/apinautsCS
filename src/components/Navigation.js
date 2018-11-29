import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navigation(props) {

    const links = props.links.map((link, index) => {
        return (
            <li key={index}>
                <NavLink className="nav-item" activeClassName="active" exact to={link.link}>{link.label}</NavLink>
            </li>
        )
    })

    return (
        <div className="navigation-container">
            <div className="nav-items">
                <ul>
                    {links}
                </ul>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired
}