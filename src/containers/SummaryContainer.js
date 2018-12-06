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
        summaryValue: 0,
        summaryInTime: 0,
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

      const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)

      let summary = 0
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val()
        for (let item in items) {
          summary += items[item].mdRate === undefined ? 0 : items[item].mdRate
        }
        this.setState({ summaryValue: summary})

      })
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

            this.setState({summaryInTime: (this.state.summaryValue / 8 / 3600 * timer.seconds)})
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
                                <RatesListItem value={this.state.summaryInTime} icon={faDollarSign} />
                                <RatesListItem value={this.state.summaryInTime} icon={faBitcoin} />
                                <RatesListItem value={this.state.summaryInTime} icon={faBeer}/>
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