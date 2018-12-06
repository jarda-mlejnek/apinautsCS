import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CONFIG } from './config'
import Navigation from './components/Navigation'
import HomeContainer from './containers/HomeContainer'
import OtherContainer from './containers/OtherContainer'
import ErrorPageContainer from './containers/ErrorPageContainer'
import GraphContainer from "./containers/GraphContainer"
import SummaryContainer from "./containers/SummaryContainer"

class AppRouter extends Component {
  
	render() {
		return (
			<div className="app-container">
				<Navigation links={CONFIG.NAVIGATION_LINKS.APP} />
				<Switch>
					<Route exact path='/app' component={HomeContainer} />
					<Route path='/app/home' component={HomeContainer} />
					<Route path='/app/other' component={OtherContainer} />
                    <Route path='/app/graph' component={GraphContainer} />
					<Route path='/app/summary' component={SummaryContainer} />
					<Route component={ErrorPageContainer} />
				</Switch>
			</div>
		)
	}
}

export default AppRouter
