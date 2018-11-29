import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SomeService } from '../../services/SomeService'

export default class BranchDetail extends Component {
    
    render() {

        return (
            <div className="hm">
                {this.props.branch.name}
            </div>
        )     
    }
}