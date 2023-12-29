import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Welcome from "../Components/Welcome";
import Whyme from "../Components/Whyme";
import Review from "../Components/Review";
import OurTeam from "../Components/OurTeam";
import Footer from "../Components/Footer";
import SomeMoreStuff from "../Components/SomeMoreStuff";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <SomeMoreStuff />
      <Whyme />
      <Review />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default LandingPage;
