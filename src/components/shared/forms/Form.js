import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    static propTypes = {
        loading: PropTypes.bool,
        onSubmit: PropTypes.func
    }

    state = {
       // isValid: false
    }

    validateForm() {

        let isValid = true
        
        const EMPTY_MESSAGE = ''
        const ERROR_MESSAGE = 'You have failed!'
        const ERROR_DOM_SELECTOR = '.error-message'

        for(let elem = 0; elem < this.formEl.length; elem++) {

            let currentElement = this.formEl[elem]

            if(currentElement.type === 'submit' || currentElement.type === 'button') {
                continue
            }

            // reset custom error (pokud byl pri predchozim ulozeni nastaven)
            currentElement.setCustomValidity(EMPTY_MESSAGE)

            /*
            console.log('current element:'+ currentElement.type + ' ' + currentElement.required + ' value:' + currentElement.value)
            console.log(currentElement.validity)
            */

            if(!currentElement.checkValidity()) {
                currentElement.setCustomValidity(ERROR_MESSAGE)
                currentElement.parentNode.querySelector(ERROR_DOM_SELECTOR).innerText = currentElement.validationMessage
                currentElement.className = 'field-invalid'
                isValid = false
            } else {
                currentElement.parentNode.querySelector(ERROR_DOM_SELECTOR).innerText = EMPTY_MESSAGE
                currentElement.className = 'field-valid'
            }
        }

        return isValid
    }

    handleSubmit(e) {
        e.preventDefault()

        if(this.validateForm()) {
            this.props.onSubmit()
        }
    }

    render() {
        return (
            <form autoComplete="off" ref={form => this.formEl = form} onSubmit={this.handleSubmit} noValidate>
                {this.props.children}
            </form>
        )
    }
}