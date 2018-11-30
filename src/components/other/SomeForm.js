import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, TextInput, Textarea, Combobox } from '../shared/forms/'

export default class SomeForm extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    static propTypes = {
        loading: PropTypes.bool,
        onSubmit: PropTypes.func
    }

    state = {
        testObject: {
            customer: '',
            email: '',
            other: '',
            note: ''
        }
    }

    handleChange(e) {

        let obj = this.state.testObject
        obj[e.target.name] = e.target.value

        this.setState({testObject: obj})
    }

    handleSubmit() {
        this.props.onSubmitForm(this.state.testObject)
    }

    render() {

        const comboOptions = [
            {
                name: 'ABC',
                value: 'A', 
            },
            {
                name: 'CDE',
                value: 'B', 
            }
        ]

        return (
            <div className="other-form">
                <Form onSubmit={this.handleSubmit}>
                    <TextInput type="text" name="customer" label="Name" value={this.state.testObject.customer} placeholder="Your name" required={true} onChange={this.handleChange} />
                    <TextInput type="email" name="email" label="Email" value={this.state.testObject.email} placeholder="Your email" required={true} onChange={this.handleChange} />
                    <TextInput type="text" name="other" label="Other info" value={this.state.testObject.other} placeholder="Hmmm" onChange={this.handleChange} />
                    <Combobox name="type" label="Combobox with filter" options={comboOptions} placeholder="Combo options" onChange={this.handleChange} />
                    <Textarea name="note" label="Note" rows={10} value={this.state.testObject.note} required={true} placeholder="some note" onChange={this.handleChange} />
                    <Button type="submit"name="button" class="green" label="SUBMIT" />
                </Form>
            </div>
        )     
    }
}