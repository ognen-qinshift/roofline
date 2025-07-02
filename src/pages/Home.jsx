import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Featured from "../components/Section-featured/Featured.jsx";
import BrowseByCategory from "../components/BrowseByCategory/BrowseByCategory.jsx";
import VidBreak from "../components/VidBreak/VidBreak.jsx";
import Agents from "../components/Agents/Agents.jsx";
import HowTo from "../components/HowTo/HowTo.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Contact from "../components/Contact/Contact.jsx";


function Home() {


  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);



  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <VidBreak />
      <BrowseByCategory />
      <Agents />
      <HowTo />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
