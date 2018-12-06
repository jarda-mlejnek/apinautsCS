import React, { Component, lazy, Suspense } from 'react'
import { CONFIG } from '../config'
import PageSection from '../components/shared/PageSection'
import { Button } from '../components/shared/forms'
import Spinner from '../components/shared/Spinner'

export default class OtherContainer extends Component {

	constructor(props) {
        super(props)
        this.handleStopTimer = this.handleStopTimer.bind(this)
	}

    state = {
    	items: [],
		itemsLoading: false,
    }

    componentDidMount() {
	
    }

    handleStopTimer() {
        console.log(666)
    }

    render() {
		
    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
					<div className="summary-section-container">
						<div classname="summary-header">
                            <h1>summary schůzky</h1>
                        </div>
                        <div className="summary-content">
                            <div className="timer">00:00:00</div>
                            <div className="price-list">
                                <div className="price-list-item">
                                    <div className="price">666</div>
                                    <div className="currency">
                                        aa
                                    </div>
                                </div>
                                <div className="price-list-item">
                                    <div className="price">666</div>
                                    <div className="currency">
                                        aa
                                    </div>
                                </div>
                                <div className="price-list-item">
                                    <div className="price">666</div>
                                    <div className="currency">
                                        aa
                                    </div>
                                </div>
                            </div>
                            <div className="stop-container">
                                <Button name="aa" class="orange stop-timer" label="Stop" onClick={this.handleStopTimer} />
                            </div>
                        </div>
					</div>
    			</PageSection>
    		</div>
    	)     
    }
}