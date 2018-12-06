import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import {CONFIG} from "../config";
import Person from "../components/other/Person";

export default class MeetingContainer extends Component {

	constructor(props) {
		super(props)
	}

    state = {
    	people: [],
    }

    componentDidMount() {
        const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)

        console.log(itemsRef)

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
            console.log('result: ' + result)
            this.setState({people: result})
        })

    }

    render() {
    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
					<div className="meeting-form-section-grid">
                        <Person items={this.state.people} />
					</div>
    			</PageSection>
    		</div>
    	)     
    }
}