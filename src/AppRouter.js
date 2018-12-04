import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CONFIG } from './config'
import Navigation from './components/Navigation'
import HomeContainer from './containers/HomeContainer'
import OtherContainer from './containers/OtherContainer'
import ErrorPageContainer from './containers/ErrorPageContainer'

class AppRouter extends Component {
  
	render() {
		return (
			<div className="app-container">
				<Navigation links={CONFIG.NAVIGATION_LINKS.APP} />
				<Switch>
					<Route exact path='/app' component={HomeContainer} />
					<Route path='/app/home' component={HomeContainer} />
					<Route path='/app/other' component={OtherContainer} />
					<Route component={ErrorPageContainer} />
				</Switch>
			</div>
		)
	}
}

export default AppRouter
