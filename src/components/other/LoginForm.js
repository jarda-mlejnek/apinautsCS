import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Form, TextInput} from '../shared/forms/'
import {CONFIG} from "../../config";

export default class LoginForm extends Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

    static propTypes = {
    	onSubmitForm: PropTypes.func
    }

    state = {
    	person: {
    		name: '',
    		rate: ''
    	}
    }

    handleChange(e) {
    	let person = this.state.person
        person[e.target.name] = e.target.value
    	this.setState({person: person})
    }

    handleSubmit(obj) {
    	this.props.onSubmitForm(this.state.person)
		let generatedRate = this.generateRate();
    	console.log('Generated rate: ' + generatedRate + ' for user: ' + this.state.person.name)

        const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)
        itemsRef.push(this.state.person)
		console.log('added to firebase object: ' + this.state.person.name)
    }

    generateRate() {
		let min = 10000
		let max = 20000
        let number = Math.floor(Math.random() * max) + min
        let rounded = Math.round(number / 1000) * 1000
		return rounded
    }

    render() {
    	return (
    		<div className="other-form">
    			<Form onSubmit={this.handleSubmit}>
    				<TextInput type="text" name="name" label="Your name" value={this.state.person.name} placeholder="Your name" required={true} onChange={this.handleChange}/>
    				<Button type="submit" name="button" class="green" label="SUBMIT" />
    			</Form>
    		</div>
    	)     
    }
}