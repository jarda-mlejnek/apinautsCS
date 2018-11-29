import React, { Component, lazy, Suspense } from 'react'
import PageSection from '../components/shared/PageSection'
import Spinner from '../components/shared/Spinner'
import { SomeService } from '../services/SomeService'

const BranchDetail = lazy(() => import('../components/home/BranchDetail'))

export default class HomeContainer extends Component {

    state = {
        branch: {},
    }

    componentDidMount() {

        const branchId = 40
        SomeService.getBranch(branchId)
            .then((response) => {
                this.setState({
                    branch: response
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="page-container">
                <PageSection>
                    aa
                </PageSection>
                <PageSection background="blue-lighter">
                    <Suspense fallback={<Spinner />}>
                        <BranchDetail branch={this.state.branch} />
                    </Suspense>
                </PageSection>
                <PageSection background="white">
                    ccc
                </PageSection>
                <PageSection background="blue-darker">
                    dd
                </PageSection>
            </div>
        )
        
    }
}
