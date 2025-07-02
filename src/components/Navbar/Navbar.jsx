import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../images/icons/logo-lg.svg?react";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: hash } });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`${styles.burger_modal} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen((open) => !open)}></div>

      <div className={styles.zero_h_container_sticky}>
        <header className="container">
          <a href="/" className={styles.logo_link}>
            <Logo className={styles.logo} />
          </a>


          {/* desktop */}
          <nav className={`${styles.desktopNav} ${styles.hideOnMobile}`}>
            <a href="/listings" className="underline link">Listings</a>
            <a href="/about-us" className="underline link">About Us</a>
            <a href="/#agents" className="underline link" onClick={e => handleNav(e, "agents")}>Agents</a>
            <a href="/#contact" className="underline link" onClick={e => handleNav(e, "contact")}>Contact</a>
          </nav>

          {/* mob */}
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
            <a href="/listings" className="underline link" onClick={() => setMenuOpen(false)}>Listings</a>
            <a href="/about-us" className="underline link" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="/#agents" className="underline link" onClick={e => handleNav(e, "agents")}>Agents</a>
            <a href="/#contact" className="underline link" onClick={e => handleNav(e, "contact")}>Contact</a>
            <a href="/listings" className="link btn-icon btn-arrow">
              <div className="btn btn-black">Book Now</div>
              <span className="icon-circle btn btn-black">
                <span className="material-icons-outlined">arrow_outward</span>
              </span>
            </a>
          </nav>

          <a href="/listings" className={`link btn-icon btn-arrow ${styles.hideOnMobile}`}>
            <div className="btn btn-black">Book Now</div>
            <span className="icon-circle btn btn-black">
              <span className="material-icons-outlined">arrow_outward</span>
            </span>
          </a>

          {/* hamburger */}
          <button
            className={styles.hamburger}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar_1 : ""}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar_2 : ""}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar_3 : ""}`}></span>
          </button>


        </header>
      </div>
    </>
  );
}

export default Navbar;