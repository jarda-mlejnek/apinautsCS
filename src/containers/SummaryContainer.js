import React, { Component, lazy, Suspense } from 'react'
import { CONFIG } from '../config'
import moment from 'moment'
import RatesList from '../components/summary/RatesList'
import RatesListItem from '../components/summary/RatesListItem'
import PageSection from '../components/shared/PageSection'
import { faDollarSign, faBeer } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { Button } from '../components/shared/forms'
import { roundValue } from '../utils'
import Spinner from '../components/shared/Spinner'
import {SomeService} from "../services/SomeService";
import {ExchangeService} from "../services/ExchangeService";

export default class OtherContainer extends Component {

	constructor(props) {
        super(props)
        this.handleStopTimer = this.handleStopTimer.bind(this)
	}

    state = {
        summaryValue: 0,
        summaryInTime: 0,
        totalSeconds: 0,
        timer: {
            seconds: 0,
            minutes: 0,
            hours: 0
        },
        loadingRates: false,
        timerRun: true,
        bitcoinRate: 60395.32,
        usdRate: 0.05
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

      ExchangeService.getCzkToBtcRate()
        .then((response) => {
          this.setState({
            bitcoinRate: response.value
          })
          console.log("bitcoinRate: " + this.state.bitcoinRate);
        })
        .catch((error) => {
          this.setState({
            bitcoinRate: 60395.32
          })
        })

        ExchangeService.getCzkToUsdRate()
        .then((response) => {
          this.setState({
            usdRate: response.result
          })
          console.log("usdRate: " + this.state.usdRate);
        })
        .catch((error) => {
          this.setState({
            usdRate: 0.05
          })
        })
    }

    tick() {

        if(this.state.timerRun) {
            let timer = this.state.timer
            timer.seconds++
            let totalSeconds = this.state.totalSeconds
            totalSeconds++

          if(timer.seconds % 60 === 0) {
                timer.seconds = 0
                timer.minutes++
            }

            if(timer.minute % 60 === 0) {
                timer.minutes = 0
                timer.hours++
            }

            this.setState({totalSeconds: totalSeconds })
            this.setState({summaryInTime: (this.state.summaryValue / 8 / 3600 * this.state.totalSeconds)})
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
                                <RatesListItem value={roundValue(this.state.summaryInTime)} text="CZK" />
                                <RatesListItem value={roundValue(this.state.summaryInTime * this.state.usdRate)} icon={faDollarSign} />
                                <RatesListItem value={roundValue(this.state.summaryInTime / this.state.bitcoinRate, 6)} icon={faBitcoin} />
                                <RatesListItem value={Math.floor(this.state.summaryInTime / 50)} icon={faBeer}/>
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