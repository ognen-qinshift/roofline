import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import Logo_bg from "../../images/icons/logo-icon.svg?react";
import NoiseSVG from "../utility-Components/NoiseSvg/NoiseSvg.jsx";
import RoundedCorner from "../utility-Components/ReverseRoundedCorner.jsx";

function Hero() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/listings?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/listings");
    }
  };



  return (
    <section className="hero">


      <div className="logo-svg-wrap">
        <Logo_bg />
      </div>

      <div className="hero-content">
        <div className="bg-glow"></div>
        <div className="bg-glow right smaller"></div>
        <div className="bg-glow right"></div>
        <div className="bg-glow smaller"></div>
        <div className="hero-bg-abs"></div>
        {/* <div className="noise-filter-svg ">
          <NoiseSVG freq="20" />
        </div> */}
        <div className="gradient-noise"></div>

        <div className="hero-letters">
          REALESTATE
        </div>

        <div className="hero-house"></div>

        <div className="hero-content-inner container">

          <div className="hero-left">

            <div className="hero-left-capt-wrap">
              <p className="hero-subtitle">Welcome to <span>RoofLine</span></p>
              <h1 className="hero-title">
                Find the Space <br></br><span > You’ll Call Home.</span>
              </h1>

              <p className="hero-description">
                Explore top-rated properties for sale and rent, personalized to your lifestyle.<br></br>
                Every listing is more than a property: it’s your next chapter.
              </p>

            </div>

            <div className="hero-actions">

              <div className="toggle-switch">
                <a href="/listings" className="link btn-l btn-orange">Buy</a>
                <a href="/listings" className="link btn-l btn-wh">Rent</a>
              </div>

              <form onSubmit={handleSearch}>
                <div className="search-bar btn-icon ">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search location or property..."
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
                  <button type="submit" className="search_ico">
                    <span className="material-icons-outlined">search</span>
                  </button>
                </div>
              </form>

            </div>
          </div>


          <div className="hero-right">
          </div>






          <div className="scrl-wrapper">
            <RoundedCorner className="roundedCorner" />
            <div className="cutout-bot">
              <a href="/" className="circle-hero">
                <span className="material-icons-outlined">keyboard_arrow_down</span>
              </a>
            </div>
            <RoundedCorner className=" roundedCorner flipped-corner" />
          </div>

        </div>
      </div>

    </section >
  );
}

export default Hero;
