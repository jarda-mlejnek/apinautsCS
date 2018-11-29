import React from 'react'
import PropTypes from 'prop-types'

export default function PageSection(props) {

    const sectionClass = (props.background) ? "page-section " + props.background : "page-section"

    return (
        <div className={sectionClass}>
            <div className="section-content">{props.children}</div>
        </div>
    )
}

PageSection.propTypes = {
    background: PropTypes.string
}