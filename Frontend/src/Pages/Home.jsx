import React from "react";
import Navbar from "../Components/Navbar";
import MiddleSection from "../Components/MiddleSection";
import MiddleSectionMid from "../Components/MiddleSectionMid";
import MiddleSectionBottom from "../Components/MiddleSectionBottom";
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <div>
      <Navbar />
      <MiddleSection />
      <MiddleSectionMid />
      <MiddleSectionBottom/>
      <Footer />
    </div>
  );
};

export default Home;
