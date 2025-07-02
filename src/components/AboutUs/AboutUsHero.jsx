import React from "react"
import "./aboutUsHero.css"
import sell from "../../images/sell-min.png"
import search from "../../images/search-min.png"
import management from "../../images/management-min.png"

function AboutUsHero() {
    return (
        <>
            <div className="about-us-hero">


                {/* hero top */}
                <div className="hero-top">

                    <div className="grid-bg"></div>
                    <div className="gradient-noise"></div>

                    <div className="container">

                        <div className="hero-top-text">
                            <h1 className="hero-title" ><span>Who We Are</span></h1>
                            <p>At RoofLine, we don’t just connect people with properties — we help them find their future. With deep roots in the community and a modern approach to real estate, our mission is to make buying, selling, and renting easier, faster, and more transparent.</p>
                        </div>
                        <div></div>
                    </div>
                </div>

                {/* hero bot */}
                <div className="hero-bottom">
                    <h2 className="featured-caption">What We Do <span>Best</span></h2>

                    <div className="h-cards-container container">
                        <div className="h-card-wrapper card-1">
                            <div className="card-img">
                                <div className="card-ico" style={{ backgroundImage: `url(${sell})` }}>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Buy & Sell with Confidence</h4>
                                <p>From first homes to forever homes, we guide you through every step of the process — with expert advice, fair pricing, and full transparency.</p>
                            </div>
                        </div>
                        <div className="h-card-wrapper card-2">
                            <div className="card-img">
                                <div className="card-ico" style={{ backgroundImage: `url(${search})` }}>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Tailored Property Search</h4>
                                <p>Whether you're looking for a cozy apartment or a luxury villa, we offer curated listings that match your lifestyle, needs, and budget.</p>
                            </div>
                        </div>
                        <div className="h-card-wrapper card-3">
                            <div className="card-img">
                                <div className="card-ico" style={{ backgroundImage: `url(${management})` }}>
                                </div>
                            </div>
                            <div className="content">
                                <h4>Property Management & Support</h4>
                                <p>We provide full-service property management and ongoing support for landlords and tenants, so your investment is always in good hands.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
};

export default AboutUsHero;