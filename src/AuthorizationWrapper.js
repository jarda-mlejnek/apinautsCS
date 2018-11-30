import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { CONFIG } from './config'

export default class AuthorizationWrapper extends Component {

    state = {
        isLoggedIn: false
    }

    componentWillMount() {
    
        // doresit platnost tokenu atd. 
        const token = sessionStorage.getItem(CONFIG.STORAGE.TOKEN)

        if(token) {
            this.setState({ isLoggedIn: true})
        }
    }

    render() {

        if (this.state.isLoggedIn) {
            return this.props.wrappedComponent
        } else {
            return <Redirect to='/welcome' />
        }
    }
}