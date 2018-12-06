import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import {CONFIG} from "../config";
import Person from "../components/other/Person";
import {Link} from "react-router-dom";
import Button from "../components/shared/forms/Button";

export default class MeetingContainer extends Component {

	constructor(props) {
		super(props)
	}

    state = {
    	people: [],
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
                    rate: items[item].rate
                })
            }
            console.log('result.name: ' + result[0].name + ' result.rate: ' + result[0].rate + ' result.id: ' + result[0].id)
            this.setState({people: result})
        })
    }

    render() {
    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
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