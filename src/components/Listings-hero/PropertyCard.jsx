import React, { useRef, useEffect, useState } from "react";
import "./propertyCard.css";
import { gsap } from "gsap";

function PropertyCard(props) {
    const pathRef = useRef();
    const cardRef = useRef();
    const [animated, setAnimated] = useState(false);

    const originalPath =
        "M2046,2206.5c0,10.8-8.7,19.5-19.5,19.5h-1.2c-14.6,0-26.5,11.9-26.5,26.5h0c0,10.8-8.7,19.5-19.5,19.5H0V0h2046v2206.5Z";
    const morphedPath =
        "M2046,2206.5c0,10.8-8.7,19.5-19.5,19.5h-97.5c-14.6,0-26.5,11.9-26.5,26.5h0c0,10.8-8.7,19.5-19.5,19.5H0V0h2046v2206.5Z";

    const handleHover = () => {
        gsap.to(pathRef.current, {
            duration: 0.3,
            attr: { d: morphedPath },
            ease: "power2.out",
        });
    };

    const handleLeave = () => {
        gsap.to(pathRef.current, {
            duration: 0.3,
            attr: { d: originalPath },
            ease: "power2.inOut",
        });
    };

    function formatPrice(price) {
        return price.toLocaleString("de-DE");
    }

    //intersection observer
    useEffect(() => {
        const node = cardRef.current;
        if (!node) return;

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);


    return (
        <div
            ref={cardRef}
            className={`property-card-wrap${animated ? " attach-animation" : ""}`}
            data-label={props.dataLabel}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={props.style}
        >
            <div className="card-bg-svg">
                <svg
                    viewBox="0 0 2046 2272"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path ref={pathRef} fill="#D9D9D9" stroke="white" d={originalPath} />
                </svg>
            </div>

            <div className="card-content properties-content">
                {props.tag && (
                    <div
                        className="chip abs-chip"
                        style={props.tag === "For Sale" ? { filter: "hue-rotate(-16deg)" } : { filter: "hue-rotate(16deg)" }}
                    >
                        {props.tag}
                    </div>
                )}

                <div className="card-image-wrapper">
                    <div
                        className="card-image"
                        style={{ backgroundImage: `url(${props.img})` }}
                    ></div>
                </div>

                <div className="card-txt">
                    <div className="title-wrap">
                        <p className="card-title">{props.title}</p>
                        {props.area && (
                            <div className="meters">
                                <span>{props.area}</span>m<sup>2</sup>
                            </div>
                        )}
                    </div>

                    {props.location && (
                        <div className="location link">
                            <span className="material-symbols-outlined">
                                location_on
                            </span>
                            {props.location}
                        </div>
                    )}

                    <div className="chips">
                        {props.rooms && (
                            <div className="chip link">
                                <span className="material-symbols-outlined">
                                    living
                                </span>
                                <span>Rooms: </span>
                                {props.rooms}
                            </div>
                        )}
                        {props.beds && (
                            <div className="chip link" style={{ filter: "hue-rotate(60deg)" }}>
                                <span className="material-symbols-outlined">
                                    bedroom_parent
                                </span>
                                <span>Beds: </span>
                                {props.beds}
                            </div>
                        )}
                        {props.baths && (
                            <div className="chip link" style={{ filter: "hue-rotate(200deg)" }}>
                                <span className="material-symbols-outlined">
                                    bathroom
                                </span>
                                <span>Baths: </span>
                                {props.baths}
                            </div>
                        )}
                    </div>
                    {props.price && (
                        <p className="card-price">
                            From <span>
                                €{formatPrice(props.price)}
                            </span>
                            {props.tag === "For Rent" ? "/mo" : ""}
                        </p>
                    )}
                </div>
            </div>
            <div className="arr-btn">
                <span className="btn-hide">Book&nbsp;Now</span>
                <span className="material-icons-outlined">arrow_outward</span>
            </div>
        </div>
    );
}

export default PropertyCard;