import React from "react";

function CarouselCard(props) {
    return (
        <div
            className={`carousel__slide${props.isActive ? " active" : ""}`}
            data-label={props.dataLabel}
            onClick={props.onClick}
        >
            <div className="card-content">
                <div className="card-image" style={{ backgroundImage: `url(${props.img})` }}></div>
                <div className="card-txt">
                    <p className="card-title">{props.title}</p>
                    <p className="card-price">
                        From <span>${props.price}</span>/mo
                    </p>
                </div>
            </div>
            <div className="arr-btn">
                <span className="material-icons-outlined">arrow_outward</span>
            </div>
        </div>
    );
}

export default CarouselCard;