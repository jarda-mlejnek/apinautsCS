import React, {Component} from 'react'
import PageSection from '../components/shared/PageSection'
import {CONFIG} from "../config";
import {Link} from "react-router-dom";
import Button from "../components/shared/forms/Button";
import {QRCodeService} from '../services/QRCodeService'
import * as queryString from "query-string";
import PersonList from "../components/other/PersonList";

export default class MeetingContainer extends Component {

    state = {
        people: [],
    }

    constructor(props) {
        super(props)
        this.state.uuid = this.getUuid()
        this.state.qrUrl = QRCodeService.getLoginPageQRCode(this.state.uuid)
        this.state.fireBaseSchema = CONFIG.FIREBASE_SCHEMAS.ITEMS + '-' + this.state.uuid
    }

    getUuid() {
        const queryParams = queryString.parse(this.props.location.search)

        if (queryParams.id) {
            console.log('obtained id: ', queryParams.id)
            return queryParams.id
        } else {
            let uuid = QRCodeService.createUuid();
            console.log('generated uuid: ', uuid)
            return uuid
        }
    }


    componentDidMount() {
        const itemsRef = window.firebase.database().ref(this.state.fireBaseSchema)

        console.log('itemsRef: ' + itemsRef)

        let result = []
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val()
            result = []

            for (let item in items) {
                result.push({
                    id: item,
                    name: items[item].name,
                    mdRate: items[item].mdRate
                })
            }
            this.setState({people: result})
        })
    }

    render() {
        return (
            <div className="page-container">
                <PageSection background={'blue'}>
                    <div className="meeting-grid">
                        <div className="header">
                            <div className="qr-header">
                                <h5>Join us</h5>
                            </div>
                        </div>
                        <div className="qr-code-container">
                            <div className="qr-image">
                                <img src={this.state.qrUrl} className="qr-code" />
                            </div>
                            <div className="register-button-container">
                                <Link to="/app/summary">
                                    <Button type="submit" name="button" class="green big" label="Start" />
                                </Link>
                            </div>
                        </div>
                        <PersonList items={this.state.people} />
                    </div>
                </PageSection>
            </div>
        )
    }
}