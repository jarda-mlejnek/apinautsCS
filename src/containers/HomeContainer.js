import React, { Component, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GoogleMapReact  from 'google-map-react'
import { CONFIG } from '../config'
import PageSection from '../components/shared/PageSection'
import Spinner from '../components/shared/Spinner'
import { SomeService } from '../services/SomeService'
import { setBranchLoadStatus } from '../actions/appActions'
import Marker from '../components/home/Marker'

const BranchDetail = lazy(() => import('../components/home/BranchDetail'))

class HomeContainer extends Component {

    state = {
		branch: {},
		position: {
            lat: 50.046762, 
            lng: 14.487139
        },
        zoom: CONFIG.MAP_SETTINGS.ZOOM
    }

    static propTypes = {
    	setBranchLoadStatus: PropTypes.func,
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
					<div className="map-container">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: CONFIG.GOOGLE_API_KEY }}
                            defaultCenter={this.state.position}
                            defaultZoom={this.state.zoom}
                            draggable={CONFIG.MAP_SETTINGS.DRAGGABLE}
                            resetBoundsOnResize={true}
                        >
                            <Marker lat={this.state.position.lat} lng={this.state.position.lng} />
                        </GoogleMapReact>
                    </div>
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
