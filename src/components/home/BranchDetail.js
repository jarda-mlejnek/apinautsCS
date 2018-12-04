import React from 'react'
import PropTypes from 'prop-types'

export default function BranchDetail(props) {
    
	return (
		<div className="branch-detail">
           Current branch: {props.branch.name}
		</div>
	)   
}

BranchDetail.propTypes = {
	branch: PropTypes.object
}