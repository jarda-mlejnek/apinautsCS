import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from './containers/WelcomePage'
import IdpRedirectPage from './containers/IdpRedirectPage'
import AuthorizationWrapper from './AuthorizationWrapper'
import AppRouter from './AppRouter'
import ErrorPageContainer from './containers/ErrorPageContainer'

export default class App extends Component {
	render() {

		return (
			<div className="app-container">
				<Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route path='/welcome' component={WelcomePage} />
					<Route path='/login' component={IdpRedirectPage} />
					<Route path='/app' component={AuthorizationWrapper(['role1', 'role2'])(AppRouter)} />
					<Route component={ErrorPageContainer} />
				</Switch>
			</div>
		)
	}
}
