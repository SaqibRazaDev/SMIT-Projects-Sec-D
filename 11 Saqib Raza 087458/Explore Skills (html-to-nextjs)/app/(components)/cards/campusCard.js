import React from 'react'

export default function CampusCard(props) {
    return (
        <div className="campus-col">
            <img src={props.campusImg} alt="" />
            <div className="layer">
                <h3>{props.campus}</h3>
            </div>
        </div>
    )
}
