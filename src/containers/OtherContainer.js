import React, { Component, lazy, Suspense } from 'react'
import PageSection from '../components/shared/PageSection'
import SomeForm from '../components/other/SomeForm'
import Spinner from '../components/shared/Spinner'
import { FirebaseService } from '../services/FirebaseService'

const SomeItems = lazy(() => import('../components/other/SomeItems'))

export default class OtherContainer extends Component {

    constructor(props) {
        super(props)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }

    state = {
        items: []
    }

    componentDidMount() {
        FirebaseService.getItems()
            .then((response) => {
                console.log(response)
                this.setState({items: response})
            })
    }

    handleSubmitForm(obj) {
        console.log(obj)
        const itemsRef = window.firebase.database().ref('items')
        itemsRef.push(obj)
        /*
        SomeService.sendMessage(obj) 
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

        */
    }

    render() {

        return (
            <div className="page-container">
                <PageSection>

                    
                    <SomeForm onSubmitForm={this.handleSubmitForm} />
                </PageSection>
            </div>
        )     
    }
}

/*

<Suspense fallback={<Spinner />}>
                        <SomeItems items={this.state.items} />
                    </Suspense>
                    */
