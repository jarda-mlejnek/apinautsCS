import React, {Component, lazy, Suspense} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GoogleMapReact from 'google-map-react'
import {CONFIG} from '../config'
import PageSection from '../components/shared/PageSection'
import Spinner from '../components/shared/Spinner'
import {SomeService} from '../services/SomeService'
import {setBranchLoadStatus} from '../actions/appActions'
import {OpenDataService} from "../services/OpenDataService";
import Papa from 'papaparse';

const BranchDetail = lazy(() => import('../components/home/BranchDetail'))

// https://stackoverflow.com/questions/43937887/dynamically-adding-markers-on-react-google-map
const AnyReactComponent = ({  img_src }) => <div><img src={img_src} className="YOUR-CLASS-NAME" style={{}} /></div>;

class HomeContainer extends Component {

    state = {
        branch: {},
        position: {
            lat: 50.04036,
            lng: 14.470484
        },
        markerPosition: {},
        zoom: CONFIG.MAP_SETTINGS.ZOOM,
        markers: []
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

        OpenDataService.getOpenData()
            .then((response) => {
                console.log(response)
                let parsed = Papa.parse(response);
                let row = parsed.data.find(x => x[0].includes('Spořilov'));
                console.log('lat: ' + row[2] + ' long: ' + row[3])

                let markerPosition = {
                    lat: Number(row[2]),
                    lng: Number(row[3])
                }

                this.setState({
                    // https://stackoverflow.com/questions/31197596/google-map-api-marker-icon-url
                    markers: [{lat: markerPosition.lat, lng: markerPosition.lng,
                        img_src: 'http://maps.google.com/mapfiles/ms/micons/partly_cloudy.png'}],
                });

                console.log(this.state.markers[0])
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
                    <Suspense fallback={<Spinner/>}>
                        <BranchDetail branch={this.state.branch}/>
                    </Suspense>
                </PageSection>
                <PageSection background="white">
                    <div className="map-container">
                        <GoogleMapReact
                            bootstrapURLKeys={{key: CONFIG.GOOGLE_API_KEY}}
                            defaultCenter={this.state.position}
                            defaultZoom={this.state.zoom}
                            draggable={CONFIG.MAP_SETTINGS.DRAGGABLE}
                            resetBoundsOnResize={true}
                        >
                            {this.state.markers.map((marker, i) =>{
                                return(
                                    <AnyReactComponent
                                        lat={marker.lat}
                                        lng={marker.lng}
                                        key={i}
                                        img_src={marker.img_src}
                                    />
                                )
                            })}
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
