import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import {CONFIG} from "../config";
import PersonList from "../components/other/PersonList";
import {Link} from "react-router-dom";
import Button from "../components/shared/forms/Button";
import {QRCodeService} from '../services/QRCodeService'

export default class MeetingContainer extends Component {

	constructor(props) {
		super(props)
        this.state.qrUrl = QRCodeService.getLoginPageQRCode(111)
	}

    state = {
    	people: [],
        qrUrl: ''
    }

    componentDidMount() {
        const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)

        console.log('itemsRef: ' + itemsRef)

        let result = []
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val()
            result = []

            for (let item in items) {
                result.push({
                    id: item,
                    name: items[item].name,
                    mdRate: items[item].mdRate
                })
            }
            console.log('result.name: ' + result[result.length-1].name + ' result.mdRate: ' + result[result.length-1].mdRate
                + ' result.id: ' + result[result.length-1].id)
            this.setState({people: result})

        })
    }

    render() {
    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
                    <div className="meeting-grid">
                        <div className="qr-code-container">
                            <div className="qr-image">
                                <h5>Join us</h5>
                                <img src={this.state.qrUrl} className="qr-code" />
                            </div>
                            <div className="register-button-container">
                                <Link to="/app/summary">
                                    <Button type="submit" name="button" class="green big" label="Start" />
                                </Link>
                            </div>
                        </div>
                        <PersonList items={this.state.people} />
                    </div>
    			</PageSection>
    		</div>
    	)     
    }
}