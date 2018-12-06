import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import LoginForm from "../components/other/LoginForm"
import { CONFIG } from '../config'

export default class LoginContainer extends Component {

	constructor(props) {
		super(props)
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
	}

    state = {
    	items: [],
    }

    componentDidMount() {
    }

    handleSubmitForm(person) {	
        const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)
        itemsRef.push({ name: person.name, mdRate: person.mdRate })
		console.log('added to firebase object and sent: ' + person)
    }

    render() {
    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
					<div className="login-form-section-grid">
						<LoginForm onSubmitForm={this.handleSubmitForm} />
					</div>
    			</PageSection>
    		</div>
    	)     
    }
}