import React from "react";

function VideoSlide({ slide, active }) {
    return (
        <div className={`video-slide${active ? " active" : ""}`}>
            <video src={slide.src} playsInline muted autoPlay loop />
            <div className="video-overlay"></div>
            <div className="container">
                <div className="float-top"><span>Captured from: </span>{slide.caption}</div>
                <div>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoSlide;