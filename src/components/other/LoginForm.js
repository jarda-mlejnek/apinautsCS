import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { GravatarService } from '../../services/GravatarService'
import Img from 'react-image'
import {Button, Form, TextInput} from '../shared/forms/'
import {CONFIG} from "../../config";

export default class LoginForm extends Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

		const defaultAvatarUrl = GravatarService.getGravatarUrl("")
		console.debug("Default gravat url: " + defaultAvatarUrl)
		this.state.person.url = defaultAvatarUrl
	}

    static propTypes = {
    	onSubmitForm: PropTypes.func
    }

    state = {
    	person: {
			url: '',
    		name: '',
    		mdRate: ''
    	}
	}
	
	componentWillMount() {
		let min = 5000
		let max = 20000
		this.state.person.mdRate = this.generateRate(min, max);
	}

    handleChange(e) {		
    	let person = this.state.person
		person[e.target.name] = e.target.value
		person.url = GravatarService.getGravatarUrl(person.name)
    	this.setState({person: person})
    }

    handleSubmit(obj) {
    	this.props.onSubmitForm(this.state.person)
    	console.log('Generated rate: ' + this.state.person.mdRate + ' for user: ' + this.state.person.name)
    }

    generateRate(min, max) {		
        let number = Math.floor(Math.random() * max) + min
        let rounded = Math.round(number / 1000) * 1000
		return rounded
    }

    render() {
    	return (
    		<div className="other-form">
				<div className="avatar-img">
					<Img src={this.state.person.url} alt="avatar" defaultValue />
				</div>
    			<Form onSubmit={this.handleSubmit}>				
    				<TextInput type="text" name="name" label="Your email or name" value={this.state.person.name} placeholder="Your name or email" required={true} onChange={this.handleChange}/>
					<TextInput type="text" name="mdRate" disabled={true} label="MD Rate" readOnly disabled="true" value={this.state.person.mdRate} />
					<div className="register-form-button">
						<Button type="submit" name="button" class="green big" label="Register" />
					</div>
    			</Form>
    		</div>
    	)     
    }
}