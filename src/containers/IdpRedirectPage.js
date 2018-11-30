import React, { Component } from 'react'
import { Redirect, withRouter  } from 'react-router'
import { CONFIG } from '../config'
import queryString from 'query-string'
import Spinner from '../components/shared/Spinner'
import { IdpService } from '../services/IdpService'

class IdpRedirectPage extends Component {

    state = {
        isAuthorized: false,
        authorizationFailed: false
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search)
        console.log(queryParams)
        if(queryParams.code) {

            const idpData = {
                code: queryParams.code
            }

            IdpService.getToken(idpData)
                .then((response) => {
                    sessionStorage.setItem(CONFIG.STORAGE.TOKEN, "access_token")
                    this.setState({isAuthorized: true})
                })
                .catch((error) => {
                    this.setState({authorizationFailed: true})
                })
        }
    }

    render() {

        if (this.state.authorizationFailed) {
            return <Redirect to="/welcome" /> 
        }

        return (
            <div className="idp-page">
                {(!this.state.isAuthorized) ? <Spinner /> : <Redirect to="/app" /> }
            </div>
        )
    }
}

export default withRouter(IdpRedirectPage)