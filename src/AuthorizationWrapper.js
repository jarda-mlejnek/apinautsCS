import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { CONFIG } from './config'

export default class AuthorizationWrapper extends Component {

    state = {
        isLoggedIn: false
    }

    componentWillMount() {
        
        const token = sessionStorage.getItem(CONFIG.STORAGE.TOKEN)

        if(token) {
            this.setState({ isLoggedIn: true})
        } else { 
            sessionStorage.setItem(CONFIG.STORAGE.TOKEN, "token")
            this.setState({ isLoggedIn: true}) // odstranit 
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