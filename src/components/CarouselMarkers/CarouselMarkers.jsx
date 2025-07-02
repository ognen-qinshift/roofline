import React from "react";
import styles from "./CarouselMarkers.module.css";

function CarouselControls({
    slides,
    activeIndex,
    onPrev,
    onNext,
    onMarkerClick,
    leftIcon = <span className="material-icons-outlined">chevron_left</span>,
    rightIcon = <span className="material-icons-outlined">chevron_right</span>,
    className = ""
}) {
    return (
        <div className={`${styles.carouselControls} ${className}`}>
            <button className={styles.carouselArrow} onClick={onPrev} type="button">
                {leftIcon}
            </button>
            <div className={styles.carouselMarkers}>
                {slides.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${styles.carouselMarker} ${idx === activeIndex ? styles.active : ""}`}
                        onClick={() => onMarkerClick(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            <button className={styles.carouselArrow} onClick={onNext} type="button">
                {rightIcon}
            </button>
        </div>
    );
}

export default CarouselControls;