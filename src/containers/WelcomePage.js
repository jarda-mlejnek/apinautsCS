import React from 'react'
import { CONFIG } from '../config'
import Navigation from '../components/Navigation'
import PageSection from '../components/shared/PageSection'

export default function ErrorPageContainer(props) {
    return (

        <div>
            <Navigation links={CONFIG.NAVIGATION_LINKS.WELCOME} />
            <div className="page-container">
                <PageSection >
                    ddd
                </PageSection> 
            </div>         
        </div>
    )
}
