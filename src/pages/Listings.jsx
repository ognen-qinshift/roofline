import React from "react"
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ListingsHero from "../components/Listings-hero/ListingsHero.jsx";
import ListingsContent from "../components/Listings-hero/ListingsContent.jsx";

function Listings() {
    return (
        <>
            <Navbar />
            <ListingsHero />
            <ListingsContent />
            <Footer />
        </>
    )
};

export default Listings;