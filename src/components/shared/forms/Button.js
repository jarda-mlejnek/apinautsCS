import React from 'react'
import PropTypes from 'prop-types'

export default function Button (props) {

    const label = (props.loading) ? '...' : props.label
    const outerClass = (props.outerClass) ? props.outerClass : "form-input"

    return (
        <div className={outerClass}>
            <button 
                type={props.type} 
                name={props.name} 
                className={props.class} 
                onClick={props.onClick}
            >
                {label}
            </button>
        </div>
    )
}

Button.propTypes = {
    loading: PropTypes.bool,
    outerClass: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    onClick: PropTypes.func
}