import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import PageSection from '../components/shared/PageSection'
import Spinner from '../components/shared/Spinner'
import { SomeService } from '../services/SomeService'
import { setBranchLoadStatus } from '../actions/appActions'

const BranchDetail = lazy(() => import('../components/home/BranchDetail'))

class HomeContainer extends Component {

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
                
                this.props.setBranchLoadStatus(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="page-container">
                <PageSection>
                    some content
                </PageSection>
                <PageSection background="blue-lighter">
                    <Suspense fallback={<Spinner />}>
                        <BranchDetail branch={this.state.branch} />
                    </Suspense>
                </PageSection>
                <PageSection background="white">
                    <Spinner />
                </PageSection>
                <PageSection background="blue-darker">
                    some content
                </PageSection>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
      branchLoaded: state.AppReducer.branchDetailLoaded
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        setBranchLoadStatus: isLoading => dispatch(setBranchLoadStatus(isLoading)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
