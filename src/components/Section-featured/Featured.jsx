import React, { useState, useRef } from "react";
import "./featured.css";
import CarouselCard from "./CarouselCard/CarouselCard";
import featuredData from "../../data/featuredCardsData.js";
import CarouselControls from "../CarouselMarkers/CarouselMarkers";

function Featured() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeTab, setActiveTab] = useState("All");
    const carouselRef = useRef(null);
    const ignoreScroll = useRef(false);
    const ignoreTimeout = useRef(null);

    const scrollLeft = () => {
        if (activeIndex === 0 || activeIndex === 1 || activeIndex === 2) {
            // Go to last slide
            const cards = carouselRef.current.querySelectorAll('.carousel__slide');
            if (cards.length > 0) {
                cards[cards.length - 1].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        } else {
            // Go to previous slide
            const cards = carouselRef.current.querySelectorAll('.carousel__slide');
            if (cards[activeIndex - 1]) {
                cards[activeIndex - 1].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        }
    };

    const scrollRight = () => {
        const cards = carouselRef.current.querySelectorAll('.carousel__slide');
        if (activeIndex === cards.length - 1 || activeIndex === cards.length - 2 || activeIndex === cards.length - 3) {
            // Go to first slide
            if (cards[0]) {
                cards[0].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        } else {
            // Go to next slide
            if (cards[activeIndex + 1]) {
                cards[activeIndex + 1].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        }
    };

    const handleTabClick = (label, e) => {
        e.preventDefault();
        setActiveTab(label);
        const slide = document.querySelector(`.carousel__slide[data-label="${label}"]`);
        if (slide) {
            slide.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    };

    // find center
    const handleScroll = () => {
        if (ignoreScroll.current) return;
        const carousel = carouselRef.current;
        const cards = carousel.querySelectorAll('.carousel__slide');
        const carouselRect = carousel.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;

        let minDist = Infinity;
        let closestIdx = 0;

        cards.forEach((card, idx) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const dist = Math.abs(carouselCenter - cardCenter);

            if (dist < minDist) {
                minDist = dist;
                closestIdx = idx;
            }
        });

        setActiveIndex(closestIdx);
    };

    const handleCardClick = idx => {
        setActiveIndex(idx);
        ignoreScroll.current = true;
        if (ignoreTimeout.current) clearTimeout(ignoreTimeout.current);
        ignoreTimeout.current = setTimeout(() => {
            ignoreScroll.current = false;
        }, 400); //.4s
    };

    return (
        <section className="featured" id="featured">
            <div className="container">
                <h2 className="featured-caption">
                    Discover <span> Top-Tier Properties</span> <br />in High-Demand Areas.
                </h2>
                <div className="featured-tabs">
                    {["Luxury", "Family", "Compact"].map(label => (
                        <a
                            key={label}
                            href="#"
                            className={`tab${activeTab === label ? " active" : ""}`}
                            onClick={e => handleTabClick(label, e)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>


            <div className="carousel-wrap">

                <div
                    className="carousel"
                    id="carousel"
                    ref={carouselRef}
                    onScroll={handleScroll}
                >
                    {featuredData.map((item, idx) => (
                        <CarouselCard
                            key={idx}
                            img={item.img}
                            dataLabel={item.category}
                            title={item.title}
                            price={item.price}
                            isActive={idx === activeIndex}
                            onClick={() => handleCardClick(idx)}
                        />
                    ))}
                </div>

                <CarouselControls
                    slides={featuredData}
                    activeIndex={activeIndex}
                    onPrev={scrollLeft}
                    onNext={scrollRight}
                    onMarkerClick={idx => {
                        const cards = carouselRef.current.querySelectorAll('.carousel__slide');
                        if (cards[idx]) {
                            cards[idx].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                        }
                    }}
                />

            </div>

        </section>
    );
}

export default Featured;