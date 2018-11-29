import React from 'react'
import PageSection from '../components/shared/PageSection'

export default function ErrorPageContainer(props) {
    return (
        <div className="page-container">
            <PageSection >
                <div className="error-content">
                    <div className="error-header">
                        <h2>404 There's something terribly wrong...</h2>
                    </div>
                    <div className="error-image"></div>
                </div> 
            </PageSection> 
        </div>
    )
}
