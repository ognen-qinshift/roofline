import React from "react";
import "./contact.css";
import contactInfo from "../../data/contactInfo.json";

function Contact() {
    return (
        <div className="contact container" id="contact">
            <h2 className="featured-caption">Contact <span>Us</span></h2>
            <p>
                Whether you're ready to find your dream home or just exploring options, our team is here to help.<br />
                Reach out, we'd love to hear from you.
            </p>

            <div className="contact-flex">

                {/* Contact Form */}
                <form className="contact-form">
                    <label>
                        Your Name:
                        <input type="text" name="name" placeholder="Name" required />
                    </label>
                    <label>
                        Your Phone:
                        <input type="tel" name="phone" placeholder="Phone" required />
                    </label>
                    <label>
                        Your Email:
                        <input type="email" name="email" placeholder="Email" required />
                    </label>
                    <label>
                        Your Message:
                        <textarea name="message" rows={5} placeholder="Message" required />
                    </label>
                    <button type="submit" className="link btn btn-orange">Send Message</button>
                </form>

                {/* Contact Info */}
                <div className="contact-info">
                    <div>
                        <div className="icon-wrap" >
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <strong>Address:</strong><br />
                        </div>
                        {contactInfo.address}
                    </div>
                    <div>
                        <div className="icon-wrap" >
                            <span class="material-symbols-outlined">
                                call
                            </span>
                            <strong>Phone:</strong><br />
                        </div>
                        <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </div>
                    <div>
                        <div className="icon-wrap" >
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                            <strong>Email:</strong><br />
                        </div>
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                    <div>
                        <div className="icon-wrap" >
                            <span class="material-symbols-outlined">
                                nest_clock_farsight_analog
                            </span>
                            <strong>Working Hours:</strong><br />
                        </div>
                        {contactInfo.hours}
                    </div>
                    <div className="contact-map">
                        <iframe
                            src={contactInfo.mapEmbed}
                            width="100%"
                            height="180"
                            style={{ border: 0, borderRadius: "1rem", marginTop: "1rem" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Contact;