import React, { Component } from 'react'
import PageSection from '../components/shared/PageSection'
import SomeForm from '../components/other/SomeForm'
import { SomeService } from '../services/SomeService'

export default class OtherContainer extends Component {

    constructor(props) {
        super(props)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }

    handleSubmitForm(obj) {
        console.log(obj)
        SomeService.sendMessage(obj) 
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        return (
            <div className="page-container">
                <PageSection >
                    <SomeForm onSubmitForm={this.handleSubmitForm} />
                </PageSection>
            </div>
        )     
    }
}
