import React from "react";
import "./howTo.css";
import StepsLoop from "./StepsLoop/StepsLoop";
import Noise from './Noise/Noise';

function HowTo() {

    return (
        <>
            <div className="how-to-section">

                <div className="bg-light"></div>


                {/* <div style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'hidden', mixBlendMode: "luminosity" }}>
                    <Noise
                        patternSize={250}
                        patternScaleX={20}
                        patternScaleY={20}
                        patternRefreshInterval={0}
                        patternAlpha={15}
                    />
                </div> */}

                <div className="gradient-noise"></div>

                <div className="inf-loop-caption">
                    <div className="inf-loop-container">
                        <h2>Ready to Move? Here’s How It Works.</h2>
                        <h2>Ready to Move? Here’s How It Works.</h2>
                        <h2>Ready to Move? Here’s How It Works.</h2>
                        <h2>Ready to Move? Here’s How It Works.</h2>
                    </div>
                </div>

                <div className="inf-loop-txt-outer">
                    <div className="inf-loop-txt">
                        <StepsLoop />
                        <StepsLoop />
                        <StepsLoop />
                        <StepsLoop />
                    </div>
                </div>

                <div className="container">
                    <div className="how-to-grid">
                        <div className="left-2fr">
                            <div className="absolute-top larger">4</div>
                            <div>
                                <h3>Four Simple Steps to Your Next Home</h3>
                                <p>
                                    We’ve streamlined the rental and booking experience, so you can focus on what really matters — finding a place that feels like home.
                                </p>
                            </div>
                        </div>
                        <div className="right-3fr">
                            <div className="quarter">
                                <div className="absolute-top">01.</div>
                                <div>
                                    <h3>Discover</h3>
                                    <p>Browse handpicked listings based on your preferences, location, and budget.</p>
                                </div>
                            </div>
                            <div className="quarter">
                                <div className="absolute-top">02.</div>
                                <div>
                                    <h3>Schedule</h3>
                                    <p>Easily book a virtual or in-person tour with one of our top-rated agents.</p>
                                </div>
                            </div>
                            <div className="quarter">
                                <div className="absolute-top">03.</div>
                                <div>
                                    <h3>Apply</h3>
                                    <p>Submit your application documents securely through our platform.</p>
                                </div>
                            </div>
                            <div className="quarter">
                                <div className="absolute-top">04.</div>
                                <div>
                                    <h3>Move In</h3>
                                    <p>Sign the agreement, receive your keys, and step into your new space.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowTo;