import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CONFIG } from './config'
import Navigation from './components/Navigation'
import ErrorPageContainer from './containers/ErrorPageContainer'
import LoginContainer from "./containers/LoginContainer";
import SummaryContainer from "./containers/SummaryContainer"
import MeetingContainer from "./containers/MeetingContainer";

export default class App extends Component {

	render() {

		return (
			<div className="app-container">
				<Navigation links={CONFIG.NAVIGATION_LINKS.APP} />
				<Switch>
					<Route exact path='/' component={MeetingContainer} />
					<Route exact path='/app' component={MeetingContainer} />
					<Route path='/app/login' component={LoginContainer} />
					<Route path='/app/summary' component={SummaryContainer} />
                    <Route path='/app/meeting' component={MeetingContainer} />
					<Route component={ErrorPageContainer} />
				</Switch>
			</div>
		)
	}
}
