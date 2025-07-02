import React from "react"
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AboutUsHero from "../components/AboutUs/AboutUsHero.jsx";
import QnA from "../components/AboutUs/QnA.jsx";

function About() {
    return (
        <>
            <Navbar />
            <AboutUsHero />
            <QnA />
            <Footer />
        </>
    )
};

export default About;