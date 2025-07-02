import React from "react"
import "./listingsHero.css"
import searchIco from "../../images/search-ico.png";

function ListingsHero() {
    return (
        <>
            <div className="listings-hero">

                <div className="hero-top">

                    <div className="grid-bg"></div>
                    <div className="gradient-noise"></div>

                    <div className="container">
                        <div className="hero-top-text">
                            <h1 className="hero-title" >
                                <span>Property&nbsp;Search</span>
                            </h1>
                        </div>
                        <div className="search-ico" style={{ backgroundImage: `url(${searchIco})` }}></div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default ListingsHero;
