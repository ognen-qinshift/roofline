import React from "react"
import "./footer.css"
import Logo from "../../images/icons/logo-lg.svg?react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // <-- Add this import


function Footer() {
  return (
    <>


      <footer className="Footer">

        <div className="container">

          <section className="newsletter">

            <div>
              <h3>Never Miss a Listing</h3>
              <p>Subscribe to our newsletter for the latest listings, expert tips, and exclusive offers: straight to your inbox.</p>
            </div>


            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="subscribe-btn link btn btn-white">Subscribe</button>
            </form>

          </section>

          <hr />

          <section className="footer-content">
            <div className="footer-left">

              <div>
                <Link to="/" className="logo_link">
                  <Logo className="logo-footer" />
                </Link>
                <p>
                  At RoofLine, we bring you closer to your perfect home.
                  Whether you're buying, renting, or exploring the market, our team is here to guide you with expertise and care.
                </p>
              </div>

              <div className="social-icons">
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FaXTwitter className="icon" />
                <FaLinkedinIn className="icon" />
                <FaYoutube className="icon" />
              </div>

            </div>

            <div className="footer-links">
              <div>
                <h4>Explore</h4>

                <a href="#">Listings</a>
                <a href="#">Agents</a>
                <a href="#">Neighborhoods</a>
                <a href="#">Testimonials</a>

              </div>

              <div>
                <h4>Contact</h4>
                <a href="tel:+389 70 123 456" className="link" style={{ marginLeft: "-12px"}}>
                 <span className="material-symbols-outlined">
                    call
                  </span>
                  +389 70 123 456</a>
                <a href="mailto:hello@roofline.mk" className="link">
                  <span class="material-symbols-outlined">
                    mail
                  </span>
                  &nbsp;hello@roofline.mk</a>
              </div>

              <div>
                <h4>Office</h4>
                <p>
                  RoofLine HQ<br />
                  Bulevar Partizanski Odredi 123<br />
                  Skopje, North Macedonia
                </p>
              </div>

              <div>
                <h4>Company</h4>

                <a href="#">About</a>
                <a href="#">FAQs</a>
                <a href="#">Terms & Privacy</a>
                <a href="#">Careers</a>

              </div>
            </div>
          </section>

          <div className="footer-bottom">
            <p><span>© {new Date().getFullYear()} RoofLine.</span> All rights reserved.</p>
          </div>




        </div >


      </footer >

      <div style={{ height: "1rem" }}></div>


    </>
  )
};

export default Footer;
