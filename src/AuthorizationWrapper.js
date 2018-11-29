import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { CONFIG } from './config'

export default class AuthorizationWrapper extends Component {

    state = {
        user: {
            username: 'sadkj',
            role: 'loggedUser'
        },
        token: null,
        isLoggedIn: false
    }

    componentWillMount() {
        
        const token = sessionStorage.getItem(CONFIG.STORAGE.TOKEN)

        if(token) {
            this.setState({'isLoggedIn': true})
        } else {  // odstranit
            sessionStorage.setItem(CONFIG.STORAGE.TOKEN, "token") 
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