import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import LoginForm from "../components/other/LoginForm";

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

    handleSubmitForm(obj) {
		// console.log(obj)
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