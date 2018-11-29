import React from 'react';

export default function Spinner(props) {

    let cssClass = 'loader-container';
    if (props.class) {
        cssClass = cssClass+' '+ props.class;
    }

    return(
        <div className={cssClass}>
            <div className="loader"></div>
        </div>
    )
}