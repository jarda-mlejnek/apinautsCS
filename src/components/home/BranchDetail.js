import React from 'react'

export default function BranchDetail(props) {
    
    return (
        <div className="branch-detail">
           Current branch: {props.branch.name}
        </div>
    )   
}