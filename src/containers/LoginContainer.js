import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import PageSection from '../components/shared/PageSection'
import LoginForm from "../components/other/LoginForm"
import { CONFIG } from '../config'

export default class LoginContainer extends Component {

	constructor(props) {
		super(props)
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
	}

    state = {
		meetingId: '' 
    }

    componentDidMount() {
		const urlSearchParams = new URLSearchParams(this.props.location.search.substring(1))
		const meetingId = urlSearchParams.get("id")

		this.state.meetingId = meetingId
    }

    handleSubmitForm(person) {	
		const meetingId = this.state.meetingId
        const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS + '-' + meetingId)
        itemsRef.push({ name: person.name, mdRate: person.mdRate })
		console.log('added to firebase object and sent: ', person)

		const idUriParam = "/?id=" + meetingId

		let meetingPageUri = CONFIG.NAVIGATION_LINKS.APP.find( e => e.label === "MEETING").link
		meetingPageUri += idUriParam 
		console.log('redirecting to meeting page on uri', meetingPageUri)
		this.props.history.push(meetingPageUri)
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