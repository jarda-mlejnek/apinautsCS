import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import {CONFIG} from "../config";
import Person from "../components/other/Person";
import {Link} from "react-router-dom";
import Button from "../components/shared/forms/Button";
import {QRCodeService} from '../services/QRCodeService'

export default class MeetingContainer extends Component {

	constructor(props) {
		super(props)
        this.state.uuid = QRCodeService.create_UUID()
        this.state.qrUrl = QRCodeService.getLoginPageQRCode(this.state.uuid)
        this.state.fireBaseSchema = CONFIG.FIREBASE_SCHEMAS.ITEMS + '-' + this.state.uuid
	}

    state = {
    	people: [],
        qrUrl: '',
        uuid: '',
        fireBaseSchema: ''
    }

    componentDidMount() {
        const itemsRef = window.firebase.database().ref(this.state.fireBaseSchema)

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
                    <div>
                        <h5>Join us</h5>
                        <img src={this.state.qrUrl}/>
                    </div>
                    <div>
                        <Link to="/app/summary">
                            <Button type="submit" name="button" class="green" label="Start" />
                        </Link>
                    </div>
					<div className="meeting-form-section-grid">
                        <Person items={this.state.people} />
					</div>
    			</PageSection>
    		</div>
    	)     
    }
}