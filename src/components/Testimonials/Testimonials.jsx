import React, { useRef, useState, useEffect } from "react";
import "./testimonials.css"
import './EmblaCarousel/embla.css'
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import testimonials from "../../data/testimonialsCarousel.json";
import AnimatedNumber from "./AnimatedNumber/AnimatedNumber";

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Testimonials() {

    const sectionRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = sectionRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const milestones = [
        {
            value: "+500",
            label: "Properties Sold",
            desc: "Helping families find their perfect home across the country."
        },
        {
            value: <><span>98</span>%</>,
            label: "Client Satisfaction",
            desc: "A near-perfect rating from hundreds of happy clients."
        },
        {
            value: <><span>+20</span></>,
            label: "Years of Experience",
            desc: "Trusted by generations to deliver real estate excellence."
        },
        {
            value: <><span>+30</span></>,
            label: "Active Listings Weekly",
            desc: "New properties added every week to match your unique needs."
        }
    ];

    const [visible, setVisible] = useState([false, false, false, false]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = Number(entry.target.dataset.index);
                    setVisible((v) => {
                        const copy = [...v];
                        copy[idx] = entry.isIntersecting;
                        return copy;
                    });
                });
            },
            { threshold: 0.3 }
        );
        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="testimonials-section" onMouseMove={handleMouseMove}>

                <div className="grid-bg"></div>
                <div className="gradient-noise"></div>

                <div className="over-bg">


                    <h2 className="featured-caption">What <span>Our Clients</span> Say:</h2>
                    <p>
                        Don't just take our word for it: see what our clients have to say about their journey to finding the perfect home with RoofLine.
                    </p>

                    <div className="h0-test-top">
                        <div className="image-quotes"></div>
                    </div>


                    <EmblaCarousel options={OPTIONS} testimonials={testimonials} />


                    <div className="h0-testimonials">
                        <span class="material-symbols-outlined">
                            swipe
                        </span>
                    </div>

                    <div className="h0-test-top h0-reverse">
                        <div className="image-quotes"></div>
                    </div>

                    <h2 className="featured-caption pt-malce">
                        Built on <span>Trust,</span> <br />Proven by <span>Numbers</span>
                    </h2>

                    <div className="container">


                        <div className="milestones-grid">
                            {milestones.map((m, i) => (
                                <div
                                    className={`milestone-card${visible[i] ? " visible" : ""}`}
                                    key={i}
                                    ref={el => (cardRefs.current[i] = el)}
                                    data-index={i}
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                >
                                    <div className="title">
                                        <h3>

                                            {typeof m.value === "string" ? (
                                                <AnimatedNumber value={m.value} visible={visible[i]} />
                                            ) : (
                                                <>
                                                    {React.Children.map(m.value.props.children, (child) =>
                                                        typeof child === "string"
                                                            ? child
                                                            : <AnimatedNumber value={child.props.children} visible={visible[i]} />
                                                    )}
                                                </>
                                            )}
                                        </h3>
                                        <div>{m.label}</div>
                                    </div>
                                    <div className="btm-txt">
                                        {m.desc}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>


                </div>

                <div
                    className="how-to-limiter"
                    ref={sectionRef}
                    onMouseMove={handleMouseMove}
                >
                    <div
                        className="bg-folow-mouse"
                        style={{
                            left: mouse.x - 300,
                            top: mouse.y - 300,
                            pointerEvents: "none"
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
};

export default Testimonials;