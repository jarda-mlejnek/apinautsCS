import React, { Component, lazy, Suspense } from 'react'
import PageSection from '../components/shared/PageSection'
import SomeForm from '../components/other/SomeForm'
import Spinner from '../components/shared/Spinner'
const SomeItems = lazy(() => import('../components/other/SomeItems'))

export default class OtherContainer extends Component {

    constructor(props) {
        super(props)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }

    state = {
        items: [],
        itemsLoading: false
    }

    componentDidMount() {
        const itemsRef = window.firebase.database().ref('items')
            let result = []
            itemsRef.on('value', (snapshot) => {
                let items = snapshot.val()
                for (let item in items) {
                    result.push({
                        id: item,
                        title: items[item].customer,
                        user: items[item].email
                    })
                }
                this.setState({items: result})
            })
    }

    handleSubmitForm(obj) {
        console.log(obj)
        const itemsRef = window.firebase.database().ref('items')
        itemsRef.push(obj)
    }

    render() {
        return (
            <div className="page-container">
                <PageSection background={'white'}>
                <Suspense fallback={<Spinner />}>
                    <SomeItems items={this.state.items} />
                </Suspense>
                </PageSection>
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
