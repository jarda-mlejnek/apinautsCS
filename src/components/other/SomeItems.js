import React from 'react'

export default function SomeItems(props) {
    
    const items = props.items.map((item) => {
        return <div className="list-item">{item.title}</div>
    })

    return (
        <div className="items-list">
            {items}
        </div>
    )   
}