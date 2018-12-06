import React, { Component, lazy, Suspense } from 'react'
import { CONFIG } from '../config'
import moment from 'moment'
import RatesList from '../components/summary/RatesList'
import RatesListItem from '../components/summary/RatesListItem'
import PageSection from '../components/shared/PageSection'
import { faDollarSign, faBeer } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { Button } from '../components/shared/forms'
import Spinner from '../components/shared/Spinner'

export default class OtherContainer extends Component {

	constructor(props) {
        super(props)
        this.handleStopTimer = this.handleStopTimer.bind(this)
	}

    state = {
        timer: {
            seconds: 0,
            minutes: 0,
            hours: 0
        },
        loadingRates: false,
        timerRun: true
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {

        if(this.state.timerRun) {
            let timer = this.state.timer
            timer.seconds++

            if(timer.seconds % 60 === 0) {
                timer.seconds = 0
                timer.minutes++
            }

            if(timer.minute % 60 === 0) {
                timer.minutes = 0
                timer.hours++
            }

            this.setState({timer: timer})
        }
    }
    handleStopTimer() {
          this.setState({
            timerRun: false

          })
      }
    render() {
        
        const currentTime = this.state.timer.hours + ':' + this.state.timer.minutes + ':' + this.state.timer.seconds

    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
					<div className="summary-section-container">
						<div className="summary-header">
                            <h1>F**** meeting</h1>
                        </div>
                        <div className="summary-content">
                            <div className="timer">{moment('2018-01-01 ' + currentTime).format('HH:mm:ss')}</div>
                            <RatesList loading={this.state.loadingRates}>
                                <RatesListItem value={666} icon={faDollarSign} />
                                <RatesListItem value={666} icon={faBitcoin} />
                                <RatesListItem value={666} icon={faBeer}/>
                            </RatesList>
                            <div className="stop-container">
                                <Button type="button" name="aa" class="orange big" label="Stop" onClick={this.handleStopTimer} />
                            </div>
                        </div>
					</div>
    			</PageSection>
    		</div>
    	)     
    }
}