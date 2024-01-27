import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Welcome from "../Components/Welcome";
import Whyme from "../Components/Whyme";
import Review from "../Components/Review";
import OurTeam from "../Components/OurTeam";
import Footer from "../Components/Footer";
import SomeMoreStuff from "../Components/SomeMoreStuff";
import { useUserContext } from "../context";

const LandingPage = () => {
  const { user, setUser } = useUserContext();
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);
  const getUser = () => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    } else {
      setUser(null);
    }
  };
  return (
    <div>
      <Navbar user={user} />
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
