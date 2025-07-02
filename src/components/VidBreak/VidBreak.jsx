import React, { useState, useEffect, useRef } from "react";
import slides from "../../data/videoSlides.json";
import "./vidBreak.css";
import VideoSlide from "./VideoSlide/VideoSlide";
import CarouselControls from "../CarouselMarkers/CarouselMarkers";

function VidBreak() {
    const [activeIndex, setActiveIndex] = useState(0);
    const timerRef = useRef(null);
    const sliderRef = useRef(null);
    const slideRefs = useRef([]);

    // autoplay
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearTimeout(timerRef.current);
    }, [activeIndex]);

    //ruchno
    // useEffect(() => {
    //     if (slideRefs.current[activeIndex]) {
    //         slideRefs.current[activeIndex].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    //     }
    // }, [activeIndex]);

    useEffect(() => {
        const container = sliderRef.current;
        const slide = slideRefs.current[activeIndex];
        if (container && slide) {
            // Calculate the left position to center the slide
            const containerRect = container.getBoundingClientRect();
            const slideRect = slide.getBoundingClientRect();
            const scrollLeft =
                slide.offsetLeft
                - container.offsetLeft
                - (containerRect.width / 2 - slideRect.width / 2);

            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
    }, [activeIndex]);

    const goTo = (idx) => setActiveIndex(idx);
    const prev = () => setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const next = () => setActiveIndex((prev) => (prev + 1) % slides.length);

    return (
        <div className="video-slider-container">

            <div className="video-slider" ref={sliderRef}>
                {slides.map((slide, idx) => (
                    <div
                        ref={el => slideRefs.current[idx] = el}
                        key={idx}
                        className={`video-slide${idx === activeIndex ? " active" : ""}`}
                    >
                        <VideoSlide slide={slide} active={idx === activeIndex} />
                    </div>
                ))}
            </div>

            <CarouselControls
                slides={slides}
                activeIndex={activeIndex}
                onPrev={prev}
                onNext={next}
                onMarkerClick={goTo}
                className="marginBtm"
            />


        </div>
    );
}

export default VidBreak;