import React, { Component, lazy, Suspense } from 'react'
import { CONFIG } from '../config'
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
		itemsLoading: false,
    }

    componentDidMount() {
		const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)
    	let result = []
    	itemsRef.on('value', (snapshot) => {
			let items = snapshot.val()
			result = []
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
		const itemsRef = window.firebase.database().ref(CONFIG.FIREBASE_SCHEMAS.ITEMS)
    	itemsRef.push(obj)
    }

    render() {
		
    	return (
    		<div className="page-container">
    			<PageSection background={'blue'}>
					<div className="form-section-grid">
						<Suspense fallback={<Spinner />}>
							<SomeItems items={this.state.items} />
						</Suspense>
						<SomeForm onSubmitForm={this.handleSubmitForm} />
					</div>
    			</PageSection>
    		</div>
    	)     
    }
}