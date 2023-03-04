import React from "react";


export default function Card(props) {
    let badgeText = "";
    if (props.openSpots == 0) {
        badgeText = "SOLD OUT";
    } else if (props.location == "Online") {
        badgeText = "ONLINE";
    }


    return (
        <div className="card">
            <img className="card-img" src={ `/img/${props.coverImg}` } />
            { badgeText.length > 0 && <button className="sold-out">{ badgeText }</button> }
            <div className="star">
                <i className="fa fa-star"></i> { props.stats.rating }
            </div>
            <div className="card-text">
                <p className="title">{ props.title }</p>
                <p className="price"><span className="amount">From ${ props.price }</span> / person</p>
            </div>
        </div>
    )
}
